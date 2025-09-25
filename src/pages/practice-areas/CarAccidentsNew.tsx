import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
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
  Car,
  AlertCircle
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/car-accidents-hero.jpg';
import sceneImage from '@/assets/practice-areas/car-accident-scene.jpg';
import legalConsultationImage from '@/assets/practice-areas/car-accident-legal-consultation.jpg';
import medicalImage from '@/assets/practice-areas/car-accident-medical.jpg';
import compensationImage from '@/assets/practice-areas/car-accident-compensation.jpg';
import trafficSystemImage from '@/assets/practice-areas/california-traffic-system.jpg';
import legalProcessImage from '@/assets/practice-areas/car-accident-legal-process.jpg';
import SEO from '@/components/SEO';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const CarAccidentsNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    injuryType: '',
    accidentType: '',
    atFault: '',
    medicalTreatment: '',
    insuranceClaim: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: AlertCircle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation
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
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours for your free car accident case evaluation.');
  };

  // FAQ Data
  const faqs = [
    {
      category: 'immediate',
      question: 'What should I do immediately after a car accident in California?',
      answer: 'First, ensure everyone\'s safety and call 911 if there are injuries. Move vehicles out of traffic if possible. Exchange information with other drivers including names, contact info, driver\'s license numbers, insurance information, and vehicle details. Take photos of vehicle damage, the accident scene, skid marks, traffic signs, and any injuries. Get contact information from witnesses. Report the accident to the DMV within 10 days if there\'s injury, death, or property damage over $1,000. Seek medical attention even if you feel fine - adrenaline can mask injuries. Contact a car accident attorney before giving statements to insurance companies.'
    },
    {
      category: 'immediate',
      question: 'Should I call the police after a minor car accident?',
      answer: 'Yes, always call police for any accident involving injuries, significant property damage, or if you suspect the other driver is impaired. California requires police reports for accidents with injuries, deaths, or property damage over $1,000. Even for minor accidents, police reports provide official documentation that helps with insurance claims. The other driver might seem cooperative at the scene but later claim you were at fault. A police report protects you from changing stories.'
    },
    {
      category: 'immediate',
      question: 'What information should I collect at the accident scene?',
      answer: 'Collect: names and contact information for all drivers and passengers, driver\'s license numbers, insurance company names and policy numbers, vehicle makes, models, years, and license plates, names and contact information for witnesses, photos of vehicle damage from multiple angles, photos of the accident scene including street signs and traffic signals, notes about weather and road conditions, time and location of accident. Also note if you smell alcohol or observe erratic behavior from other drivers.'
    },
    {
      category: 'immediate',
      question: 'Should I move my car after an accident?',
      answer: 'If the vehicles are drivable and blocking traffic, California law requires you to move them to the side of the road or nearby parking area to avoid additional accidents. However, first take photos of the accident scene showing vehicle positions, skid marks, and damage. If anyone is injured or vehicles can\'t be moved safely, leave them where they are and wait for police. Turn on hazard lights and set up flares or reflectors if available.'
    },
    {
      category: 'immediate',
      question: 'What if the other driver doesn\'t have insurance?',
      answer: 'Unfortunately, about 15% of California drivers are uninsured. Your options include: filing a claim under your uninsured motorist (UM) coverage if you have it, suing the driver personally (though collecting can be difficult), checking if other insurance policies apply (employer\'s policy if driver was working, etc.). California\'s Low Cost Automobile Insurance Program and California Automobile Assigned Risk Plan exist but provide minimal coverage. This is why we recommend all clients carry UM coverage - it protects you when irresponsible drivers don\'t have insurance.'
    },
    {
      category: 'immediate',
      question: 'Should I admit fault at the accident scene?',
      answer: 'Never admit fault at the accident scene, even if you think you might be partially responsible. Accident investigations often reveal factors not immediately apparent, such as mechanical failures, poor road design, or the other driver\'s negligence. California\'s comparative negligence laws mean fault percentages matter significantly for compensation. Let police and insurance investigators determine fault based on evidence. Apologizing or saying "I\'m sorry" can be misinterpreted as admissions of guilt.'
    },
    {
      category: 'legal',
      question: 'How long do I have to file a car accident lawsuit in California?',
      answer: 'California\'s statute of limitations gives you 2 years from the accident date to file a personal injury lawsuit. For property damage claims, you have 3 years. However, if a government entity is involved (city bus, county vehicle, etc.), you must file a claim within 6 months. Don\'t wait - evidence disappears, witnesses forget details, and surveillance footage gets deleted. Starting your claim early strengthens your case significantly.'
    },
    {
      category: 'legal',
      question: 'What if I\'m partially at fault for the accident?',
      answer: 'California follows "pure comparative negligence," meaning you can recover damages even if you\'re 99% at fault - your recovery is just reduced by your fault percentage. For example, if damages total $100,000 and you\'re 40% at fault, you can recover $60,000. This differs from other states that bar recovery if you\'re 50% or more at fault. Insurance companies often try to unfairly increase your fault percentage to reduce what they pay. That\'s why having an experienced attorney to fight these tactics is crucial.'
    },
    {
      category: 'legal',
      question: 'Do I have to go to court for my car accident case?',
      answer: 'About 95% of car accident cases settle without trial. Most resolve through negotiations with insurance companies or mediation. However, being willing and prepared to go to trial often results in better settlement offers. Cases go to trial when there\'s disputed liability, disagreement about injury severity, or insurance companies make unreasonable offers. If trial is necessary, you\'ll typically testify about the accident and your injuries. Your attorney handles all legal arguments and procedures. Trial preparation actually strengthens your negotiating position.'
    },
    {
      category: 'legal',
      question: 'Can I sue if I was a passenger in the accident?',
      answer: 'Yes. Passengers are rarely at fault and can typically recover from one or both drivers\' insurance. You can file claims against the driver of the vehicle you were in, the other vehicle\'s driver, or both depending on fault. This includes Uber/Lyft passengers. Don\'t let friendship prevent you from filing a claim - that\'s why drivers have insurance. Your claim is against their insurance company, not them personally. Passengers often have the strongest cases because they bear no fault for the accident.'
    },
    {
      category: 'legal',
      question: 'What if the accident happened in a construction zone?',
      answer: 'Construction zone accidents often involve multiple liable parties: the at-fault driver, construction companies, government entities, and equipment manufacturers. California has enhanced penalties for accidents in construction zones, but this doesn\'t automatically increase compensation. We investigate whether proper signage was posted, if traffic control measures were adequate, whether construction equipment or materials contributed to the accident, and if workers were following safety protocols. These cases require specialized knowledge of construction safety regulations.'
    },
    {
      category: 'legal',
      question: 'Can I sue for a hit-and-run accident?',
      answer: 'Yes, if the hit-and-run driver is identified. California requires all drivers to stop after accidents - leaving the scene is a crime. If caught, hit-and-run drivers face criminal charges plus civil liability. If the driver isn\'t found, you can file claims under your uninsured motorist coverage and collision coverage. We work with police to locate hit-and-run drivers using surveillance footage, witness accounts, and vehicle debris analysis. Even partial license plates or vehicle descriptions can lead to identification.'
    },
    {
      category: 'insurance',
      question: 'Should I talk to the other driver\'s insurance company?',
      answer: 'No. Never give a recorded statement to the other driver\'s insurance without an attorney. They\'re not on your side - their job is minimizing payouts. They\'ll use tactics like asking confusing questions, getting you to minimize injuries, or admitting partial fault. Anything you say can be used against you. You\'re only required to cooperate with your own insurance company, and even then, having an attorney present protects your interests. Let your attorney handle all insurance communications.'
    },
    {
      category: 'insurance',
      question: 'What are California\'s minimum insurance requirements?',
      answer: 'California requires: $15,000 bodily injury per person, $30,000 bodily injury per accident, $5,000 property damage. These minimums are woefully inadequate for serious accidents. A single emergency room visit can exceed $15,000. We recommend carrying at least 100/300/100 coverage plus uninsured/underinsured motorist coverage. The monthly cost difference is minimal but protection increases dramatically. Many drivers only carry minimum coverage, which is why underinsured motorist (UIM) coverage is essential.'
    },
    {
      category: 'insurance',
      question: 'Will my insurance rates go up if I file a claim?',
      answer: 'If you weren\'t at fault, California law (Proposition 103) prohibits insurance companies from raising your rates for filing a claim. If you were partially at fault, rates may increase depending on your fault percentage and claims history. Rate increases typically last 3-5 years. However, not filing a claim to avoid rate increases often costs more in unpaid medical bills and lost wages. Your insurance is there to protect you - use it. We help minimize fault determinations to protect your rates.'
    },
    {
      category: 'insurance',
      question: 'What is uninsured/underinsured motorist coverage?',
      answer: 'UM/UIM coverage protects you when the at-fault driver has no insurance or insufficient insurance. With 15% of California drivers uninsured and many carrying only minimum coverage, this protection is essential. It covers medical bills, lost wages, and pain and suffering. The coverage follows you - protecting you as a driver, passenger, pedestrian, or cyclist. It\'s relatively inexpensive but provides crucial protection. We strongly recommend carrying UM/UIM coverage equal to your liability limits.'
    },
    {
      category: 'insurance',
      question: 'What if my insurance company denies my claim?',
      answer: 'Insurance companies wrongfully deny valid claims regularly. Common improper denials include claiming you violated policy terms, missed deadlines, or share too much fault. California law requires insurers to act in good faith. Bad faith practices can result in punitive damages beyond your original claim. Don\'t accept denial as final. We review denials, identify improper reasons, appeal decisions, and if necessary, sue for bad faith. Many denials are reversed with proper legal pressure.'
    },
    {
      category: 'insurance',
      question: 'What is medical payments (MedPay) coverage?',
      answer: 'MedPay is optional coverage that pays medical expenses regardless of fault. It typically covers $1,000-$10,000 in medical bills for you and your passengers. MedPay pays immediately without waiting for fault determination, helping with initial medical expenses. It doesn\'t affect other coverage and won\'t increase your rates. MedPay is especially valuable for cyclists and pedestrians since it covers them even when not in a vehicle. The coverage is inexpensive and provides immediate relief for medical costs.'
    },
    {
      category: 'insurance',
      question: 'How do rental car claims work after an accident?',
      answer: 'Rental car coverage depends on your insurance, credit cards, and rental company policies. Your collision coverage typically covers rental cars, but liability limits may differ. Credit cards often provide collision coverage but not liability. Rental company insurance is usually expensive and duplicates existing coverage. If you\'re not at fault, the other driver\'s insurance should pay for a rental while your car is repaired. Always photograph rental car condition before and after use to avoid false damage claims.'
    },
    {
      category: 'compensation',
      question: 'What damages can I recover in a California car accident?',
      answer: 'Economic damages: medical bills (past and future), lost wages, reduced earning capacity, property damage, rental car costs, household services, out-of-pocket expenses. Non-economic damages: pain and suffering, emotional distress, loss of enjoyment of life, scarring/disfigurement, loss of consortium. In rare cases involving drunk driving or extreme recklessness, punitive damages may apply. Future damages require expert testimony about ongoing medical needs, vocational impact, and life care planning. California doesn\'t cap car accident damages except in medical malpractice cases.'
    },
    {
      category: 'compensation',
      question: 'How much is my car accident case worth?',
      answer: 'Case value depends on injury severity, medical expenses, lost income, permanent impairment, impact on daily life, and available insurance coverage. Minor soft tissue injuries might settle for $15,000-$50,000. Injuries requiring surgery often exceed $100,000. Catastrophic injuries can reach millions. Factors increasing value: objective medical findings, consistent treatment, permanent injury, scarring, high medical bills, lost wages, strong liability evidence. Every case is unique. We provide detailed valuations after reviewing medical records and understanding your specific impacts.'
    },
    {
      category: 'compensation',
      question: 'How are pain and suffering damages calculated?',
      answer: 'California uses two methods: the multiplier method (multiplying economic damages by 1.5-5x based on severity) and per diem method (daily rate for suffering multiplied by recovery days). Factors include injury severity, recovery time, permanent effects, impact on daily activities, emotional trauma, and age. Insurance companies use computer programs to lowball these damages. We document pain through medical records, pain journals, witness testimony about lifestyle changes, and expert testimony. Pain and suffering often represents the largest portion of settlements.'
    },
    {
      category: 'compensation',
      question: 'Will I have to pay taxes on my settlement?',
      answer: 'Generally, no. Under federal and California tax law, compensation for physical injuries isn\'t taxable income. This includes medical expenses, pain and suffering, and emotional distress arising from physical injuries. However, punitive damages and interest are taxable. Lost wages replacement may be taxable since regular wages would have been taxed. Properly structuring settlements can minimize tax implications. We work with tax professionals to optimize your settlement structure for maximum after-tax recovery.'
    },
    {
      category: 'compensation',
      question: 'How long does it take to get a settlement?',
      answer: 'Timeline varies significantly. Simple cases with clear liability and minor injuries might settle in 3-6 months. Complex cases with severe injuries often take 1-2 years. Factors affecting timeline: injury severity, treatment duration, liability disputes, insurance company cooperation, court backlog if litigation is needed. We don\'t recommend settling until you\'ve reached maximum medical improvement or doctors can predict future needs. Rushing settlements often leaves money on the table. Once you sign a release, you can\'t seek additional compensation if injuries worsen.'
    },
    {
      category: 'compensation',
      question: 'What if I need money before my case settles?',
      answer: 'Several options exist for immediate financial relief: medical providers may accept liens (payment from settlement), Social Security disability benefits if injuries prevent work, workers\' compensation if the accident was work-related, short-term disability insurance through employers, pre-settlement funding (though interest rates are high). We help connect clients with resources for immediate needs while protecting their long-term settlement. Avoid high-interest lawsuit loans when possible - they reduce your final recovery.'
    },
    {
      category: 'compensation',
      question: 'Can I recover lost wages if I\'m self-employed?',
      answer: 'Yes, but proving lost income is more complex for self-employed individuals. We use tax returns, profit/loss statements, bank records, client contracts, and expert testimony to establish income patterns. Self-employed people often have irregular income requiring averaging over multiple years. We may need vocational experts to assess how injuries affect your ability to run your business. Keep detailed records of missed opportunities, cancelled contracts, and delegated work costs. The key is documenting your normal earning patterns and how the accident disrupted them.'
    },
    {
      category: 'medical',
      question: 'Should I see a doctor even if I feel fine?',
      answer: 'Yes, absolutely. Adrenaline and shock mask pain immediately after accidents. Serious injuries like traumatic brain injuries, internal bleeding, and spinal damage might not show symptoms for days or weeks. Whiplash symptoms often appear 24-72 hours later. Seeing a doctor immediately creates medical documentation linking injuries to the accident - crucial for your claim. Insurance companies argue that delays in treatment mean you weren\'t really injured. Even if you feel minor soreness, get checked. Early treatment prevents minor injuries from becoming major problems.'
    },
    {
      category: 'medical',
      question: 'What are the most common car accident injuries?',
      answer: 'Whiplash and neck injuries (80% of rear-end collisions), concussions and traumatic brain injuries, back injuries including herniated discs, broken bones particularly ribs and extremities, internal injuries to organs, cuts and lacerations, shoulder injuries from seatbelts, knee injuries from dashboard impact, psychological trauma including PTSD, burns from airbags or fire. Even "minor" injuries can cause chronic pain and require extensive treatment. Every injury should be properly documented and treated.'
    },
    {
      category: 'medical',
      question: 'Who pays my medical bills while my case is pending?',
      answer: 'Options include: your health insurance (they\'ll seek reimbursement from settlement), medical payments coverage (MedPay) from your auto insurance, treating on a lien basis where providers wait for payment from settlement, Medicare/Medicaid if eligible. Don\'t skip treatment due to cost concerns - we help arrange treatment even without insurance. Medical providers often accept liens, meaning they wait for payment from your settlement. The at-fault party doesn\'t pay directly until case settlement. Keep all bills and receipts for reimbursement.'
    },
    {
      category: 'medical',
      question: 'Can I choose my own doctor?',
      answer: 'Yes. Unlike workers\' compensation, car accident victims can see any doctor. However, insurance companies give more weight to certain providers and may dispute treatment from chiropractors or alternative medicine providers. We can recommend trusted physicians who understand car accident injuries and provide thorough documentation for your claim. Avoid doctors who advertise heavily for accident victims - insurance companies view them skeptically. Consistent treatment with your regular doctor or referred specialists strengthens your case.'
    },
    {
      category: 'medical',
      question: 'What if my injuries get worse after the settlement?',
      answer: 'Once you sign a settlement release, you typically cannot seek additional compensation for worsening injuries related to the accident. This is why we don\'t recommend settling until reaching "maximum medical improvement" - the point where your condition has stabilized. Some settlements include provisions for future complications, but these are rare. If injuries worsen due to medical malpractice during treatment, you may have a separate claim against the healthcare provider. Always consult with your doctors about potential complications before settling.'
    },
    {
      category: 'medical',
      question: 'How do I prove my injuries were caused by the accident?',
      answer: 'Medical causation requires: immediate medical attention after the accident, consistent symptoms from accident to treatment, medical records documenting injury progression, physician statements linking injuries to accident forces, absence of pre-existing conditions or proper documentation if they exist. We work with medical experts who review accident forces, injury patterns, and treatment records. Gaps in treatment or inconsistent symptoms weaken causation arguments. Pre-existing conditions don\'t bar recovery but may reduce damages based on aggravation versus new injury.'
    },
    {
      category: 'medical',
      question: 'What is maximum medical improvement (MMI)?',
      answer: 'MMI is when your condition has stabilized and further improvement is unlikely with additional treatment. Reaching MMI doesn\'t mean you\'re completely healed - you may have permanent limitations or ongoing pain. MMI is important for settlements because it allows accurate assessment of future medical needs and permanent impairment. We typically don\'t recommend settling before MMI unless financial pressures require it. Your doctors determine MMI timing, which can range from months to years depending on injury severity.'
    },
    {
      category: 'special',
      question: 'What about accidents involving rideshare vehicles (Uber/Lyft)?',
      answer: 'Rideshare accidents involve complex insurance coverage. Uber and Lyft provide different coverage levels depending on driver status: offline (personal insurance only), app on but no passenger (limited company coverage), passenger in vehicle (full company coverage up to $1 million). Passengers are typically covered by company policies. Other drivers may claim against driver\'s personal insurance, company insurance, or both. We navigate these complex coverage scenarios to maximize recovery from all available sources.'
    },
    {
      category: 'special',
      question: 'How do commercial vehicle accidents differ from regular car accidents?',
      answer: 'Commercial vehicle accidents often involve higher insurance coverage, federal safety regulations, company liability beyond the driver, more severe injuries due to vehicle size, complex investigation requirements including logbooks and maintenance records. Commercial drivers must meet higher standards and companies can be liable for negligent hiring, training, or supervision. We investigate company safety records, driver qualifications, vehicle maintenance, and federal regulation compliance. These cases often result in larger settlements due to increased coverage and liability.'
    },
    {
      category: 'special',
      question: 'What about accidents with government vehicles?',
      answer: 'Claims against government entities have strict procedural requirements. In California, you must file a government claim within 6 months (sometimes 1 year for certain claims). Government immunity laws may limit liability in some situations. The claim must be formally denied before filing a lawsuit. We handle all procedural requirements and navigate governmental immunity defenses. Government entities often have substantial insurance coverage, but claims require specialized knowledge of applicable laws and procedures.'
    },
    {
      category: 'special',
      question: 'How do drunk driving accidents affect my case?',
      answer: 'Drunk driving accidents may allow recovery of punitive damages in addition to compensatory damages. The drunk driver faces criminal charges separate from your civil case. Criminal conviction helps prove civil liability, but you can win your civil case even if criminal charges are dropped. Alcohol-related accidents often result in higher settlements due to clear liability and potential punitive damages. We coordinate with prosecutors when beneficial and use all available evidence including breathalyzer results, field sobriety tests, and witness observations.'
    },
    {
      category: 'special',
      question: 'What if the accident involved a defective vehicle or part?',
      answer: 'Product liability claims may exist against vehicle manufacturers, parts manufacturers, or maintenance providers. Common defects include brake failures, tire blowouts, airbag malfunctions, steering problems, and design flaws. These cases require extensive investigation including vehicle inspection, maintenance records, recall notices, and expert testimony. Product liability claims can provide additional compensation sources beyond insurance. We work with automotive experts to identify defects and pursue all responsible parties.'
    },
    {
      category: 'special',
      question: 'How do motorcycle accident cases differ?',
      answer: 'Motorcycle accidents often result in more severe injuries despite similar accident forces. Bias against motorcyclists can affect jury perception, requiring careful case presentation. Motorcycle riders have the same rights as other drivers, despite common misconceptions. Helmet laws affect damages in some states but not liability. We counter anti-motorcycle bias with evidence of safe riding practices, proper licensing, and other driver fault. Motorcycle cases often involve road hazards that wouldn\'t affect cars, expanding potential liability to government entities responsible for road maintenance.'
    },
    {
      category: 'special',
      question: 'What about pedestrian accident cases?',
      answer: 'Pedestrians have right-of-way in most situations, but comparative negligence still applies. Common factors include crosswalk violations, distracted walking, impaired pedestrians, and visibility issues. Driver duties are higher in school zones, residential areas, and around children. We investigate crosswalk signals, lighting conditions, driver behavior, and pedestrian actions. Pedestrian injuries are often severe, involving traumatic brain injuries, broken bones, and internal trauma. Cases may involve multiple parties including vehicle drivers, government entities for road design, and property owners for lighting or visibility issues.'
    },
    {
      category: 'special',
      question: 'How do bicycle accident cases work?',
      answer: 'Cyclists have the same road rights as vehicles but are more vulnerable to injury. Common issues include doorings (car doors opened into cyclist path), right-hook turns, failure to yield, and bike lane violations. Helmet use affects damages in some jurisdictions but not liability. We investigate driver compliance with three-foot passing laws, bicycle infrastructure adequacy, and cyclist visibility. Bicycle accidents often involve serious injuries despite lower speeds. Cases may include claims for specialized bicycle equipment replacement and long-term cycling ability impacts.'
    },
    {
      category: 'process',
      question: 'How much does it cost to hire a car accident attorney?',
      answer: 'We work on contingency - you pay no attorney fees unless we win your case. Our fee is a percentage of the settlement or judgment, typically 33-40% depending on case complexity. You\'re responsible for case costs (filing fees, expert witnesses, medical records), but we advance these costs and recover them from your settlement. If we don\'t win, you owe no attorney fees. This system ensures quality representation regardless of your financial situation and motivates us to maximize your recovery.'
    },
    {
      category: 'process',
      question: 'What should I bring to my initial consultation?',
      answer: 'Bring: police report or case number, insurance information (yours and other party\'s), photos of vehicles, scene, and injuries, medical records and bills, correspondence with insurance companies, witness contact information, your driver\'s license and vehicle registration. Don\'t worry if you don\'t have everything - we can obtain missing documents. The most important thing is seeking legal advice quickly to protect your rights and begin evidence preservation.'
    },
    {
      category: 'process',
      question: 'How often will you update me on my case?',
      answer: 'We provide regular updates through phone calls, emails, and our client portal. You\'ll receive copies of all important documents and correspondence. We update clients when significant developments occur and provide monthly status reports for ongoing cases. You can contact us anytime with questions - communication is crucial for successful representation. We believe informed clients make better decisions and feel more confident throughout the legal process.'
    },
    {
      category: 'process',
      question: 'What if I\'m not satisfied with the settlement offer?',
      answer: 'Settlement decisions are ultimately yours - we provide recommendations but you decide whether to accept offers. If you\'re not satisfied, we can continue negotiations, seek mediation, or file a lawsuit. We never pressure clients to settle and will go to trial if necessary to achieve fair compensation. However, we\'ll explain the risks and benefits of each option, including litigation costs and time requirements. Our goal is maximizing your recovery while considering your individual circumstances and risk tolerance.'
    }
  ];

  const filteredFaqs = faqs;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Car Accident Lawyers | Maximum Compensation for Crash Victims"
        description="Expert car accident attorneys throughout California. Former defense lawyer now fighting for injured drivers. Free consultation for vehicle collision cases."
        canonical="/practice-areas/car-accidents"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Car Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/car-case-evaluation'}
            >
              START MY FREE CASE EVALUATION
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Car Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been injured in a car accident in California, you're facing physical pain, emotional trauma, and mounting financial pressure. Every year, over 250,000 Californians are injured in car accidents - that's one person every two minutes. At Trembach Law Firm, we leverage our former defense attorney insight to expose insurance company tactics and secure maximum compensation for accident victims throughout California.
                </p>
                
                <p className="text-lg leading-relaxed">
                  California's roads present unique challenges from dense urban traffic in Los Angeles and the Bay Area to rural highways in the Central Valley and winding mountain roads in the Sierra Nevada. Our extensive experience with California traffic laws, insurance regulations, and court procedures ensures you have the strongest possible representation.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Car Accident Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Car className="w-5 h-5 mr-2 text-primary" />
                          Accident Investigation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team works with accident reconstruction specialists, traffic engineers, and medical experts to build the strongest possible case for maximum compensation.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California traffic laws, insurance regulations, and court procedures in all 58 counties from Los Angeles to San Francisco.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending insurance companies provides unique insights into their tactics and strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Response</h4>
                          <p className="text-sm text-muted-foreground">We respond to new cases within 24 hours and begin evidence preservation immediately.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your recovery and legal journey.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Car Accident Representation</h3>
                    <p>
                      Car accident cases in California involve complex insurance laws, traffic regulations, and medical factors. Our firm has the resources and expertise to handle every aspect of your case, from immediate accident scene investigation to working with medical experts who can clearly explain how the collision caused your injuries.
                    </p>
                    
                    <p>
                      California's diverse geography creates unique driving hazards. We have experience with accidents caused by:
                    </p>
                    
                    <ul>
                      <li>Dense urban traffic in Los Angeles, San Diego, and Bay Area</li>
                      <li>High-speed freeway collisions on I-5, I-10, and Highway 101</li>
                      <li>Coastal fog accidents along Highway 1 and urban areas</li>
                      <li>Mountain weather conditions in Sierra Nevada and coastal ranges</li>
                      <li>Desert conditions and dust storms in Southern California</li>
                      <li>Construction zones throughout the state's massive infrastructure projects</li>
                    </ul>
                    
                    <p>
                      We investigate every aspect of your accident to ensure maximum compensation. This comprehensive approach often results in higher settlements as we identify all contributing factors and pursue claims through various channels including your own insurance, the at-fault driver's coverage, and additional policies that may apply.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-16">
              <ThreeDVisualEffects className="premium-3d-container">
                <div className="premium-form-container interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Car Accident Consultation</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-700 text-lg leading-relaxed">Confidential evaluation by former defense attorneys now fighting for you</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">First Name *</label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Last Name *</label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Phone Number *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Accident Date *</label>
                        <Select value={formData.accidentDate} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentDate: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select when accident occurred" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="yesterday">Yesterday</SelectItem>
                            <SelectItem value="this-week">This week</SelectItem>
                            <SelectItem value="last-week">Last week</SelectItem>
                            <SelectItem value="this-month">This month</SelectItem>
                            <SelectItem value="1-3-months">1-3 months ago</SelectItem>
                            <SelectItem value="3-6-months">3-6 months ago</SelectItem>
                            <SelectItem value="6-12-months">6-12 months ago</SelectItem>
                            <SelectItem value="over-1-year">Over 1 year ago</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Type of Accident *</label>
                        <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select accident type" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rear-end">Rear-end collision</SelectItem>
                            <SelectItem value="head-on">Head-on collision</SelectItem>
                            <SelectItem value="side-impact">Side-impact (T-bone)</SelectItem>
                            <SelectItem value="rollover">Rollover accident</SelectItem>
                            <SelectItem value="multi-vehicle">Multi-vehicle crash</SelectItem>
                            <SelectItem value="hit-and-run">Hit and run</SelectItem>
                            <SelectItem value="intersection">Intersection accident</SelectItem>
                            <SelectItem value="parking-lot">Parking lot accident</SelectItem>
                            <SelectItem value="freeway">Freeway accident</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Primary Injury Type *</label>
                        <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select injury type" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="whiplash">Whiplash/Neck injury</SelectItem>
                            <SelectItem value="back-injury">Back/Spinal injury</SelectItem>
                            <SelectItem value="broken-bones">Broken bones/Fractures</SelectItem>
                            <SelectItem value="head-injury">Head/Brain injury</SelectItem>
                            <SelectItem value="internal-injuries">Internal injuries</SelectItem>
                            <SelectItem value="cuts-bruises">Cuts and bruises</SelectItem>
                            <SelectItem value="soft-tissue">Soft tissue injuries</SelectItem>
                            <SelectItem value="multiple-injuries">Multiple injuries</SelectItem>
                            <SelectItem value="no-injuries">No apparent injuries</SelectItem>
                            <SelectItem value="other">Other injuries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Medical Treatment *</label>
                        <Select value={formData.medicalTreatment} onValueChange={(value) => setFormData(prev => ({ ...prev, medicalTreatment: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select treatment received" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency room visit</SelectItem>
                            <SelectItem value="hospitalized">Hospitalized</SelectItem>
                            <SelectItem value="doctor-visit">Doctor visit</SelectItem>
                            <SelectItem value="urgent-care">Urgent care center</SelectItem>
                            <SelectItem value="physical-therapy">Physical therapy</SelectItem>
                            <SelectItem value="ongoing-treatment">Ongoing treatment</SelectItem>
                            <SelectItem value="no-treatment">No treatment yet</SelectItem>
                            <SelectItem value="refused-treatment">Refused treatment at scene</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Were You At Fault? *</label>
                        <Select value={formData.atFault} onValueChange={(value) => setFormData(prev => ({ ...prev, atFault: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select fault status" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-at-fault">Not at fault</SelectItem>
                            <SelectItem value="other-driver-fault">Other driver at fault</SelectItem>
                            <SelectItem value="partially-at-fault">Partially at fault</SelectItem>
                            <SelectItem value="unsure">Unsure/Disputed</SelectItem>
                            <SelectItem value="no-police-report">No police report filed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Insurance Claim Status *</label>
                        <Select value={formData.insuranceClaim} onValueChange={(value) => setFormData(prev => ({ ...prev, insuranceClaim: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select claim status" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-filed">Haven't filed a claim</SelectItem>
                            <SelectItem value="filed-pending">Filed - claim pending</SelectItem>
                            <SelectItem value="claim-denied">Claim denied</SelectItem>
                            <SelectItem value="low-settlement">Received low settlement offer</SelectItem>
                            <SelectItem value="dealing-with-adjuster">Dealing with insurance adjuster</SelectItem>
                            <SelectItem value="other-insurance">Other driver's insurance contacted me</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="btn-enhanced w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                      Get My Free Car Accident Case Evaluation
                    </Button>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </section>

            {/* What to Do After Accident */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Car Accident</h2>
              
              <div className="mb-6">
                <img 
                  src={sceneImage} 
                  alt="Car accident scene investigation in California" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Actions at Scene
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Ensure everyone's safety and call 911 if injured</p>
                    <p>• Move vehicles out of traffic if possible</p>
                    <p>• Exchange information with other drivers</p>
                    <p>• Take photos of damage, scene, and injuries</p>
                    <p>• Get witness contact information</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Contact an experienced car accident attorney</p>
                    <p>• Don't give recorded statements to insurance</p>
                    <p>• Seek medical attention even if you feel fine</p>
                    <p>• Report accident to DMV within 10 days</p>
                    <p>• Document everything related to the accident</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.immediateSteps} onOpenChange={() => toggleSection('immediateSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More Detailed Steps
                    {expandedSections.immediateSteps ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Immediate Medical Priority Actions</h3>
                    <p>
                      Even if you feel fine immediately after an accident, seek medical attention. Adrenaline and shock can mask serious injuries, and some conditions like whiplash, concussions, and internal bleeding may not show symptoms for hours or days.
                    </p>
                    
                    <h4>1. Get Immediate Medical Care</h4>
                    <p>
                      If you're seriously injured, go to the emergency room. For less severe injuries, see your doctor or visit an urgent care center within 24 hours. Key reasons for immediate medical care:
                    </p>
                    <ul>
                      <li>Some injuries have delayed symptoms</li>
                      <li>Medical records link injuries to the accident</li>
                      <li>Early treatment prevents complications</li>
                      <li>Insurance companies use treatment delays against you</li>
                    </ul>
                    
                    <h4>2. Document Everything</h4>
                    <p>
                      Keep detailed records from day one:
                    </p>
                    <ul>
                      <li>All medical appointments and treatments</li>
                      <li>Symptoms and pain levels daily</li>
                      <li>How injuries affect your daily activities</li>
                      <li>Time missed from work</li>
                      <li>Expenses related to the accident</li>
                    </ul>
                    
                    <h3>Legal Priority Actions</h3>
                    
                    <h4>1. Contact an Attorney Immediately</h4>
                    <p>
                      California has strict time limits for car accident claims. Evidence disappears quickly - skid marks fade, surveillance footage gets deleted, and witnesses' memories become less reliable. An experienced attorney can:
                    </p>
                    <ul>
                      <li>Preserve crucial evidence immediately</li>
                      <li>Handle insurance communications</li>
                      <li>Investigate the accident thoroughly</li>
                      <li>Protect you from insurance company tactics</li>
                      <li>Ensure you meet all legal deadlines</li>
                    </ul>
                    
                    <h4>2. Gather Important Information</h4>
                    <p>Collect and preserve:</p>
                    <ul>
                      <li>Police report number and how to obtain copy</li>
                      <li>Insurance information for all involved parties</li>
                      <li>Photos from your phone or camera</li>
                      <li>Witness names and contact information</li>
                      <li>Your own insurance policy details</li>
                    </ul>
                    
                    <h4>3. Avoid Common Mistakes</h4>
                    <p>
                      Don't hurt your case by:
                    </p>
                    <ul>
                      <li>Giving recorded statements without an attorney</li>
                      <li>Admitting fault at the scene</li>
                      <li>Accepting quick settlement offers</li>
                      <li>Posting about the accident on social media</li>
                      <li>Delaying medical treatment</li>
                      <li>Talking to the other driver's insurance company</li>
                    </ul>
                    
                    <h3>California-Specific Requirements</h3>
                    <p>
                      California law has specific requirements after car accidents:
                    </p>
                    <ul>
                      <li><strong>DMV Report:</strong> Required within 10 days for accidents involving injury, death, or property damage over $1,000</li>
                      <li><strong>Insurance Requirements:</strong> All drivers must have minimum liability coverage</li>
                      <li><strong>Comparative Negligence:</strong> You can recover damages even if partially at fault</li>
                      <li><strong>Statute of Limitations:</strong> 2 years for injury claims, 3 years for property damage</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Car Accident Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="California legal process for car accident cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps you know what to expect as we pursue maximum compensation for your car accident injuries. California law provides several avenues for recovery, and our experienced team will pursue all applicable options to ensure you receive every dollar you deserve.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Process Details
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Overview of Legal Options</h3>
                    
                    <h4>1. Insurance Claims</h4>
                    <p>
                      Most car accident cases resolve through insurance claims. California requires all drivers to carry minimum liability insurance. We handle negotiations with:
                    </p>
                    <ul>
                      <li>At-fault driver's liability insurance</li>
                      <li>Your own uninsured/underinsured motorist coverage</li>
                      <li>Medical payments coverage</li>
                      <li>Collision coverage for vehicle damage</li>
                    </ul>
                    
                    <h4>2. Personal Injury Lawsuits</h4>
                    <p>
                      If insurance settlements are inadequate, we file lawsuits against at-fault parties. Lawsuits allow us to:
                    </p>
                    <ul>
                      <li>Conduct formal discovery of evidence</li>
                      <li>Take depositions of witnesses and parties</li>
                      <li>Use expert witnesses for complex issues</li>
                      <li>Present your case to a jury if necessary</li>
                    </ul>
                    
                    <h4>3. Uninsured Motorist Claims</h4>
                    <p>
                      California has a high rate of uninsured drivers. UM coverage protects you when at-fault drivers have no insurance or insufficient coverage.
                    </p>
                    
                    <h3>The Investigation Process</h3>
                    
                    <h4>Accident Scene Investigation</h4>
                    <p>
                      Our investigation begins immediately and includes:
                    </p>
                    <ul>
                      <li>Visiting the accident scene</li>
                      <li>Photographing road conditions and sight lines</li>
                      <li>Measuring skid marks and vehicle positions</li>
                      <li>Checking for surveillance cameras</li>
                      <li>Interviewing witnesses</li>
                      <li>Reviewing police reports for accuracy</li>
                    </ul>
                    
                    <h4>Medical Investigation</h4>
                    <p>
                      We work with medical experts to:
                    </p>
                    <ul>
                      <li>Review all medical records and imaging</li>
                      <li>Understand the full extent of your injuries</li>
                      <li>Determine future medical needs</li>
                      <li>Calculate lifetime medical costs</li>
                      <li>Assess permanent impairment and disability</li>
                    </ul>
                    
                    <h4>Economic Investigation</h4>
                    <p>
                      We calculate all economic losses including:
                    </p>
                    <ul>
                      <li>Past and future medical expenses</li>
                      <li>Lost wages and benefits</li>
                      <li>Reduced earning capacity</li>
                      <li>Household services</li>
                      <li>Property damage and replacement costs</li>
                    </ul>
                    
                    <h3>Negotiation and Settlement</h3>
                    
                    <h4>Settlement Demand</h4>
                    <p>
                      After completing our investigation and understanding the full scope of your injuries, we prepare a comprehensive settlement demand that includes:
                    </p>
                    <ul>
                      <li>Detailed accident reconstruction</li>
                      <li>Complete medical documentation</li>
                      <li>Economic loss calculations</li>
                      <li>Pain and suffering evaluation</li>
                      <li>Supporting expert opinions</li>
                    </ul>
                    
                    <h4>Negotiation Strategy</h4>
                    <p>
                      Our former defense attorney experience provides unique insights into insurance company tactics. We counter their strategies with:
                    </p>
                    <ul>
                      <li>Thorough case preparation</li>
                      <li>Strong evidence presentation</li>
                      <li>Expert witness testimony</li>
                      <li>Trial preparation as leverage</li>
                      <li>Strategic timing of negotiations</li>
                    </ul>
                    
                    <h3>Litigation Process</h3>
                    
                    <p>
                      If negotiations fail to produce fair compensation, we're prepared to take your case to trial:
                    </p>
                    
                    <h4>Filing the Lawsuit</h4>
                    <ul>
                      <li>Complaint filed within statute of limitations</li>
                      <li>Proper service on all defendants</li>
                      <li>Initial case management conferences</li>
                    </ul>
                    
                    <h4>Discovery Phase</h4>
                    <ul>
                      <li>Document production requests</li>
                      <li>Depositions of parties and witnesses</li>
                      <li>Expert witness designations</li>
                      <li>Independent medical examinations</li>
                    </ul>
                    
                    <h4>Trial Preparation</h4>
                    <ul>
                      <li>Witness preparation</li>
                      <li>Exhibit organization</li>
                      <li>Jury selection strategy</li>
                      <li>Opening and closing arguments</li>
                    </ul>
                    
                    <h3>Timeline Expectations</h3>
                    
                    <p>
                      Case timelines vary based on several factors:
                    </p>
                    
                    <h4>Simple Cases (3-6 months):</h4>
                    <ul>
                      <li>Clear liability</li>
                      <li>Minor to moderate injuries</li>
                      <li>Cooperative insurance companies</li>
                      <li>No disputed medical treatment</li>
                    </ul>
                    
                    <h4>Complex Cases (1-2+ years):</h4>
                    <ul>
                      <li>Disputed liability</li>
                      <li>Severe or permanent injuries</li>
                      <li>Multiple parties involved</li>
                      <li>Litigation required</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      Important Legal Consideration
                    </h3>
                    <p>
                      While focusing on your medical recovery is the priority, it's crucial to contact a car accident attorney quickly after your accident. Evidence preservation and early investigation significantly strengthen your case, and California's statute of limitations gives you only 2 years to file a lawsuit.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Additional Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Case Evaluation Form
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get a detailed evaluation of your car accident case with our comprehensive assessment form.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/car-case-evaluation">Complete Evaluation</Link>
                  </Button>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                    Medical Guidance
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Understand your injuries and treatment options with our comprehensive medical guide.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/car-medical-guidance">Medical Resources</Link>
                  </Button>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <Card className="p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-center">Get Your Free Case Evaluation</h3>
                <p className="text-muted-foreground text-center mb-6">
                  Former defense attorney now fighting for accident victims. Free consultation available 24/7.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link to="/car-case-evaluation">Get Free Evaluation</Link>
                  </Button>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <a href="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Former Defense Attorney</h4>
                      <p className="text-xs text-muted-foreground">Inside knowledge of insurance tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">24/7 Availability</h4>
                      <p className="text-xs text-muted-foreground">Immediate response to new cases</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-xs text-muted-foreground">You pay nothing unless we win</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Car Accident Claims
          </h2>
          <p className="text-xl mb-8">
            California law gives you only two years from the accident date to file your claim. 
            Evidence disappears quickly - contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/car-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-red-600 border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarAccidentsNew;