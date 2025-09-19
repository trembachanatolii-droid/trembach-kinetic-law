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
  Activity,
  Settings,
  AlertCircle,
  Clipboard,
  FileX,
  Zap
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/medical-devices-hero.jpg';
import sidebarImage from '@/assets/practice-areas/medical-devices-sidebar.jpg';
import deviceTypesImage from '@/assets/practice-areas/medical-device-types.jpg';
import fdaProcessImage from '@/assets/practice-areas/medical-device-fda-process.jpg';
import legalProcessImage from '@/assets/practice-areas/medical-device-legal-process.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MedicalDevices: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    injuryDate: '',
    deviceType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'device-steps', label: 'WHAT TO DO AFTER DEVICE INJURY', icon: AlertTriangle },
    { id: 'device-types', label: 'DEVICE TYPES', icon: Activity },
    { id: 'fda-process', label: 'FDA PROCESS', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Settings },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
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
    window.location.href = '/medical-devices-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Device Injury Lawyer California | Defective Medical Device Attorney | Trembach Law Firm"
        description="Former defense attorney fighting for California medical device injury victims. Hip implants, hernia mesh, pacemakers. FDA 510(k) failures. Free consultation. No fees unless we win."
        canonicalUrl="https://www.trembachlawfirm.com/medical-devices"
      />

      {/* Go Back Component */}
      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Medical Device Injury Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Former Defense Attorney Advantage</span>
            </div>
            
            <p className="text-xl mb-6">
              When medical devices meant to heal cause harm, we fight for justice. Our former defense attorney knows how manufacturers operate and how to hold them accountable.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/medical-devices-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Medical Device Injuries in California</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Medical devices are supposed to improve lives and save patients from suffering. When these devices fail, the consequences can be devastating - requiring additional surgeries, causing permanent disabilities, or even death. California law provides strong protections for victims of defective medical devices, allowing recovery under multiple legal theories including strict product liability, negligence, and breach of warranty.
                </p>
                
                <p className="text-lg leading-relaxed">
                  The medical device industry generates over $200 billion annually in the United States, with California representing the largest market. Yet despite FDA oversight, thousands of dangerous devices reach patients each year. In 2024 alone, the FDA issued recalls affecting over 100 million devices. Behind each recall are real people suffering real injuries that could have been prevented if manufacturers had prioritized safety over profits.
                </p>
              </div>

              {/* Critical FDA 510(k) Warning Box */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-lg">
                <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2" />
                  Critical: The FDA's Flawed 510(k) Process
                </h3>
                <p className="text-red-800 leading-relaxed">
                  Most medical devices reach the market through the FDA's 510(k) process, which doesn't require clinical testing. Manufacturers only need to show their device is "substantially equivalent" to an existing device - even if that device was later recalled for causing injuries. This dangerous loophole has allowed countless defective devices to harm patients. Studies show devices approved through 510(k) are 11.5 times more likely to be recalled than those requiring full testing. Our attorneys understand this broken system and use it to strengthen your case against manufacturers who prioritized profits over patient safety.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Medical Device Injuries
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>The Scope of Medical Device Injuries</h3>
                    <p>
                      Medical device injuries affect patients across all demographics and medical specialties. From cardiac devices keeping hearts beating to orthopedic implants enabling mobility, when these devices fail, they rob patients of the very benefits they were promised. Studies indicate that approximately 1 in 10 medical devices will experience some form of failure during their expected lifetime, yet manufacturers often conceal these failure rates from patients and doctors.
                    </p>
                    
                    <p>
                      California hospitals perform over 500,000 device implantation procedures annually. Each represents a patient trusting that rigorous testing and quality control ensure their safety. Unfortunately, the reality is far different. The medical device industry operates with less oversight than the pharmaceutical industry, despite devices often posing greater risks. Unlike drugs that can be discontinued, a defective implanted device may require dangerous revision surgery to remove or replace.
                    </p>
                    
                    <h3>Your Rights Under California Law</h3>
                    <p>
                      California's product liability laws are among the strongest in the nation for protecting medical device injury victims. Under strict liability doctrine, you don't need to prove the manufacturer was negligent - only that the device was defective and caused your injuries. This levels the playing field against billion-dollar corporations with armies of lawyers.
                    </p>
                    
                    <p>
                      The state's consumer protection laws also provide additional remedies. California's Unfair Competition Law and False Advertising Law allow recovery when manufacturers make misleading claims about device safety or effectiveness. These laws can support claims for both economic and non-economic damages, ensuring comprehensive compensation for all losses suffered.
                    </p>
                    
                    <p>
                      Time limits apply to medical device claims in California. Generally, you have two years from discovering your injury to file a lawsuit. However, the discovery rule can extend this deadline if you couldn't reasonably have known the device caused your problems. Some cases involve latent injuries that don't manifest for years after implantation. Our attorneys carefully analyze each case to ensure claims are filed within all applicable deadlines.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Medical Device Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide information about your medical device injury to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Date of Injury/Diagnosis</label>
                      <Input
                        type="date"
                        value={formData.injuryDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, injuryDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Device Type</label>
                      <Select value={formData.deviceType} onValueChange={(value) => setFormData(prev => ({ ...prev, deviceType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select device type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hip-implant">Hip Implant</SelectItem>
                          <SelectItem value="knee-implant">Knee Implant</SelectItem>
                          <SelectItem value="hernia-mesh">Hernia Mesh</SelectItem>
                          <SelectItem value="transvaginal-mesh">Transvaginal Mesh</SelectItem>
                          <SelectItem value="ivc-filter">IVC Filter</SelectItem>
                          <SelectItem value="pacemaker">Pacemaker/Defibrillator</SelectItem>
                          <SelectItem value="breast-implant">Breast Implant</SelectItem>
                          <SelectItem value="spinal-implant">Spinal Implant</SelectItem>
                          <SelectItem value="insulin-pump">Insulin Pump</SelectItem>
                          <SelectItem value="cpap-machine">CPAP Machine</SelectItem>
                          <SelectItem value="other">Other Device</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Device Injury */}
            <section id="device-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After a Medical Device Injury</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Seek immediate medical attention for symptoms</p>
                    <p>• Get second opinion from device specialist</p>
                    <p>• Document all symptoms and treatments</p>
                    <p>• Keep all medical records and device documentation</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FileX className="w-5 h-5 mr-2 text-red-600" />
                      Preserve Evidence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Keep the device if removed from body</p>
                    <p>• Take photos of injuries and complications</p>
                    <p>• Save all packaging and documentation</p>
                    <p>• Report to FDA's MedWatch system</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Clipboard className="w-5 h-5 mr-2 text-red-600" />
                      Document Everything
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Record device model and serial numbers</p>
                    <p>• Keep implantation and revision surgery records</p>
                    <p>• Document pain levels and limitations</p>
                    <p>• Track medical expenses and lost wages</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Legal Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Contact experienced medical device attorney</p>
                    <p>• Understand your rights and time limits</p>
                    <p>• Don't sign documents from manufacturers</p>
                    <p>• Protect evidence and preserve claims</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Device Types Section */}
            <section id="device-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Medical Devices We Handle</h2>
              
              <div className="mb-8">
                <img 
                  src={deviceTypesImage} 
                  alt="Various defective medical devices including hip implants, hernia mesh, pacemakers, and other recalled devices" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-6">
                  Our attorneys have extensive experience with all types of defective medical device cases throughout California:
                </p>
                
                <h3>Hip Replacement Failures</h3>
                <p>
                  Metal-on-metal hip implants have caused catastrophic failures requiring revision surgery and causing permanent damage. These devices shed metal particles into surrounding tissue and bloodstream, causing metallosis - a condition where metal debris destroys bone and soft tissue. Symptoms include severe pain, implant loosening, difficulty walking, and systemic toxicity from elevated metal levels.
                </p>
                
                <p>
                  California sees over 50,000 hip replacement surgeries annually. When these devices fail prematurely - often within 5 years instead of the promised 15-20 years - patients face revision surgery more complex and risky than the original procedure. Recovery takes longer, complications increase, and some patients never regain their mobility.
                </p>
              </div>

              <Collapsible open={expandedSections.deviceTypes} onOpenChange={() => toggleSection('deviceTypes')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Specific Device Types
                    {expandedSections.deviceTypes ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Knee Replacement Complications</h3>
                    <p>
                      Defective knee implants cause debilitating pain, instability, and loss of range of motion. Components can loosen, break, or cause allergic reactions to materials. Some designs have inherent flaws causing premature wear or improper joint mechanics. Revision surgery for failed knee replacements is particularly challenging, often requiring bone grafts and leaving patients with permanent limitations.
                    </p>
                    
                    <h3>Hernia Mesh Injuries</h3>
                    <p>
                      Surgical mesh used to repair hernias has caused devastating complications including chronic pain, infection, organ perforation, and mesh migration. The polypropylene material can shrink, harden, and erode into surrounding organs. Many patients require multiple revision surgeries to remove mesh that has become embedded in tissue. Despite FDA warnings and thousands of adverse event reports, manufacturers continue marketing these dangerous products.
                    </p>
                    
                    <h3>Transvaginal Mesh Disasters</h3>
                    <p>
                      Transvaginal mesh for pelvic organ prolapse and stress urinary incontinence has destroyed countless women's lives. The mesh can erode through vaginal tissue causing severe pain, bleeding, infection, and painful intercourse. Many women experience permanent nerve damage and require multiple surgeries attempting removal - though complete removal is often impossible as mesh becomes incorporated into tissue.
                    </p>
                    
                    <h3>IVC Filter Complications</h3>
                    <p>
                      Inferior vena cava filters designed to prevent blood clots from reaching the lungs have caused serious injuries when they fracture, migrate, or perforate blood vessels. Broken filter pieces can travel to the heart or lungs causing life-threatening emergencies. Many filters become impossible to remove after tissue grows around them.
                    </p>
                    
                    <h3>Cardiac Device Defects</h3>
                    <p>
                      Pacemakers, defibrillators, and heart valves save lives when working properly but cause devastating injuries when defective. Battery failures, lead fractures, and premature device failures leave patients vulnerable to sudden cardiac death. Mechanical heart valves can fail catastrophically, while tissue valves may deteriorate prematurely requiring risky replacement surgery.
                    </p>
                    
                    <h3>Breast Implant Complications</h3>
                    <p>
                      Breast implants can cause numerous complications including rupture, capsular contracture, and breast implant-associated anaplastic large cell lymphoma (BIA-ALCL). Textured implants particularly increase cancer risk. Silicone implants that rupture can cause systemic symptoms including fatigue, cognitive issues, and joint pain - a condition many call breast implant illness.
                    </p>
                    
                    <h3>Spinal Implant Failures</h3>
                    <p>
                      Spinal cord stimulators, artificial discs, and fusion hardware can cause severe complications when they fail. Stimulators may deliver incorrect electrical pulses causing pain rather than relief. Artificial discs can wear prematurely or migrate, compressing nerves. Fusion hardware including rods, screws, and cages can break or loosen, failing to achieve fusion and requiring additional surgery.
                    </p>
                    
                    <h3>Insulin Pump Malfunctions</h3>
                    <p>
                      Defective insulin pumps can deliver too much or too little insulin, causing dangerous blood sugar fluctuations. Software glitches, hardware failures, and cybersecurity vulnerabilities put diabetic patients at risk of hypoglycemia, hyperglycemia, diabetic ketoacidosis, and death. Patients rely on these devices for life-sustaining medication, making failures particularly dangerous.
                    </p>
                    
                    <h3>CPAP Recall Injuries</h3>
                    <p>
                      Philips recalled millions of CPAP and BiPAP machines containing sound abatement foam that degrades into toxic particles users inhale. This carcinogenic foam causes respiratory problems, cancer, kidney disease, and other serious conditions. Despite knowing about the foam degradation issue, Philips continued selling these devices for years.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FDA Process Section */}
            <section id="fda-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding the FDA's Broken System</h2>
              
              <div className="mb-8">
                <img 
                  src={fdaProcessImage} 
                  alt="FDA approval process documents and medical device regulatory oversight procedures" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Understanding how the FDA regulates medical devices is crucial to building a strong case against manufacturers. The system has significant flaws that allow dangerous devices to reach patients.
                </p>
                
                <h3>The 510(k) Loophole</h3>
                <p>
                  Over 95% of medical devices enter the market through the 510(k) "premarket notification" process. This pathway requires only that manufacturers show their device is "substantially equivalent" to a device already on the market - called a "predicate device." No clinical testing is required, and manufacturers can use any predicate device, even ones later recalled for safety issues.
                </p>
                
                <p>
                  This creates a dangerous chain reaction: Device A gets approved based on unsafe Device B, then Device C gets approved based on Device A, and so on. Each device moves further away from any actual safety testing, yet all are considered "FDA cleared" - a misleading term that suggests rigorous review when none occurred.
                </p>

                <Collapsible open={expandedSections.fdaProcess} onOpenChange={() => toggleSection('fdaProcess')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About FDA Regulatory Failures
                      {expandedSections.fdaProcess ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Class II Device Problems</h3>
                      <p>
                        Most problematic devices are classified as Class II "moderate risk" devices subject to 510(k) review. This includes hip implants, hernia mesh, IVC filters, and many other devices causing serious injuries. Despite being labeled "moderate risk," these devices often pose significant dangers when they fail.
                      </p>
                      
                      <h3>Post-Market Surveillance Failures</h3>
                      <p>
                        The FDA relies heavily on voluntary adverse event reporting, which captures only a fraction of actual problems. Studies suggest only 1-10% of device problems are reported to the FDA. Manufacturers have little incentive to report problems that could trigger recalls and lawsuits.
                      </p>
                      
                      <h3>Recall Ineffectiveness</h3>
                      <p>
                        When the FDA finally issues recalls, they're often too late and too weak. Most recalls are voluntary, and manufacturers can continue selling devices while developing corrective actions. Class I recalls for life-threatening defects often take years to implement fully.
                      </p>
                      
                      <h3>Industry Influence</h3>
                      <p>
                        The medical device industry pays user fees that fund FDA device reviews, creating potential conflicts of interest. The FDA's approval timeline pressures and industry lobbying can compromise safety oversight. Former FDA officials often join device companies, raising questions about regulatory capture.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Legal Process for Medical Device Cases</h2>
              
              <div className="mb-8">
                <img 
                  src={legalProcessImage} 
                  alt="Legal process for medical device lawsuits including courtroom procedures and product liability cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Medical device litigation is complex, involving product liability law, FDA regulations, medical evidence, and corporate accountability. Understanding the process helps you make informed decisions about your case.
                </p>
                
                <h3>Initial Case Evaluation</h3>
                <p>
                  We begin with a comprehensive evaluation of your medical records, device history, and injuries. This includes identifying the specific device model, manufacturer, and any recalls or adverse event reports. We review your medical treatment and consult with experts to establish the connection between the device and your injuries.
                </p>

                <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About Legal Procedures
                      {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Investigation and Discovery</h3>
                      <p>
                        Our investigation includes obtaining internal company documents, FDA correspondence, clinical trial data, and safety reports. We work with engineers to analyze device failures and medical experts to establish causation. Discovery may reveal that manufacturers knew about problems but concealed them from patients and doctors.
                      </p>
                      
                      <h3>Expert Witnesses</h3>
                      <p>
                        Medical device cases require expert testimony from engineers, doctors, and regulatory specialists. Engineers explain how devices failed and why. Medical experts establish causation and quantify injuries. Regulatory experts testify about FDA requirements and manufacturer violations.
                      </p>
                      
                      <h3>Multidistrict Litigation (MDL)</h3>
                      <p>
                        Many device cases are consolidated in federal MDLs for coordinated pretrial proceedings. This provides efficiency and shared resources while preserving individual trials. We evaluate whether MDL participation or state court filing better serves your interests.
                      </p>
                      
                      <h3>Settlement vs. Trial</h3>
                      <p>
                        Most cases settle before trial, but we prepare every case for trial to maximize settlement value. Settlement provides guaranteed compensation and faster resolution. Trial offers potential for higher damages but involves uncertainty. We recommend the best strategy based on your case strength and personal needs.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "How do I know if my medical device is defective?",
                    answer: "Signs of device problems include: unexpected pain or complications, device malfunction or failure, complications requiring revision surgery, symptoms that began after device implantation, or learning your device was recalled. Many patients assume complications are normal when they're actually caused by defective devices."
                  },
                  {
                    question: "What's the time limit to file a medical device lawsuit in California?",
                    answer: "California generally allows 2 years from discovery of injury to file product liability claims. However, this can be complex for medical devices because injuries may not be immediately apparent. The discovery rule may extend deadlines if you couldn't reasonably have known the device caused your problems. Don't delay - evidence disappears and witnesses forget."
                  },
                  {
                    question: "Can I sue if my doctor recommended the device?",
                    answer: "Yes. Your doctor's recommendation doesn't protect the manufacturer from liability for defective devices. While you may have claims against your doctor for malpractice, the manufacturer remains responsible for designing and manufacturing safe devices. Many doctors rely on manufacturer representations that may be false or misleading."
                  },
                  {
                    question: "What compensation is available for medical device injuries?",
                    answer: "Compensation may include: past and future medical expenses, revision surgery costs, lost wages and earning capacity, pain and suffering, emotional distress, loss of enjoyment of life, and punitive damages for egregious conduct. California allows full compensation for all losses caused by defective devices."
                  },
                  {
                    question: "Do I need the actual device to file a lawsuit?",
                    answer: "While having the device strengthens your case, it's not always required. Medical records often contain device identification information including model and serial numbers. If the device was removed, ask your surgeon to preserve it. If discarded, we can often identify the device through medical records and imaging studies."
                  },
                  {
                    question: "How much does it cost to hire a medical device attorney?",
                    answer: "We work on contingency fee basis - you pay nothing unless we win your case. We advance all case expenses including expert witness fees, court costs, and investigation expenses. You're not responsible for any fees unless we secure compensation for you. This allows everyone access to quality legal representation regardless of financial resources."
                  },
                  {
                    question: "What if my device was FDA approved?",
                    answer: "FDA approval doesn't prevent lawsuits against manufacturers. The FDA approval process has significant limitations, and approval doesn't guarantee safety. Many recalled devices were FDA approved. California law allows you to sue manufacturers for defective devices regardless of FDA approval status."
                  },
                  {
                    question: "Can I file a claim if I signed informed consent?",
                    answer: "Informed consent forms typically cover known risks of surgery, not defects in the device itself. Manufacturers have a duty to make devices safe regardless of what consent forms you signed. Consent forms don't waive your right to sue for defective products that cause unexpected injuries."
                  },
                  {
                    question: "How long do medical device lawsuits take?",
                    answer: "Case duration varies based on complexity, number of defendants, and whether cases are in MDL or state court. Simple cases may resolve in 1-2 years, while complex cases can take 3-5 years or more. We work efficiently to resolve cases as quickly as possible while maximizing compensation."
                  },
                  {
                    question: "What evidence should I preserve?",
                    answer: "Important evidence includes: the device itself if removed, all medical records, device packaging and documentation, photographs of injuries, witness contact information, and any correspondence with manufacturers. Also preserve evidence of damages like medical bills, lost wage documentation, and impact on daily life."
                  },
                  {
                    question: "Can family members file claims for my device injury?",
                    answer: "Spouses can file loss of consortium claims for impact on marriage relationship. If device injuries result in death, family members can file wrongful death claims. Family members may also have their own exposure claims in some situations, such as secondhand exposure to toxic device materials."
                  },
                  {
                    question: "What if multiple devices were implanted?",
                    answer: "Multiple devices may create multiple claims against different manufacturers. Each device requires separate evaluation for defects and causation. We pursue all viable claims to maximize total compensation. Bilateral implants (both hips/knees) often involve the same manufacturer and similar injuries."
                  },
                  {
                    question: "How do you prove the device caused my injuries?",
                    answer: "We use multiple forms of evidence: medical records showing temporal relationship between implantation and symptoms, imaging studies documenting device failure, pathology reports if tissue was tested, expert testimony linking device to injuries, and scientific literature establishing causation. Pattern of similar injuries in other patients provides additional support."
                  },
                  {
                    question: "What if I had pre-existing conditions?",
                    answer: "Pre-existing conditions don't prevent recovery if the device worsened your condition or caused new injuries. California's 'eggshell plaintiff' rule means manufacturers take victims as they find them. If devices aggravate pre-existing conditions, manufacturers remain liable for all resulting damages."
                  },
                  {
                    question: "Can I get a second medical opinion about my device?",
                    answer: "Absolutely. Second opinions often reveal device problems original doctors missed or misattributed. We can recommend independent doctors without financial ties to device manufacturers. Second opinions strengthen your case by confirming device-related injuries."
                  },
                  {
                    question: "What's an MDL and how does it affect my case?",
                    answer: "Multidistrict litigation (MDL) consolidates similar federal cases before one judge for coordinated pretrial proceedings. This provides efficiency and consistency while preserving individual trials. MDL participation can provide resources and shared discovery but may delay resolution."
                  },
                  {
                    question: "What if the device was implanted in an emergency?",
                    answer: "Emergency situations don't excuse defective devices. While informed consent may be limited in emergencies, manufacturers remain liable for defective products regardless of implantation circumstances. The device should be safe whether implanted electively or emergently."
                  },
                  {
                    question: "Can Medicare/Medicaid patients file device lawsuits?",
                    answer: "Yes. Medicare/Medicaid coverage doesn't affect your right to pursue manufacturers for defective devices. These programs may assert liens for reimbursement from settlements, but we negotiate to minimize liens and maximize your net recovery."
                  },
                  {
                    question: "What about devices implanted years ago?",
                    answer: "Older implants may still qualify for compensation if problems recently developed or you just discovered the device caused injuries. California's discovery rule extends deadlines when injuries weren't immediately apparent. Some devices cause latent injuries appearing years later."
                  },
                  {
                    question: "How do I find out my device's model and serial numbers?",
                    answer: "Medical records from implantation surgery should contain device information including manufacturer, model, lot, and serial numbers. Operative reports, device cards given to patients, and billing records also contain identifiers. We help obtain all necessary device identification."
                  },
                  {
                    question: "What if I used the device off-label?",
                    answer: "Off-label use (FDA-cleared for different purpose) doesn't bar recovery if the device was defective. Doctors legally prescribe devices off-label, and manufacturers often promote off-label use. If device defects caused injuries regardless of specific use, manufacturers remain liable."
                  },
                  {
                    question: "Can I switch lawyers if I'm unhappy with representation?",
                    answer: "Yes, you can change attorneys anytime. Your case file belongs to you. New and previous attorneys work out fee arrangements without additional cost to you. If you're dissatisfied with current representation, we can evaluate your case."
                  },
                  {
                    question: "What's the difference between settlement and verdict?",
                    answer: "Settlements are negotiated agreements avoiding trial uncertainty and providing guaranteed compensation. Verdicts result from trial where judge or jury determines liability and damages. Settlements offer faster resolution and privacy. Trials risk losing but may yield higher awards."
                  },
                  {
                    question: "Do I have to go to court?",
                    answer: "Most cases settle without trial. If trial becomes necessary, your testimony would typically be required, though we prepare you thoroughly. Depositions (sworn testimony outside court) may be needed during discovery. We handle all legal proceedings while minimizing disruption to your life."
                  },
                  {
                    question: "What if the hospital won't give me my medical records?",
                    answer: "You have legal right to your medical records. We can obtain them through proper authorization or subpoena if necessary. Some facilities charge copying fees we advance for you. Records are crucial evidence, and we ensure complete documentation is obtained."
                  },
                  {
                    question: "How are expert witnesses used in device cases?",
                    answer: "Expert witnesses provide crucial testimony about device defects, medical causation, and damages. Engineers analyze device failures. Medical experts explain how defects caused injuries. Regulatory experts discuss FDA requirements. We work with nationally recognized experts."
                  },
                  {
                    question: "What if I signed an arbitration agreement?",
                    answer: "Hospital arbitration agreements typically don't apply to claims against device manufacturers. Even if arbitration applies to medical malpractice claims, product liability claims against manufacturers usually proceed in court."
                  },
                  {
                    question: "Can I recover if the company changed ownership?",
                    answer: "Successor companies often assume liability for predecessor's products. Mergers and acquisitions don't eliminate victim compensation rights. We identify all potentially liable entities to ensure compensation sources remain available despite corporate restructuring."
                  },
                  {
                    question: "What about psychological injuries from device failures?",
                    answer: "Psychological injuries including anxiety, depression, PTSD, and adjustment disorders are compensable damages. Device failures causing disfigurement, loss of function, or chronic pain often trigger psychological conditions requiring treatment."
                  },
                  {
                    question: "How do recalls affect ongoing lawsuits?",
                    answer: "Recalls strengthen cases by confirming device problems but don't automatically result in compensation. Manufacturers often fight liability despite recalls. Recall notices provide valuable evidence of defects and manufacturer knowledge."
                  },
                  {
                    question: "What if I had good results but now need revision?",
                    answer: "Delayed failures often indicate design defects. Devices should function throughout expected lifespan. Premature revision need, regardless of initial success, suggests defects warranting compensation for revision surgery and ongoing problems."
                  },
                  {
                    question: "Can I file a claim if still using the device?",
                    answer: "Yes. Many patients cannot safely remove devices or removal poses greater risks than leaving them. Ongoing use doesn't waive compensation rights. You may recover for increased monitoring, anxiety about future failure, and anticipated revision surgery costs."
                  },
                  {
                    question: "What about experimental or investigational devices?",
                    answer: "Experimental devices may have different liability rules, but manufacturers still have duties to conduct proper testing and warn of known risks. Participation in clinical trials doesn't waive all rights. We evaluate whether proper protocols were followed."
                  },
                  {
                    question: "How do you handle cases involving multiple manufacturers?",
                    answer: "Complex devices may involve multiple manufacturers for different components. We identify all potentially liable parties including device manufacturers, component suppliers, and companies involved in design or testing. This maximizes potential recovery sources."
                  },
                  {
                    question: "What if my doctor had financial relationships with the manufacturer?",
                    answer: "Doctor-manufacturer financial relationships may be relevant to your case. These relationships can influence device selection and may indicate bias in diagnosis or treatment. We investigate these relationships as part of building your case."
                  },
                  {
                    question: "Can international patients file claims in California?",
                    answer: "International patients who received devices in California or from California-based manufacturers may have viable claims. Jurisdiction and choice of law issues can be complex. We evaluate whether California courts can hear your case."
                  },
                  {
                    question: "What about class action lawsuits vs. individual cases?",
                    answer: "Medical device injuries usually involve individual lawsuits or mass torts rather than class actions due to varying damages between patients. Individual cases allow personalized attention and compensation based on specific injuries."
                  },
                  {
                    question: "How do you calculate damages in device cases?",
                    answer: "Damages include economic losses (medical expenses, lost wages, future care needs) and non-economic losses (pain and suffering, emotional distress, loss of enjoyment). We work with economists and life care planners to calculate comprehensive damages."
                  },
                  {
                    question: "What if I can't afford ongoing medical treatment?",
                    answer: "We can help connect you with treatment options and specialists. Some medical providers work with patients on payment plans pending lawsuit resolution. We also pursue expedited proceedings when urgent medical care is needed."
                  },
                  {
                    question: "Are there special rules for cardiac device cases?",
                    answer: "Cardiac devices involve life-threatening failures requiring specialized medical and legal expertise. We work with cardiologists and cardiac surgeons who understand these complex devices. Emergency situations may affect evidence preservation requirements."
                  },
                  {
                    question: "What about robotic surgery device injuries?",
                    answer: "Robotic surgery injuries may involve device malfunctions, design defects, or inadequate training. These cases require analysis of both the device and the surgical procedure. Multiple parties may be liable including robot manufacturers and training companies."
                  },
                  {
                    question: "How do you handle cases where the device appears to work correctly?",
                    answer: "Some device defects aren't immediately apparent even when devices seem functional. For example, metal-on-metal hips may work initially while causing hidden tissue damage. We investigate whether devices meet their promised performance standards."
                  },
                  {
                    question: "What's the difference between recalls and safety communications?",
                    answer: "Recalls require corrective action, while safety communications just provide information. Both can be valuable evidence. Many dangerous devices receive safety communications before recalls. We monitor all FDA safety information relevant to your device."
                  },
                  {
                    question: "Can I file a claim for a device that was never recalled?",
                    answer: "Absolutely. Many defective devices are never recalled despite causing injuries. Recalls depend on FDA action, which can be slow or inadequate. Manufacturer liability exists regardless of recall status if devices are proven defective."
                  },
                  {
                    question: "What happens if I die during the legal process?",
                    answer: "If you pass away during litigation, your family can continue the case as a wrongful death claim. California law allows spouses, children, and dependent family members to recover for loss of financial support, companionship, and other damages."
                  },
                  {
                    question: "How do you determine which companies are responsible?",
                    answer: "We conduct thorough investigations using corporate records, device labeling, FDA databases, and expert analysis to identify all potentially liable parties. This includes device manufacturers, component suppliers, distributors, and related companies."
                  },
                  {
                    question: "What medical experts do you work with?",
                    answer: "Our network includes board-certified specialists in relevant medical fields who understand device-related injuries. These experts help establish causation, explain complications, project future medical needs, and provide compelling testimony about device defects."
                  },
                  {
                    question: "Can I still file a claim if I don't remember device details?",
                    answer: "Memory gaps are common, especially for devices implanted years ago. We use investigative techniques including medical record analysis, device registries, and manufacturer databases to identify specific devices and build comprehensive cases."
                  },
                  {
                    question: "What information should I gather before contacting an attorney?",
                    answer: "Helpful information includes: all medical records related to the device, device identification information, photos of injuries, witness contact information, insurance documentation, and any correspondence with manufacturers. Don't worry if information is incomplete - we help gather additional documentation."
                  },
                  {
                    question: "Can spouses file their own claims for emotional distress?",
                    answer: "California allows spouses to file loss of consortium claims for the impact of device injuries on their relationship, including loss of companionship, affection, and intimacy. Spouses may also have their own claims if exposed to toxic device materials."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Medical Device Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Activity className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Get an estimate of your potential medical device injury compensation.</p>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      asChild
                    >
                      <Link to="/medical-devices-compensation-calculator">Calculate Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Understanding medical care and documentation for device injuries.</p>
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      asChild
                    >
                      <Link to="/medical-devices-medical-guidance">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                  <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                      <h3 className="text-xl font-bold">Start Your Case</h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      asChild
                    >
                      <Link to="/schedule-consultation">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                      asChild
                    >
                      <Link to="/medical-devices-case-evaluation">
                        <Mail className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limit</h4>
                      <p className="text-sm text-muted-foreground">2 years from discovery in California</p>
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
                    <Award className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No cost to discuss your case</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Immediate Contact</h4>
                      <p className="text-sm text-muted-foreground">Injured today? Call now for immediate assistance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Injured today? Call now for immediate assistance.
                  </p>
                  <Button 
                    className="w-full bg-white text-orange-600 hover:bg-gray-100"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    (818) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Medical Device Claims
          </h2>
          <p className="text-xl mb-8">
            Evidence disappears quickly in medical device injury cases. Contact us immediately to preserve crucial evidence and maximize your recovery.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-red-700 text-white hover:bg-red-800 font-semibold"
              asChild
            >
              <Link to="/medical-devices-case-evaluation">Start Free Case Evaluation</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-red-600 font-semibold"
              asChild
            >
              <Link to="tel:8181234567">Call (818) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalDevices;