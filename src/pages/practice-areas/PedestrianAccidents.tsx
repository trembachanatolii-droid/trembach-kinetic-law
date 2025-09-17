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
  Car,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/pedestrian-accidents-hero-new.jpg';
import sidebarImage from '@/assets/practice-areas/pedestrian-crosswalk-safety.jpg';
import legalConsultationImage from '@/assets/practice-areas/pedestrian-legal-consultation.jpg';
import medicalCareImage from '@/assets/practice-areas/pedestrian-medical-care.jpg';
import accidentSceneImage from '@/assets/practice-areas/pedestrian-accident-scene.jpg';
import parkingLotSafetyImage from '@/assets/practice-areas/pedestrian-parking-lot-safety.jpg';
import schoolZoneSafetyImage from '@/assets/practice-areas/pedestrian-school-zone-safety.jpg';
import residentialSafetyImage from '@/assets/practice-areas/pedestrian-residential-safety.jpg';
import constructionSafetyImage from '@/assets/practice-areas/pedestrian-construction-safety.jpg';
import compensationCalculationImage from '@/assets/practice-areas/pedestrian-compensation-calculation.jpg';
import trafficCamerasImage from '@/assets/practice-areas/pedestrian-traffic-cameras.jpg';
import governmentLiabilityImage from '@/assets/practice-areas/pedestrian-government-liability.jpg';
import publicTransitAreasImage from '@/assets/practice-areas/pedestrian-public-transit-areas.jpg';
import crosswalkAccidentsImage from '@/assets/practice-areas/pedestrian-crosswalk-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const PedestrianAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'california-law', label: 'CALIFORNIA LAW', icon: BookOpen },
    { id: 'accident-types', label: 'ACCIDENT TYPES', icon: Car },
    { id: 'injuries', label: 'INJURIES', icon: Heart },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
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
    // Handle form submission - redirect to case evaluation
    window.location.href = '/pedestrian-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data with 50+ questions from HTML content
  const faqData = [
    {
      question: "What should I do immediately after being hit by a car as a pedestrian?",
      answer: "First, get to safety if possible and call 911 for medical attention and police documentation. Never leave the scene. Take photos of injuries, vehicle damage, and the accident scene. Get the driver's information and witness contacts. Seek medical evaluation even if you feel fine – adrenaline can mask serious injuries like head trauma or internal damage."
    },
    {
      question: "Can I still recover compensation if I was jaywalking when hit?",
      answer: "Yes, California's comparative negligence law allows recovery even if you were partially at fault. Under the Freedom to Walk Act (effective 2023), jaywalking is only illegal if it creates immediate danger. Your compensation is reduced by your fault percentage, but you can still recover. For example, if found 30% at fault, you recover 70% of damages."
    },
    {
      question: "What is the Freedom to Walk Act and how does it affect my case?",
      answer: "Assembly Bill 2147, effective January 1, 2023, prevents police from citing pedestrians for jaywalking unless their actions create immediate collision danger. This doesn't eliminate driver responsibility to exercise due care. Drivers cannot claim immunity for striking pedestrians based on jaywalking alone – they must still avoid collisions when possible."
    },
    {
      question: "Do unmarked crosswalks provide the same legal protection as marked ones?",
      answer: "Yes, unmarked crosswalks exist at every intersection where sidewalks meet, even without painted lines. Vehicle Code 21950 requires drivers to yield to pedestrians in both marked and unmarked crosswalks equally. Insurance companies often exploit confusion about unmarked crosswalks, but you have identical rights regardless of paint presence."
    },
    {
      question: "How long do I have to file a pedestrian accident lawsuit in California?",
      answer: "Two years from the accident date under Code of Civil Procedure 335.1. However, start immediately – evidence disappears, witnesses forget, and surveillance footage gets overwritten. Government claims require filing within six months. Missing these deadlines bars recovery forever, so don't delay seeking legal help."
    },
    {
      question: "What compensation can I recover in a pedestrian accident case?",
      answer: "Economic damages include medical expenses, future medical care, lost wages, reduced earning capacity, and property damage. Non-economic damages cover pain and suffering, emotional distress, loss of enjoyment of life, and disfigurement. California doesn't cap these damages. Punitive damages are possible for egregious conduct like drunk driving or road rage."
    },
    {
      question: "Will my health insurance cover my medical bills after a pedestrian accident?",
      answer: "Yes, but they'll seek reimbursement from your settlement. We negotiate with health insurers to reduce liens, maximizing your net recovery. Use your insurance for immediate treatment while building your case. Medical payments coverage from your auto insurance also applies to pedestrian accidents, providing additional coverage without affecting rates."
    },
    {
      question: "What if the driver who hit me doesn't have insurance?",
      answer: "Your own auto insurance's uninsured motorist (UM) coverage applies even when you're a pedestrian. This coverage is often your best source of compensation. We also investigate other insurance sources like employer liability for working drivers, premises liability for property owners, and umbrella policies providing additional coverage layers."
    },
    {
      question: "How do I prove the driver was at fault in my pedestrian accident?",
      answer: "We gather police reports, witness statements, surveillance footage, phone records proving distraction, accident reconstruction, medical records, and photos. Traffic camera footage is invaluable but must be requested quickly before deletion. Skid marks show driver reaction time. Cell phone records reveal whether drivers were distracted at impact."
    },
    {
      question: "Can I sue if a bicycle or electric scooter hit me instead of a car?",
      answer: "Yes, bicyclists and scooter riders owe duties of care to pedestrians. Homeowner's or renter's insurance often covers these accidents. Delivery riders create particular hazards while rushing. Lime, Bird, and other scooter companies may share liability for equipment defects or inadequate safety warnings. While coverage might be lower, valid claims exist."
    },
    {
      question: "What if I was hit in a parking lot instead of on the street?",
      answer: "Parking lot accidents follow the same liability principles. Property owners might share liability for dangerous conditions like poor lighting, inadequate signage, or blocked sightlines. Drivers backing up have heightened duty to check for pedestrians. Shopping centers, restaurants, and businesses owe duties to maintain reasonably safe premises for customers."
    },
    {
      question: "Do I need a police report for my pedestrian accident claim?",
      answer: "Police reports significantly strengthen claims but aren't absolutely required. Officers document the scene, interview witnesses, note violations, and sometimes determine fault. Reports provide official documentation insurance companies can't easily dismiss. If unavailable, we build cases using witness statements, photos, medical records, and accident reconstruction."
    },
    {
      question: "What if I was hit by a commercial vehicle or delivery truck?",
      answer: "Commercial vehicle accidents often mean higher compensation due to larger insurance policies and corporate liability. Employers are vicariously liable for employees' negligence during work duties. Commercial policies typically provide $1 million or more versus $15,000 minimums for personal vehicles. Delivery pressure causing rushed driving creates additional liability."
    },
    {
      question: "Can elderly pedestrians get additional compensation?",
      answer: "Elderly pedestrians often suffer more severe injuries requiring extended recovery. Slower walking speeds, reduced mobility, and fragile bones increase injury severity. California recognizes elderly victims need longer crossing times and may have impairments. Medicare complications require careful navigation, but age often enhances rather than diminishes claim value."
    },
    {
      question: "What if poor road conditions contributed to my accident?",
      answer: "Government entities can be liable under Government Code 835 for dangerous conditions. Missing crosswalk markings, broken signals, inadequate lighting, dangerous intersection design, and absent sidewalks create liability. You must file a government claim within six months. Combined driver and government negligence increases total recovery potential."
    },
    {
      question: "How much does hiring a pedestrian accident lawyer cost?",
      answer: "We work on contingency fee basis – you pay nothing unless we win. Typically 33.33% for settlements and 40% if trial is necessary. We advance all case costs including medical records, expert witnesses, and investigations. Free consultations let us evaluate your case without obligation. This ensures everyone can afford quality representation."
    },
    {
      question: "Should I accept the insurance company's first settlement offer?",
      answer: "Never accept first offers without legal review. Initial offers are deliberately low, often 10-20% of case value. Companies know unrepresented victims don't understand values and accept inadequate settlements from financial pressure. Our involvement typically increases offers 3-5 times original amounts."
    },
    {
      question: "What if the driver claims I 'came out of nowhere'?",
      answer: "This common defense doesn't eliminate driver liability. Drivers must maintain proper lookout and drive at safe speeds. 'Came out of nowhere' often means inattention. We investigate sight lines, lighting, and distractions. Accident reconstruction proves visibility and reaction time. Even unexpected pedestrian entry doesn't excuse preventable impacts."
    },
    {
      question: "Can I still recover if I wasn't in a crosswalk?",
      answer: "Yes, being outside crosswalks doesn't eliminate recovery rights. While pedestrians must yield under Vehicle Code 21954, drivers still must exercise due care. Your compensation gets reduced by fault percentage, but recovery remains possible. Absent or distant crosswalks strengthen your position – pedestrians aren't required to walk unreasonable distances."
    },
    {
      question: "What evidence is most important in pedestrian accident cases?",
      answer: "Photos of scene, injuries, and vehicles provide crucial visual evidence. Surveillance footage shows exactly what happened. Witness information supports your version. Police reports document official findings. Medical records prove injury extent. Phone records reveal distraction. Vehicle damage indicates impact speed and angle."
    },
    {
      question: "What if I had headphones on when hit?",
      answer: "Wearing headphones doesn't eliminate compensation rights, though it might increase fault percentage slightly. California doesn't prohibit pedestrian headphone use. Drivers can't assume pedestrians will hear them and must watch for all pedestrians. Many accidents wouldn't be prevented by hearing anyway – like cars turning into crosswalks."
    },
    {
      question: "What if the driver was having a medical emergency?",
      answer: "Sudden medical emergencies may provide defense if truly unforeseeable, but most cases still result in liability. Drivers with known conditions like epilepsy or diabetes must manage conditions safely. Previous symptoms or doctor warnings eliminate the defense. Driver insurance still covers damages even with medical emergencies."
    },
    {
      question: "How do red light/crosswalk cameras help my case?",
      answer: "Traffic cameras provide invaluable objective evidence. They capture signal timing, vehicle speed, and pedestrian location. This contradicts driver lies about signals or actions. Footage must be requested quickly before automatic deletion – usually within 30-60 days. We immediately send preservation letters securing footage."
    },
    {
      question: "Can I recover lost wages if I'm self-employed?",
      answer: "Yes, though proving losses requires more documentation. Tax returns, profit/loss statements, bank records, and contracts demonstrate earnings. We show how injuries prevented work – canceled contracts, lost clients, inability to fulfill orders. Forensic accountants help establish complex business losses."
    },
    {
      question: "What if I'm an undocumented immigrant hit by a car?",
      answer: "Immigration status doesn't affect your compensation rights in California. You have identical rights as any victim. Insurance companies cannot ask about status. California law protects undocumented immigrants' access to civil justice. You can recover medical expenses, lost wages, and pain and suffering. We protect client confidentiality."
    },
    {
      question: "How do I pay medical bills while waiting for settlement?",
      answer: "Several options exist: health insurance (with reimbursement from settlement), medical payments coverage from your auto insurance, hospital payment plans, medical liens allowing deferred payment until settlement, and letters of protection guaranteeing payment from recovery. Don't delay treatment due to payment concerns."
    },
    {
      question: "What if the accident happened at night or in poor weather?",
      answer: "Nighttime accounts for 75% of pedestrian fatalities due to reduced visibility, but drivers must adjust speed for conditions. Poor lighting doesn't excuse drivers – they must drive within headlight range. Weather conditions require extra caution. Dark clothing doesn't eliminate driver responsibility. We investigate street lighting adequacy and municipal liability."
    },
    {
      question: "Can children or teenagers recover differently in pedestrian accidents?",
      answer: "Children receive special protections under California law. They're held to different behavioral standards than adults. School zones have enhanced penalties for striking children. The statute of limitations extends to two years from their 18th birthday. Child injury cases often result in higher compensation due to lifetime impact and earning capacity losses."
    },
    {
      question: "What if multiple vehicles were involved in my pedestrian accident?",
      answer: "Multi-vehicle accidents create complex liability scenarios with multiple insurance sources. Each driver's negligence is evaluated separately. Joint and several liability allows collecting full damages from any defendant able to pay. This often increases total available coverage and improves recovery prospects through multiple insurance policies."
    },
    {
      question: "How do construction zones affect pedestrian accident liability?",
      answer: "Construction zones require enhanced safety measures for pedestrians. Contractors must maintain safe pedestrian pathways or provide protected alternatives. When pedestrians are forced into traffic without adequate protection, liability extends to construction companies and property owners. We pursue all responsible parties maximizing coverage."
    },
    {
      question: "What types of expert witnesses help pedestrian accident cases?",
      answer: "Accident reconstruction experts analyze impact dynamics and fault. Medical experts explain injuries and future care needs. Economic experts calculate lost earnings and life care costs. Traffic engineers evaluate road design and signal timing. Biomechanical experts explain injury mechanisms. Surveillance experts authenticate and interpret video evidence."
    },
    {
      question: "Can I sue if hit while walking my dog?",
      answer: "Yes, walking dogs is normal pedestrian activity deserving protection. Leash laws don't eliminate driver responsibility. If your dog contributed to the accident by running into traffic, your fault percentage might increase, but you can still recover. Pet injury claims are separate and recoverable as property damage."
    },
    {
      question: "What if I was intoxicated when hit as a pedestrian?",
      answer: "Intoxication doesn't bar recovery but increases fault percentage. California's comparative negligence allows recovery at any fault level below 100%. Drivers still must exercise due care for impaired pedestrians. Intoxication level, visibility, and driver opportunity to avoid impact all factor into fault allocation. Valid claims exist even with significant impairment."
    },
    {
      question: "Do ride-share accidents (Uber/Lyft) have different rules?",
      answer: "Ride-share vehicles carry additional insurance coverage when active on platforms. Uber and Lyft provide $1 million liability coverage during rides and while waiting for passengers. Driver's personal insurance might deny coverage during commercial use. We determine platform status at accident time and pursue appropriate coverage sources."
    },
    {
      question: "Can family members recover for watching a pedestrian accident?",
      answer: "California allows bystander emotional distress claims under limited circumstances. Family members witnessing accidents involving close relatives may recover for their own emotional trauma. The witness must be closely related, present at the scene, and suffer severe emotional distress. These claims supplement the victim's direct injury recovery."
    },
    {
      question: "What if surveillance video contradicts the police report?",
      answer: "Video evidence trumps police reports when conflicts exist. Officers don't always witness accidents and rely on sometimes inaccurate driver statements. We analyze all footage frame by frame, often revealing details missed initially. Videos can completely change fault determinations and dramatically increase case values."
    },
    {
      question: "How do school zone accidents affect liability and damages?",
      answer: "School zones require enhanced driver vigilance with reduced speed limits when children are present. Despite crossing guards and safety measures, children remain vulnerable. Education Code 21373 mandates strict speed enforcement. Violations causing pedestrian injuries face enhanced penalties and strengthen civil liability claims significantly."
    },
    {
      question: "Can I recover for psychological trauma after a pedestrian accident?",
      answer: "Yes, psychological injuries including PTSD, anxiety, depression, and phobias are compensable damages. Many pedestrian accident survivors develop fear of crossing streets or being near traffic. Mental health treatment costs are recoverable, and pain and suffering awards often include psychological impact alongside physical injuries."
    },
    {
      question: "What role do traffic signal timing and crosswalk design play?",
      answer: "Inadequate crossing times, poorly timed signals, and dangerous intersection design create government liability. Pedestrians deserve sufficient time to cross safely. Signal timing studies determine if adequate crossing time was provided. Intersection design defects forcing unsafe pedestrian movements create municipal liability under Government Code 835."
    },
    {
      question: "How do hit-and-run pedestrian accidents work legally?",
      answer: "Hit-and-run adds criminal charges but doesn't eliminate civil recovery options. Your uninsured motorist coverage applies to unknown drivers. We work with police to identify fleeing drivers through vehicle debris, witness descriptions, and surveillance footage. Reward programs sometimes help locate hit-and-run drivers. Even unidentified driver cases can proceed under UM coverage."
    },
    {
      question: "Can pedestrian accidents result in wrongful death claims?",
      answer: "Yes, family members can file wrongful death claims when pedestrian accidents prove fatal. Surviving spouses, children, and parents may recover for lost financial support, companionship, and funeral expenses. Wrongful death claims have two-year statute of limitations from death date. These cases often result in significant compensation reflecting lifetime earnings loss."
    },
    {
      question: "What if the pedestrian accident happened on private property?",
      answer: "Private property accidents follow similar liability rules with additional premises liability considerations. Property owners must maintain reasonably safe conditions for visitors. Parking lots, shopping centers, and apartment complexes owe duties to pedestrians. Poor lighting, inadequate signage, and dangerous vehicle/pedestrian interactions create property owner liability alongside driver negligence."
    },
    {
      question: "How do medical liens and health insurance subrogation affect my recovery?",
      answer: "Health insurers and medical providers often claim reimbursement from settlements through liens and subrogation. We negotiate with lienholders to reduce claims, maximizing your net recovery. California's made whole doctrine protects injured parties from excessive lien reductions. ERISA plans have different rules requiring careful navigation to optimize results."
    },
    {
      question: "What makes pedestrian accident cases different from other personal injury claims?",
      answer: "Pedestrian cases involve unique vulnerability factors – complete lack of protection against vehicle impact creates catastrophic injury patterns. Insurance companies show systematic anti-pedestrian bias, automatically investigating jaywalking and questioning visibility. Physics of vehicle-pedestrian impacts creates devastating injury patterns requiring specialized medical and legal expertise."
    },
    {
      question: "Can I change lawyers if unhappy with my current representation?",
      answer: "Yes, you have the right to change attorneys at any time. New counsel can take over your case even if already filed. You might owe some fees to the prior attorney for work performed, but this shouldn't prevent changing representation. We handle transitions smoothly, obtaining files and continuing aggressive advocacy without delay."
    },
    {
      question: "What if the driver claims they had a green light?",
      answer: "Green lights don't give drivers right to strike pedestrians in crosswalks. Even with green lights, drivers must yield to pedestrians already in crosswalks. Signal timing analysis often reveals pedestrians had walk signals. Traffic cameras capture signal status at impact time. Witness testimony and intersection timing studies help establish actual signal conditions."
    },
    {
      question: "How do electric vehicle accidents differ for pedestrian cases?",
      answer: "Electric vehicles' silent operation creates unique hazards for pedestrians who rely on sound cues. Manufacturers have added warning sounds, but gaps remain. Driver responsibility to watch for pedestrians doesn't change with vehicle type. If silent operation contributed to your accident, vehicle manufacturer liability might exist alongside driver negligence."
    },
    {
      question: "What if I was using my phone when hit as a pedestrian?",
      answer: "Cell phone use doesn't eliminate compensation rights but might increase fault percentage. Unlike drivers, pedestrians aren't prohibited from phone use while walking. Distraction arguments work both ways – drivers using phones face greater liability. Your phone use might be 10-20% fault in crosswalk accidents, still allowing substantial recovery."
    },
    {
      question: "Can tourists or visitors to California file pedestrian accident claims?",
      answer: "Yes, California courts have jurisdiction over accidents occurring within the state regardless of residence. Out-of-state victims have identical rights to compensation. Your home state insurance might provide coverage. We handle all California legal requirements while accommodating your location needs for depositions and meetings."
    },
    {
      question: "What if the pedestrian accident was caused by a vehicle malfunction?",
      answer: "Vehicle defects create product liability claims against manufacturers alongside driver negligence claims. Brake failures, steering problems, acceleration issues, and other defects can cause pedestrian accidents. We investigate vehicle maintenance records and recall histories. Manufacturer liability often provides additional insurance coverage beyond driver policies."
    },
    {
      question: "How do crosswalk countdown timers affect pedestrian accident liability?",
      answer: "Countdown timers help pedestrians judge crossing time but don't eliminate driver duties. Drivers must yield to pedestrians in crosswalks regardless of timer status. Timers often provide insufficient time for elderly or disabled pedestrians. If inadequate timing contributed to your accident, municipal liability might exist for dangerous signal timing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
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
              California Pedestrian Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Former Defense Attorney Fighting for You</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/pedestrian-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Pedestrian Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Every 88 minutes, a pedestrian dies in a traffic accident somewhere in America, with California leading the nation in pedestrian fatalities. In 2023 alone, our state recorded 1,158 pedestrian deaths – a crisis demanding immediate legal action when negligent drivers strike innocent victims. Walking should be safe, but California's streets have become increasingly dangerous for pedestrians, with over 1,100 deaths annually representing 26% of all traffic fatalities despite being only 12% of the nation's population.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we leverage our former defense attorney background to expose how insurance companies systematically blame pedestrians for accidents caused by driver negligence. The vulnerability of pedestrians cannot be overstated—when thousands of pounds of steel strike an unprotected human body, the results are devastating. Unlike vehicle occupants protected by airbags and seatbelts, pedestrians absorb direct impact forces causing traumatic brain injuries, spinal damage, crushing injuries, and massive internal trauma.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About California's Pedestrian Safety Crisis
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Former Defense Insight
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our former defense attorney experience reveals exactly how insurance companies approach pedestrian claims with predetermined bias, investigating jaywalking regardless of actual crossing location.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      Statewide Representation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We represent pedestrian accident victims throughout all 58 California counties, with deep knowledge of local traffic patterns, intersection designs, and municipal liability issues.</p>
                  </CardContent>
                </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why California Leads in Pedestrian Deaths</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-red-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Car-Centric Infrastructure</h4>
                          <p className="text-sm text-muted-foreground">Wide streets designed for vehicle speed, not pedestrian safety, create deadly conditions.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Car className="w-5 h-5 text-red-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Distracted Driving Epidemic</h4>
                          <p className="text-sm text-muted-foreground">Cell phone use causes 10% of pedestrian fatalities as drivers fail to see pedestrians until impact.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-red-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Nighttime Dangers</h4>
                          <p className="text-sm text-muted-foreground">75% of pedestrian fatalities occur after dark when visibility is reduced.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Scale className="w-5 h-5 text-red-600 mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Speed Kills</h4>
                          <p className="text-sm text-muted-foreground">At 30 mph, pedestrian survival rate drops to 55%. At 40 mph, only 15% survive impact.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>The Insurance Company Playbook</h3>
                    <p>
                      Our former defense attorney experience reveals exactly how insurance companies approach pedestrian accident claims with predetermined bias. Adjusters receive training to investigate jaywalking regardless of actual crossing location, question pedestrian visibility despite broad daylight, argue comparative fault for legal crosswalk use, and minimize injuries as "expected" from choosing to walk.
                    </p>
                    
                    <p>
                      We know their playbook because we helped write it, and now we use that insider knowledge to protect pedestrian rights and secure maximum compensation. Every pedestrian has the right to safe passage, and we ensure that right is defended vigorously against systematic insurance company bias.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Pedestrian Accident Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your pedestrian accident case better. We'll review your case at no cost and explain your legal options.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Primary Injury Type</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="head-brain-injury">Head/Brain Injury</SelectItem>
                          <SelectItem value="spinal-cord-injury">Spinal Cord Injury</SelectItem>
                          <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                          <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                          <SelectItem value="cuts-bruises">Cuts and Bruises</SelectItem>
                          <SelectItem value="other-injury">Other Injury</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Start My Free Pedestrian Accident Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* California Law Section */}
            <section id="california-law" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Pedestrian Rights and Laws</h2>
              
              <div className="mb-6">
                <img src={legalConsultationImage} alt="California pedestrian law consultation" className="w-full h-64 object-cover rounded-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-6">
                  California Vehicle Code provides comprehensive protections for pedestrians, establishing clear rights and driver duties that insurance companies often ignore or misrepresent. Understanding these laws is crucial for establishing liability and defeating insurance company tactics.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                      Vehicle Code 21950
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Drivers must yield in crosswalks</p>
                    <p className="text-sm">• Applies to marked and unmarked crosswalks</p>
                    <p className="text-sm">• Establishes negligence per se when violated</p>
                    <p className="text-sm">• Requires reducing speed for pedestrian safety</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Freedom to Walk Act
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Effective January 1, 2023</p>
                    <p className="text-sm">• Limits jaywalking enforcement</p>
                    <p className="text-sm">• Only illegal if creating immediate danger</p>
                    <p className="text-sm">• Doesn't eliminate driver responsibility</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Due Care Doctrine
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Drivers must exercise due care at all times</p>
                    <p className="text-sm">• Duty to avoid striking pedestrians</p>
                    <p className="text-sm">• Sound horn when necessary for safety</p>
                    <p className="text-sm">• Maintain proper lookout for pedestrians</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.californiaLaw} onOpenChange={() => toggleSection('californiaLaw')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About California Pedestrian Laws
                    {expandedSections.californiaLaw ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Understanding California Vehicle Code 21950</h3>
                    <p>
                      California Vehicle Code 21950 forms the foundation of pedestrian rights in our state. This critical law mandates that drivers must yield the right-of-way to pedestrians crossing within any marked or unmarked crosswalk. The law specifically states that drivers approaching pedestrians must reduce speed or take other necessary actions to safeguard pedestrian safety. Violation of this code establishes negligence per se – automatic proof of fault that strengthens your injury claim.
                    </p>
                    
                    <p>
                      Many drivers don't realize that unmarked crosswalks exist at every intersection where sidewalks meet, even without painted lines. This means pedestrians have protected crossing rights at thousands of locations throughout California cities. Drivers who fail to yield at these unmarked crosswalks face the same liability as those who ignore marked crossings.
                    </p>
                    
                    <h3>The Freedom to Walk Act: Revolutionary Changes</h3>
                    <p>
                      Assembly Bill 2147, known as the Freedom to Walk Act, fundamentally changed California's approach to jaywalking enforcement starting January 1, 2023. This groundbreaking legislation prevents police from citing pedestrians for jaywalking unless their actions create an immediate danger of collision. The law recognizes that criminalizing safe street crossing disproportionately affected communities of color and low-income residents who often lack adequate pedestrian infrastructure.
                    </p>
                    
                    <p>
                      However, this law doesn't give pedestrians carte blanche to cross anywhere without consequence. More importantly for injury victims, the Freedom to Walk Act doesn't eliminate driver responsibility to exercise due care for pedestrian safety. Drivers cannot simply run down pedestrians and claim immunity because someone was jaywalking.
                    </p>
                    
                    <h3>Pure Comparative Negligence: Your Right to Compensation</h3>
                    <p>
                      California's pure comparative negligence system ensures that pedestrian accident victims can recover compensation even when partially at fault. Unlike states with modified comparative negligence that bar recovery at 50% or 51% fault, California allows recovery at any fault level below 100%. This means a pedestrian found 70% at fault for jaywalking can still recover 30% of their damages – potentially hundreds of thousands of dollars in catastrophic injury cases.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Accident Types Section */}
            <section id="accident-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of California Pedestrian Accidents</h2>
              
              <div className="mb-6">
                <img src={accidentSceneImage} alt="California pedestrian accident scene investigation" className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-lg leading-relaxed mb-6">
                  California pedestrian accidents occur in various contexts, each presenting unique liability and safety challenges. Understanding these different scenarios helps establish fault patterns and insurance company liability tactics.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <img src={crosswalkAccidentsImage} alt="Crosswalk pedestrian accidents" className="w-full h-32 object-cover rounded-md" />
                    </div>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      Crosswalk Accidents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Drivers failing to yield right-of-way to pedestrians lawfully using marked and unmarked crosswalks.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Right-turn on red failures</li>
                      <li>• Left-turn yield violations</li>
                      <li>• Through-traffic strikes</li>
                      <li>• Signal violation crashes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <img src={parkingLotSafetyImage} alt="Parking lot pedestrian safety" className="w-full h-32 object-cover rounded-md" />
                    </div>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Car className="w-5 h-5 mr-2 text-red-600" />
                      Parking Lot Incidents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Shopping centers, businesses, and residential parking areas where pedestrians mix with vehicles.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Backing vehicle accidents</li>
                      <li>• Drive-through conflicts</li>
                      <li>• Loading zone incidents</li>
                      <li>• Distracted driver strikes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <img src={schoolZoneSafetyImage} alt="School zone pedestrian safety" className="w-full h-32 object-cover rounded-md" />
                    </div>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Building className="w-5 h-5 mr-2 text-red-600" />
                      School Zone Accidents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Children walking to and from school face heightened risks requiring enhanced driver care.</p>
                    <ul className="text-sm space-y-1">
                      <li>• School crossing guard areas</li>
                      <li>• Bus stop accidents</li>
                      <li>• Speeding in school zones</li>
                      <li>• Drop-off/pick-up conflicts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <img src={residentialSafetyImage} alt="Residential area pedestrian safety" className="w-full h-32 object-cover rounded-md" />
                    </div>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      Residential Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Neighborhood streets where pedestrians reasonably expect safe passage near their homes.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Driveway backing incidents</li>
                      <li>• Street crossing accidents</li>
                      <li>• Sidewalk encroachment</li>
                      <li>• Speeding through neighborhoods</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <img src={publicTransitAreasImage} alt="Public transit areas pedestrian safety" className="w-full h-32 object-cover rounded-md" />
                    </div>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Building className="w-5 h-5 mr-2 text-red-600" />
                      Public Transit Areas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Bus stops, train stations, and transit centers with high pedestrian volumes.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Bus stop boarding accidents</li>
                      <li>• Transit platform incidents</li>
                      <li>• Station access collisions</li>
                      <li>• Transit vehicle strikes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mb-3">
                      <img src={constructionSafetyImage} alt="Construction zone pedestrian safety" className="w-full h-32 object-cover rounded-md" />
                    </div>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Construction Zones
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-3">Work zones that alter normal pedestrian paths and create dangerous conditions.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Inadequate pedestrian detours</li>
                      <li>• Missing safety barriers</li>
                      <li>• Poor signage and warnings</li>
                      <li>• Construction vehicle accidents</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.accidentTypes} onOpenChange={() => toggleSection('accidentTypes')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Common Causes of Pedestrian Accidents
                    {expandedSections.accidentTypes ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Distracted Driving: A Leading Cause</h3>
                    <p>
                      Cell phone use causes 10% of pedestrian fatalities. Drivers texting, calling, or using apps fail to see pedestrians until impact is unavoidable. California's hands-free law hasn't eliminated this epidemic. We subpoena phone records proving distraction at impact time, establishing clear liability for preventable accidents.
                    </p>
                    
                    <h3>Left Turn Accidents</h3>
                    <p>
                      Drivers turning left focus on oncoming traffic, failing to check crosswalks for pedestrians. These accidents account for 20% of pedestrian injuries at intersections. The driver's divided attention and vehicle acceleration during turns create deadly combinations that we aggressively prosecute.
                    </p>
                    
                    <h3>Right Turn on Red Violations</h3>
                    <p>
                      California permits right turns on red after stopping, but impatient drivers roll through while watching for traffic from the left, never checking right for pedestrians. These preventable accidents often occur in marked crosswalks with walk signals activated.
                    </p>
                    
                    <h3>Nighttime Dangers: 75% of Fatal Accidents</h3>
                    <p>
                      Three-quarters of pedestrian fatalities occur after dark, creating unique legal and safety challenges. Reduced visibility combines with driver fatigue, impairment, and excessive speed to create deadly conditions. California law requires drivers to use extra caution at night, adjusting speed for visibility conditions.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Injuries Section */}
            <section id="injuries" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Catastrophic Pedestrian Injuries</h2>
              
              <div className="mb-6">
                <img src={medicalCareImage} alt="Pedestrian injury medical care" className="w-full h-64 object-cover rounded-lg mb-4" />
                
                <p className="text-lg leading-relaxed mb-6">
                  Pedestrian accidents create devastating injury patterns reflecting the physics of unprotected human bodies struck by massive vehicles. When a 150-pound person collides with a 3,000-pound vehicle traveling even 25 mph, the physics are devastating. We work with top medical experts to fully document all injuries and their lifelong implications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Common Severe Injuries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Traumatic brain injuries (60% of cases)</li>
                      <li>• Spinal cord damage and paralysis (15% of serious cases)</li>
                      <li>• Multiple bone fractures</li>
                      <li>• Internal organ damage and hemorrhaging</li>
                      <li>• Crushing injuries to limbs</li>
                      <li>• Severe road rash and abrasions</li>
                      <li>• Amputations</li>
                      <li>• Facial injuries and disfigurement</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Clock className="w-5 h-5 mr-2 text-red-600" />
                      Long-Term Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Permanent disability care needs</li>
                      <li>• Cognitive and memory impairment</li>
                      <li>• Chronic mobility limitations</li>
                      <li>• Ongoing pain management requirements</li>
                      <li>• Multiple reconstructive surgeries</li>
                      <li>• Home and vehicle modifications</li>
                      <li>• Lost independence and dignity</li>
                      <li>• Family caregiver burden and stress</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Pedestrian Injury Patterns and Recovery
                    {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Primary, Secondary, and Tertiary Injuries</h3>
                    <p>
                      The initial impact typically causes primary injuries – fractures, internal organ damage, and head trauma. Secondary injuries occur when victims are thrown onto pavement or into other objects, causing additional fractures, head injuries from pavement strikes, and severe abrasions. Tertiary injuries result from being dragged or run over by vehicles, creating crushing injuries and additional trauma.
                    </p>
                    
                    <h3>Traumatic Brain Injuries: The Hidden Epidemic</h3>
                    <p>
                      Traumatic brain injuries affect over 60% of pedestrian accident victims, ranging from concussions that resolve in weeks to severe cognitive impairment requiring lifetime care. Even mild TBIs can cause lasting problems with memory, concentration, mood regulation, and executive function. The brain's vulnerability to both direct impact and rapid acceleration/deceleration forces makes head injuries nearly inevitable in pedestrian accidents.
                    </p>
                    
                    <h3>Spinal Cord Injuries and Paralysis</h3>
                    <p>
                      Spinal cord injuries causing paralysis occur in 15% of serious pedestrian accidents. The sudden twisting and compression forces during vehicle impact can sever or severely damage the spinal cord. Complete spinal cord injuries result in total loss of function below the injury site, while incomplete injuries may allow some recovery with intensive rehabilitation.
                    </p>
                    
                    <h3>Speed and Injury Severity Correlation</h3>
                    <p>
                      At 20 mph, pedestrian survival rate is 95%. At 30 mph, it drops to 55%. At 40 mph, only 15% survive. These statistics demonstrate why speed enforcement and infrastructure design are crucial for pedestrian safety, and why speeding drivers face enhanced liability in injury cases.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Pedestrian Accident Compensation</h2>
              
              <div className="mb-6">
                <img src={compensationCalculationImage} alt="Pedestrian accident compensation calculation" className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-lg leading-relaxed mb-6">
                  Pedestrian accident victims deserve full compensation for all damages, including economic losses, pain and suffering, and future care needs. California's compensation system allows recovery for all damages caused by negligent drivers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                      Economic Damages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Medical expenses (current and future)</p>
                    <p className="text-sm">• Lost wages and benefits</p>
                    <p className="text-sm">• Reduced earning capacity</p>
                    <p className="text-sm">• Life care planning costs</p>
                    <p className="text-sm">• Property damage</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Non-Economic Damages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Pain and suffering</p>
                    <p className="text-sm">• Emotional distress and PTSD</p>
                    <p className="text-sm">• Loss of enjoyment of life</p>
                    <p className="text-sm">• Disfigurement and scarring</p>
                    <p className="text-sm">• Loss of consortium (spousal)</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Punitive Damages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Drunk driving incidents</p>
                    <p className="text-sm">• Road rage and intentional acts</p>
                    <p className="text-sm">• Street racing accidents</p>
                    <p className="text-sm">• Clear and convincing evidence required</p>
                    <p className="text-sm">• Can exceed compensatory damages</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.compensation} onOpenChange={() => toggleSection('compensation')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Maximizing Your Pedestrian Accident Compensation
                    {expandedSections.compensation ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Insurance Coverage Challenges</h3>
                    <p>
                      California's minimum insurance requirements ($15,000 per person, $30,000 per accident) are woefully inadequate for serious pedestrian injuries. Many drivers carry only minimum coverage or drive completely uninsured despite legal requirements. Your own auto insurance's uninsured/underinsured motorist (UM/UIM) coverage becomes critical for adequate compensation.
                    </p>
                    
                    <h3>Multiple Insurance Sources</h3>
                    <p>
                      We identify all available insurance sources including the driver's policy, your UM/UIM coverage, employer liability for drivers working during accidents, and umbrella policies providing additional coverage layers. Commercial vehicles often carry $1 million or more in coverage versus minimum personal policies.
                    </p>
                    
                    <h3>Government Entity Liability</h3>
                    <p>
                      Dangerous road conditions contributing to pedestrian accidents create government liability under California Government Code 835. Cities and counties must maintain reasonably safe conditions for pedestrian travel. Missing crosswalk markings, malfunctioning signals, inadequate lighting, and dangerous intersection design all create potential liability.
                    </p>
                    
                    <div className="my-6">
                      <img src={governmentLiabilityImage} alt="California government building and municipal liability" className="w-full h-48 object-cover rounded-lg" />
                    </div>
                    
                    <h3>Health Insurance Liens and Subrogation</h3>
                    <p>
                      Health insurers and medical providers often claim reimbursement from settlements through liens and subrogation. We negotiate with lienholders to reduce claims, maximizing your net recovery. California's made whole doctrine protects injured parties from excessive lien reductions.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="mb-6">
                <img src={trafficCamerasImage} alt="California traffic camera system for pedestrian accident evidence" className="w-full h-64 object-cover rounded-lg mb-4" />
                <p className="text-lg leading-relaxed mb-6">
                  Get answers to the most common questions about pedestrian accident claims in California. Our experienced attorneys address legal concerns, insurance issues, and compensation matters.
                </p>
              </div>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-red-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-red-600" />
                        )}
                      </CardTitle>
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Pedestrian Accident Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-red-600" />
                      Case Evaluation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Get a detailed analysis of your pedestrian accident case and legal options.</p>
                    <Button variant="outline" size="sm" onClick={() => window.location.href = '/pedestrian-case-evaluation'}>
                      Start Evaluation →
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-red-600" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Learn about medical care and documentation after pedestrian injuries.</p>
                    <Button variant="outline" size="sm" onClick={() => window.location.href = '/pedestrian-medical-guidance'}>
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">Estimate potential compensation for your pedestrian accident injuries.</p>
                    <Button variant="outline" size="sm" onClick={() => window.location.href = '/pedestrian-compensation-calculator'}>
                      Calculate Now →
                    </Button>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 mr-2 text-red-600" />
                      Emergency Help
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">24/7 emergency assistance for recent pedestrian accidents.</p>
                    <Button variant="outline" size="sm">
                      Call (818) 123-4567 →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait - Time Limits Apply */}
            <section className="content-section mb-12">
              <Card className="glass-card bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Clock className="w-6 h-6 mr-3" />
                    Don't Wait - Time Limits Apply for California Pedestrian Accidents
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-red-600 mb-2">2 Years</div>
                      <div className="text-sm text-muted-foreground">Statute of Limitations for Personal Injury Claims</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-red-600 mb-2">6 Months</div>
                      <div className="text-sm text-muted-foreground">Government Claim Filing Deadline</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-red-600 mb-2">30 Days</div>
                      <div className="text-sm text-muted-foreground">Typical Surveillance Footage Retention</div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Critical Evidence Disappears Quickly:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                      <li>• Surveillance footage gets automatically deleted (usually 30-60 days)</li>
                      <li>• Witness memories fade and contact information gets lost</li>
                      <li>• Physical evidence from the scene gets cleared away</li>
                      <li>• Vehicle damage gets repaired, eliminating crucial evidence</li>
                      <li>• Driver phone records become harder to obtain over time</li>
                    </ul>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      Starting your case immediately preserves critical evidence and strengthens your negotiating position. 
                      Insurance companies know that delayed cases are weaker cases – don't give them that advantage.
                    </p>
                    
                    <Button 
                      className="w-full md:w-auto bg-red-600 hover:bg-red-700"
                      onClick={() => window.location.href = '/pedestrian-case-evaluation'}
                    >
                      Start My Free Case Evaluation Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Card */}
              <Card className="glass-card bg-gradient-to-b from-red-50 to-red-100 border-red-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-red-600">Need Help Now?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/pedestrian-case-evaluation'}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Free Case Review
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                    <p className="font-semibold">Free Consultation</p>
                    <p>No Fees Unless We Win</p>
                    <p>Available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">California Pedestrian Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-semibold">1,158 Deaths</div>
                      <div className="text-sm text-muted-foreground">Pedestrian fatalities in CA (2023)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-semibold">Every 88 Minutes</div>
                      <div className="text-sm text-muted-foreground">A pedestrian dies nationwide</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-semibold">26% of Deaths</div>
                      <div className="text-sm text-muted-foreground">Traffic fatalities are pedestrians</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-red-600 mr-3" />
                    <div>
                      <div className="font-semibold">75% at Night</div>
                      <div className="text-sm text-muted-foreground">Fatal accidents occur after dark</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sidebar Image */}
              <div className="hidden lg:block">
                <img 
                  src={sidebarImage} 
                  alt="California crosswalk safety" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">Crosswalk Safety</h4>
                  <p className="text-xs text-muted-foreground">
                    Both marked and unmarked crosswalks provide legal protection under California Vehicle Code 21950.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Injured as a Pedestrian in California?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Don't let insurance companies blame you for being struck while lawfully walking. 
            Our experienced pedestrian accident attorneys fight aggressively against anti-pedestrian bias. 
            You have the right to safe passage, and we defend that right vigorously.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-red-600 hover:bg-red-50 border-white text-lg px-8 py-4"
              onClick={() => window.location.href = '/pedestrian-case-evaluation'}
            >
              Get Free Case Review
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PedestrianAccidents;