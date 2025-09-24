import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  MessageSquare, 
  Calculator, 
  Shield, 
  AlertTriangle, 
  Clock, 
  Scale,
  Heart,
  Building,
  Users,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  FileText,
  DollarSign,
  Gavel,
  MapPin
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

// Import images
import heroBackgroundImage from '@/assets/explosions-hero-bg.jpg';
import sidebarImage from '@/assets/explosions-sidebar.jpg';
import medicalProcessImage from '@/assets/explosions-medical-process.jpg';
import legalProcessImage from '@/assets/explosions-legal-process.jpg';
import exposureSitesImage from '@/assets/california-explosion-sites.jpg';
import medicalFacilityImage from '@/assets/explosions-medical-facility.jpg';
import compensationCalculatorImage from '@/assets/explosions-compensation-calculator.jpg';

const Explosions: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState('overview');

  // Add explosions-page class for high contrast CSS targeting
  React.useEffect(() => {
    document.body.classList.add('explosions-page');
    return () => document.body.classList.remove('explosions-page');
  }, []);

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'explosion-types', label: 'Explosion Types', icon: AlertTriangle },
    { id: 'injuries', label: 'Common Injuries', icon: Heart },
    { id: 'legal-process', label: 'Legal Process', icon: Scale },
    { id: 'compensation', label: 'Compensation', icon: DollarSign },
    { id: 'california-sites', label: 'CA Risk Areas', icon: MapPin },
    { id: 'faq', label: 'FAQ', icon: MessageSquare }
  ];

  const faqs = [
    {
      question: "What types of explosion cases do you handle?",
      answer: "We handle all types of explosion cases including gas explosions, chemical plant explosions, industrial accidents, refinery explosions, pipeline explosions, propane tank explosions, fireworks accidents, mining explosions, and workplace blast injuries. Our team has experience with both residential and commercial explosion cases throughout California."
    },
    {
      question: "What should I do immediately after an explosion injury?",
      answer: "Seek immediate medical attention even if injuries seem minor, as explosion injuries can have delayed effects. Document the scene if safe to do so, collect witness information, report the incident to authorities, preserve any physical evidence, and contact an experienced explosion attorney as soon as possible to protect your rights and preserve crucial evidence."
    },
    {
      question: "Who can be held liable for explosion injuries?",
      answer: "Multiple parties may be liable including property owners, gas companies, utility providers, contractors, manufacturers of defective equipment, employers in workplace explosions, and maintenance companies. Determining liability requires thorough investigation of the explosion's cause and all contributing factors."
    },
    {
      question: "What damages can I recover in an explosion injury case?",
      answer: "You may recover medical expenses, lost wages, future medical care, rehabilitation costs, pain and suffering, emotional distress, property damage, loss of earning capacity, and in cases of wrongful death, funeral expenses and loss of companionship. Punitive damages may also be available in cases of gross negligence."
    },
    {
      question: "How long do I have to file an explosion injury claim in California?",
      answer: "California's statute of limitations for personal injury claims is generally two years from the date of injury or discovery of the injury. However, claims against government entities may have shorter deadlines, and wrongful death claims have different time limits. It's crucial to consult an attorney immediately to preserve your rights."
    },
    {
      question: "What causes most residential gas explosions?",
      answer: "Common causes include leaking gas lines, defective appliances, improper installation or maintenance of gas equipment, damaged gas meters, excavation accidents that rupture gas lines, and accumulation of gas in enclosed spaces. Utility companies and contractors have strict duties to maintain safe gas systems and follow proper installation procedures."
    },
    {
      question: "How do you investigate explosion cases?",
      answer: "Our investigation includes hiring explosion experts and fire investigators, examining the scene and physical evidence, reviewing maintenance records and safety protocols, interviewing witnesses, analyzing corporate documents and communications, consulting with medical experts on injuries, and working with accident reconstruction specialists to determine the exact cause and sequence of events."
    },
    {
      question: "What evidence is important in explosion cases?",
      answer: "Critical evidence includes photographs of the scene and damage, witness statements, medical records documenting injuries, maintenance and inspection records, corporate safety policies and training records, expert analysis of the explosion cause, surveillance footage if available, and documentation of code violations or safety violations."
    },
    {
      question: "Can I sue if the explosion happened at my workplace?",
      answer: "While workers' compensation may cover some damages, you may also have third-party claims against equipment manufacturers, contractors, or other parties whose negligence contributed to the explosion. These third-party claims can provide additional compensation beyond workers' compensation benefits."
    },
    {
      question: "What if a family member died in an explosion?",
      answer: "Surviving family members may file a wrongful death claim to recover funeral expenses, loss of future income, loss of companionship and guidance, and other damages. California law specifies which family members can file wrongful death claims and what damages are recoverable."
    },
    {
      question: "How do chemical plant explosions differ from other explosion cases?",
      answer: "Chemical plant explosions often involve toxic exposure in addition to burn injuries, requiring specialized medical and legal expertise. These cases may involve federal regulations, environmental contamination, and multiple potentially responsible parties including chemical manufacturers, plant operators, and regulatory agencies."
    },
    {
      question: "What types of injuries result from explosions?",
      answer: "Explosion injuries include severe burns, traumatic brain injuries, hearing loss, lung damage from smoke inhalation, blast lung from pressure waves, broken bones and crush injuries, eye injuries and blindness, post-traumatic stress disorder, and in severe cases, amputations or death."
    },
    {
      question: "How long do explosion injury cases take to resolve?",
      answer: "The timeline varies depending on the complexity of the case, severity of injuries, number of defendants, and willingness to settle. Simple cases may resolve in months, while complex multi-party cases can take several years. We work diligently to resolve cases as quickly as possible while ensuring maximum compensation."
    },
    {
      question: "What if the explosion damaged my property?",
      answer: "Property damage claims can be filed separately or as part of a personal injury case. Recoverable damages include repair or replacement costs, temporary housing expenses, loss of personal property, business interruption losses, and diminished property value. We can help coordinate both personal injury and property damage claims."
    },
    {
      question: "How do you prove negligence in explosion cases?",
      answer: "Proving negligence requires establishing that the defendant owed a duty of care, breached that duty through action or inaction, and that the breach caused the explosion and resulting injuries. This often involves expert testimony, industry standards analysis, and detailed investigation of maintenance and safety practices."
    },
    {
      question: "What role do building codes play in explosion cases?",
      answer: "Building code violations can provide strong evidence of negligence. We examine whether proper permits were obtained, installations met code requirements, inspections were properly conducted, and safety systems were adequately maintained. Code violations often support claims against contractors, property owners, and inspectors."
    },
    {
      question: "Can I sue if the explosion was caused by a utility company?",
      answer: "Yes, utility companies can be held liable for explosions caused by faulty equipment, inadequate maintenance, delayed response to gas leaks, improper installation, or failure to mark underground utilities. Utility companies have heightened duties due to the dangerous nature of gas and electrical systems."
    },
    {
      question: "What if multiple parties contributed to the explosion?",
      answer: "California follows comparative fault rules, meaning damages can be apportioned among multiple responsible parties. We identify all potentially liable parties and pursue claims against each, ensuring you receive maximum compensation regardless of how fault is distributed among defendants."
    },
    {
      question: "How do you handle cases involving defective products?",
      answer: "Product liability claims may be filed against manufacturers, distributors, and retailers of defective equipment that caused or contributed to the explosion. These cases can proceed under theories of strict liability, negligence, or breach of warranty, often providing additional sources of compensation."
    },
    {
      question: "What if the explosion occurred during construction or renovation?",
      answer: "Construction-related explosions often involve multiple parties including general contractors, subcontractors, property owners, architects, and equipment suppliers. These cases require analysis of contract terms, safety protocols, permit compliance, and industry standards to determine liability."
    },
    {
      question: "How do insurance companies typically respond to explosion claims?",
      answer: "Insurance companies often dispute liability and damages in explosion cases due to their high value. They may claim the explosion was unforeseeable, blame the victim, or argue that pre-existing conditions contributed to injuries. Having experienced legal representation is crucial to counter these tactics."
    },
    {
      question: "What if I was partially at fault for the explosion?",
      answer: "California's comparative negligence law allows recovery even if you were partially at fault, though your compensation will be reduced by your percentage of fault. We work to minimize any attribution of fault to you while maximizing the responsibility of other parties."
    },
    {
      question: "How do environmental factors affect explosion cases?",
      answer: "Environmental conditions like wind, temperature, and humidity can influence explosion severity and spread. We analyze weather conditions, environmental impact, soil contamination, and air quality effects to build a comprehensive case and identify all damages and responsible parties."
    },
    {
      question: "What expert witnesses are needed in explosion cases?",
      answer: "Common experts include fire and explosion investigators, mechanical engineers, electrical engineers, gas system experts, medical professionals, economists for damages calculation, and safety engineers. The specific experts needed depend on the type of explosion and injuries involved."
    },
    {
      question: "Can I sue if the explosion happened in an apartment building?",
      answer: "Yes, claims may be filed against landlords, property management companies, contractors, utility companies, and appliance manufacturers depending on the cause. Landlords have duties to maintain safe conditions and ensure proper installation and maintenance of gas appliances and systems."
    },
    {
      question: "What if the explosion was caused by illegal activity?",
      answer: "Even if illegal activity contributed to an explosion, you may still have claims against property owners, utility companies, or manufacturers whose negligence allowed the dangerous conditions to exist. Criminal activity doesn't automatically bar civil liability claims."
    },
    {
      question: "How do you calculate damages in explosion cases?",
      answer: "Damages calculation involves current and future medical expenses, lost wages and earning capacity, pain and suffering, property damage, and other economic and non-economic losses. We work with economists, medical experts, and life care planners to accurately project lifetime damages."
    },
    {
      question: "What if the explosion affected multiple families or properties?",
      answer: "Large-scale explosions may result in class action lawsuits or coordinated litigation involving multiple plaintiffs. This can provide efficiency in litigation while ensuring each family receives appropriate individual compensation based on their specific damages and circumstances."
    },
    {
      question: "How do government regulations affect explosion cases?",
      answer: "Federal and state regulations govern gas systems, chemical storage, workplace safety, and building codes. Violations of these regulations can provide strong evidence of negligence and may result in additional penalties against responsible parties beyond civil damages."
    },
    {
      question: "What if the explosion occurred during an emergency situation?",
      answer: "Emergency responders and utility companies still have duties to follow proper safety protocols even during emergencies. While emergency conditions may affect liability analysis, they don't automatically excuse negligent conduct that contributes to explosions or injuries."
    },
    {
      question: "How do you handle cases with catastrophic injuries?",
      answer: "Catastrophic injury cases require extensive medical documentation, life care planning, and vocational rehabilitation assessment. We work with specialized medical experts and life care planners to ensure all current and future needs are included in damage calculations."
    },
    {
      question: "What if the responsible party doesn't have adequate insurance?",
      answer: "We investigate all potential sources of compensation including multiple insurance policies, corporate assets, parent company liability, and additional responsible parties. Asset investigation and creative legal theories can often identify additional compensation sources."
    },
    {
      question: "Can I recover damages for emotional trauma from an explosion?",
      answer: "Yes, emotional distress and post-traumatic stress disorder are compensable damages in explosion cases. We work with mental health professionals to document psychological injuries and their impact on your life and ability to work and enjoy normal activities."
    },
    {
      question: "What if the explosion contaminated my property with hazardous materials?",
      answer: "Environmental contamination can create additional damages for cleanup costs, temporary relocation, health monitoring, property devaluation, and long-term health effects. Environmental experts can assess contamination and project cleanup and monitoring costs."
    },
    {
      question: "How do you handle cases involving older buildings or infrastructure?",
      answer: "Older buildings may have legacy systems that don't meet current safety standards. We analyze whether proper upgrades were made, maintenance was adequate, and current owners properly assessed and addressed known risks associated with aging infrastructure."
    },
    {
      question: "What if I'm still receiving medical treatment?",
      answer: "You don't need to wait until treatment is complete to consult an attorney. In fact, it's better to involve legal counsel early to preserve evidence and protect your rights. We can help coordinate with medical providers and ensure all treatment is properly documented."
    },
    {
      question: "How do explosion cases involving businesses differ from residential cases?",
      answer: "Business explosion cases may involve workers' compensation, business interruption losses, commercial insurance policies, and additional regulatory requirements. The damages calculation often includes lost profits, business reputation damage, and costs to rebuild or relocate operations."
    },
    {
      question: "What if the explosion was caused by excavation or digging?",
      answer: "Excavation-related explosions often involve failure to call for utility location services, improper digging techniques, or inadequate safety protocols. Contractors, property owners, and utility companies may all bear responsibility for ensuring safe excavation practices."
    },
    {
      question: "Can I sue for a grain elevator or silo explosion?",
      answer: "Agricultural facility explosions involve specialized knowledge of grain handling, dust control, and explosion prevention systems. These cases may involve equipment manufacturers, facility operators, safety system providers, and violations of agricultural safety regulations."
    },
    {
      question: "What if the explosion occurred at a gas station?",
      answer: "Gas station explosions may involve fuel system defects, improper maintenance, safety system failures, or human error. Potential defendants include station owners, fuel suppliers, equipment manufacturers, and maintenance contractors, each with specific duties for safe fuel handling."
    },
    {
      question: "How do you handle cases involving pipeline explosions?",
      answer: "Pipeline explosion cases often involve federal regulations, interstate commerce issues, and major energy companies. These complex cases require specialized knowledge of pipeline safety regulations, maintenance requirements, and the unique liability framework governing pipeline operators."
    },
    {
      question: "What if the explosion was caused by fireworks?",
      answer: "Fireworks explosion cases may involve manufacturing defects, improper storage, inadequate safety distances, or violations of local fireworks regulations. Manufacturers, distributors, event organizers, and property owners may all have liability depending on the circumstances."
    },
    {
      question: "Can I recover compensation if the explosion was at a manufacturing facility?",
      answer: "Manufacturing facility explosions often involve multiple safety systems, regulatory compliance issues, and complex liability questions. Workers may have third-party claims beyond workers' compensation, and nearby residents may have claims for property damage and injuries."
    },
    {
      question: "What if the explosion involved hazardous waste or chemicals?",
      answer: "Hazardous material explosions create additional complexity involving environmental law, specialized cleanup requirements, and potential long-term health effects. These cases often involve multiple agencies and require coordination with environmental and health authorities."
    },
    {
      question: "How do you prove that proper safety measures weren't followed?",
      answer: "We examine industry standards, regulatory requirements, corporate policies, training records, and maintenance logs to identify safety violations. Expert witnesses can testify about proper procedures and how deviations from standard practices contributed to the explosion."
    },
    {
      question: "What if the explosion occurred during a natural disaster?",
      answer: "Natural disasters don't automatically excuse negligence in explosion cases. If property owners, utility companies, or contractors failed to properly secure or maintain systems before or during the disaster, they may still be liable for resulting explosions and injuries."
    },
    {
      question: "Can I sue if the explosion was caused by a vehicle accident?",
      answer: "Vehicle accidents that cause explosions may involve multiple liability theories including driver negligence, vehicle defects, fuel system problems, or hazardous cargo transportation violations. These cases often involve both motor vehicle and product liability claims."
    },
    {
      question: "What if I was injured while trying to help explosion victims?",
      answer: "Good Samaritans injured while attempting rescues may have claims against the parties whose negligence caused the original explosion. California law generally protects those who provide emergency assistance, but you may still recover damages from the responsible parties."
    },
    {
      question: "How do you handle cases where the explosion cause is disputed?",
      answer: "When explosion causes are disputed, we conduct thorough independent investigations using qualified experts, preserve and analyze physical evidence, examine all maintenance and inspection records, and use scientific methods to determine the most likely cause and responsible parties."
    },
    {
      question: "What if the explosion affected my business operations?",
      answer: "Business interruption damages can include lost profits, increased operating costs, customer loss, reputation damage, and costs to relocate operations. We work with business valuation experts to accurately calculate these often substantial economic losses."
    },
    {
      question: "Can I sue if the explosion was at a demolition site?",
      answer: "Demolition explosions may involve improper handling of explosives, failure to clear gas lines, inadequate safety perimeters, or defective equipment. Demolition contractors must follow strict safety protocols and obtain proper permits. Property owners must ensure utilities are properly disconnected. Multiple parties including contractors, property owners, utility companies, and explosive suppliers may share liability."
    },
    {
      question: "Can I sue if the explosion was at a fireworks display?",
      answer: "Fireworks explosions create liability for manufacturers, distributors, display companies, and property owners. Professional displays require permits, insurance, and compliance with safety standards. Manufacturing defects, improper storage, inadequate safety distances, or failure to follow protocols can create liability. Both participants and spectators may have claims for injuries from fireworks accidents."
    },
    {
      question: "What about explosions caused by propane tanks or grills?",
      answer: "Propane tank explosions may result from manufacturing defects, improper filling, damaged valves, or user error. Product liability claims against manufacturers, distributors, and retailers are possible. Property owners using propane equipment have duties to maintain safe conditions. Restaurant and commercial users face additional regulations. These cases often involve multiple parties in the distribution and use chain."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Explosion Accident Lawyers | Gas Chemical Industrial Blast Attorney"
        description="California explosion accident attorney. Former defense lawyer fighting for blast injury victims. Gas explosions, chemical plants, industrial accidents. No fees unless we win. Call 24/7: (818) 123-4567"
        keywords="explosion accident lawyer California, gas explosion attorney, chemical plant explosion lawyer, industrial blast injury attorney, fire explosion lawsuit, workplace explosion compensation, blast injury lawyer"
        canonical="/practice-areas/explosions"
      />

      <GoBack fallbackPath="/practice-areas" />

      {/* Hero Section */}
      <section 
        className="relative py-24 lg:py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            California Explosion
            <br />
            <span className="text-red-400">Accident Lawyers</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Former defense attorney fighting for explosion victims. Gas explosions, chemical plant blasts, industrial accidents. No fees unless we win your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              CALL (818) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              asChild
            >
              <Link to="/practice-areas/explosions/case-evaluation">
                FREE CASE EVALUATION
              </Link>
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
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section id="overview" className="content-section">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Expert Legal Representation for California Explosion Victims</h2>
              <p className="text-xl leading-relaxed mb-6">
                Explosions cause devastating injuries and catastrophic property damage. Whether from gas leaks, chemical plant accidents, industrial explosions, or defective equipment, these traumatic events require immediate legal action to preserve evidence and protect your rights.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                As a former defense attorney, I understand exactly how insurance companies and corporations respond to explosion claims. This inside knowledge allows me to build stronger cases and secure maximum compensation for explosion victims throughout California.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Time-Sensitive Evidence</h3>
                    <p className="text-red-700">
                      Explosion scenes are quickly cleaned up and evidence disappears rapidly. Insurance investigators arrive within hours to protect their interests. You need experienced legal representation immediately to preserve crucial evidence and protect your rights.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Explosion Cases */}
            <section id="explosion-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Explosion Cases We Handle</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Shield className="w-5 h-5 mr-2" />
                      Gas Explosions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Natural gas line ruptures</li>
                      <li>• Propane tank explosions</li>
                      <li>• Residential gas leaks</li>
                      <li>• Commercial gas system failures</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Building className="w-5 h-5 mr-2" />
                      Industrial Explosions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Chemical plant accidents</li>
                      <li>• Refinery explosions</li>
                      <li>• Manufacturing facility blasts</li>
                      <li>• Grain elevator explosions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Construction Explosions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Pipeline ruptures during excavation</li>
                      <li>• Demolition accidents</li>
                      <li>• Equipment malfunctions</li>
                      <li>• Utility line strikes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Product Defect Explosions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Defective appliances</li>
                      <li>• Faulty electrical equipment</li>
                      <li>• Dangerous consumer products</li>
                      <li>• Manufacturing defects</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={openSections['explosion-types']} onOpenChange={() => toggleSection('explosion-types')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Learn More About Explosion Types
                    {openSections['explosion-types'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="prose max-w-none">
                    <h3>Gas and Utility Explosions</h3>
                    <p>
                      Natural gas explosions are among the most devastating residential accidents. These cases often involve utility companies, contractors, and property owners who failed to properly maintain gas systems or respond to leak reports. Common causes include corroded pipes, improper installation, excavation damage, and delayed response to gas leak reports.
                    </p>
                    
                    <h3>Industrial and Chemical Explosions</h3>
                    <p>
                      Chemical plants, refineries, and manufacturing facilities handle dangerous substances that can cause catastrophic explosions. These cases involve complex federal regulations, workplace safety standards, and environmental concerns. Victims may include workers, nearby residents, and emergency responders.
                    </p>
                    
                    <h3>Construction Site Explosions</h3>
                    <p>
                      Construction explosions often occur when contractors fail to call for utility location services or use improper excavation techniques. These accidents can involve multiple parties including general contractors, utility companies, property owners, and subcontractors.
                    </p>
                    
                    <h3>Product Liability Explosions</h3>
                    <p>
                      Defective products that explode or catch fire can cause severe injuries in homes and workplaces. These cases may involve design defects, manufacturing flaws, or inadequate warnings about explosion risks.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Common Injuries */}
            <section id="injuries" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common Explosion Injuries</h2>
              
              <div className="mb-6">
                <img 
                  src={medicalProcessImage} 
                  alt="Medical treatment for explosion injuries" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <p className="text-xl leading-relaxed mb-6">
                Explosion injuries are often severe and life-changing, requiring immediate medical attention and long-term care. Understanding the full scope of your injuries is crucial for calculating appropriate compensation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Immediate Injuries
                  </h3>
                  <ul className="text-sm space-y-1 text-red-700">
                    <li>• Severe burns (1st, 2nd, 3rd degree)</li>
                    <li>• Blast lung from pressure waves</li>
                    <li>• Hearing loss and ear damage</li>
                    <li>• Eye injuries and blindness</li>
                    <li>• Broken bones and fractures</li>
                    <li>• Traumatic brain injuries</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Long-term Effects
                  </h3>
                  <ul className="text-sm space-y-1 text-green-700">
                    <li>• Post-traumatic stress disorder</li>
                    <li>• Chronic pain and scarring</li>
                    <li>• Respiratory problems</li>
                    <li>• Ongoing rehabilitation needs</li>
                    <li>• Lost earning capacity</li>
                    <li>• Emotional and psychological trauma</li>
                  </ul>
                </div>
              </div>

              <Collapsible open={openSections['injury-details']} onOpenChange={() => toggleSection('injury-details')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Learn More About Explosion Injuries
                    {openSections['injury-details'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="prose max-w-none">
                    <h3>Burn Injuries</h3>
                    <p>
                      Explosion burns can affect large portions of the body and often require extensive treatment including skin grafts, plastic surgery, and years of rehabilitation. Third-degree burns may require lifelong medical care and can cause permanent disability and disfigurement.
                    </p>
                    
                    <h3>Blast Lung</h3>
                    <p>
                      The pressure wave from explosions can cause serious lung injuries including bleeding, fluid accumulation, and collapsed lungs. These injuries may not be immediately apparent but can be life-threatening and require immediate medical attention.
                    </p>
                    
                    <h3>Traumatic Brain Injuries</h3>
                    <p>
                      The force of explosions can cause traumatic brain injuries even without direct head impact. These injuries can affect cognitive function, memory, personality, and the ability to work and maintain relationships.
                    </p>
                    
                    <h3>Psychological Trauma</h3>
                    <p>
                      Explosion survivors often develop PTSD, anxiety, depression, and other psychological conditions that require ongoing treatment. These mental health effects are compensable damages that should be included in any settlement or verdict.
                    </p>
                    
                    <h3>Hearing Loss</h3>
                    <p>
                      The loud noise from explosions can cause permanent hearing loss, tinnitus, and balance problems. These injuries affect quality of life and may require hearing aids or other assistive devices throughout the victim's lifetime.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Legal Process for Explosion Cases</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="Legal process for explosion injury cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <p className="text-xl leading-relaxed mb-6">
                Explosion cases require immediate action and careful investigation. Our experienced team knows how to preserve evidence, identify all responsible parties, and build the strongest possible case for maximum compensation.
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-green-800">
                    <Scale className="w-5 h-5 text-green-600 mr-2" />
                    Immediate Steps We Take
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Secure and preserve the explosion scene</li>
                    <li>• Hire expert investigators and engineers</li>
                    <li>• Document all evidence before it's destroyed</li>
                    <li>• Interview witnesses while memories are fresh</li>
                    <li>• Obtain maintenance and inspection records</li>
                    <li>• Coordinate with medical professionals</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h3 className="text-lg font-semibold mb-3 flex items-center text-red-800">
                    <Clock className="w-5 h-5 text-red-600 mr-2" />
                    Investigation Process
                  </h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Determine the exact cause of the explosion</li>
                    <li>• Identify all potentially responsible parties</li>
                    <li>• Review safety protocols and compliance</li>
                    <li>• Analyze corporate policies and training</li>
                    <li>• Examine regulatory violations</li>
                    <li>• Calculate full damages and future needs</li>
                  </ul>
                </div>
              </div>

              <Collapsible open={openSections['legal-process']} onOpenChange={() => toggleSection('legal-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mt-6">
                    Learn More About Our Legal Process
                    {openSections['legal-process'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="prose max-w-none">
                    <h3>Evidence Preservation</h3>
                    <p>
                      The first 24-48 hours after an explosion are critical for evidence preservation. Physical evidence disappears quickly as cleanup begins, witnesses may be difficult to locate later, and corporate defendants begin building their defense immediately. We act fast to preserve crucial evidence that can make or break your case.
                    </p>
                    
                    <h3>Expert Investigation</h3>
                    <p>
                      Explosion cases require specialized experts including fire investigators, engineers, safety experts, and medical professionals. Our network of qualified experts can determine exactly what caused the explosion and who bears responsibility for the damages.
                    </p>
                    
                    <h3>Identifying All Responsible Parties</h3>
                    <p>
                      Multiple parties often share responsibility for explosion accidents. We thoroughly investigate to identify all potentially liable parties including property owners, utility companies, contractors, manufacturers, and employers. This ensures maximum compensation from all available sources.
                    </p>
                    
                    <h3>Building Your Case</h3>
                    <p>
                      We build comprehensive cases using expert testimony, documentary evidence, witness statements, and demonstrative exhibits to clearly show how the explosion occurred and why defendants are responsible for your damages.
                    </p>
                    
                    <h3>Negotiation and Trial</h3>
                    <p>
                      Our goal is to secure maximum compensation through negotiation when possible, but we're always prepared for trial. Insurance companies take us seriously because they know we'll fight for full compensation in court if necessary.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* California Explosion Sites */}
            <section id="california-sites" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California High-Risk Explosion Areas</h2>
              
              <div className="mb-6">
                <img 
                  src={exposureSitesImage} 
                  alt="California explosion risk sites and industrial facilities" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-xl leading-relaxed mb-4">
                  California's industrial infrastructure and urban density create numerous explosion risks. Understanding high-risk areas helps identify potential sources of liability and compensation for explosion victims.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Refineries & Chemical Plants</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Chevron Richmond Refinery</li>
                      <li>• ExxonMobil Torrance Refinery</li>
                      <li>• Shell Martinez Refinery</li>
                      <li>• Valero Benicia Refinery</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Port & Industrial Areas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Port of Los Angeles</li>
                      <li>• Port of Long Beach</li>
                      <li>• Industrial districts</li>
                      <li>• Chemical storage facilities</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Natural Gas Infrastructure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Aging pipeline systems</li>
                      <li>• Urban gas distribution</li>
                      <li>• Construction near utilities</li>
                      <li>• Earthquake-prone areas</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Manufacturing Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Food processing plants</li>
                      <li>• Pharmaceutical manufacturing</li>
                      <li>• Electronics production</li>
                      <li>• Aerospace facilities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={openSections['california-sites']} onOpenChange={() => toggleSection('california-sites')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Learn More About California Explosion Risks
                    {openSections['california-sites'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="prose max-w-none">
                    <h3>Seismic Activity and Infrastructure</h3>
                    <p>
                      California's earthquake activity creates additional explosion risks as seismic events can damage gas lines, storage tanks, and industrial equipment. Facility owners have heightened duties to earthquake-proof their operations and maintain emergency response capabilities.
                    </p>
                    
                    <h3>Urban Development Pressures</h3>
                    <p>
                      Rapid urban development often occurs near existing industrial facilities, creating new explosion risks for residential communities. Developers, city planners, and industrial facility operators all have responsibilities to ensure public safety.
                    </p>
                    
                    <h3>Aging Infrastructure</h3>
                    <p>
                      Much of California's gas pipeline and industrial infrastructure was built decades ago and may not meet current safety standards. Utility companies and facility owners have ongoing duties to upgrade systems and address known risks.
                    </p>
                    
                    <h3>Environmental Regulations</h3>
                    <p>
                      California's strict environmental regulations create additional safety requirements for industrial facilities. Violations of these regulations can provide strong evidence of negligence in explosion cases.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Compensation */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Explosion Victims</h2>
              
              <div className="mb-6">
                <img 
                  src={medicalFacilityImage} 
                  alt="Medical treatment and compensation for explosion injuries" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <p className="text-lg leading-relaxed mb-6">
                Explosion victims may be entitled to substantial compensation for their injuries, property damage, and other losses. Our experienced team ensures no damages are overlooked in calculating your claim.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">Economic Damages</CardTitle>
                  </CardHeader>
                  <CardContent className="text-green-700">
                    <ul className="space-y-2 text-sm">
                      <li>• Medical expenses (past and future)</li>
                      <li>• Lost wages and earning capacity</li>
                      <li>• Property damage and replacement</li>
                      <li>• Rehabilitation and therapy costs</li>
                      <li>• Home modifications and care</li>
                      <li>• Travel costs for treatment</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">Non-Economic Damages</CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-700">
                    <ul className="space-y-2 text-sm">
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress and trauma</li>
                      <li>• Loss of enjoyment of life</li>
                      <li>• Scarring and disfigurement</li>
                      <li>• Loss of consortium (spouses)</li>
                      <li>• Mental anguish</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-6">
                <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Punitive Damages
                </h3>
                <p className="text-yellow-700">
                  In cases involving gross negligence or intentional misconduct, punitive damages may be available to punish wrongdoing and deter future dangerous behavior. These damages can significantly increase your compensation.
                </p>
              </div>

              <Collapsible open={openSections['compensation']} onOpenChange={() => toggleSection('compensation')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Learn More About Compensation Calculation
                    {openSections['compensation'] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4 space-y-4">
                  <div className="prose max-w-none">
                    <h3>Medical Damages</h3>
                    <p>
                      Explosion injuries often require extensive medical treatment including emergency care, surgeries, skin grafts, rehabilitation, and ongoing medical monitoring. We work with life care planners to project all future medical needs and costs.
                    </p>
                    
                    <h3>Lost Income and Earning Capacity</h3>
                    <p>
                      Severe explosion injuries may prevent you from returning to work or limit your earning capacity. We calculate lost wages, benefits, retirement contributions, and career advancement opportunities to ensure full compensation for economic losses.
                    </p>
                    
                    <h3>Property Damage</h3>
                    <p>
                      Explosions often cause extensive property damage including home destruction, personal property loss, and temporary housing costs. We ensure all property damages are properly documented and included in your claim.
                    </p>
                    
                    <h3>Pain and Suffering</h3>
                    <p>
                      The physical pain and emotional trauma from explosion injuries can be overwhelming. California law allows compensation for pain, suffering, and mental anguish, which we calculate based on injury severity, treatment duration, and life impact.
                    </p>
                    
                    <h3>Wrongful Death Damages</h3>
                    <p>
                      When explosions result in death, surviving family members may recover funeral expenses, loss of financial support, loss of companionship, and other damages through wrongful death claims.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                          <CardTitle className="text-lg md:text-xl flex justify-between items-center">
                            <span className="text-left">{faq.question}</span>
                            <ChevronDown className="h-5 w-5 flex-shrink-0 ml-4" />
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Additional Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      Legal Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/case-evaluation">
                        <Scale className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/compensation-calculator">
                        <Clock className="w-4 h-4 mr-2" />
                        Compensation Calculator
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/legal-guidance">
                        <Shield className="w-4 h-4 mr-2" />
                        Legal Guidance
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Medical Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/medical-guidance">
                        <Heart className="w-4 h-4 mr-2" />
                        Medical Guidance
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/treatment-centers">
                        <Building className="w-4 h-4 mr-2" />
                        Treatment Centers
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/support-groups">
                        <Users className="w-4 h-4 mr-2" />
                        Support Groups
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={sidebarImage} 
                    alt="California explosion case consultation" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="space-y-4">
                    <Button className="w-full text-white bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200" size="lg" asChild>
                      <Link to="tel:8181234567">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full text-foreground border-input hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-200" size="lg" asChild>
                      <Link to="/practice-areas/explosions/case-evaluation">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full text-foreground border-input hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-200" size="lg" asChild>
                      <Link to="/practice-areas/explosions/compensation-calculator">
                        <Calculator className="w-4 h-4 mr-2" />
                        Compensation Calculator
                      </Link>
                    </Button>
                  </div>

                  {/* Medical Resources */}
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Medical Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={medicalFacilityImage} 
                        alt="Medical treatment for explosion injuries" 
                        className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      />
                      <p className="text-sm text-muted-foreground">
                        Connect with specialists who understand explosion-related injuries and their long-term effects.
                      </p>
                    </CardContent>
                  </Card>

                  {/* Compensation Info */}
                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle className="text-lg">Compensation Sources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <img 
                        src={compensationCalculatorImage} 
                        alt="Explosion injury compensation calculator" 
                        className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      />
                      <div className="space-y-2 text-sm">
                        <p>• Personal Injury Lawsuits</p>
                        <p>• Property Damage Claims</p>
                        <p>• Insurance Settlements</p>
                        <p>• Wrongful Death Claims</p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA - Don't Wait Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits Apply for California Explosion Cases</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law imposes strict deadlines for filing explosion injury claims. Evidence deteriorates quickly, and insurance companies begin building their defense immediately. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" asChild>
              <Link to="/practice-areas/explosions/case-evaluation">
                START MY FREE CASE EVALUATION
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explosions;