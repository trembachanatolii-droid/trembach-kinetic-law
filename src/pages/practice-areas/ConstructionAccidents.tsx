import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
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
  Stethoscope,
  Building,
  Map,
  ArrowLeft,
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  HardHat,
  Wrench
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/construction-accidents-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/construction-osha-violations-new.jpg';
import accidentTypesImage from '@/assets/practice-areas/construction-third-party-new.jpg';
import provingNegligenceImage from '@/assets/practice-areas/construction-legal-process-new.jpg';
import compensationImage from '@/assets/practice-areas/construction-compensation-new.jpg';
import hazardsImage from '@/assets/practice-areas/construction-hazards-new.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const ConstructionAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'types-of-accidents', label: 'ACCIDENT TYPES', icon: HardHat },
    { id: 'osha-violations', label: 'OSHA VIOLATIONS', icon: Shield },
    { id: 'third-party-liability', label: 'THIRD-PARTY LIABILITY', icon: Building },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Wrench }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
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
    window.location.href = '/construction-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    {
      question: "Can I sue for a construction accident if I'm receiving workers' compensation?",
      answer: "Yes, you can pursue third-party claims while receiving workers' compensation benefits. Workers' comp only prevents suing your direct employer, not other negligent parties. General contractors, subcontractors, property owners, equipment manufacturers, and architects may face liability for your injuries. These claims seek damages workers' comp doesn't cover: pain and suffering, full wage loss, and punitive damages. Third-party settlements don't eliminate workers' comp benefits, though the workers' comp carrier may claim reimbursement rights we negotiate to minimize."
    },
    {
      question: "What's the time limit for filing a construction accident lawsuit in California?",
      answer: "California generally allows two years from the accident date to file personal injury claims against third parties. However, claims against government entities require filing administrative claims within six months. Discovery rule exceptions apply when injuries aren't immediately apparent, starting the deadline when you reasonably should have discovered the injury and its cause. Don't confuse this with workers' comp deadlines—those differ. Act immediately as evidence disappears and witnesses become unavailable over time."
    },
    {
      question: "Who can be held liable in a construction accident besides my employer?",
      answer: "Multiple parties may share liability: general contractors controlling site safety, subcontractors whose negligence created hazards, property owners who knew of dangerous conditions, equipment manufacturers if machinery was defective, architects/engineers for design flaws, material suppliers providing defective products, and maintenance companies failing to service equipment properly. California's multi-employer worksite doctrine expands liability—parties can be responsible for violations affecting any workers, not just their employees. We investigate thoroughly to identify every potential defendant and insurance policy."
    },
    {
      question: "How much is my construction accident case worth?",
      answer: "Case values vary dramatically based on injury severity, liability strength, and available insurance. Catastrophic injuries like paralysis, brain damage, or amputations warrant millions in compensation. Factors include: medical expenses (past and future), lost wages and earning capacity, pain and suffering, permanent disability impacts, scarring/disfigurement, and potential punitive damages. Multiple liable parties increase recovery potential. Our former defense experience reveals true case values insurance companies hide. We pursue maximum compensation rather than quick settlements that don't address long-term needs."
    },
    {
      question: "What if I was partially at fault for my construction accident?",
      answer: "California's pure comparative negligence law allows recovery even if you're 99% at fault, though compensation reduces by your fault percentage. Insurance companies aggressively attempt to shift blame onto injured workers, claiming you violated safety rules or acted carelessly. We counter these tactics by demonstrating how defendants' negligence was the primary cause, inadequate training or equipment forced unsafe choices, and systemic safety failures created hazardous conditions. Your assigned fault percentage dramatically impacts recovery, making skilled representation crucial."
    },
    {
      question: "Do OSHA violations automatically mean I'll win my case?",
      answer: "OSHA violations provide powerful evidence but don't guarantee victory. Violations establish negligence per se—automatic proof that safety standards were breached. However, you must still prove the violation caused your injuries and damages resulted. Defendants may argue the violation didn't contribute to your accident or other factors were responsible. Multiple violations strengthen cases by showing pattern negligence rather than isolated incidents. We use OSHA findings strategically while building comprehensive liability theories beyond regulatory violations."
    },
    {
      question: "Can undocumented workers file construction accident lawsuits?",
      answer: "Yes, immigration status doesn't affect your right to compensation for construction injuries in California. State law protects all workers regardless of documentation. You can pursue third-party claims and receive compensation for medical expenses, pain and suffering, and other damages. Immigration status generally cannot be raised in personal injury cases. Some damages like future lost wages may face challenges, but substantial compensation remains available. We protect clients' privacy and never report immigration status. Don't let fear prevent you from seeking deserved compensation."
    },
    {
      question: "What's the difference between workers' comp and a third-party claim?",
      answer: "Workers' compensation provides limited no-fault benefits: medical treatment, partial wage replacement (usually 2/3), and disability ratings. It doesn't cover pain and suffering, full wages, or punitive damages. Third-party claims require proving negligence but allow full compensation including 100% of lost wages, all medical expenses, pain and suffering, emotional distress, loss of life enjoyment, and potentially punitive damages. You can pursue both simultaneously. Workers' comp provides immediate benefits while third-party claims seek comprehensive compensation. Combined recoveries often exceed workers' comp alone by hundreds of thousands or millions."
    },
    {
      question: "How long does a construction accident lawsuit take?",
      answer: "Timeline varies based on injury severity, liability complexity, and defendant cooperation. Simple cases with clear liability may settle within 6-12 months. Complex cases involving multiple parties, disputed liability, or catastrophic injuries often take 18-36 months or longer. Factors affecting duration include: medical treatment completion, discovery proceedings, motion practice, mediation attempts, and trial scheduling if necessary. We expedite cases while ensuring maximum recovery—quick settlements often undervalue claims. Defendants deliberately delay hoping financial pressure forces inadequate settlements. Our contingency fee structure allows you to wait for fair compensation."
    },
    {
      question: "What if the construction company has no insurance or assets?",
      answer: "We explore multiple recovery sources beyond the primary defendant. Options include: other liable parties with insurance (property owners, general contractors, equipment companies), umbrella and excess policies providing additional coverage, personal assets of company owners who may face personal liability, bonding companies guaranteeing contractor performance, and your own underinsured/uninsured coverage. California requires contractors carry insurance, and operating without it may void liability protections. We investigate thoroughly to identify all compensation sources, often finding coverage others miss."
    },
    {
      question: "Should I give a recorded statement to the insurance company?",
      answer: "Never give recorded statements without legal representation. Insurance adjusters seek admissions to minimize claims, asking leading questions designed to suggest fault or downplay injuries. Even innocent statements get twisted—saying 'I'm okay' becomes evidence you weren't seriously hurt. Adjusters record immediately after accidents when you're traumatized and medicated. California doesn't require providing statements to other parties' insurers. Politely decline and direct them to your attorney. We handle all insurance communications, preventing manipulation while building your strongest case."
    },
    {
      question: "What evidence should I collect after a construction accident?",
      answer: "Document everything immediately: photograph injuries, accident scene, equipment involved, and safety violations. Get contact information for all witnesses including workers from other companies. Preserve physical evidence like damaged safety equipment, torn clothing, and bloody items. Request copies of accident reports, OSHA citations, and your medical records. Document company names on vehicles and equipment. Take videos showing hazardous conditions and missing safety measures. Keep a pain journal describing daily symptoms and limitations. Save all receipts for expenses related to your injury. This evidence disappears quickly as construction sites change daily."
    },
    {
      question: "Can I sue if I was injured by defective construction equipment?",
      answer: "Yes, product liability claims against equipment manufacturers, distributors, and suppliers don't require proving negligence. Strict liability applies when equipment has design defects making it inherently dangerous, manufacturing defects deviating from specifications, or inadequate warnings about risks. Common defective equipment includes scaffolding components, power tools, safety harnesses, ladders, cranes, and protective gear. We preserve defective equipment for expert examination, investigate similar incidents showing pattern defects, and obtain internal documents revealing known dangers. Product liability claims often yield substantial compensation as manufacturers carry large insurance policies."
    },
    {
      question: "What if I was injured as a bystander near a construction site?",
      answer: "Bystanders injured by construction accidents have strong claims as you weren't assuming workplace risks. Falling debris, equipment striking pedestrians, sidewalk collapses, and inadequate barriers create liability for contractors and property owners. You're not limited by workers' compensation restrictions, allowing full damage recovery immediately. Construction companies must protect the public through barriers, overhead protection, warning signs, and flaggers directing traffic. Violations of public safety requirements establish clear negligence. Bystander injuries often result in larger settlements as juries sympathize with innocent victims harmed by construction negligence."
    },
    {
      question: "How does scaffold collapse liability work?",
      answer: "Scaffolding accidents involve multiple parties potentially liable: the scaffolding contractor who erected the structure, general contractors responsible for site safety, property owners controlling the premises, and manufacturers of defective components. OSHA requires scaffolds to support four times their intended load, proper planking, guardrails, and inspection by competent persons. Common violations include improper assembly, missing components, overloading, and lack of fall protection. We investigate design calculations, assembly procedures, inspection records, and component maintenance. Multiple defendants often means multiple insurance policies and increased compensation potential."
    },
    {
      question: "What about crane accidents and liability?",
      answer: "Crane accidents typically involve catastrophic injuries due to their size and the heights involved. Liability may extend to crane operators, crane rental companies, general contractors, rigging companies, and manufacturers of defective parts. OSHA crane standards require certified operators, daily inspections, load testing, and maintaining safe distances from power lines. Common violations include operator inexperience, mechanical failures, improper assembly, overloading, and inadequate ground support. We investigate operator certifications, maintenance records, assembly procedures, and load calculations. Crane accidents often involve willful safety violations warranting punitive damages."
    },
    {
      question: "How do electrocution cases work in construction?",
      answer: "Electrocution cases involve contact with power lines, faulty wiring, or defective electrical equipment. Multiple parties may be liable: electrical contractors, general contractors, utility companies, equipment manufacturers, and property owners. OSHA electrical standards require ground-fault circuit interrupters, proper insulation, lockout/tagout procedures, and maintaining safe distances from power lines. We investigate whether proper electrical safety procedures were followed, equipment was properly maintained, and workers received adequate training. Electrical injuries often cause internal damage not immediately apparent, requiring extensive medical evaluation and long-term monitoring."
    },
    {
      question: "What's the Privette doctrine in California construction law?",
      answer: "The Privette doctrine generally protects property owners who hire independent contractors from liability for workplace injuries. However, important exceptions exist: owners retaining control over safety conditions, concealing known hazards from contractors, and negligent exercise of retained control. We investigate whether property owners actively participated in creating dangerous conditions or had actual knowledge of hazards they didn't disclose. The doctrine doesn't protect owners who negligently select incompetent contractors or fail to remedy known dangers. Understanding these exceptions helps identify additional liable parties and insurance coverage."
    },
    {
      question: "How does ladder safety factor into construction accident claims?",
      answer: "Ladder accidents account for significant construction injuries with specific OSHA regulations frequently violated. Requirements include proper ladder selection for task height, maintaining three-point contact, securing ladders against movement, and regular inspection for defects. Common violations include using damaged ladders, improper angle placement, overreaching, and missing safety feet. Defective ladder design or manufacturing creates product liability claims. We investigate whether employers provided appropriate ladders, trained workers properly, and enforced safety rules. Ladder accidents often result from systemic safety failures rather than worker error."
    },
    {
      question: "What compensation exists for scarring and disfigurement?",
      answer: "Scarring and disfigurement warrant separate compensation beyond medical costs. Factors include: scar location and visibility, size and appearance, age and gender impacts, career effects (especially customer-facing jobs), and psychological trauma. Facial scarring commands higher compensation due to daily visibility and social impacts. We document through photographs, plastic surgeon evaluations, and psychological assessments. Future revision surgeries, laser treatments, and cosmetic procedures increase damages. Young victims receive more for lifetime impacts. Juries often award substantial amounts for disfigurement understanding permanent effects on self-esteem and relationships."
    },
    {
      question: "How do heat illness claims work in construction?",
      answer: "California has specific heat illness prevention standards requiring water, rest, shade, and acclimatization periods. Violations causing heat stroke, exhaustion, or kidney damage create liability. Requirements include providing one quart of water per hour, shade structures when temperatures exceed 80°F, and mandatory cool-down periods. New workers need acclimatization periods building heat tolerance. High heat procedures apply above 95°F. We investigate whether employers monitored temperatures, provided adequate water and shade, trained workers on symptoms, and responded appropriately to heat illness signs. Heat-related injuries are entirely preventable with proper precautions."
    },
    {
      question: "What about injuries from silica dust exposure?",
      answer: "Silica dust from cutting, grinding, or drilling concrete and stone causes silicosis, an incurable lung disease. California leads the nation in silicosis cases, particularly among countertop fabricators. OSHA's silica standard requires engineering controls, respiratory protection, and medical surveillance. Many employers ignore these requirements, exposing workers to deadly dust. Acute silicosis can develop within weeks from high exposures, while chronic forms take years. We pursue claims against employers and manufacturers of engineered stone containing high silica levels. Medical monitoring and future treatment costs are substantial as silicosis progressively worsens."
    },
    {
      question: "How do trench collapse cases work?",
      answer: "Trench collapses are entirely preventable with proper shoring, sloping, or trench boxes. OSHA requires protective systems for excavations deeper than five feet. Cave-ins occur within seconds, burying workers under tons of soil. Survivors often suffer crush injuries, traumatic asphyxia, and psychological trauma. Fatal collapses leave families devastated. We investigate soil classification, protective system adequacy, and competent person qualifications. Multiple parties share liability: excavation contractors, general contractors, and engineers. Willful violations ignoring obvious collapse risks warrant punitive damages. These cases often involve criminal investigations alongside civil claims."
    },
    {
      question: "Can I sue for psychological trauma from witnessing a construction accident?",
      answer: "California allows recovery for emotional distress from witnessing traumatic accidents under specific circumstances. You must be closely related to the victim, present at the scene during the accident, and suffer serious emotional distress beyond normal grief. Coworkers generally cannot recover unless they were also in danger. However, if you narrowly escaped injury yourself (near-miss), you may have claims for emotional distress. PTSD, anxiety, and depression following construction trauma require psychological treatment. We document through therapy records and expert testimony establishing lasting psychological impacts."
    },
    {
      question: "What role do safety meetings play in construction accident cases?",
      answer: "Required weekly 'toolbox talks' and safety meetings document hazard awareness and training provided. Meeting records become crucial evidence showing what employers knew about dangers and whether they addressed them. Falsified attendance records or generic topics unrelated to actual hazards demonstrate negligence. We investigate whether meetings addressed specific hazards causing your injury, workers understood safety procedures, and employers enforced discussed rules. Lack of documentation or missed meetings violates Cal/OSHA's Injury and Illness Prevention Program requirements, supporting negligence claims."
    },
    {
      question: "How do back injuries from construction work get compensated?",
      answer: "Back injuries ranging from muscle strains to herniated discs and spinal fractures devastate construction workers' careers. Heavy lifting, repetitive motion, and falls cause acute and chronic injuries. Compensation includes immediate medical treatment, physical therapy, surgery costs, and future care needs. Many construction workers cannot return to physical labor, requiring vocational rehabilitation and retraining costs. Pain management, including injections and medications, continues indefinitely. We calculate lifetime impacts including reduced earning capacity, ongoing treatment, and activity limitations. Insurance companies minimize back injuries as 'subjective complaints'—we counter with objective medical evidence including MRIs and physician testimony."
    },
    {
      question: "What if I was hurt during a workplace safety inspection?",
      answer: "Injuries during safety inspections highlight systemic failures and strengthen negligence claims. If hazards exist during inspections when companies are supposedly most careful, it demonstrates persistent dangerous conditions. OSHA inspectors witnessing accidents provide powerful testimony. We investigate whether companies conducted superficial inspections missing obvious hazards, failed to correct identified dangers, or created temporary unsafe conditions during rushed inspection preparations. Inspection records showing repeated violations that weren't corrected establish pattern negligence warranting punitive damages."
    },
    {
      question: "How are future medical costs calculated?",
      answer: "Life care planners and medical experts project lifetime treatment needs based on injury severity and medical standards. Calculations include: surgeries and revisions, medications, therapy (physical, occupational, psychological), medical equipment and replacements, home health care, and medical inflation rates. Catastrophic injuries may require millions in future care. We ensure settlements address decades of needs, not just current bills. Structured settlements or medical cost projections prevent undervaluation. Insurance companies offer quick settlements hoping victims don't understand future costs—we prevent this exploitation through comprehensive planning."
    },
    {
      question: "Can I get compensation for lost career opportunities?",
      answer: "Yes, compensation includes lost earning capacity beyond current wages. Construction workers often cannot return to physical labor after serious injuries, forcing career changes at lower pay. We calculate differences between construction earnings potential and alternative employment options. Factors include: union versus non-union wages, overtime opportunities lost, advancement to foreman or supervisor positions, benefits and retirement contributions, and years until retirement. Vocational experts assess transferable skills and retraining requirements. Young workers deserve compensation for entire careers lost to preventable injuries."
    },
    {
      question: "What about injuries from defective safety equipment?",
      answer: "Defective safety equipment creating injuries or failing to prevent them establishes product liability claims. Hard hats cracking on impact, safety harnesses with defective buckles, respirators failing to filter hazards, and safety glasses shattering cause preventable injuries. Manufacturers must ensure safety equipment meets standards and performs as advertised. We preserve defective equipment for testing, investigate similar failures showing pattern defects, and obtain design documents revealing known weaknesses. Product liability claims don't require proving negligence—only that defects existed and caused injuries. Safety equipment manufacturers carry substantial insurance expecting these claims."
    },
    {
      question: "How do multi-employer worksite rules affect my claim?",
      answer: "Cal/OSHA's multi-employer worksite doctrine expands liability beyond direct employers. Creating employers who cause hazards, exposing employers whose workers face hazards, controlling employers with general site safety authority, and correcting employers responsible for fixing hazards all face potential liability. This means general contractors can be liable for subcontractor-created hazards affecting any workers. Property owners retaining safety control also face liability. Multiple liable parties increase insurance coverage and recovery potential. We identify all employers' roles and safety responsibilities to maximize compensation sources."
    },
    {
      question: "What if pre-existing conditions were aggravated?",
      answer: "California's 'eggshell plaintiff' rule means defendants take victims as they find them. Aggravation of pre-existing conditions is fully compensable. If a construction accident worsens prior injuries or conditions, defendants remain liable for all resulting harm. Insurance companies aggressively investigate medical histories attempting to blame current problems on old injuries. We demonstrate how accidents triggered dormant conditions, accelerated degenerative processes, or transformed manageable conditions into disabilities. Medical testimony distinguishes new injuries from pre-existing problems. You deserve compensation for all accident-caused changes regardless of prior vulnerabilities."
    },
    {
      question: "How quickly should I return to work after a construction injury?",
      answer: "Only return when medically cleared—premature return risks re-injury and weakens your claim. Insurance companies pressure early return to minimize wage loss claims. Follow doctor's orders exactly. If employers pressure return before medical clearance, document these demands. Light duty accommodations must respect medical restrictions. Returning too soon and re-injuring yourself allows insurers to blame you for additional damages. We protect clients from pressure tactics while ensuring appropriate medical care guides recovery timelines. Your health takes priority over employer convenience or insurance company profits."
    },
    {
      question: "What happens at a construction accident deposition?",
      answer: "Depositions involve testifying under oath while being questioned by opposing attorneys. Questions cover accident details, injuries, medical treatment, and impacts on your life. We thoroughly prepare you, practicing likely questions and reviewing documents. During depositions, answer only what's asked without volunteering information. Tell the truth—credibility is crucial. Don't guess if you don't remember. We object to improper questions protecting you from harassment. Depositions create testimony transcripts used in negotiations and trial. Strong deposition performance often drives better settlements as defendants realize you'll be an effective trial witness."
    },
    {
      question: "Should I post about my construction accident on social media?",
      answer: "Avoid social media discussions about your accident, injuries, or case. Insurance companies monitor social media for posts they can twist against you. Photos showing any activity get misrepresented as proof you're not seriously injured. Even positive posts about 'feeling better' undermine damage claims. Privacy settings don't prevent discovery—opposing attorneys can subpoena social media records. Best practice: stay off social media entirely during your case. Let us control information release protecting your claim's value."
    },
    {
      question: "What's an Independent Medical Examination (IME)?",
      answer: "IMEs are medical exams by doctors chosen by insurance companies to dispute your injuries. These doctors regularly testify for insurers, minimizing injuries to reduce claim values. IMEs aren't truly independent—they're adversarial. We prepare you for what to expect and may have a nurse observer present. Be honest about symptoms without exaggerating or minimizing. The doctor writes reports insurance companies use to deny treatment or reduce settlements. We counter biased IME reports with treating physician testimony and objective medical evidence. Understanding IME dynamics prevents manipulation and protects your claim."
    },
    {
      question: "How do structured settlements work for construction accidents?",
      answer: "Structured settlements provide periodic payments over time rather than lump sums. Benefits include tax advantages on future payments, guaranteed income preventing spending mistakes, and protection from creditors. Disadvantages include inability to access funds for emergencies and inflation reducing purchasing power. Structures work well for younger victims needing lifetime support or those with poor money management skills. We negotiate structures ensuring immediate needs are met while providing long-term security. Hybrid settlements combining lump sums with structured payments offer flexibility. Decision depends on your specific circumstances and financial sophistication."
    },
    {
      question: "What if my construction accident involved alcohol or drugs?",
      answer: "Intoxication complicates but doesn't necessarily eliminate claims. California's comparative fault rules apply—your recovery reduces by your fault percentage. We investigate whether intoxication actually caused the accident versus other factors like safety violations that would have caused injuries regardless. Post-accident testing procedures must follow protocols—violations may exclude results. Some prescribed medications causing impairment may not bar recovery if taken as directed. Employers allowing known substance abuse or pressuring long hours leading to stimulant use share liability. Every case requires careful analysis of causation and comparative fault."
    },
    {
      question: "Can family members recover for loss of consortium?",
      answer: "Spouses can recover for loss of consortium—the loss of companionship, affection, sexual relations, and household contributions resulting from injuries. California allows these claims when injuries substantially interfere with marital relationships. Children may recover for loss of parental guidance and companionship in cases of severe injury. These derivative claims are separate from the injured worker's damages. We document relationship changes through family testimony and counseling records. Insurance companies resist consortium claims, but juries understand family impacts from catastrophic construction injuries. These additional damages significantly increase total recovery."
    },
    {
      question: "What evidence preserves the strongest construction accident case?",
      answer: "Strong construction accident cases require comprehensive evidence preservation. Photograph everything immediately: accident scene, equipment involved, safety violations, injuries, and working conditions. Video can capture dynamic hazards photos miss. Preserve physical evidence like damaged safety equipment, torn clothing, and defective tools. Obtain witness statements from workers of all companies present—they scatter quickly. Request accident reports, OSHA citations, safety meeting records, and equipment maintenance logs. Document company names on vehicles, equipment, and worker clothing. Medical records must link injuries to specific accident mechanisms. The first 48 hours are critical as construction sites change rapidly."
    },
    {
      question: "How do union vs. non-union construction sites affect claims?",
      answer: "Union construction sites typically have better safety records due to rigorous training programs, safety committees, and work rules prioritizing safety over speed. Union safety representatives can halt dangerous work without retaliation. However, union membership doesn't prevent third-party claims against general contractors, property owners, or equipment manufacturers. Non-union sites often have higher accident rates due to inadequate training, pressure to work faster, and fear of reporting hazards. We calculate lost union benefits including pension contributions, health insurance, and overtime rates when determining damages. Union workers typically earn more, increasing lost wage calculations."
    },
    {
      question: "What role does equipment maintenance play in liability?",
      answer: "Proper equipment maintenance is crucial for construction site safety. Equipment owners, rental companies, and maintenance contractors can face liability for accidents caused by mechanical failures. We investigate maintenance records, inspection logs, and repair histories to identify negligent maintenance practices. Common issues include hydraulic failures in cranes and lifts, brake failures in vehicles, worn safety devices, and ignored manufacturer recall notices. Equipment manufacturers may also be liable for design defects or inadequate maintenance instructions. Proper maintenance records can also help prove your case wasn't caused by equipment failure but by other negligent acts."
    },
    {
      question: "How do California time limits differ for various parties?",
      answer: "Different defendants face different time limits for construction accident claims. Personal injury claims against private parties have a two-year statute of limitations from the accident date. Claims against government entities require filing administrative claims within six months, with lawsuit filing deadlines varying by entity. Product liability claims also have two-year limits but may face discovery rule extensions. Workers' compensation has different deadlines entirely. Some construction defect claims have longer periods. Property damage claims have three-year limits. The key is identifying all potential defendants early because each may have different deadlines. Missing one deadline can eliminate an entire source of compensation."
    },
    {
      question: "What happens if multiple insurance policies are involved?",
      answer: "Construction sites often involve multiple insurance policies from different companies, creating complex coverage issues. General contractors carry general liability insurance, subcontractors have their own policies, property owners maintain premises liability coverage, and equipment companies carry product liability insurance. Determining which policies apply and their coverage limits requires careful investigation. Primary policies pay first, then excess and umbrella policies. Some policies exclude certain activities or have other limitations. Insurance companies may dispute coverage or try to shift responsibility to other insurers. We work with insurance experts to identify all applicable coverage and ensure you receive maximum compensation from all available policies."
    },
    {
      question: "How do apprenticeship programs affect construction accident liability?",
      answer: "Apprenticeship programs create special relationships affecting liability in construction accidents. Training organizations, union apprenticeship committees, and employers all have duties to provide proper instruction and supervision. Accidents involving apprentices often result from inadequate training, improper supervision, or assignment to tasks beyond their skill level. Experienced workers have duties to guide and protect apprentices. We investigate whether apprentices received proper training for assigned tasks, adequate supervision was provided, and safety protocols were explained. Accidents involving apprentices often generate sympathy with juries who understand these workers were learning and relied on others for guidance and protection."
    },
    {
      question: "What if my construction accident was caused by weather conditions?",
      answer: "Weather doesn't automatically excuse construction accidents—employers must assess conditions and implement appropriate safety measures. High winds, rain, ice, extreme heat, and poor visibility create known hazards requiring specific precautions. Employers can be liable for forcing work in dangerous weather, failing to monitor conditions, or not providing appropriate equipment. Some weather hazards are foreseeable and preventable through proper planning. However, truly unforeseeable severe weather might limit liability. We investigate weather reports, company policies about weather-related work stoppage, and whether reasonable precautions were taken. The key question is whether a reasonable employer would have continued work under the conditions present."
    },
    {
      question: "How do security clearances affect construction accident cases?",
      answer: "Government construction projects requiring security clearances can complicate accident investigations and litigation. Some information about the project, site layout, or procedures may be classified or restricted. However, basic safety requirements and accident facts are typically not classified. We work with appropriate government agencies to obtain discoverable information while respecting security requirements. Your security clearance status generally doesn't affect your right to compensation. In some cases, government contractor immunity doctrines may apply, but exceptions exist for gross negligence. We have experience navigating the unique challenges of construction accidents on secure government facilities while protecting both your legal rights and security interests."
    },
    {
      question: "What compensation is available for permanent disabilities?",
      answer: "Permanent disabilities from construction accidents warrant comprehensive compensation addressing lifetime impacts. This includes ongoing medical care, rehabilitation, adaptive equipment, home modifications, and reduced earning capacity. California recognizes both total and partial permanent disabilities with compensation varying by degree of impairment. Workers' compensation provides limited disability benefits, but third-party claims allow full compensation without caps. We work with life care planners, vocational experts, and economists to calculate lifetime costs and lost earnings. Disability benefits may include Social Security, but these don't reduce your right to full compensation from liable parties. The goal is ensuring financial security for your remaining lifetime despite permanent limitations caused by others' negligence."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Construction Accident Lawyers California | OSHA Violations Attorney"
        description="Former defense attorney fighting for construction workers. Third-party claims beyond workers' comp. Scaffolding falls, OSHA violations, crane accidents. Free 24/7 consultation. No fees unless we win."
        canonical="/practice-areas/construction-accidents"
      />
      
      <GoBack fallbackPath="/practice-areas" className="top-20 z-[60]" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-20 pb-32 bg-gradient-to-r from-primary/95 to-primary/85 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Star className="w-5 h-5 mr-2" />
                Former Defense Attorney
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Shield className="w-5 h-5 mr-2" />
                OSHA Violation Expert
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                <Clock className="w-5 h-5 mr-2" />
                24/7 Emergency Response
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Construction Accident <span className="text-accent">Attorneys</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed">
              California construction sites present extreme dangers daily. When negligence causes catastrophic injuries, you deserve maximum compensation beyond limited benefits. Our former defense experience reveals insurance tactics, securing victories others can't achieve.
            </p>

            <p className="text-lg mb-10 text-gray-200 max-w-3xl mx-auto">
              Construction accounts for 20% of all workplace fatalities nationally, with California leading the nation in construction injuries. Falls, electrocutions, struck-by objects, and caught-in/between accidents—the "Fatal Four"—devastate families every year. While others accept minimal settlements, we pursue every liable party: contractors, property owners, equipment manufacturers, and subcontractors who violated safety standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-xl px-8 py-4 font-semibold">
                <Scale className="w-6 h-6 mr-2" />
                Free Case Review
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-xl px-8 py-4 font-semibold"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-6 h-6 mr-2" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <div className="flex max-w-7xl mx-auto px-6 py-12 gap-12">
        {/* Main Content */}
        <div className="flex-1 space-y-8" ref={contentRef}>
          {/* Navigation Tabs */}
          <div className="bg-white rounded-xl shadow-lg p-6 content-section">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                    activeTab === tab.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          <section id="overview" className="bg-white rounded-xl shadow-lg p-8 content-section">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Construction Accident Overview</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Construction accidents devastate workers and families physically, emotionally, and financially. While workers' compensation provides limited benefits regardless of fault, California law allows pursuing third-party claims against negligent contractors, subcontractors, property owners, equipment manufacturers, and architects whose actions contributed to your injuries.
              </p>
              <p className="text-lg leading-relaxed">
                These third-party claims operate independently from workers' compensation, meaning you can receive benefits while pursuing additional compensation for pain and suffering, full wage loss, and punitive damages that workers' comp doesn't provide. Our former defense experience reveals how insurance companies defend these claims, allowing us to build stronger cases that anticipate and overcome their tactics.
              </p>
            </div>
          </section>

          {/* Case Evaluation Section */}
          <section id="evaluation" className="bg-white rounded-xl shadow-lg p-8 content-section">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Free Case Evaluation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Get Your Free Legal Assessment</h3>
                <p className="text-muted-foreground mb-6">
                  Our experienced construction accident attorneys will evaluate your case at no cost. We'll identify all liable parties, assess the strength of your claim, and explain your legal options.
                </p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <Input 
                    placeholder="Accident Date" 
                    type="date"
                    value={formData.accidentDate}
                    onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                  />
                  <Select onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Injury" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fall">Fall from Height</SelectItem>
                      <SelectItem value="struck-by">Struck by Object</SelectItem>
                      <SelectItem value="electrocution">Electrocution</SelectItem>
                      <SelectItem value="caught-in">Caught In/Between</SelectItem>
                      <SelectItem value="scaffold">Scaffolding Collapse</SelectItem>
                      <SelectItem value="crane">Crane Accident</SelectItem>
                      <SelectItem value="burn">Burn Injury</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input 
                    placeholder="Accident Location" 
                    value={formData.accidentLocation}
                    onChange={(e) => setFormData({...formData, accidentLocation: e.target.value})}
                  />
                  <Button type="submit" className="w-full text-lg py-3">
                    Start My Free Evaluation
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✓ No Fees Unless We Win</h4>
                  <p className="text-green-700 text-sm">We work on contingency - you pay nothing unless we secure compensation for you.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">✓ 24/7 Availability</h4>
                  <p className="text-blue-700 text-sm">Construction accidents happen any time. We're here when you need us most.</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">✓ Former Defense Attorney</h4>
                  <p className="text-purple-700 text-sm">We know insurance company tactics from our defense experience.</p>
                </div>
              </div>
            </div>
          </section>

          {/* What to Do Section */}
          <section id="what-to-do" className="bg-white rounded-xl shadow-lg overflow-hidden content-section">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={whatToDoImage} alt="Construction accident what to do" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">What to Do After a Construction Accident</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">1. Ensure Safety & Report</h3>
                      <p className="text-muted-foreground">Get immediate medical attention even for "minor" injuries—adrenaline masks serious damage. Report to supervisor immediately but avoid detailed statements.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Camera className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">2. Document Everything</h3>
                      <p className="text-muted-foreground">Photograph injuries, accident scene, equipment involved, and safety violations. Get witness names and contact information.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Shield className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">3. Preserve Evidence</h3>
                      <p className="text-muted-foreground">Keep damaged safety equipment, torn clothing, and blood-stained items. Request copies of accident reports and OSHA citations.</p>
                    </div>
                  </div>
                  <Collapsible>
                    <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                      <span>Learn More Critical Steps</span>
                      <ChevronDown className="w-4 h-4" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Building className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">4. Identify All Parties</h3>
                          <p className="text-muted-foreground">Construction sites involve multiple contractors, subcontractors, property owners, and equipment suppliers. Each represents potential liability beyond your employer.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 p-2 rounded-full">
                          <MessageCircle className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">5. Refuse Recorded Statements</h3>
                          <p className="text-muted-foreground">Insurance adjusters seek admissions to minimize payouts. Politely decline recorded statements without legal representation.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-2 rounded-full">
                          <Scale className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">6. Contact an Attorney</h3>
                          <p className="text-muted-foreground">Construction accidents involve complex liability issues requiring immediate investigation. Our former defense experience reveals their strategies.</p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </section>

          {/* Types of Accidents Section */}
          <section id="types-of-accidents" className="bg-white rounded-xl shadow-lg overflow-hidden content-section">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Common Construction Accident Types</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Falls from Heights</h3>
                    <p className="text-red-700 text-sm">Leading cause of construction deaths. Inadequate fall protection, missing guardrails, unsafe scaffolding, and improper ladder use.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Struck-by Objects</h3>
                    <p className="text-orange-700 text-sm">Falling tools, equipment, materials from heights, vehicle strikes, and crane load drops.</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">Electrocution</h3>
                    <p className="text-yellow-700 text-sm">Contact with power lines, faulty wiring, damaged equipment, and missing ground-fault circuit interrupters.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Caught-in/Between</h3>
                    <p className="text-purple-700 text-sm">Trench collapses, machinery entanglement, and crushing between equipment and structures.</p>
                  </div>
                </div>
                <Collapsible className="mt-6">
                  <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    <span>View Additional Hazard Types</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-800 mb-2">Toxic Exposures</h3>
                        <p className="text-blue-700 text-sm">Silica dust, asbestos, lead, and chemical exposures causing long-term health problems.</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-800 mb-2">Heat Stress</h3>
                        <p className="text-green-700 text-sm">Dehydration, heatstroke, and heat exhaustion from inadequate rest and hydration.</p>
                      </div>
                      <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-indigo-800 mb-2">Equipment Failures</h3>
                        <p className="text-indigo-700 text-sm">Crane collapses, scaffolding failures, and defective safety equipment causing injuries.</p>
                      </div>
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-pink-800 mb-2">Explosions & Fires</h3>
                        <p className="text-pink-700 text-sm">Gas leaks, electrical fires, and chemical reactions causing burn injuries and trauma.</p>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <div className="md:w-1/3">
                <img src={accidentTypesImage} alt="Construction accident types" className="w-full h-64 md:h-full object-cover" />
              </div>
            </div>
          </section>

          {/* OSHA Violations Section */}
          <section id="osha-violations" className="bg-white rounded-xl shadow-lg overflow-hidden content-section">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={whatToDoImage} alt="OSHA violations" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">OSHA and Cal/OSHA Violations</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  OSHA and California's Cal/OSHA establish mandatory safety standards protecting construction workers. Violations of these regulations provide powerful evidence of negligence in third-party claims.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-semibold text-lg">Willful Violations</h3>
                    <p className="text-muted-foreground">Intentional disregard for safety, carrying penalties up to $158,000 in California.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="font-semibold text-lg">Serious Violations</h3>
                    <p className="text-muted-foreground">Create substantial probability of death or serious injury.</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="font-semibold text-lg">Repeat Violations</h3>
                    <p className="text-muted-foreground">Demonstrate patterns of negligence and systematic safety failures.</p>
                  </div>
                </div>
                <Collapsible className="mt-6">
                  <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    <span>Learn More About OSHA Evidence</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 text-muted-foreground space-y-4">
                    <p>
                      Following serious accidents, OSHA investigators examine the scene, interview witnesses, review safety programs, and issue citations for violations. These official findings carry significant weight in personal injury lawsuits, establishing that defendants breached their duty to maintain safe conditions.
                    </p>
                    <p>
                      Common OSHA violations in construction include failure to provide fall protection (most cited violation annually), inadequate hazard communication about dangerous chemicals, improper scaffolding construction and use, lack of respiratory protection, missing eye and face protection, inadequate ladder safety, and absent excavation protections.
                    </p>
                    <p>
                      We obtain OSHA investigation files through Freedom of Information Act requests, revealing evidence companies try to hide. These documents include witness statements, photographs, inspection notes, and internal communications showing knowledge of hazards.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </section>

          {/* Third-Party Liability Section */}
          <section id="third-party-liability" className="bg-white rounded-xl shadow-lg overflow-hidden content-section">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Third-Party Liability Beyond Workers' Compensation</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Construction accidents often involve multiple parties beyond your direct employer, opening doors to substantial compensation that workers' compensation doesn't provide.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">General Contractors</h3>
                    <p className="text-blue-700 text-sm">Responsible for overall site safety and coordination of subcontractors.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Property Owners</h3>
                    <p className="text-green-700 text-sm">Liable for known dangerous conditions and retained safety control.</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-purple-800 mb-2">Equipment Manufacturers</h3>
                    <p className="text-purple-700 text-sm">Liable for defective machinery, tools, and safety equipment.</p>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-orange-800 mb-2">Subcontractors</h3>
                    <p className="text-orange-700 text-sm">Whose negligence created hazards affecting other workers.</p>
                  </div>
                </div>
                <Collapsible className="mt-6">
                  <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    <span>Understanding Third-Party Claims</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 text-muted-foreground space-y-4">
                    <p>
                      While workers' comp offers limited benefits regardless of fault, it doesn't cover pain and suffering, full wage loss, or punitive damages. California law allows pursuing third-party claims against negligent contractors, subcontractors, property owners, equipment manufacturers, and architects whose actions contributed to your injuries.
                    </p>
                    <p>
                      These third-party claims operate independently from workers' compensation, meaning you can receive benefits while pursuing additional compensation. Each party's insurance represents additional compensation sources.
                    </p>
                    <p>
                      California's pure comparative negligence law allows recovery even if partially at fault, though compensation reduces by your fault percentage. Insurance companies exploit this, attempting to shift blame onto injured workers. We counter these tactics, minimizing your assigned fault while maximizing the negligence attributed to responsible parties.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <div className="md:w-1/3">
                <img src={accidentTypesImage} alt="Third-party liability" className="w-full h-64 md:h-full object-cover" />
              </div>
            </div>
          </section>

          {/* Compensation Section */}
          <section id="compensation" className="bg-white rounded-xl shadow-lg overflow-hidden content-section">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img src={compensationImage} alt="Construction accident compensation" className="w-full h-64 md:h-full object-cover" />
              </div>
              <div className="md:w-2/3 p-8">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Types of Compensation Available</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Construction accident victims deserve comprehensive compensation addressing all losses, not just the limited benefits workers' compensation provides.
                </p>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Economic Damages</h3>
                    <p className="text-green-700 text-sm">Medical expenses (past and future), full wage loss without caps, lost earning capacity, vocational rehabilitation costs.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">Non-Economic Damages</h3>
                    <p className="text-blue-700 text-sm">Pain and suffering, emotional distress, loss of enjoyment of life, disfigurement and scarring impacts.</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Punitive Damages</h3>
                    <p className="text-red-700 text-sm">Apply when defendants show malice, oppression, or conscious disregard for worker safety.</p>
                  </div>
                </div>
                <Collapsible className="mt-6">
                  <CollapsibleTrigger className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                    <span>Learn More About Damage Calculations</span>
                    <ChevronDown className="w-4 h-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 text-muted-foreground space-y-4">
                    <p>
                      Unlike workers' compensation's partial wage replacement, personal injury claims seek 100% of lost income including overtime, bonuses, and benefits. California doesn't cap non-economic damages in construction accident cases, allowing juries to award amounts reflecting injury severity.
                    </p>
                    <p>
                      Future damages require expert testimony establishing long-term impacts: lifetime medical costs for ongoing treatment, rehabilitation, medications, and equipment; reduced earning capacity calculations considering age, skills, and disability limitations; home modifications for accessibility; and attendant care needs.
                    </p>
                    <p>
                      Life care planners and economists quantify these future losses, ensuring settlements address lifetime needs rather than immediate expenses. Our comprehensive approach maximizes recovery by identifying and pursuing all available damages from every liable party.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </section>

          {/* Time Limits Section */}
          <section id="time-limits" className="bg-red-50 rounded-xl shadow-lg p-8 content-section">
            <div className="text-center mb-8">
              <Clock className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-red-800 mb-4">Don't Wait - Time Limits Apply for California Construction Accidents</h2>
              <p className="text-xl text-red-700">California has strict deadlines that can permanently bar your claim</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-800 mb-3">Personal Injury Claims</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">2 Years</div>
                <p className="text-gray-700">From the accident date for third-party claims against contractors, property owners, and manufacturers</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Government Claims</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">6 Months</div>
                <p className="text-gray-700">Administrative claims against government entities must be filed within six months</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Evidence Preservation</h3>
                <div className="text-3xl font-bold text-yellow-600 mb-2">Days</div>
                <p className="text-gray-700">Critical evidence disappears within days as construction sites change rapidly</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg text-red-700 mb-6">
                Don't lose your right to compensation. Contact us immediately for a free case evaluation.
              </p>
              <Link 
                to="/construction-case-evaluation"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
              >
                <Scale className="w-6 h-6" />
                Start Your Case Evaluation Now
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="bg-white rounded-xl shadow-lg p-8 content-section">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 flex justify-between items-center transition-colors"
                  >
                    <h3 className="font-semibold text-lg text-foreground pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-white border-t border-gray-200">
                      <p className="text-muted-foreground leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="bg-white rounded-xl shadow-lg p-8 content-section">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Resources & Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                to="/construction-case-evaluation"
                className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <Scale className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Case Evaluation</h3>
                <p className="text-muted-foreground">Get your free legal assessment and case strategy.</p>
              </Link>
              <Link 
                to="/construction-compensation-calculator"
                className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors group"
              >
                <DollarSign className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Compensation Calculator</h3>
                <p className="text-muted-foreground">Estimate your potential case value and damages.</p>
              </Link>
              <Link 
                to="/construction-medical-guidance"
                className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors group"
              >
                <Stethoscope className="w-12 h-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-2">Medical Guidance</h3>
                <p className="text-muted-foreground">Understand your injuries and treatment options.</p>
              </Link>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar - 3 Ways to Start Your Case */}
        <div className="w-80 flex-shrink-0">
          <div className="sticky top-24 space-y-6">
            <Card className="bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-center text-xl">3 Ways to Start Your Case</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link 
                  to="/construction-case-evaluation"
                  className="block w-full bg-white text-primary p-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  📝 Start Construction Accidents Evaluation
                </Link>
                <a 
                  href="tel:8181234567"
                  className="block w-full bg-green-600 text-white p-4 rounded-lg font-semibold text-center hover:bg-green-700 transition-colors"
                >
                  📞 Call (818) 123-4567
                </a>
                <button 
                  className="w-full bg-blue-600 text-white p-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    // Scroll to the contact form or open chat
                    document.getElementById('evaluation')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  💬 24/7 Live Chat
                </button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Why Choose Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Former Defense Attorney</p>
                    <p className="text-sm text-muted-foreground">We know insurance tactics from the inside</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <HardHat className="w-5 h-5 text-blue-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Construction Specialist</p>
                    <p className="text-sm text-muted-foreground">Focused exclusively on construction accidents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">No Fees Unless We Win</p>
                    <p className="text-sm text-muted-foreground">You pay nothing until we secure compensation</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Key Factors Affecting Case Value
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Severity of injuries and permanent disabilities</p>
                <p>• Multiple liable parties and insurance coverage</p>
                <p>• OSHA violations and safety failures</p>
                <p>• Lost earning capacity and future medical needs</p>
                <p>• Pain and suffering impacts</p>
                <p>• Strength of liability evidence</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="w-5 h-5" />
                  California Construction Law
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Pure comparative negligence allows recovery even if partially at fault</p>
                <p>• Multi-employer worksite doctrine expands liability</p>
                <p>• No caps on non-economic damages</p>
                <p>• Third-party claims independent of workers' comp</p>
                <p>• Strict liability for defective equipment</p>
                <p>• OSHA violations establish negligence per se</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionAccidents;