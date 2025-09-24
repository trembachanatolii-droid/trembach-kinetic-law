import React, { useState, useEffect, useRef } from 'react';
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
  Eye,
  Activity,
  Zap,
  Calculator,
  DollarSign
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

// Import images
import heroBackground from '@/assets/vision-loss-hero-bg.jpg';
import sidebarImage from '@/assets/vision-loss-sidebar.jpg';
import diagnosisImage from '@/assets/vision-loss-diagnosis-process.jpg';
import legalProcessImage from '@/assets/vision-loss-legal-process.jpg';
import exposureSitesImage from '@/assets/california-vision-sites.jpg';
import medicalImage from '@/assets/vision-loss-medical-facility.jpg';
import compensationImage from '@/assets/vision-loss-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const VisionLoss: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visionLossType: '',
    message: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // 3D and Animation Setup
  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const heroTl = gsap.timeline();
      heroTl.fromTo(heroRef.current.querySelector('.hero-content'), 
        { 
          opacity: 0, 
          y: 50,
          rotationX: -15,
          z: -200
        },
        { 
          opacity: 1, 
          y: 0,
          rotationX: 0,
          z: 0,
          duration: 1.2,
          ease: "power3.out"
        }
      );
    }

    // Sidebar sticky effect removed - using pure CSS sticky to avoid duplication and layout glitches
    // Previously used GSAP ScrollTrigger pinning here, which could create spacer/pin artifacts
    // and cause perceived duplicates. CSS sticky on the sidebar container is sufficient.

    // Content sections animation
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 100,
          rotationY: 10,
          transformOrigin: "center center -500px"
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'vision-types', label: 'Vision Loss Types', icon: AlertTriangle },
    { id: 'causes', label: 'Common Causes', icon: Activity },
    { id: 'process', label: 'Legal Process', icon: Scale },
    { id: 'compensation', label: 'Compensation', icon: DollarSign },
    { id: 'california-sites', label: 'CA High-Risk Areas', icon: Map },
    { id: 'faq', label: 'FAQ', icon: FileText }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - redirect to case evaluation
    window.location.href = '/practice-areas/vision-loss/case-evaluation';
  };

  const toggleExpanded = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data extracted from HTML content
  const faqs = [
    {
      question: "What's the time limit for filing a vision loss lawsuit in California?",
      answer: "California's statute of limitations for personal injury claims is generally two years from the injury date. However, exceptions exist. Medical malpractice claims have one year from discovery but maximum three years from negligence. Government claims require six-month notice. Minors have until two years after turning 18. Product liability may extend based on discovery rule. Vision loss developing gradually may toll limitations until diagnosis. Missing deadlines eliminates your right to compensation, making immediate legal consultation critical to preserve your claim."
    },
    {
      question: "Can I still work with partial vision loss?",
      answer: "Many people with partial vision loss continue working with accommodations, but options depend on severity and job requirements. Careers requiring precise vision like surgery, piloting, or detailed inspection become impossible. Driving-dependent jobs end without adequate peripheral vision. Office work may continue with magnification and assistive technology. California's Fair Employment and Housing Act requires reasonable accommodations. However, many victims face reduced hours, demotions, or career changes impacting lifetime earnings. We document how your specific vision loss affects your occupation and future earning capacity."
    },
    {
      question: "What if I was partially at fault for my eye injury?",
      answer: "California's pure comparative negligence law allows recovery even if you're 99% at fault, though compensation reduces by your fault percentage. For example, if damages are $500,000 and you're 30% at fault, you recover $350,000. Insurance companies exaggerate victim fault to reduce payouts. We minimize your fault percentage through investigation and expert testimony. Common false blame includes not wearing safety glasses when not provided, being in an unauthorized area when inadequately marked, or having a momentary lapse when dangerous conditions existed. Don't accept blame - let us fight for maximum recovery."
    },
    {
      question: "Should I see an ophthalmologist or optometrist after eye injury?",
      answer: "See an ophthalmologist (MD) immediately after eye injury. Ophthalmologists are medical doctors specializing in eye surgery and disease treatment. Optometrists primarily handle vision correction and basic eye health. Serious injuries require an ophthalmologist's medical expertise for proper diagnosis and treatment. Emergency rooms have ophthalmologists on-call for eye trauma. Delayed or inadequate treatment worsens outcomes and complicates legal claims. Document all providers seen, treatments received, and referrals made. Continuity of care from qualified specialists strengthens your injury claim."
    },
    {
      question: "Can vision loss appear days or weeks after an accident?",
      answer: "Yes, delayed vision loss commonly occurs after trauma. Swelling, bleeding, and inflammation may develop gradually. Retinal detachment can occur weeks after initial injury. Traumatic cataracts may form months or years later. Brain injuries often cause progressive vision problems as swelling evolves. Infection from corneal abrasions manifests days later. Document any vision changes immediately and seek emergency care. Insurance companies dispute delayed symptoms claiming unrelated causes. We establish medical causation linking delayed vision loss to your original trauma through expert testimony."
    },
    {
      question: "Will I need multiple eye surgeries?",
      answer: "Serious eye injuries often require multiple surgeries over months or years. Initial emergency surgery stabilizes the eye. Subsequent procedures address cataracts, scarring, glaucoma, or cosmetic issues. Corneal transplants may need replacement. Retinal surgeries have re-detachment risks. Children require adjustments as they grow. Each surgery carries risks including infection, bleeding, and further vision loss. Recovery periods impact work and daily activities. We calculate all anticipated future surgeries, associated costs, time off work, and cumulative risks in your compensation demand."
    },
    {
      question: "Can lost vision ever be restored?",
      answer: "Vision restoration depends entirely on injury type and severity. Corneal scarring may improve with transplants. Cataracts are surgically treatable. However, optic nerve damage, retinal death, and cortical blindness are irreversible with current medicine. Stem cell research shows future promise but remains experimental. Temporary vision loss from swelling or hemorrhage may resolve, but timeline is unpredictable. We consult leading ophthalmologists determining your prognosis and potential for improvement. Compensation accounts for uncertainty, ensuring resources whether vision improves or remains impaired."
    },
    {
      question: "What is traumatic optic neuropathy?",
      answer: "Traumatic optic neuropathy occurs when head trauma damages the optic nerve, causing vision loss without direct eye injury. The optic nerve cannot regenerate, making damage permanent. Symptoms include decreased visual acuity, color vision loss, and visual field defects developing hours or days post-injury. Diagnosis requires specialized testing including visual evoked potentials and MRI. Treatment remains controversial with limited success from steroids or surgical decompression. Often missed in initial trauma evaluation, delayed diagnosis eliminates treatment windows. We prove connection between head trauma and subsequent vision loss for maximum compensation."
    },
    {
      question: "How long does a vision loss lawsuit take in California?",
      answer: "Vision loss cases typically resolve within 12-24 months, though complex cases may take longer. Simple liability cases with clear damages settle faster. Disputed liability, multiple defendants, or extensive injuries extend timeline. Medical malpractice cases require expert review adding months. Most cases (90%) settle without trial through negotiation or mediation. Trial adds 6-12 months but may yield higher compensation. We balance urgency for financial relief with maximizing recovery. Immediate financial needs can be addressed through partial settlements or litigation funding while pursuing full compensation."
    },
    {
      question: "Do I have to go to court for my eye injury case?",
      answer: "Most vision loss cases (approximately 90%) settle without trial through skilled negotiation. However, preparing for trial strengthens negotiation position. If trial becomes necessary, you'll testify about your injury and impacts. We thoroughly prepare you for testimony, making the process as comfortable as possible. Video depositions may substitute for live testimony in some cases. Mediation provides settlement opportunity without court appearance. Insurance companies know our trial readiness and success record, motivating fair settlements. We recommend the approach maximizing your compensation whether through settlement or trial."
    },
    {
      question: "What evidence do I need for a vision loss claim?",
      answer: "Strong evidence includes medical records documenting injury and treatment, photographs of injuries and accident scene, witness statements, police or incident reports, employment records showing lost wages, and documentation of daily life impacts. Preserve damaged safety equipment, contaminated products, or defective items. Keep receipts for all expenses related to your injury. Document vision limitations through daily logs. Expert testimony from ophthalmologists establishes causation and prognosis. Vocational experts calculate career impacts. Life care planners project future needs. We gather and organize all evidence building your strongest possible case."
    },
    {
      question: "How much do vision loss attorneys charge?",
      answer: "We work on contingency fee basis - you pay nothing unless we win. Our fee is typically 33-40% of recovery, depending on case complexity and whether trial is needed. We advance all costs including expert witnesses, court fees, and investigation expenses. These costs are reimbursed from your settlement. You never pay out-of-pocket or owe anything if we don't win. This arrangement ensures everyone has access to quality legal representation regardless of financial situation. Our interests align with yours - we only succeed when you receive maximum compensation."
    },
    {
      question: "Should I talk to insurance companies about my eye injury?",
      answer: "Never give recorded statements to insurance adjusters without attorney representation. Adjusters use your words against you, minimizing claims. They ask leading questions, twist statements, and create doubt about your injuries. Politely decline stating you'll have your attorney contact them. Report the claim but provide only basic facts: date, location, and general injury type. Don't discuss fault, injury extent, or medical history. Insurance companies aren't your friends despite friendly demeanor. Their goal is minimizing payouts. Let us handle all insurance communications protecting your interests and maximizing recovery."
    },
    {
      question: "Can I sue if safety glasses weren't provided at work?",
      answer: "Yes, employers failing to provide required safety equipment face liability beyond workers' compensation. OSHA mandates appropriate eye protection for hazardous work. Employer violations constitute negligence and potentially serious and willful misconduct increasing benefits. Third-party claims against property owners, contractors, or equipment manufacturers provide additional recovery. Document absence of safety equipment, requests for protection, and similar incidents affecting coworkers. Cal/OSHA citations strengthen your claim. We pursue all available compensation sources for preventable workplace vision loss caused by safety violations."
    },
    {
      question: "What if I lost vision from laser eye surgery complications?",
      answer: "LASIK and other refractive surgeries carry serious risks requiring proper screening, technique, and informed consent. Complications including corneal ectasia, severe dry eye, halos, and vision loss may constitute malpractice. We investigate whether you were appropriate candidate, surgical technique was proper, complications were timely addressed, and informed consent covered actual risks. Marketing minimizing risks while maximizing benefits creates liability. Despite signed consents, surgeons must meet standard of care. Compensation addresses corrective procedures, ongoing treatment, vision aids, and career impacts from elective surgery complications."
    },
    {
      question: "Can I recover damages if airbag deployment caused my eye injury?",
      answer: "Yes, while airbags save lives, defective designs or excessive force can cause serious eye injuries including retinal detachment, lens dislocation, and corneal abrasions. Defective airbags deploying metal fragments face strict liability. Even properly functioning airbags may cause compensable injuries when deployment was unnecessary for minor impacts. We investigate airbag design, deployment threshold, inflation force, and chemical burns. Product liability claims against manufacturers supplement claims against at-fault drivers. Compensation addresses both the original accident and additional airbag-inflicted injuries."
    },
    {
      question: "What if my child suffered vision loss at school?",
      answer: "Schools have heightened duty protecting students from foreseeable harm. Playground accidents, sports injuries, science lab incidents, or bullying causing vision loss may create liability. California government claims require six-month notice with specific requirements. Public school districts have immunity exceptions for dangerous conditions and inadequate supervision. Private schools face standard negligence liability. Document immediately through school reports, photographs, and medical records. Compensation addresses medical costs, special education needs, lifetime vision impacts, and parents' lost wages for care. We navigate complex government claim requirements maximizing recovery for your child's injuries."
    },
    {
      question: "Can I sue for emotional distress from vision loss?",
      answer: "Yes, emotional distress is compensable in California vision loss cases. Sudden vision loss causes severe psychological trauma including depression, anxiety, PTSD, and adjustment disorders. Fear of complete blindness creates ongoing distress. Loss of independence and career changes compound psychological impacts. Mental health treatment costs, therapy, and medications are recoverable. Emotional suffering increases non-economic damages beyond pure financial losses. Psychological expert testimony establishes severity and causation. We document emotional impacts through treatment records, family testimony, and daily life changes maximizing compensation for vision loss trauma."
    },
    {
      question: "What's the difference between economic and non-economic damages?",
      answer: "Economic damages have specific dollar values: medical bills, lost wages, property damage, and future care costs. These are calculated through bills, pay stubs, and expert projections. Non-economic damages compensate for human losses without receipt: pain, suffering, emotional distress, loss of enjoyment, and relationship impacts. California places no caps on non-economic damages in most personal injury cases (medical malpractice has limits). Vision loss cases typically warrant substantial non-economic damages due to profound life impacts. We maximize both categories ensuring comprehensive compensation for all losses."
    },
    {
      question: "Should I accept the insurance company's first settlement offer?",
      answer: "Never accept initial offers without attorney review. First offers are deliberately low, testing whether you'll accept inadequate compensation. Insurance companies know most people don't understand claim values. Initial offers rarely include future medical costs, full wage loss, or appropriate non-economic damages. Quick settlements prevent discovering full injury extent. Once accepted, you cannot pursue additional compensation regardless of complications. Our analysis reveals true case value, often 3-10 times initial offers. We negotiate from strength, forcing fair compensation for your vision loss. Patience yields dramatically better outcomes."
    },
    {
      question: "What if I already gave a statement to insurance?",
      answer: "Prior statements don't doom your case but require strategic management. We obtain statement transcripts identifying problematic areas. Context explanations, clarifications, and additional evidence overcome damaging statements. Adjusters often mischaracterize statements requiring correction. Immediate post-accident statements made while traumatized or medicated carry less weight. Medical documentation contradicting minimized injury claims proves statements were incomplete. Don't provide additional statements trying to 'fix' previous ones - this typically worsens situations. Let us professionally address prior statements while building strong evidence supporting your actual damages."
    },
    {
      question: "How does California's comparative negligence affect vision loss cases?",
      answer: "California's pure comparative negligence allows recovery even if you're mostly at fault, reducing damages by your fault percentage. Insurance companies exaggerate victim fault claiming you should have worn protection, avoided areas, or reacted differently. We counter these arguments proving conditions made accidents unavoidable regardless of your actions. Expert testimony on reaction times, visibility conditions, and industry standards minimize fault attribution. Even 50% fault in a $1 million case yields $500,000 recovery. Don't accept blame - let us fight for minimum fault allocation maximizing your compensation."
    },
    {
      question: "Can pre-existing eye conditions affect my claim?",
      answer: "Pre-existing conditions don't bar recovery if trauma worsened your vision. California's 'eggshell plaintiff' rule makes defendants liable for all harm caused, even if injuries are worse due to pre-existing conditions. Compensation covers the difference between prior and current vision function. Medical records establishing baseline vision before trauma prove deterioration extent. Conditions like glaucoma or macular degeneration making eyes vulnerable don't reduce liability. Defendants take victims as they find them. We differentiate trauma-caused changes from natural progression, ensuring full compensation for accident-related vision loss despite pre-existing conditions."
    },
    {
      question: "What if vision loss affects my mental health?",
      answer: "Vision loss commonly causes depression, anxiety, PTSD, and adjustment disorders requiring psychological treatment. Mental health impacts are fully compensable including therapy, medication, and psychiatric care. Suicide risk increases with vision loss requiring monitoring. Loss of independence, career changes, and relationship strains compound psychological effects. Mental health treatment strengthens damage claims proving injury severity. Psychological expert testimony explains emotional impact beyond typical accident trauma. We sensitively document mental health effects ensuring compensation addresses both physical and psychological injuries from vision loss."
    },
    {
      question: "Can I sue multiple parties for my vision loss?",
      answer: "Yes, multiple parties often share liability for vision loss. Car accidents may involve multiple drivers, vehicle manufacturers, and government entities for road defects. Workplace injuries implicate employers, property owners, contractors, and equipment manufacturers. Product cases include manufacturers, distributors, and retailers. Each defendant's insurance provides additional recovery sources. Joint and several liability makes each defendant potentially responsible for full damages. We identify all liable parties maximizing available compensation. Strategic settlement timing with different defendants optimizes total recovery for your vision loss."
    },
    {
      question: "What happens if I need vision care after settling?",
      answer: "Settlement calculations must include lifetime vision care needs preventing future financial hardship. We work with life care planners projecting all potential future medical needs. Conservative estimates account for complications, technology advances, and inflation. Structured settlements can provide ongoing payments for medical expenses. Medicare set-asides preserve future government benefits. Proper settlement planning ensures resources for decades of vision care. Attempting to minimize current settlements hoping for future claims typically fails - comprehensive initial settlements protecting long-term needs are essential."
    },
    {
      question: "How do I prove my vision loss is permanent?",
      answer: "Medical documentation from ophthalmologists and specialists establishes permanency. Objective testing including visual field tests, OCT scans, ERG, and visual evoked potentials prove irreversible damage. Time passage without improvement despite treatment indicates permanency. Specific injuries like optic nerve damage or retinal death are inherently permanent. Maximum medical improvement determinations confirm no further recovery expected. Expert testimony explains why your specific injuries won't improve. Insurance companies dispute permanency hoping to minimize compensation - we provide overwhelming medical evidence proving permanent vision loss warranting maximum recovery."
    },
    {
      question: "Can I get Social Security disability for vision loss?",
      answer: "Social Security disability benefits are available for vision loss meeting specific criteria: legal blindness (20/200 or less in better eye with correction) or visual field limitation to 20 degrees or less. Lesser impairments may qualify when combined with other conditions. Benefits provide monthly income and Medicare coverage. Personal injury settlements generally don't affect SSDI eligibility but may impact needs-based SSI. Proper settlement structuring preserves government benefits. We coordinate with disability attorneys ensuring you receive all available benefits while maximizing personal injury recovery for your vision loss."
    },
    {
      question: "What if the vision loss was caused by defective products?",
      answer: "Product liability claims hold manufacturers strictly liable for defective designs, manufacturing flaws, or inadequate warnings. Eye injuries from chemical products, tools, toys, or medical devices create strong liability regardless of user fault. Defective safety glasses, contaminated eye drops, or faulty laser equipment manufacturers cannot escape responsibility through disclaimers. We investigate design alternatives, testing standards, and regulatory compliance. Class action suits may exist for widespread defects. Compensation covers medical costs, pain and suffering, and ongoing care needs. Corporate defendants often have substantial insurance providing significant recovery potential for product-related vision loss."
    },
    {
      question: "How do workplace eye injuries differ from other vision loss cases?",
      answer: "Workplace vision loss involves workers' compensation providing medical coverage and partial wage replacement regardless of fault. However, third-party claims against equipment manufacturers, contractors, or property owners provide additional compensation. Serious and willful misconduct by employers can increase workers' comp benefits and allow additional lawsuits. OSHA violations create negligence per se liability. Cal/OSHA citations strengthen third-party claims. We coordinate workers' comp benefits with personal injury claims maximizing total recovery. Settlement timing affects benefit coordination requiring careful planning to preserve all compensation sources."
    },
    {
      question: "What if my doctor missed signs of vision problems?",
      answer: "Medical malpractice occurs when doctors fail to diagnose treatable eye conditions, miss trauma complications, or provide substandard care. Delayed diagnosis of glaucoma, retinal detachment, or infections can cause preventable vision loss. Emergency room physicians missing orbital fractures or optic nerve damage face liability. Surgical errors during eye procedures create clear malpractice claims. We consult medical experts establishing standard of care breaches and causation. Time limits are strict in malpractice cases requiring immediate consultation. Expert testimony proves how timely treatment would have prevented or minimized vision loss."
    },
    {
      question: "Can I recover damages for family member's vision loss?",
      answer: "Family members may recover loss of consortium damages for spouse's vision loss affecting companionship and support. Parents of injured minor children can claim medical expenses and lost services. Wrongful death claims apply if vision loss complications cause death. Family members often suffer emotional distress from loved one's traumatic injury requiring counseling. We document family impact through testimony and expert evidence. Severe vision loss affecting independence creates substantial consortium claims. Family members' time caring for injured person represents economic losses. California recognizes significant family impacts from catastrophic injuries like blindness warranting compensation."
    },
    {
      question: "What if I can't afford medical treatment for my eye injury?",
      answer: "Don't delay treatment due to cost concerns - this worsens outcomes and damages claims. Medical liens allow treatment with payment from settlement. Many specialists treat on lien basis understanding injury cases. Emergency Medicaid may cover immediate care. We advance medical costs when necessary protecting your health and claim. Hospital charity care programs provide treatment for low-income patients. Document all refused treatment due to cost issues. Delayed treatment strengthens damages claims showing financial hardship. We ensure you receive necessary care while preserving full compensation recovery for your vision loss."
    },
    {
      question: "How do chemical eye burns affect vision loss claims?",
      answer: "Chemical burns create severe eye injuries requiring immediate irrigation and specialized treatment. Alkaline chemicals like drain cleaners cause deeper penetration and worse outcomes than acids. Workplace chemical exposures violate OSHA standards when proper equipment isn't provided. Product liability applies to inadequate warnings or defective containers. Time is critical - delayed treatment worsens chemical damage. Even brief exposures can cause permanent corneal scarring and blindness. We investigate safety protocols, training adequacy, and equipment provision. Chemical manufacturers face strict liability for inadequate warnings about eye contact dangers."
    },
    {
      question: "Can sports injuries cause vision loss claims?",
      answer: "Sports-related eye injuries may create liability for inadequate supervision, defective equipment, or dangerous playing conditions. Organized sports require appropriate protective equipment and safety protocols. Referees failing to enforce safety rules or allowing dangerous play face liability. Equipment manufacturers must provide adequate eye protection in high-risk sports. Facility owners must maintain safe playing conditions. We investigate whether protective equipment was required but not provided, rules were properly enforced, and facilities met safety standards. School districts have special liability for student injuries requiring immediate government claim filing."
    },
    {
      question: "What compensation is available for total blindness?",
      answer: "Total blindness represents catastrophic injury warranting maximum compensation including millions in medical costs, lost earning capacity, lifetime care needs, home modifications, assistive technology, guide dogs, and substantial pain and suffering. Vocational rehabilitation, mobility training, and adaptive equipment cost hundreds of thousands. Lost independence requires ongoing assistance affecting entire family. We work with life care planners calculating lifetime needs and economists projecting wage loss. Blindness significantly reduces life expectancy requiring comprehensive settlement planning. Multiple insurance policies and defendants often necessary to provide adequate compensation for total vision loss."
    },
    {
      question: "How does age affect vision loss compensation?",
      answer: "Age significantly impacts vision loss compensation calculations. Young victims face decades of lost earnings, making cases extremely valuable. Children need special education services, adaptive training, and lifetime care. Working-age adults lose peak earning years and career advancement. Elderly victims have shorter life expectancy but higher medical needs and care costs. Adaptation difficulty increases with age. We tailor compensation strategies to life stage impacts. Young children's cases require court approval and structured settlements protecting long-term interests. Retirement-age victims may emphasize immediate care needs over future earnings. Each age group faces unique challenges warranting specialized damage calculations."
    },
    {
      question: "What if the eye injury happened in another state?",
      answer: "Multi-state vision loss cases involve complex jurisdiction and choice of law issues. We can represent California residents injured elsewhere and out-of-state residents injured in California. Forum shopping rules may allow filing in most favorable jurisdiction. Statute of limitations varies by state requiring immediate analysis. Some states have damage caps or comparative negligence rules differing from California's favorable laws. Interstate trucking, product liability, and aviation cases frequently involve multiple states. We coordinate with local counsel when necessary ensuring optimal case positioning. Don't let geography prevent pursuing compensation - we handle complex multi-jurisdictional vision loss claims."
    },
    {
      question: "Can I get compensation for experimental vision treatments?",
      answer: "Experimental treatments may be compensable if medically reasonable and potentially beneficial. Clinical trials offering hope justify inclusion in damage calculations. Stem cell therapy, gene therapy, and artificial vision devices show promise for some conditions. Travel costs for specialized treatment centers are recoverable. Unproven treatments require medical expert support establishing reasonableness. Insurance companies resist experimental treatment costs requiring strong advocacy. We consult cutting-edge specialists determining which treatments merit inclusion. Settlement planning should account for future technological advances potentially benefiting your specific condition. Don't accept settlements that preclude pursuing promising future treatments."
    },
    {
      question: "What evidence helps prove vision loss impacts daily life?",
      answer: "Daily impact evidence includes mobility difficulties, reading limitations, driving restrictions, work accommodations, recreational activity loss, and independence reduction. Video documentation showing daily challenges strengthens claims beyond medical records alone. Family testimony about care needs and lifestyle changes provides powerful evidence. Employer statements about work limitations and accommodation needs prove vocational impact. Before and after photographs showing independence differences help juries understand losses. Keep detailed journals documenting vision-related difficulties. Occupational therapy evaluations identify specific functional limitations. We present comprehensive evidence showing how vision loss affects every aspect of your life warranting maximum compensation."
    },
    {
      question: "How do I find the best eye specialists for my injury?",
      answer: "Seek treatment at university medical centers or specialized eye institutes with trauma expertise. Retinal specialists handle retinal detachment and macular injuries. Corneal specialists treat corneal damage and perform transplants. Neuro-ophthalmologists address optic nerve and brain-related vision problems. Oculoplastic surgeons repair eyelid and orbital injuries. Don't rely on general ophthalmologists for complex trauma. Get second opinions for surgical decisions. We maintain relationships with leading specialists and can facilitate referrals. Proper specialist treatment improves outcomes and strengthens legal claims. Medical records from recognized experts carry more weight in settlement negotiations and trials."
    },
    {
      question: "What if I lost vision in a hit-and-run accident?",
      answer: "Hit-and-run vision loss cases can still recover compensation through uninsured motorist coverage, crime victim compensation, and sometimes identifying the responsible driver through investigation. File police reports immediately and cooperate with investigation. Uninsured motorist coverage from your auto policy provides compensation regardless of identifying the driver. Crime victim compensation programs offer limited benefits for innocent victims. We employ investigators using surveillance footage, witness interviews, and physical evidence to identify hit-and-run drivers. Don't assume hit-and-run accidents prevent recovery - multiple compensation sources may be available for your vision loss."
    },
    {
      question: "Can I sue my health insurance for denying eye treatment?",
      answer: "Health insurance bad faith occurs when insurers wrongfully deny medically necessary eye treatments. Emergency eye surgery denials violate patient protection laws. Prior authorization delays for time-sensitive treatments may constitute bad faith. We review denial letters, policy terms, and medical necessity documentation. Independent medical examinations often prove treatment necessity. Insurance companies cannot substitute their judgment for treating physician recommendations without proper justification. Bad faith lawsuits seek coverage plus damages for worsened medical outcomes. Document all denied treatments, appeals, and resulting medical consequences. Prompt legal action may compel coverage approval for ongoing treatments."
    },
    {
      question: "What if my vision loss affects my ability to drive?",
      answer: "Driving restrictions from vision loss severely impact independence and employment, warranting substantial compensation. Total blindness permanently eliminates driving. Peripheral vision loss, night blindness, or double vision may restrict driving to certain conditions. DMV vision testing determines license restrictions or revocations. Lost transportation independence affects employment options, medical appointments, and social activities. Family members may need to provide transportation creating additional impacts. We calculate transportation costs, lost earning capacity from driving restrictions, and independence loss. Adaptive equipment like telescopic lenses may restore limited driving ability. Compensation should address all transportation-related impacts from your specific vision limitations."
    }
  ];

  return (
    <div className="min-h-screen bg-background vision-loss-page">
      <SEO 
        title="California Vision Loss & Eye Injury Lawyer | Blindness Attorney | Trembach Law"
        description="California vision loss attorney. Former defense lawyer fighting for eye injury victims. Blindness, partial vision loss, workplace injuries. Free consultation. No fees unless we win. Call (818) 123-4567"
        keywords="vision loss lawyer California, eye injury attorney, blindness compensation, partial vision loss settlement, workplace eye injury, car accident vision loss, traumatic brain injury blindness, California eye injury law, vision impairment damages"
        canonical="/practice-areas/vision-loss"
      />

      <GoBack fallbackPath="/practice-areas" />

      {/* Hero Section - 600px height to match Mesothelioma */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-section"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white text-center">
              California Vision Loss Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
            >
              <span className="text-white">START MY FREE CASE EVALUATION</span>
            </Button>
          </div>
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
                    {tab.label}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Vision Loss Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has suffered vision loss or eye injury in California, you're facing life-altering challenges that demand experienced legal representation. Eye injuries causing partial or complete vision loss dramatically impact employment, independence, and quality of life, requiring comprehensive compensation that addresses both immediate needs and long-term care.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  At Trembach Law Firm, we understand the devastating impact of vision loss and the complex medical and legal issues involved. With our former defense attorney experience, we know how insurance companies attempt to minimize these catastrophic injuries and we're prepared to fight aggressively for maximum compensation while you focus on adaptation and recovery.
                </p>

                <div className="mb-6">
                  <img 
                    src={diagnosisImage} 
                    alt="Vision loss diagnosis and medical evaluation process" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                </div>

                <Collapsible 
                  open={expandedSections.overview} 
                  onOpenChange={() => toggleExpanded('overview')}
                >
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between p-0 text-red-600 hover:text-red-700 mb-4"
                    >
                      <span className="text-lg font-semibold">
                        Show More About Our California Vision Loss Practice
                      </span>
                      {expandedSections.overview ? 
                        <ChevronUp className="h-5 w-5" /> : 
                        <ChevronDown className="h-5 w-5" />
                      }
                    </Button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="space-y-4">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h3>Comprehensive California Vision Loss Representation</h3>
                      <p>
                        Vision loss cases in California involve complex medical, legal, and vocational factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of liability to working with medical experts who can clearly explain how your injury occurred and its long-term impact on your life.
                      </p>
                      
                      <p>We handle all types of vision loss cases including:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Total blindness from traumatic injuries</li>
                        <li>Partial vision loss and legal blindness</li>
                        <li>Workplace eye injuries and chemical exposures</li>
                        <li>Car accident vision loss and airbag injuries</li>
                        <li>Medical malpractice causing vision impairment</li>
                        <li>Product liability for defective eye protection</li>
                        <li>Traumatic brain injury affecting vision</li>
                        <li>Chemical burns and toxic exposures</li>
                      </ul>
                      
                      <p>Our team works closely with leading vision specialists throughout California to understand the full scope of your injury, prognosis, and treatment needs. This comprehensive approach ensures we pursue every dollar of compensation you deserve.</p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Quick Contact Form */}
            <section className="content-section mb-12">
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-center text-red-600 flex items-center justify-center">
                    <Eye className="w-5 h-5 mr-2" />
                    Free Vision Loss Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        placeholder="Your Name *" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                      <Input 
                        type="tel" 
                        placeholder="Phone Number *" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required 
                      />
                    </div>
                    <Input 
                      type="email" 
                      placeholder="Email Address *" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required 
                    />
                    <Select value={formData.visionLossType} onValueChange={(value) => setFormData({...formData, visionLossType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Type of Vision Loss *" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg z-50">
                        <SelectItem value="total-blindness">Total Blindness</SelectItem>
                        <SelectItem value="partial-vision-loss">Partial Vision Loss</SelectItem>
                        <SelectItem value="one-eye-blindness">One Eye Blindness</SelectItem>
                        <SelectItem value="peripheral-vision-loss">Peripheral Vision Loss</SelectItem>
                        <SelectItem value="night-blindness">Night Blindness</SelectItem>
                        <SelectItem value="traumatic-optic-neuropathy">Traumatic Optic Neuropathy</SelectItem>
                        <SelectItem value="cortical-blindness">Cortical/Cerebral Blindness</SelectItem>
                        <SelectItem value="double-vision">Double Vision (Diplopia)</SelectItem>
                        <SelectItem value="other">Other Vision Impairment</SelectItem>
                      </SelectContent>
                    </Select>
                    <textarea 
                      className="w-full p-3 border rounded-md resize-none"
                      rows={3} 
                      placeholder="Brief description of your vision injury"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg"
                    >
                      Get Free Evaluation →
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* What to Do Section */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Vision Loss or Eye Injury</h2>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-bold text-red-800">Emergency:</p>
                    <p className="text-red-700">If you're experiencing sudden vision loss, eye pain, or have suffered eye trauma, seek immediate medical attention. Call 911 or go to the nearest emergency room. Document everything for your legal claim.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                      <div>
                        <h3 className="font-semibold text-green-800">Seek Immediate Medical Care</h3>
                        <p className="text-sm text-green-700">Visit an ophthalmologist or emergency room immediately. Even minor eye injuries can cause permanent damage without proper treatment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                      <div>
                        <h3 className="font-semibold text-green-800">Document Everything</h3>
                        <p className="text-sm text-green-700">Take photos of visible injuries, accident scenes, and dangerous conditions. Keep all medical records and receipts.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                      <div>
                        <h3 className="font-semibold text-green-800">Report the Incident</h3>
                        <p className="text-sm text-green-700">File reports with police, employers, or property owners. California law requires timely reporting for insurance claims.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                      <div>
                        <h3 className="font-semibold text-red-800">Preserve Evidence</h3>
                        <p className="text-sm text-red-700">Keep damaged safety equipment, contaminated products, or defective items. Don't wash clothes with chemical residue.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
                      <div>
                        <h3 className="font-semibold text-red-800">Avoid Insurance Tactics</h3>
                        <p className="text-sm text-red-700">Don't give recorded statements or sign anything from insurance companies. They minimize vision loss claims.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
                      <div>
                        <h3 className="font-semibold text-red-800">Contact an Attorney</h3>
                        <p className="text-sm text-red-700">California's two-year statute of limitations requires prompt action. Our former defense experience maximizes your compensation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Vision Loss */}
            <section id="vision-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Vision Loss We Handle</h2>
              
              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Total Blindness (No Light Perception)</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Complete loss of vision in one or both eyes represents the most severe form of eye injury, fundamentally altering every aspect of life. Total blindness means inability to perceive light, requiring comprehensive lifestyle adaptations, mobility training, and assistive technology. California law recognizes total blindness as catastrophic injury warranting maximum compensation.</p>
                    <p className="mb-4">Victims face immediate challenges including loss of independence, inability to drive, career changes, and need for ongoing assistance. Long-term impacts include increased risk of falls, social isolation, depression, and reduced life expectancy.</p>
                    <p>Our attorneys work with ophthalmologists, vocational experts, and life care planners documenting the full impact of blindness. We've secured settlements exceeding $1 million for total blindness cases, ensuring financial security for devastating vision loss.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Legal Blindness (20/200 Vision or Worse)</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Legal blindness occurs when vision cannot be corrected beyond 20/200 in the better eye or when visual field is restricted to 20 degrees or less. While some residual vision remains, legal blindness severely limits daily activities and employment opportunities.</p>
                    <p className="mb-4">Functionally, legally blind individuals cannot drive, struggle with reading even large print, have difficulty recognizing faces, and face significant employment restrictions. Many careers become impossible including driving, piloting, surgery, law enforcement, and detail-oriented work.</p>
                    <p>Compensation addresses vocational rehabilitation, magnification devices, screen readers, mobility training, and lifetime income loss. We document how legal blindness affects each client's specific circumstances.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Partial Vision Loss & Visual Field Defects</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Partial vision loss encompasses various impairments including reduced visual acuity, scotomas (blind spots), hemianopia (loss of half visual field), and quadrantanopia (loss of quarter field). These conditions significantly impact daily functioning despite preserving some vision.</p>
                    <p className="mb-4">Peripheral vision loss affects mobility, driving ability, and spatial awareness. Central vision loss impairs reading, facial recognition, and detail work. Blind spots create dangerous gaps in visual field.</p>
                    <p>California courts recognize partial vision loss impacts beyond medical diagnosis. We prove how specific deficits affect your occupation, hobbies, and independence.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Monocular Vision (One Eye Blindness)</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Loss of vision in one eye eliminates depth perception and reduces peripheral vision by approximately 25%. While the brain adapts over time, monocular vision creates permanent limitations affecting driving, sports, and occupations requiring precise depth judgment.</p>
                    <p className="mb-4">Immediate impacts include difficulty judging distances, problems with stairs and curbs, increased accident risk, and difficulty with tasks requiring hand-eye coordination. Long-term effects include increased fatigue from visual compensation.</p>
                    <p>Compensation addresses immediate medical costs, prosthetic eyes if needed, occupational changes, and increased vulnerability of remaining eye.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Traumatic Optic Neuropathy</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Damage to the optic nerve from trauma can cause immediate or progressive vision loss. The optic nerve cannot regenerate, making injuries permanent. Traumatic optic neuropathy often results from head trauma, with vision loss developing hours or days after injury.</p>
                    <p className="mb-4">Symptoms include decreased visual acuity, color vision deficits, visual field defects, and afferent pupillary defects. Progressive deterioration may continue weeks after initial trauma.</p>
                    <p>Legal claims focus on delayed diagnosis, inadequate initial treatment, and failure to monitor for vision changes after head trauma.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Cortical/Cerebral Blindness from TBI</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Brain injuries affecting the occipital lobe or visual pathways can cause blindness despite intact eyes. Cortical blindness presents unique challenges as eyes appear normal but cannot process visual information.</p>
                    <p className="mb-4">Symptoms vary from complete blindness to visual agnosia (inability to recognize objects), simultanagnosia (seeing only one object at a time), or blindsight (unconscious visual processing).</p>
                    <p>These complex cases require neurologists, neuro-ophthalmologists, and neuropsychologists explaining the injury mechanism.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Double Vision (Diplopia)</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Diplopia occurs when eyes cannot align properly, creating overlapping images. Causes include cranial nerve damage, orbital fractures, or brain injuries affecting eye movement control. Constant double vision causes severe headaches, nausea, difficulty reading, and inability to drive or work.</p>
                    <p className="mb-4">Treatment may include prism glasses, eye patches, botulinum toxin injections, or surgery. Many cases require multiple interventions with variable success.</p>
                    <p>Compensation covers extensive medical treatment, specialized eyewear, vision therapy, and occupational impacts.</p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Common Causes */}
            <section id="causes" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common Causes of Vision Loss in California</h2>
              
              <div className="mb-6">
                <img 
                  src={exposureSitesImage} 
                  alt="California high-risk areas for vision loss accidents" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Car, Truck & Motorcycle Accidents</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Vehicle accidents remain the leading cause of traumatic vision loss in California. High-impact collisions cause direct eye trauma from airbags, flying glass, dashboard impacts, and facial fractures. Traumatic brain injuries from crashes frequently damage visual processing centers causing cortical blindness.</p>
                    <p className="mb-4">Airbag deployments, while lifesaving, can cause severe eye injuries including retinal detachment, lens dislocation, corneal abrasions, and orbital fractures. Side-impact collisions often result in glass penetration injuries.</p>
                    <p>California's pure comparative negligence allows recovery even when partially at fault. We investigate distracted driving, speeding, DUI, and vehicle defects maximizing compensation.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Workplace & Industrial Accidents</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">California workplaces see thousands of eye injuries annually despite safety regulations. Construction sites, manufacturing facilities, and laboratories pose highest risks. Flying particles, chemical splashes, welding flash, and equipment malfunctions cause preventable vision loss when employers prioritize profits over safety.</p>
                    <p className="mb-4">Common workplace hazards include nail guns, grinders, saws, chemicals, lasers, and ultraviolet radiation. OSHA requires appropriate eye protection, safety training, and hazard controls.</p>
                    <p>Employer violations create liability beyond workers' compensation limits through third-party claims against contractors, manufacturers, and property owners.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Medical Malpractice & Surgical Errors</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Medical malpractice causes preventable vision loss through delayed diagnosis, surgical errors, and inadequate treatment. Emergency physicians missing orbital fractures or optic nerve damage face liability. Ophthalmologists performing substandard procedures or failing to obtain proper informed consent create malpractice claims.</p>
                    <p className="mb-4">Common malpractice includes delayed glaucoma diagnosis, retinal detachment mismanagement, LASIK complications, cataract surgery errors, and failure to recognize vision-threatening conditions.</p>
                    <p>We work with medical experts establishing standard of care breaches and proving how timely, competent treatment would have prevented vision loss.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Chemical Exposures & Burns</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Chemical burns create severe eye injuries requiring immediate irrigation and specialized treatment. Alkaline chemicals like drain cleaners cause deeper penetration and worse outcomes than acids. Workplace chemical exposures violate OSHA standards when proper equipment isn't provided.</p>
                    <p className="mb-4">Product liability applies to inadequate warnings or defective containers. Time is critical - delayed treatment worsens chemical damage. Even brief exposures can cause permanent corneal scarring and blindness.</p>
                    <p>We investigate safety protocols, training adequacy, and equipment provision. Chemical manufacturers face strict liability for inadequate warnings about eye contact dangers.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Defective Products & Equipment</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Product liability claims hold manufacturers strictly liable for defective designs, manufacturing flaws, or inadequate warnings. Eye injuries from chemical products, tools, toys, or medical devices create strong liability regardless of user fault.</p>
                    <p className="mb-4">Defective safety glasses, contaminated eye drops, or faulty laser equipment manufacturers cannot escape responsibility through disclaimers. We investigate design alternatives, testing standards, and regulatory compliance.</p>
                    <p>Corporate defendants often have substantial insurance providing significant recovery potential for product-related vision loss.</p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between p-4 h-auto">
                      <span className="text-left font-semibold">Premises Liability & Property Accidents</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="bg-slate-50 p-6 rounded-b-lg">
                    <p className="mb-4">Property owners must maintain safe conditions preventing foreseeable eye injuries. Inadequate lighting causing falls, defective doors or windows with sharp edges, and improperly maintained swimming pool chemicals create liability for resulting vision loss.</p>
                    <p className="mb-4">Retail stores, restaurants, and entertainment venues owe customers highest duty of care. Construction sites, apartment complexes, and commercial properties must address known hazards that could cause eye injuries.</p>
                    <p>We prove property owners knew or should have known about dangerous conditions and failed to remedy them or provide adequate warnings.</p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Compensation Statistics */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Vision Loss Victims</h2>
              
              <div className="mb-6">
                <img 
                  src={compensationImage} 
                  alt="Vision loss compensation and financial recovery" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Vision loss victims may be entitled to substantial compensation for their injuries, disabilities, and other losses. Our experienced team ensures no damages are overlooked in calculating your claim.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$50K+</div>
                  <div className="text-sm text-green-700">Minor Vision Loss</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">$200K+</div>
                  <div className="text-sm text-blue-700">Partial Blindness</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">$500K+</div>
                  <div className="text-sm text-orange-700">One Eye Loss</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-red-600">$2M+</div>
                  <div className="text-sm text-red-700">Total Blindness</div>
                </div>
              </div>

              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between p-0 text-red-600 hover:text-red-700 mb-4"
                  >
                    <span className="text-lg font-semibold">
                      Show More About Vision Loss Compensation Types
                    </span>
                    <ChevronDown className="h-5 w-5" />
                  </Button>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-3">Economic Damages</h3>
                    <ul className="list-disc pl-6 mb-4">
                      <li>Emergency medical treatment and hospitalization</li>
                      <li>Ophthalmologist consultations and ongoing care</li>
                      <li>Surgical procedures and follow-up treatments</li>
                      <li>Assistive technology and adaptive equipment</li>
                      <li>Lost wages and reduced earning capacity</li>
                      <li>Vocational rehabilitation and job training</li>
                      <li>Home modifications for accessibility</li>
                      <li>Transportation and mobility costs</li>
                    </ul>
                    
                    <h3 className="font-bold mb-3">Non-Economic Damages</h3>
                    <ul className="list-disc pl-6">
                      <li>Physical pain and suffering</li>
                      <li>Emotional distress and mental anguish</li>
                      <li>Loss of enjoyment of life activities</li>
                      <li>Disfigurement and cosmetic impacts</li>
                      <li>Loss of independence and dignity</li>
                      <li>Impact on personal relationships</li>
                      <li>Fear and anxiety about future</li>
                      <li>Diminished quality of life</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Our Vision Loss Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="Vision loss legal process and case development" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Free Case Evaluation</h3>
                    <p>We review your medical records, accident circumstances, and potential damages to determine case value and viability.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Investigation & Evidence</h3>
                    <p>Our team preserves crucial evidence, interviews witnesses, and works with medical experts to establish liability and document your injuries.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Medical Documentation</h3>
                    <p>We coordinate with ophthalmologists and specialists to thoroughly document your vision loss and future care needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Demand & Negotiation</h3>
                    <p>We present a comprehensive demand package to insurance companies and negotiate aggressively for maximum compensation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Litigation if Necessary</h3>
                    <p>If fair settlement cannot be reached, we're prepared to take your case to trial to secure the compensation you deserve.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* California High-Risk Areas */}
            <section id="california-sites" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California High-Risk Areas for Vision Loss</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Certain areas and industries in California present elevated risks for vision loss accidents due to industrial activities, environmental hazards, and high-traffic conditions.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">Industrial & Manufacturing Zones</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Los Angeles manufacturing district</li>
                      <li>Long Beach port facilities</li>
                      <li>Bay Area refineries and chemical plants</li>
                      <li>Central Valley agricultural processing</li>
                      <li>Inland Empire logistics centers</li>
                      <li>Silicon Valley tech manufacturing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3">High-Traffic Accident Zones</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>I-405 and I-5 corridor intersections</li>
                      <li>San Francisco Bay Bridge approaches</li>
                      <li>Los Angeles downtown interchanges</li>
                      <li>Orange County freeway systems</li>
                      <li>San Diego border crossings</li>
                      <li>Central Valley agricultural routes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Vision Loss Claims</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-slate-200">
                    <CardHeader 
                      className="cursor-pointer hover:bg-slate-50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                        {expandedFaq === index ? 
                          <ChevronUp className="h-5 w-5 text-red-600" /> : 
                          <ChevronDown className="h-5 w-5 text-red-600" />
                        }
                      </div>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="pt-0">
                        <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Exactly matching Mesothelioma sticky structure */}
          <div className="lg:col-span-1" ref={sidebarRef}>
            <div className="sticky top-8 space-y-6">
              
              {/* 3 Ways to Start Your Case - Matches Mesothelioma */}
              <Card className="border-red-200 shadow-lg">
                <CardHeader className="bg-red-50 pb-4">
                  <CardTitle className="text-center text-red-600 text-xl">
                    3 Ways to Start Your Case
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg font-semibold"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="text-white">Call (818) 123-4567</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 h-12 text-lg font-semibold hover:text-red-700"
                    onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    <span className="text-red-600">Free Case Evaluation</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 h-12 text-lg font-semibold hover:text-red-700"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="text-red-600">Email Us</span>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Vision Loss Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/practice-areas/vision-loss/compensation-calculator">
                      <Calculator className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/practice-areas/vision-loss/legal-guidance">
                      <Scale className="w-4 h-4 mr-2" />
                      Legal Guidance
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/practice-areas/vision-loss/medical-guidance">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Medical Resources
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-red-600" />
                      <span className="font-semibold">(818) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-red-600" />
                      <span>info@trembachlawfirm.com</span>
                    </div>
                    <div className="flex items-start">
                      <Building className="w-4 h-4 mr-2 text-red-600 mt-1" />
                      <div>
                        <div>27001 Agoura Road</div>
                        <div>Suite 350</div>
                        <div>Calabasas, CA 91301</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <img 
                      src={sidebarImage} 
                      alt="Vision loss legal consultation" 
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA - Matches Mesothelioma exactly but for Vision Loss */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Don't Wait - Time Limits Apply for California Vision Loss Cases</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed text-white">California law imposes strict deadlines for filing vision loss injury claims. Evidence deteriorates quickly, and insurance companies begin building their defense immediately. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              <span className="text-white">CALL (818) 123-4567</span>
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" asChild>
              <a href="/practice-areas/vision-loss/case-evaluation" className="text-white">
                <span className="text-white">START MY FREE CASE EVALUATION</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionLoss;