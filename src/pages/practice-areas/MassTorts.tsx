import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
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
  Stethoscope,
  Building,
  ArrowLeft,
  Activity,
  Settings,
  AlertCircle,
  Clipboard,
  FileX,
  Zap,
  Calculator,
  BookOpen
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBackground from '@/assets/practice-areas/mass-torts-hero.jpg';
import sidebarImage from '@/assets/practice-areas/mass-torts-evaluation.jpg';
import medicalImage from '@/assets/practice-areas/mass-torts-medical.jpg';
import legalProcessImage from '@/assets/practice-areas/mass-torts-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/mass-torts-compensation.jpg';
import typesImage from '@/assets/practice-areas/mass-torts-types.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MassTorts: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    overview: false,
    types: false,
    mesothelioma: false,
    talc: false,
    campLejeune: false,
    silicosis: false,
    pfas: false,
    benzene: false,
    process: false
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    injuryType: '',
    exposureSource: '',
    description: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'types', label: 'MASS TORT TYPES', icon: AlertTriangle },
    { id: 'mesothelioma', label: 'MESOTHELIOMA', icon: Activity },
    { id: 'talc', label: 'TALC CANCER', icon: AlertCircle },
    { id: 'camp-lejeune', label: 'CAMP LEJEUNE', icon: Shield },
    { id: 'process', label: 'LEGAL PROCESS', icon: Clipboard },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D floating background layers
      const backLayer = document.querySelector('.bg-layer-back');
      const midLayer = document.querySelector('.bg-layer-mid');
      const frontLayer = document.querySelector('.bg-layer-front');

      if (backLayer) {
        gsap.to(backLayer, {
          y: 30,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 40,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: 20,
          x: 25,
          rotation: 2,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          rotation: -2,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Enhanced hero entrance animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.fromTo(heroContent,
          { 
            opacity: 0, 
            y: 50, 
            z: -100,
            scale: 0.9,
            filter: "blur(10px)"
          },
          { 
            opacity: 1, 
            y: 0, 
            z: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2, 
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          }
        );
      }

      // Enhanced content sections with 3D entrance
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections && contentSections.length > 0) {
        gsap.fromTo(contentSections,
          { 
            opacity: 0, 
            y: 60,
            rotationX: 15,
            z: -50,
            scale: 0.95,
            filter: "blur(5px)"
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            z: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.15,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      // Parallax effects for cards
      const cards = document.querySelectorAll('.parallax-card');
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: -20 * (index % 3 + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    });

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - redirect to mass torts case evaluation
    window.location.href = '/mass-torts-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What qualifies as a mass tort case in California?",
      answer: "Mass tort cases involve multiple plaintiffs who suffered similar injuries from the same defective product, dangerous drug, toxic exposure, or corporate negligence. Unlike class actions, each plaintiff maintains an individual lawsuit with damages specific to their injuries. Common mass tort cases include pharmaceutical injuries (like Ozempic gastroparesis), asbestos exposure causing mesothelioma, talc ovarian cancer, Camp Lejeune water contamination, PFAS exposure, and defective medical devices. The key is that numerous people were harmed by the same source, making coordinated litigation beneficial while preserving individual compensation rights."
    },
    {
      question: "How is a mass tort different from a class action lawsuit?",
      answer: "Mass torts and class actions both involve multiple plaintiffs, but they're structured differently. In class actions, all plaintiffs are treated as one group with representative plaintiffs, and everyone receives the same settlement amount regardless of individual damages. Mass torts maintain separate lawsuits for each plaintiff, allowing individualized compensation based on specific injuries and circumstances. Mass torts are better for cases with varying injury severity, like pharmaceutical side effects or toxic exposures where damages differ significantly between victims. This allows for personalized attention and compensation while still benefiting from coordinated discovery and shared litigation costs."
    },
    {
      question: "What is multidistrict litigation (MDL) and how does it work?",
      answer: "Multidistrict Litigation (MDL) is a federal procedure that consolidates similar cases from across the country before one judge for pretrial proceedings. This streamlines discovery, avoids conflicting rulings, and reduces litigation costs. In MDL, cases maintain their individual identity but share common discovery, expert witnesses, and legal strategies. Bellwether trials test representative cases to establish settlement ranges. If no global settlement is reached, cases can be remanded to their original courts for trial. MDL is particularly effective for mass tort cases involving pharmaceutical injuries, medical devices, and toxic exposures where evidence and legal issues overlap significantly."
    },
    {
      question: "How long do mass tort cases typically take to resolve?",
      answer: "Mass tort cases typically take 2-5 years to resolve, though timeline varies significantly based on case complexity, number of plaintiffs, and defendant cooperation. Simple cases with clear liability may settle within 18-24 months, while complex pharmaceutical or toxic exposure cases can take 5+ years. MDL coordination may extend timelines but often results in better outcomes through coordinated strategy and shared resources. Factors affecting duration include discovery scope, expert witness preparation, bellwether trial results, and settlement negotiations. Early settlements are possible when liability is clear and damages substantial. Severe injuries often warrant waiting for full resolution to maximize compensation."
    },
    {
      question: "What compensation can I expect from a mass tort case?",
      answer: "Mass tort compensation varies dramatically based on injury severity, causation strength, age, income, and case-specific factors. Current examples include Ozempic gastroparesis cases projecting $400,000-$700,000 for severe permanent injuries, while temporary symptoms may yield $50,000-$200,000. Mesothelioma cases average $1-2.4 million depending on exposure history and survival time. Talc ovarian cancer settlements range from $300,000-$11 million based on cancer stage and age. Compensation typically includes medical expenses (past and future), lost wages, pain and suffering, and sometimes punitive damages for corporate misconduct. Each case receives individualized evaluation and compensation."
    },
    {
      question: "Do I need to prove the product directly caused my injury?",
      answer: "Yes, causation is essential in mass tort cases, but you don't need to prove it alone. We work with medical experts, epidemiologists, and toxicologists to establish both general causation (the product can cause your type of injury) and specific causation (it caused YOUR injury). Evidence includes temporal relationship (timing), dose-response data, differential diagnosis ruling out other causes, and scientific studies. In pharmaceutical cases, FDA adverse event reports and clinical trial data support causation. For toxic exposures, biomonitoring and environmental testing help. Medical experts provide crucial testimony connecting exposure to your specific injuries. Strong causation evidence significantly increases settlement value."
    },
    {
      question: "Can I join a mass tort if I have pre-existing medical conditions?",
      answer: "Yes, pre-existing conditions don't automatically disqualify you from mass tort participation. California's 'eggshell plaintiff' rule means defendants take victims as they find them—your increased vulnerability doesn't reduce their liability. We must show the defendant's product was a substantial factor in causing or worsening your condition, not necessarily the sole cause. Medical experts help differentiate between pre-existing conditions and new injuries or exacerbations caused by the product. Documentation showing condition stability before exposure and deterioration afterward strengthens your case. Many successful mass tort plaintiffs have underlying health conditions."
    },
    {
      question: "What if the company has filed for bankruptcy?",
      answer: "Bankruptcy doesn't end your mass tort claim—it redirects it through the bankruptcy process. Companies often establish settlement trusts funded by insurance proceeds and company assets to compensate victims. These trusts can provide compensation even after bankruptcy. Notable examples include asbestos trusts worth billions of dollars compensating mesothelioma victims. The bankruptcy court may expedite compensation to critically ill plaintiffs. However, compensation may be reduced compared to pre-bankruptcy settlements. We monitor bankruptcy proceedings and file necessary claims to preserve your rights. Sometimes you can still pursue claims against other defendants like distributors or suppliers."
    },
    {
      question: "How much does it cost to hire a mass tort attorney?",
      answer: "Mass tort cases are handled on contingency fee basis—you pay nothing unless we win. We advance all case costs including expert witnesses, medical record acquisition, discovery expenses, and court fees. These costs are reimbursed from your settlement or verdict. If we don't win, you owe nothing for attorney fees or advanced costs. This arrangement ensures access to experienced mass tort litigation regardless of your financial situation. Contingency fees are competitive and discussed during your free consultation. MDL participation can reduce individual case costs through shared discovery and expert witness expenses."
    },
    {
      question: "Should I accept an early settlement offer?",
      answer: "Early settlement offers should be carefully evaluated as they're typically below fair value. Corporations often make low initial offers hoping victims will accept quick money rather than wait for full litigation. Factors to consider include injury severity, prognosis, future medical needs, and your personal circumstances. For severe permanent injuries, waiting for full case development often results in higher compensation. For minor injuries or urgent financial needs, early settlement might be appropriate. We analyze current settlement trends, similar case outcomes, and your specific damages to advise whether accepting or rejecting early offers serves your best interests."
    },
    {
      question: "What evidence do I need to preserve for my mass tort case?",
      answer: "Preserve all medical records showing your diagnosis, treatment, and progression of injuries. Keep receipts for medical expenses, medications, and travel to appointments. Save product packaging, receipts, or any physical evidence of the product that caused your injury. Document how your injuries affect daily activities through photos, journals, or videos. Collect employment records showing lost wages and work limitations. Gather witness statements from family members who observed your condition before and after exposure. Don't discard the actual product if you still have it—preserve it in original packaging. We'll help obtain additional evidence like FDA records and company documents through discovery."
    },
    {
      question: "Can family members file mass tort claims for wrongful death?",
      answer: "Yes, California's wrongful death statute allows spouses, children, and other dependents to file mass tort claims when a loved one dies from product-related injuries. Wrongful death cases recover funeral and burial expenses, lost financial support and benefits, loss of companionship, and household services value. Survival actions also recover damages the deceased could have claimed including medical expenses before death and pain and suffering. The two-year statute of limitations typically applies from date of death. These cases require proving the product caused or substantially contributed to death. We handle wrongful death mass tort cases with compassion while aggressively pursuing accountability and maximum compensation."
    },
    {
      question: "What happens if new scientific evidence emerges during my case?",
      answer: "New scientific evidence can significantly strengthen mass tort cases by providing additional proof of causation and expanding potential damages. We continuously monitor medical literature, FDA safety communications, and ongoing research relevant to your case. New studies showing increased cancer risk or additional side effects can increase settlement values. Corporate documents revealed through discovery often show companies knew about risks before public disclosure. If beneficial new evidence emerges after settlement, it typically can't reopen your case unless fraud was involved. This is why thorough case evaluation and waiting for sufficient evidence development before settling is often advantageous."
    },
    {
      question: "How do I know if my injury is part of an existing mass tort?",
      answer: "We monitor ongoing mass tort litigation and emerging claims involving defective products, dangerous drugs, and toxic exposures. Current active mass torts include GLP-1 diabetes drugs (Ozempic, Wegovy, Mounjaro), PFAS water contamination, hair relaxer cancer claims, and various pharmaceutical injuries. If your injury matches patterns in existing litigation, you may be eligible to join ongoing cases. Even if no mass tort exists yet, if multiple people suffered similar injuries from the same product, it could become a mass tort. We evaluate whether your injury fits existing litigation or could be the foundation for new mass tort claims."
    },
    {
      question: "What if I used the product according to directions but still got injured?",
      answer: "Following product directions doesn't protect you from defective product liability. Manufacturers are strictly liable for defective products regardless of user behavior. The key issues are whether the product was unreasonably dangerous, had inadequate warnings, or was defectively designed or manufactured. Even if you followed all instructions perfectly, the product may still be defective if it causes injuries that weren't adequately warned about or if safer alternatives existed. In pharmaceutical cases, following prescribing instructions doesn't excuse companies from liability for undisclosed side effects or inadequate warnings to doctors. Proper use actually strengthens your case by eliminating user error defenses."
    },
    {
      question: "Can I file a mass tort claim if I was exposed to multiple harmful products?",
      answer: "Yes, exposure to multiple harmful products can support mass tort claims against multiple defendants. Each exposure source that substantially contributed to your injuries can be held liable proportionally. This is particularly common in asbestos cases where workers were exposed at multiple job sites or from various products. The key is establishing which exposures contributed to your specific injuries through medical expert testimony and exposure history documentation. You may recover from multiple sources including manufacturers, employers, premises owners, and distributors. California's joint and several liability laws may allow full recovery from any defendant, though they can seek contribution from other responsible parties."
    },
    {
      question: "What role do expert witnesses play in mass tort cases?",
      answer: "Expert witnesses are crucial in mass tort cases to establish causation, explain complex medical and scientific concepts, and quantify damages. Medical experts explain how the product caused your specific injuries and determine future medical needs. Epidemiologists analyze population studies showing increased disease rates. Toxicologists explain how chemicals cause cellular damage. Economic experts calculate lost earnings and future care costs. Regulatory experts critique FDA approval processes. In MDL cases, costs are shared among all plaintiffs, providing access to top national experts. Expert testimony often determines case outcomes and settlement values. We work with leading experts in relevant fields to build compelling causation evidence."
    },
    {
      question: "How do settlement negotiations work in mass tort cases?",
      answer: "Mass tort settlements often involve global negotiations covering hundreds or thousands of cases, creating efficiency and leverage against corporate defendants. Bellwether trials test representative cases to establish settlement ranges and identify key issues. Master settlement agreements may create compensation grids based on injury severity, age, exposure duration, and other factors. Individual cases receive point scores determining settlement tiers. Unlike class actions, each plaintiff can accept or reject their individual offer. Settlement masters often oversee distribution and resolve disputes. We participate in group negotiations while protecting your individual interests and ensuring fair compensation based on your specific damages."
    },
    {
      question: "What if the mass tort involves a government contractor or federal facility?",
      answer: "Mass torts involving government contractors or federal facilities face additional legal complexities. The Federal Tort Claims Act may limit government liability, while contractors might claim government contractor immunity. However, many successful mass tort cases have involved military contractors (asbestos exposure), federal facilities (Camp Lejeune water contamination), and government-approved products (pharmaceutical injuries). Special statutes like the Camp Lejeune Justice Act create specific compensation mechanisms. Sovereign immunity doesn't always protect government entities from liability. We analyze applicable federal laws, immunity defenses, and available compensation mechanisms to pursue all viable claims against government and private defendants."
    },
    {
      question: "Can I participate in mass tort litigation if I live outside California?",
      answer: "Yes, mass tort litigation often involves plaintiffs from multiple states, particularly in MDL proceedings that consolidate federal cases nationwide. Your state of residence doesn't prevent participation if you were injured by products distributed nationally. However, state laws differ regarding statutes of limitations, damage caps, and liability standards, which may affect your case value. California's favorable laws often make it an attractive venue for mass tort cases. If you were injured in California or by California-based companies, California law may apply even if you live elsewhere. We evaluate jurisdictional issues and applicable law to maximize your recovery opportunities."
    },
    {
      question: "What happens to my case if the judge in MDL proceedings retires or changes?",
      answer: "Judicial changes in MDL proceedings can affect case timeline and strategy but typically don't harm plaintiff cases. Incoming judges review case history and generally continue established procedures and deadlines. Experienced MDL judges understand the complexity and importance of maintaining case momentum. Sometimes new judges bring fresh perspectives that benefit settlement negotiations. The judicial panel on multidistrict litigation carefully selects replacement judges with relevant experience. While transitions may cause brief delays, established MDL procedures and case law provide continuity. We monitor judicial changes and adapt strategy accordingly while protecting your interests throughout the proceedings."
    },
    {
      question: "How do mass tort cases differ from personal injury lawsuits?",
      answer: "Mass tort cases are essentially coordinated personal injury lawsuits involving similar injuries from the same product or exposure. The main differences are scale, coordination, and resources. Individual personal injury cases proceed independently with all costs borne by one plaintiff. Mass torts coordinate discovery, share expert witness costs, and benefit from collective knowledge while maintaining individual claims. Mass torts typically involve more complex causation issues requiring extensive scientific evidence. Settlement negotiations occur on a broader scale with more leverage against corporate defendants. However, each mass tort plaintiff maintains individual representation and receives compensation based on their specific damages, just like individual personal injury cases."
    },
    {
      question: "What if I already settled a related claim with the same company?",
      answer: "Previous settlements may affect new mass tort claims depending on the settlement's scope and release language. Broad releases covering 'all claims' might bar future claims, while narrow releases limited to specific injuries or time periods may not prevent new claims for different injuries or later-discovered harm. Settlement agreements that specifically reserve rights to bring future claims preserve those rights. Courts sometimes find releases unconscionable if they cover unknown future injuries. We carefully review prior settlement agreements and release language to determine if new claims are viable. Even if releases appear broad, exceptions may exist for fraud, newly discovered evidence, or different injuries."
    },
    {
      question: "Can I file a mass tort claim if I received the product through a clinical trial?",
      answer: "Clinical trial participants can file mass tort claims if they weren't properly informed of risks or if the trial violated informed consent requirements. Informed consent documents and clinical trial agreements don't automatically waive all liability rights. Participants must be fully informed of known risks, and companies remain liable for concealed dangers or inadequate warnings. If the clinical trial was fraudulent, used falsified data, or violated FDA regulations, liability may exist despite participation agreements. Post-market mass tort claims can include clinical trial participants who later develop different injuries than those disclosed during the trial. We analyze clinical trial documents and informed consent agreements to evaluate potential claims."
    },
    {
      question: "What role does the FDA play in mass tort litigation?",
      answer: "The FDA's actions significantly impact mass tort litigation through safety warnings, label changes, and recall decisions. FDA approval doesn't immunize companies from liability if they concealed risks or provided false information during the approval process. FDA safety communications and warning letters support causation arguments in mass tort cases. Adverse event reports filed with the FDA provide evidence of widespread problems. FDA inspections revealing manufacturing violations strengthen defective product claims. However, FDA regulation doesn't preempt state law mass tort claims unless Congress specifically intended preemption. We use FDA documents, correspondence, and regulatory actions to build stronger causation evidence and demonstrate corporate knowledge of dangers."
    },
    {
      question: "How do mass tort cases handle claims involving children or elderly victims?",
      answer: "Children and elderly victims often receive higher settlements in mass tort cases due to their vulnerability and the severity of harm. Pediatric exposures are particularly concerning because children's developing systems are more susceptible to toxins and have longer life expectancy to develop diseases. Elderly victims may have reduced life expectancy but often suffer more severe immediate effects. Special damages considerations include educational impact for children, lifetime medical needs, and loss of normal development. Guardians or conservators may need appointment to manage legal proceedings. Statute of limitations may be tolled for minors until they reach majority. Courts often require judicial approval of settlements involving minors to ensure fairness."
    },
    {
      question: "What if I can't afford medical treatment while my mass tort case is pending?",
      answer: "Several options exist for obtaining medical treatment during pending mass tort litigation. Some attorneys can arrange treatment with doctors who accept payment from eventual settlements (liens). Health insurance should cover necessary treatment, though insurers may seek reimbursement from settlements. Medicare/Medicaid may provide coverage with similar reimbursement rights. Charity care programs at hospitals may provide free or reduced-cost treatment. Some mass tort settlements include provisions for immediate medical expenses. Medical financing companies sometimes fund treatment for mass tort plaintiffs. We help coordinate treatment options and work with healthcare providers to ensure you receive necessary care while protecting your settlement proceeds."
    },
    {
      question: "Can I change attorneys during my mass tort case?",
      answer: "Yes, you have the right to change attorneys during mass tort litigation, though timing and circumstances matter. In MDL cases, leadership roles may be established, so changes later in proceedings can be more complex. Attorney fee agreements typically specify how fees are split if representation changes. Common reasons for attorney changes include lack of communication, insufficient resources for complex litigation, or personality conflicts. However, mass tort cases require specialized experience and resources that not all attorneys possess. Before changing attorneys, consider whether communication issues can be resolved and whether new counsel has adequate mass tort experience. We ensure smooth transitions when clients choose our representation."
    },
    {
      question: "What happens if the company files for bankruptcy after I file my claim?",
      answer: "Bankruptcy filings after claim filing trigger automatic stays halting litigation, but your claim remains valid in bankruptcy proceedings. You must file proofs of claim in bankruptcy court to preserve rights. Companies often negotiate settlement trusts as part of bankruptcy plans to compensate victims. These trusts can provide compensation even after company liquidation. Critically ill plaintiffs may receive expedited treatment through emergency motions. Insurance proceeds and other assets may fund compensation trusts. Bankruptcy doesn't discharge liability if fraud is involved. We monitor bankruptcy proceedings, file necessary claims, and pursue alternative defendants like insurers, distributors, or successor companies to maximize recovery options."
    },
    {
      question: "How do mass tort settlements affect my taxes?",
      answer: "Mass tort settlement taxation depends on the nature of damages recovered. Personal physical injury settlements are generally not taxable income under federal law. Medical expense reimbursements are tax-free. Lost wage compensation may be taxable as it replaces taxable income. Punitive damages may be taxable depending on circumstances. Interest on settlements is typically taxable. Property damage recovery is generally not taxable. However, tax law is complex and fact-specific. We recommend consulting tax professionals for specific advice. Some settlements specify allocation between taxable and non-taxable components. Structured settlements may provide tax advantages by spreading income over time. Proper settlement structuring can minimize tax consequences while maximizing take-home compensation."
    },
    {
      question: "What if multiple family members were exposed to the same harmful product?",
      answer: "Multiple family members exposed to the same product can each file individual mass tort claims, as each person's injuries and damages are unique. Household exposures are common in cases involving contaminated water (Camp Lejeune), residential asbestos, secondhand tobacco smoke, or consumer products. Each family member maintains separate claims with individualized damages based on their specific injuries, age, exposure duration, and life impact. Shared exposures can strengthen causation arguments by demonstrating environmental contamination. Family medical histories may support genetic predisposition defenses or alternative causation theories. We coordinate family member claims for efficiency while ensuring each person receives appropriate compensation for their individual damages."
    },
    {
      question: "Can I file a mass tort claim for emotional distress without physical injury?",
      answer: "Pure emotional distress claims without physical injury are difficult in mass tort cases but may be possible in certain circumstances. California generally requires physical impact or injury to recover emotional distress damages. However, exceptions exist for toxic exposure cases where emotional distress results from fear of developing cancer (cancer phobia), particularly when exposure significantly increases disease risk. Witnessing family member injuries from the same product may support emotional distress claims. Some mass tort settlements include compensation for medical monitoring and mental health treatment even without current physical injury. The key is establishing that emotional distress is severe, medically documented, and directly caused by defendant's conduct."
    },
    {
      question: "How do mass tort cases handle claims from people who worked for the defendant company?",
      answer: "Current and former employees can file mass tort claims against their employers, though workers' compensation laws may complicate recovery. Workers' compensation typically provides exclusive remedy for workplace injuries, but exceptions exist for intentional misconduct, toxic exposures, or defective products used at work. Product liability claims may proceed independently of workers' compensation when employees were injured by company products rather than workplace conditions. Retirees may have different legal rights than current employees. Whistleblower protections may apply to employees who report safety violations. Union contracts may affect legal rights and remedies. We analyze employment relationships, workers' compensation coverage, and applicable exclusions to determine viable claims for employee plaintiffs."
    },
    {
      question: "What if I was exposed to the harmful product during military service?",
      answer: "Military service members can pursue mass tort claims for injuries from defective products, though federal contractor immunity and military regulations create complications. The Feres doctrine generally bars claims against the government for service-related injuries, but doesn't protect private contractors who supplied defective products. Successful mass tort cases include asbestos exposure from shipbuilding and construction materials, contaminated water at military bases (Camp Lejeune), and defective equipment. Veterans Affairs benefits don't preclude mass tort claims. Service connection for VA purposes may actually support causation in mass tort cases. We analyze military service records, VA determinations, and applicable immunity defenses to pursue viable claims against private defendants."
    },
    {
      question: "How long after exposure can I still file a mass tort claim?",
      answer: "Statutes of limitations for mass tort claims vary by state and injury type, but California generally provides two years from injury discovery, not exposure date. This 'discovery rule' is crucial for diseases with long latency periods like mesothelioma, which develops 20-50 years after asbestos exposure. The statute typically begins when you knew or should have known the injury was caused by defendant's product. For cancer cases, this is usually the diagnosis date. However, continuing exposure may extend limitation periods. Some states have special statutes for specific exposures (like Camp Lejeune). Fraudulent concealment of dangers may toll statutes of limitations. Given the complexity, prompt legal consultation is essential to preserve your rights."
    },
    {
      question: "What evidence do defense attorneys typically use to contest mass tort claims?",
      answer: "Defense attorneys commonly argue alternative causation (other factors caused your injury), challenge medical causation with conflicting studies, claim adequate warnings were provided, argue regulatory compliance provides immunity, dispute exposure levels or duration, assert comparative fault by plaintiffs, and invoke statutes of limitations defenses. They may present evidence of lifestyle factors (smoking, diet, genetics) that could cause similar injuries. Corporate defendants often claim they relied on regulatory approval and followed industry standards. They challenge expert witness credentials and methodology. We anticipate these defenses through thorough case preparation, strong expert witnesses, and comprehensive evidence gathering. Our former defense experience provides insight into their strategies and how to overcome them effectively."
    },
    {
      question: "Can I join a mass tort if my injury is different from most other plaintiffs?",
      answer: "Mass tort cases often include plaintiffs with varying injury types and severity levels, as long as they resulted from the same product or exposure. For example, pharmaceutical mass torts may include patients with different side effects from the same drug. The key requirement is that your injury was caused by the defendant's product, not that it's identical to other plaintiffs' injuries. Different injuries may receive different compensation levels within the same mass tort. Unique injuries might require additional expert testimony to establish causation, but they don't disqualify you from participation. Sometimes unusual injuries provide valuable evidence of the product's dangers. We evaluate whether your specific injury fits within existing mass tort litigation."
    },
    {
      question: "What happens if I develop additional injuries after filing my mass tort claim?",
      answer: "Additional injuries developing after filing may be included in your existing claim if they're related to the same product exposure, depending on your complaint's scope and applicable law. Amendments to pleadings can add new injury claims if they arise from the same facts. However, new unrelated injuries from different products would require separate claims. Progressive diseases like cancer may worsen after filing, potentially increasing damages. Some settlement agreements specifically address future complications. In MDL proceedings, case management orders may establish deadlines for adding new claims. We monitor your medical condition and evaluate whether new developments can be included in existing claims or require separate legal action."
    },
    {
      question: "How do mass tort cases affect other legal claims I might have?",
      answer: "Mass tort cases may interact with other legal claims in complex ways. Workers' compensation claims for workplace exposures typically proceed independently but may affect mass tort damages recovery. Social Security disability benefits are generally unaffected by mass tort settlements. Previous settlements with related defendants may limit or preclude new claims depending on release language. Bankruptcy proceedings of one defendant don't affect claims against other defendants. Insurance claims should generally proceed independently. Divorce proceedings may treat mass tort settlements as marital property subject to division. We coordinate with other legal proceedings to protect your interests and maximize overall recovery while avoiding conflicts between different claims."
    },
    {
      question: "What if the mass tort involves international companies or products manufactured overseas?",
      answer: "International mass tort cases present jurisdictional challenges but are often successful when foreign companies sell products in the United States. U.S. courts can exercise jurisdiction over foreign companies that conduct business here, market products to American consumers, or cause injuries within the United States. Service of process may require special procedures under international treaties. Foreign companies may claim immunity or contest jurisdiction, but successful product liability cases against international defendants are common. Evidence gathering may be more complex due to foreign document locations and different legal systems. International litigation can take longer and cost more, but recoveries can be substantial. We work with international legal experts when necessary to pursue foreign defendants effectively."
    },
    {
      question: "Can I participate in mass tort litigation while continuing to use the product?",
      answer: "Continuing product use during litigation can complicate your mass tort claim by creating comparative fault arguments and making it difficult to prove the product caused your injuries. However, some circumstances may justify continued use, such as lack of alternatives for essential medications or medical devices. Informed continuation after injury discovery may reduce damages but typically doesn't eliminate claims entirely. For addictive products, continued use may be involuntary. Medical necessity may outweigh injury risks for some treatments. We evaluate whether continued use affects your claim's viability and advise on risk-benefit decisions. Documenting medical necessity or lack of alternatives can help address comparative fault arguments."
    },
    {
      question: "What role do state attorneys general play in mass tort litigation?",
      answer: "State attorneys general often file parallel enforcement actions against companies involved in mass tort litigation, seeking injunctive relief, civil penalties, and restitution for consumers. These cases can provide valuable evidence for private mass tort claims through their investigations and discovery. AG settlements may include consumer restitution that doesn't preclude individual mass tort claims. Some attorneys general coordinate with private mass tort attorneys to avoid conflicting strategies. AG investigations often uncover corporate documents and misconduct evidence useful in private litigation. However, AG settlements sometimes include broad releases that could affect private claims. We monitor AG actions related to your case and coordinate when beneficial while protecting your individual rights."
    },
    {
      question: "How do mass tort cases handle genetic factors that might contribute to injuries?",
      answer: "Genetic predisposition to disease doesn't eliminate mass tort liability if environmental exposures substantially contributed to injury development. The 'eggshell plaintiff' rule means defendants take victims as they find them, including genetic vulnerabilities. However, genetic factors may be used by defense attorneys to argue alternative causation or reduce damages. Gene-environment interactions are increasingly understood, with some exposures triggering genetic predispositions. Family medical histories are relevant but don't necessarily defeat causation. Genetic testing may be requested by either side but raises privacy concerns. We work with medical geneticists when necessary to address genetic issues while maintaining focus on environmental causation. The key is establishing that exposure was a substantial factor regardless of genetic background."
    },
    {
      question: "What if my medical records are incomplete or missing?",
      answer: "Incomplete medical records don't necessarily defeat mass tort claims, though they make cases more challenging. We help obtain records from all treating physicians, hospitals, and facilities. Insurance claims data may provide treatment evidence even when records are missing. Pharmacy records show medication use and dates. Family member testimony can document your condition and symptoms. Expert witnesses can sometimes reconstruct medical histories from available evidence. Some medical facilities maintain records longer than others, so comprehensive searches are essential. Veterans Affairs and military medical records have different retention policies. We also use employment records, disability applications, and other documents that may reference your medical condition to build a complete picture."
    },
    {
      question: "Can I file a mass tort claim if I received the product as a gift or hand-me-down?",
      answer: "Yes, you can file mass tort claims regardless of how you obtained the product, as long as you can establish that the specific product caused your injury. Product liability extends to all foreseeable users, not just purchasers. Gift recipients and second-hand users are protected by the same product safety standards. However, establishing the product's identity and purchase date may be more challenging without original receipts or packaging. Witness testimony from family members who purchased or gave you the product can help establish the timeline. Product recalls and safety warnings may provide evidence of defects regardless of purchase source. Manufacturing date codes, model numbers, and other identifying information help trace defective products."
    },
    {
      question: "What if multiple products might have caused my injury?",
      answer: "Multiple potential causes don't defeat mass tort claims if each product was a substantial factor in causing your injury. California law allows recovery from any defendant whose product substantially contributed to your harm, even if other factors also played a role. The 'substantial factor' test is more lenient than 'but for' causation, recognizing that injuries often have multiple contributing causes. Each potentially liable defendant may be held responsible for the full damages (joint and several liability), though they can seek contribution from other responsible parties. Medical experts help apportion causation between different products, exposures, or lifestyle factors. We pursue all potentially liable defendants to maximize recovery opportunities while letting courts determine relative responsibility."
    },
    {
      question: "How do mass tort settlements compare to individual lawsuit verdicts?",
      answer: "Mass tort settlements often provide more predictable but potentially lower compensation than individual jury verdicts, which can vary dramatically from very low to exceptionally high awards. Settlements provide certainty and faster resolution, avoiding trial risks and appeal delays. However, unique cases with particularly sympathetic facts or severe injuries might achieve higher compensation through individual trials. Bellwether trials in mass tort cases test individual case values and often influence overall settlement ranges. Mass tort settlements benefit from coordinated negotiations and shared litigation costs, making them cost-effective for defendants and efficient for plaintiffs. The decision between settlement and trial depends on injury severity, case strength, and personal circumstances. We analyze these factors to recommend the best strategy for your situation."
    }
  ];

  return (
    <div className="mass-torts-page min-h-screen bg-background text-foreground">
      <SEO 
        title="California Mass Tort Lawyer | Mesothelioma, Talc & Pharmaceutical Attorney"
        description="Former defense attorney fighting mass tort claims. Mesothelioma, talc cancer, pharmaceutical injuries, toxic exposure. Free consultation. No fees unless we win."
      />
      
      <GoBack />

      {/* 3D Container with Layered Backgrounds */}
      <div 
        className="mass-torts-3d-container"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Floating Background Layers */}
        <div 
          className="bg-layer-back absolute inset-0 opacity-20"
          style={{
            transform: 'translateZ(-500px) scale(1.4)',
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-foreground)) 100%)',
            filter: 'blur(3px)'
          }}
        />
        <div 
          className="bg-layer-mid absolute inset-0 opacity-30"
          style={{
            transform: 'translateZ(-250px) scale(1.2)',
            background: 'linear-gradient(45deg, hsl(var(--accent)) 0%, hsl(var(--secondary)) 100%)',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="bg-layer-front absolute inset-0 opacity-10"
          style={{
            transform: 'translateZ(-100px) scale(1.1)',
            background: 'radial-gradient(circle, hsl(var(--muted)) 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        />

      {/* Hero Section with Enhanced 3D Effects */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Enhanced Hero Content with 3D Typography */}
        <div className="hero-content max-w-6xl mx-auto px-6 text-center transform-gpu">
          {/* Premium Badge with Glow Effect */}
          <div className="mb-8 flex justify-center">
            <div className="premium-badge bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
              🏆 California's Premier Mass Tort Lawyers
            </div>
          </div>
          
          {/* 3D Display Typography */}
          <h1 
            className="mass-torts-hero-title text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 8px rgba(0,0,0,0.5)',
              transform: 'translateZ(20px)'
            }}
          >
            Mass Tort Justice for California
          </h1>
          
          {/* Accent Line with Gradient */}
          <div 
            className="w-32 h-2 mx-auto mb-8 rounded-full"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
              boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
            }}
          />
          
          {/* Star Rating with Enhanced Animation */}
          <div className="flex justify-center items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-8 h-8 text-yellow-400 fill-current mx-1 hover:scale-125 transition-transform duration-200" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
            <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Former Defense Attorney Experience
            </span>
          </div>
          
          {/* Enhanced Call-to-Action with 3D Effect */}
          <p className="text-xl md:text-2xl mb-6 leading-relaxed max-w-4xl mx-auto">
            When corporations harm thousands through defective products and toxic exposures, victims deserve justice. Our former defense experience reveals how corporations hide risks and manipulate litigation.
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-green-300 font-semibold animate-pulse">
            Currently accepting: Mesothelioma, Talc Cancer, Camp Lejeune, PFAS, and Pharmaceutical Mass Torts
          </p>
          
          <Button 
            size="lg" 
            className="premium-cta-button bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/mass-torts-case-evaluation'}
            style={{
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              transform: 'translateZ(10px)'
            }}
          >
            START MY FREE CASE EVALUATION
          </Button>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">California Mass Tort Litigation Overview</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4">
                  <strong>Mass tort litigation represents one of the most powerful legal tools available to hold corporations accountable when their negligence harms thousands of people.</strong> Unlike individual lawsuits, mass torts allow victims with similar injuries from the same product or exposure to coordinate their legal efforts while maintaining individual claims. This approach levels the playing field against billion-dollar corporations who would otherwise overwhelm individual plaintiffs with their vast legal resources.
                </p>
                
                <p className="text-xl leading-relaxed">
                  At Trembach Law Firm, we specialize in representing California residents harmed by corporate negligence in mass tort cases. Our unique perspective as a former defense attorney provides invaluable insight into how corporations and their insurers strategize to minimize payouts. We use this knowledge to anticipate their tactics and build stronger cases for our clients.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    Learn More About Mass Tort Litigation
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>What Are Mass Torts?</h3>
                    <p>
                      A mass tort is a civil action involving multiple plaintiffs who have been injured by the same product, drug, toxic substance, or event. These cases differ from class actions in that each plaintiff maintains an individual lawsuit with damages specific to their injuries. Common mass tort cases involve:
                    </p>
                    
                    <ul>
                      <li><strong>Dangerous pharmaceutical drugs</strong> - Prescription medications causing unexpected side effects like gastroparesis, cancer, or organ damage</li>
                      <li><strong>Defective medical devices</strong> - Implants, surgical mesh, or diagnostic equipment causing complications</li>
                      <li><strong>Toxic exposures</strong> - Asbestos, chemicals, contaminated water, or environmental pollutants</li>
                      <li><strong>Consumer products</strong> - Cosmetics, household items, or industrial products causing cancer or injuries</li>
                      <li><strong>Workplace exposures</strong> - Occupational hazards affecting multiple workers at different companies</li>
                    </ul>
                    
                    <h3>Why Mass Torts Are More Effective Than Individual Lawsuits</h3>
                    <p>
                      Mass tort litigation provides several advantages over individual personal injury lawsuits when dealing with corporate defendants who have harmed multiple people:
                    </p>
                    
                    <ul>
                      <li><strong>Shared Resources:</strong> Discovery costs, expert witness fees, and investigation expenses are shared among all plaintiffs, making complex litigation affordable</li>
                      <li><strong>Coordinated Strategy:</strong> Attorneys collaborate to develop the strongest legal theories and presentation of evidence</li>
                      <li><strong>Enhanced Leverage:</strong> Hundreds or thousands of cases create significant pressure for fair settlements</li>
                      <li><strong>Preserved Individual Rights:</strong> Each plaintiff maintains their own case with compensation based on their specific injuries</li>
                      <li><strong>Efficient Discovery:</strong> Corporate documents and depositions benefit all plaintiffs simultaneously</li>
                    </ul>
                    
                    <h3>California's Advantages for Mass Tort Litigation</h3>
                    <p>
                      California offers several advantages for mass tort plaintiffs compared to other states:
                    </p>
                    
                    <ul>
                      <li><strong>Favorable Statutes of Limitations:</strong> California's discovery rule allows claims to be filed when injuries are discovered, not when exposure occurred</li>
                      <li><strong>Strong Consumer Protection Laws:</strong> California has robust product liability laws that favor injured consumers</li>
                      <li><strong>No Damage Caps:</strong> Unlike some states, California doesn't limit pain and suffering damages in product liability cases</li>
                      <li><strong>Joint and Several Liability:</strong> Defendants can be held liable for the full amount of damages, even if other parties also contributed</li>
                      <li><strong>Experienced Judiciary:</strong> California courts have extensive experience handling complex mass tort litigation</li>
                    </ul>
                    
                    <h3>The Role of Multidistrict Litigation (MDL)</h3>
                    <p>
                      When mass tort cases are filed in federal court across multiple districts, they may be consolidated into Multidistrict Litigation (MDL) for pretrial proceedings. This process:
                    </p>
                    
                    <ul>
                      <li>Consolidates discovery and motion practice before one experienced judge</li>
                      <li>Prevents conflicting rulings on common legal issues</li>
                      <li>Establishes consistent case management procedures</li>
                      <li>Facilitates coordinated settlement negotiations</li>
                      <li>Allows bellwether trials to test case values</li>
                      <li>Preserves individual trial rights if no settlement is reached</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* 3 Ways to Start Your Case */}
              <Card className="glass-morphism-card p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  3 Ways to Start Your Case
                </h3>
                
                <div className="space-y-4">
                  <div className="immediate-steps-theme p-4 rounded-lg transition-all duration-300 hover:transform hover:translateY(-2px)">
                    <div className="flex items-center mb-3">
                      <Phone className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-bold text-lg">1. Call Now</span>
                    </div>
                    <p className="text-sm mb-3">Speak directly with an experienced mass tort attorney</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      (818) 123-4567
                    </Button>
                  </div>
                  
                  <div className="immediate-steps-theme p-4 rounded-lg transition-all duration-300 hover:transform hover:translateY(-2px)">
                    <div className="flex items-center mb-3">
                      <FileText className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-bold text-lg">2. Online Form</span>
                    </div>
                    <p className="text-sm mb-3">Complete our secure case evaluation form</p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                    >
                      Start Evaluation
                    </Button>
                  </div>
                  
                  <div className="immediate-steps-theme p-4 rounded-lg transition-all duration-300 hover:transform hover:translateY(-2px)">
                    <div className="flex items-center mb-3">
                      <Mail className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-bold text-lg">3. Email Us</span>
                    </div>
                    <p className="text-sm mb-3">Send us details about your potential case</p>
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90"
                      onClick={() => window.open('mailto:info@trembachlawfirm.com')}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-bold text-center mb-2">Why Choose Us?</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ No fees unless we win</li>
                    <li>✓ Former defense attorney insight</li>
                    <li>✓ 24/7 consultation available</li>
                    <li>✓ California mass tort specialists</li>
                  </ul>
                </div>
              </Card>

              {/* Emergency Resources */}
              <Card className="never-do-theme p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                  Important Reminders
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Time limits apply</strong> - Contact us immediately if you suspect corporate negligence caused your injury</span>
                  </li>
                  <li className="flex items-start">
                    <FileX className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Preserve evidence</strong> - Keep all medical records, product packaging, and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't sign releases</strong> - Contact us before signing any documents from corporations or insurers</span>
                  </li>
                  <li className="flex items-start">
                    <Stethoscope className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Continue medical treatment</strong> - Follow all doctor recommendations and document your condition</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div> {/* Close 3D container */}
    </div>
  );
};

export default MassTorts;