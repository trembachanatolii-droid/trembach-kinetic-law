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
  Beaker,
  Factory,
  Droplets,
  Leaf,
  FlaskConical
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/practice-areas/environmental-toxic-hero.jpg';
import sidebarImage from '@/assets/practice-areas/environmental-toxic-evaluation.jpg';
import pfasImage from '@/assets/practice-areas/environmental-toxic-pfas.jpg';
import legalProcessImage from '@/assets/practice-areas/environmental-toxic-legal-process.jpg';
import healthImage from '@/assets/practice-areas/environmental-toxic-health.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const EnvironmentalToxic: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    exposureType: '',
    location: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'toxic-chemicals', label: 'TOXIC CHEMICALS', icon: FlaskConical },
    { id: 'health-effects', label: 'HEALTH EFFECTS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Visual Effects & Perspective
      gsap.set(contentRef.current, { 
        perspective: 1200,
        transformStyle: "preserve-3d"
      });

      // Hero animation with 3D effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, rotationX: 10, z: -100 },
        { opacity: 1, y: 0, rotationX: 0, z: 0, duration: 1.2, ease: 'power2.out' }
      );

      // Floating Background Layers
      if (heroRef.current) {
        const backLayer = heroRef.current.querySelector('.back-layer');
        const midLayer = heroRef.current.querySelector('.mid-layer');
        const frontLayer = heroRef.current.querySelector('.front-layer');

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
        }
      }

      // Content sections animation with 3D transforms
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 50, rotationX: -10, z: -50 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          z: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            scrub: 1
          }
        }
      );

      // Parallax scroll effects
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: '.parallax-container',
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, contentRef);

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
    window.location.href = '/environmental-toxic-case-evaluation';
  };

  const faqs = [
    {
      question: "How do I know if I have a toxic exposure case?",
      answer: "You may have a case if you've been exposed to toxic chemicals and suffered health problems, property damage, or economic losses. Key indicators include: living or working near industrial facilities, military bases, or contaminated sites; developing unusual illnesses or cancers; multiple neighbors with similar health issues; contaminated well water or indoor air; property value loss due to contamination. Contact us for a free evaluation to determine if you have a valid claim."
    },
    {
      question: "What is the statute of limitations for toxic exposure cases in California?",
      answer: "California generally allows 2 years from discovery of the injury and its cause to file a toxic exposure lawsuit. However, the discovery rule often extends this deadline since health effects may not appear for years or decades after exposure. For property damage, you have 3 years from discovery. Government claims require filing within 6 months. Each case is unique, so contact us immediately to preserve your rights - waiting can forever bar your claim."
    },
    {
      question: "How much does it cost to hire an environmental toxic exposure lawyer?",
      answer: "Nothing upfront. We work on contingency, meaning you pay no attorney fees unless we win your case. We advance all costs including expert witnesses, testing, and litigation expenses. Our fee is typically 33-40% of the recovery. If we don't win, you owe us nothing. This allows everyone to pursue justice regardless of financial resources."
    },
    {
      question: "What compensation can I recover in a toxic exposure lawsuit?",
      answer: "Compensation may include: past and future medical expenses; lost wages and reduced earning capacity; property damage and diminished value; cleanup and remediation costs; medical monitoring for future health risks; pain and suffering; emotional distress; loss of enjoyment of life; punitive damages for egregious conduct. The amount depends on your specific damages, the severity of contamination, and the defendant's conduct. Cases range from thousands to millions of dollars."
    },
    {
      question: "How do you prove toxic exposure caused my illness?",
      answer: "We use multiple methods to establish causation: medical experts who testify about the link between exposure and disease; epidemiological studies showing increased disease rates; toxicological evidence of how chemicals cause specific health effects; exposure assessment documenting levels and duration; differential diagnosis ruling out other causes; temporal relationship between exposure and illness onset. Our experts include toxicologists, epidemiologists, oncologists, and industrial hygienists who provide compelling scientific evidence."
    },
    {
      question: "What if the company responsible has gone bankrupt?",
      answer: "Bankruptcy doesn't necessarily end your claim. Options include: bankruptcy trusts established for victims (common with asbestos companies); successor liability against companies that acquired the polluter; parent company or subsidiary liability; insurance coverage that survives bankruptcy; other responsible parties like property owners or contractors; government funds for certain contaminations. We identify all potential sources of recovery to maximize your compensation."
    },
    {
      question: "Can I sue if I haven't gotten sick yet but was exposed?",
      answer: "Yes, California law allows recovery for medical monitoring when exposure creates an increased risk of disease. You can recover costs for regular testing and screening to detect diseases early when most treatable. Additionally, you may recover for property damage, emotional distress from fear of future illness, and quality of life impacts even without current physical symptoms. Early action preserves evidence and may prevent serious illness through early detection."
    },
    {
      question: "What's the difference between a class action and individual lawsuit?",
      answer: "Class actions combine many similar claims into one lawsuit, providing efficiency and consistency for community-wide contamination. Benefits include shared costs and uniform results. However, individual recoveries may be limited. Individual lawsuits provide personalized attention to your unique damages and often result in higher compensation, especially for serious injuries. Mass torts combine benefits of both - coordinated discovery and strategy while maintaining individual claims. We recommend the best approach for your situation."
    },
    {
      question: "How long do toxic exposure cases take to resolve?",
      answer: "Timeline varies significantly. Simple cases may settle in 6-12 months, while complex litigation can take 2-5 years or longer. Factors affecting duration include: number of defendants; scientific complexity; need for extensive testing; corporate resistance; class certification proceedings; trial schedules. We pursue quick resolution when possible but won't sacrifice your compensation for speed. We keep you informed throughout and can discuss hardship advances if you need funds before settlement."
    },
    {
      question: "What if I was exposed at work?",
      answer: "Workplace exposure cases involve both workers' compensation and third-party claims. Workers' comp provides immediate benefits but limits recovery. Third-party claims against equipment manufacturers, chemical suppliers, or contractors allow full compensation including pain and suffering. California allows dual recovery in many situations. We coordinate both claims to maximize total compensation while protecting your workers' comp benefits."
    },
    {
      question: "How do PFAS 'forever chemicals' affect my health?",
      answer: "PFAS chemicals never break down naturally and accumulate in your body over time. The EPA and CDC link PFAS exposure to kidney and testicular cancer, liver damage, decreased fertility, thyroid disease, immune system damage, and developmental delays in children. California has strict drinking water standards for PFAS, and contamination is widespread from military bases, airports, manufacturing facilities, and consumer products."
    },
    {
      question: "What are the health risks of TCE and PCE exposure?",
      answer: "TCE and PCE are chlorinated solvents that cause kidney cancer, liver cancer, non-Hodgkin's lymphoma, and Parkinson's disease. TCE is strongly linked to Parkinson's, while both chemicals cause birth defects, neurological damage, and immune system suppression. These chemicals were used in dry cleaning, metal degreasing, and military operations. The EPA recently banned most uses due to extreme health risks."
    },
    {
      question: "Is hexavalent chromium dangerous?",
      answer: "Yes, hexavalent chromium (Chromium-6) is a known carcinogen with no safe exposure level. Made famous by the Erin Brockovich case, it causes lung cancer when inhaled and stomach cancer when ingested. California set the nation's first drinking water standard at 10 parts per billion. Sources include chrome plating, steel production, cooling towers, and wood treatment facilities."
    },
    {
      question: "How does benzene exposure occur?",
      answer: "Benzene is a widespread carcinogen found in petroleum products, vehicle exhaust, industrial solvents, and consumer products. Recent recalls of sunscreens, deodorants, and hand sanitizers revealed benzene contamination. Exposure causes leukemia, lymphoma, and other blood cancers. Refineries, gas stations, and manufacturing facilities create environmental contamination affecting nearby communities."
    },
    {
      question: "What are volatile organic compounds (VOCs)?",
      answer: "VOCs are chemicals that easily evaporate into the air, including formaldehyde, toluene, xylene, and ethylbenzene. They're found in paints, cleaning products, building materials, and fuel. VOCs cause headaches, respiratory problems, and long-term health effects including cancer. Indoor air quality problems often involve VOC contamination from construction materials or nearby industrial sources."
    },
    {
      question: "How dangerous are heavy metals like lead and mercury?",
      answer: "Heavy metals accumulate in the body and cause permanent damage. Lead affects brain development in children and causes cardiovascular disease in adults. Mercury damages the nervous system and developing brains. Arsenic causes cancer and skin problems. Cadmium damages kidneys and bones. These metals contaminate water, soil, and air from industrial operations, mining, and consumer products."
    },
    {
      question: "What pesticides and herbicides are most dangerous?",
      answer: "Glyphosate (Roundup) is linked to non-Hodgkin's lymphoma. Organophosphates cause neurological problems and developmental disorders. Atrazine disrupts hormones and may cause cancer. 2,4-D is associated with birth defects and cancer. Paraquat causes Parkinson's disease. Agricultural communities face higher exposure risks, and drift contamination affects nearby residents."
    },
    {
      question: "How does asbestos exposure still occur?",
      answer: "Despite bans, asbestos remains in older buildings, ships, and products. Renovation and demolition release fibers causing mesothelioma, lung cancer, and asbestosis. Natural asbestos deposits in California create environmental exposure. Imported products may contain asbestos despite regulations. Even brief exposure can cause disease decades later."
    },
    {
      question: "What industrial chemicals should I be concerned about?",
      answer: "Dioxins from waste incineration and chemical manufacturing cause cancer and developmental problems. PCBs in electrical equipment and building materials disrupt hormones and cause cancer. Vinyl chloride from plastics manufacturing causes liver cancer. These persistent chemicals accumulate in the environment and food chain, creating widespread exposure risks."
    },
    {
      question: "How do I know if my neighborhood is contaminated?",
      answer: "Warning signs include unusual odors, discolored water or soil, dead vegetation, multiple neighbors with health problems, and nearby industrial facilities. Check EPA and state databases for known contamination sites. Review your water utility's annual quality report. We arrange comprehensive environmental testing to identify contamination and exposure risks."
    },
    {
      question: "What should I do if I discover contamination?",
      answer: "Document everything with photos and notes. Avoid further exposure by using bottled water and improving ventilation. Seek medical evaluation, especially for children and pregnant women. Contact regulatory agencies to report contamination. Preserve all evidence and contact us immediately - evidence disappears and legal deadlines apply. Don't delay seeking legal advice."
    },
    {
      question: "How do you prove property damage from contamination?",
      answer: "We document damage through: environmental testing showing contamination levels; property appraisals before and after discovery; comparable sales analysis; expert testimony on remediation costs; evidence of stigma affecting marketability. Even after cleanup, contamination history permanently reduces property values. We recover for lost value, remediation costs, and alternative housing during cleanup."
    },
    {
      question: "Can I recover for emotional distress from toxic exposure?",
      answer: "Yes, California allows recovery for emotional distress when you're in the 'zone of danger' or fear developing cancer from exposure. This includes anxiety about future illness, stress from learning about contamination, and depression from property loss. Medical documentation of psychological impacts strengthens these claims. Family members may also recover for witnessing loved ones' suffering from toxic exposure."
    },
    {
      question: "What about exposure during pregnancy?",
      answer: "Prenatal exposure to toxic chemicals causes birth defects, developmental delays, and childhood cancers. Pregnant women and developing fetuses are especially vulnerable. Common effects include neural tube defects, cardiac malformations, low birth weight, and learning disabilities. We pursue comprehensive damages for affected children including lifetime care costs, special education needs, and reduced earning capacity."
    },
    {
      question: "How do children differ in toxic exposure cases?",
      answer: "Children face higher risks because they breathe more air, drink more water, and play closer to the ground. Their developing systems are more vulnerable to toxic effects. Childhood exposure often causes lifelong health problems requiring extensive medical care and special services. Recovery includes past and future medical costs, educational needs, reduced earning capacity, and pain and suffering throughout their extended lifespans."
    },
    {
      question: "What is multiple chemical sensitivity?",
      answer: "Multiple Chemical Sensitivity (MCS) occurs when people become sensitive to many chemicals at very low levels after an initial toxic exposure. Symptoms include headaches, fatigue, respiratory problems, and cognitive difficulties. While controversial, California courts recognize MCS as a compensable condition. Treatment involves avoiding chemical triggers and detoxification, which can be expensive and disabling."
    },
    {
      question: "How does vapor intrusion work?",
      answer: "Vapor intrusion occurs when contaminated groundwater or soil releases toxic vapors that enter buildings through cracks, sumps, or utilities. Common chemicals include TCE, PCE, and petroleum compounds. Indoor air can reach dangerous levels without any odor or warning. Health effects include cancer, neurological problems, and reproductive harm. We prove vapor intrusion through sub-slab soil gas testing, indoor air quality monitoring, groundwater contamination mapping, and building pressure studies."
    },
    {
      question: "What if my drinking water is contaminated?",
      answer: "Contaminated drinking water creates immediate health risks and long-term disease. We pursue water suppliers, polluters, and government entities responsible for contamination. Recovery includes alternative water costs, medical monitoring, health effects, property damage, and system remediation. California has strict water quality standards, and violations create liability even without immediate health effects."
    },
    {
      question: "Can I sue for groundwater contamination?",
      answer: "Yes, groundwater contamination creates liability for polluters even if you don't currently use the water. Contamination threatens future water supplies, reduces property values, and creates health risks. We pursue current property damage, future remediation costs, and diminished property values. California groundwater is a public resource, and contamination creates public nuisance claims."
    },
    {
      question: "What about air pollution exposure?",
      answer: "Air pollution from industrial facilities, refineries, and transportation causes respiratory disease, cardiovascular problems, and cancer. California has strict air quality standards, and violations create liability. We pursue individual and class action claims for health effects, property damage, and nuisance. Air monitoring data and health studies provide evidence of exposure and causation."
    },
    {
      question: "How do Superfund sites affect legal claims?",
      answer: "Superfund designation doesn't eliminate private claims. While EPA oversees cleanup, responsible parties remain liable for health and property damages. Superfund status actually helps cases by confirming contamination severity, identifying responsible parties, providing extensive testing data, and establishing cleanup standards. We coordinate with EPA actions while pursuing separate compensation for your damages."
    },
    {
      question: "What if I live near a military base?",
      answer: "Military bases have extensive contamination from fuel, solvents, firefighting foam, and weapons testing. The Federal Tort Claims Act allows some claims against the government, but sovereign immunity limits others. We identify private contractors, neighboring contamination sources, and other liable parties. Veterans may have additional claims through VA benefits or special legislation like the Camp Lejeune Justice Act."
    },
    {
      question: "Can I sue manufacturers of contaminated products?",
      answer: "Yes, manufacturers are strictly liable for contaminated consumer products. Recent cases include benzene in sunscreens and dry shampoos, PFAS in food packaging and cosmetics, and asbestos in talcum powder. We pursue manufacturers who knew of contamination, companies that failed to test products, and retailers selling contaminated goods. Recovery includes medical monitoring, health effects, and refunds."
    },
    {
      question: "What about occupational exposure outside workers' compensation?",
      answer: "While workers' comp covers workplace injuries, third-party claims allow full recovery against equipment manufacturers, chemical suppliers, contractors, and property owners. We identify all responsible parties beyond your employer. Take-home exposure affecting family members creates separate claims. Workplace exposure may also indicate broader community contamination creating additional claims."
    },
    {
      question: "How do you value future medical costs?",
      answer: "We work with life care planners and medical economists to calculate lifetime medical needs. This includes regular monitoring, early intervention treatments, managing chronic conditions, and catastrophic care for serious illnesses. Costs are projected through life expectancy and reduced to present value. Settlement structures or trusts can guarantee funding for future medical needs while providing tax advantages."
    },
    {
      question: "What about lost earning capacity from toxic exposure?",
      answer: "Toxic exposure often causes chronic fatigue, cognitive impairment, and other symptoms reducing earning capacity even when you can still work. Vocational experts assess your reduced capabilities and calculate lost earnings through retirement. This includes reduced advancement opportunities, inability to work overtime, and career limitations. Young victims face substantial lifetime losses requiring expert testimony to establish full value."
    },
    {
      question: "Can businesses recover for toxic exposure losses?",
      answer: "Yes, businesses can recover for lost profits from closure or reduced operations, customer loss from contamination stigma, inventory and equipment damage, relocation expenses, cleanup costs, increased operational expenses, and lost business value and goodwill. Agricultural operations may recover for crop loss, livestock death, organic certification loss, and land productivity reduction. We work with business valuation experts to document all losses."
    },
    {
      question: "What if I'm experiencing symptoms but tests are 'normal'?",
      answer: "'Normal' tests don't mean no exposure or harm. Many toxic effects don't show on standard tests. Issues include tests not designed for specific toxins, subclinical effects still causing symptoms, cumulative impacts not captured, and timing of testing missing peak levels. We work with specialized physicians and toxicologists who understand environmental illness, use advanced testing methods, and recognize subtle toxic effects."
    },
    {
      question: "How do insurance claims work with toxic exposure?",
      answer: "Insurance coverage depends on policy language and contamination timing. Homeowner's policies may cover sudden contamination but exclude pollution. Commercial policies often have specific environmental coverage. We review all applicable policies and pursue coverage while also suing responsible parties. Insurance settlements don't prevent third-party claims against polluters."
    },
    {
      question: "What evidence should I preserve?",
      answer: "Document everything: photos of contamination, water discoloration, or dead vegetation; medical records showing health changes; property records and valuations; bills for alternative water or relocation; correspondence with agencies or companies. Don't clean up contamination before testing and documentation. Preserve contaminated materials in clean containers. Time-stamp everything and maintain detailed notes of symptoms and exposures."
    },
    {
      question: "How do government agencies help or hurt my case?",
      answer: "Agencies like EPA, DTSC, and Regional Water Boards investigate contamination and order cleanup but don't compensate individuals. Agency findings help prove contamination but aren't required for lawsuits. We use agency records, violations, and cleanup orders as evidence while pursuing separate private compensation. Agency involvement may slow property transactions but strengthens legal cases."
    },
    {
      question: "What if the contamination crosses state lines?",
      answer: "Interstate contamination creates federal jurisdiction and possibly multiple state claims. We work with counsel in other states when needed. Federal environmental laws often apply to interstate pollution. Multistate contamination may involve federal multidistrict litigation consolidating cases. Choice of law issues require strategic decisions about where to file. We navigate complex jurisdictional issues to find the best forum for maximum recovery."
    },
    {
      question: "How are settlements paid out?",
      answer: "Settlement payment options include: lump sum payments for immediate needs; structured settlements providing periodic payments; medical funding arrangements for future treatment; annuities guaranteeing lifetime income. Tax implications vary - physical injury compensation is generally tax-free while punitive damages and interest are taxable. We help structure settlements to minimize taxes, provide long-term security, and meet immediate needs."
    },
    {
      question: "What's your experience with environmental cases?",
      answer: "As a former defense attorney, I have unique insights into how corporations and their insurers defend toxic exposure cases. I know their playbooks, their experts, and their settlement authorities. This insider knowledge helps maximize your recovery. As a new firm, you get personal attention from the lead attorney, not passed off to junior lawyers. We combine boutique firm personal service with comprehensive environmental law capabilities."
    },
    {
      question: "Why should I choose our firm for my environmental toxic case?",
      answer: "Our former defense experience provides unique insights into corporate defense tactics and strategies. You get personal attention from experienced counsel, not junior associates. We work on contingency with no upfront costs, advancing all expenses. Our focus on environmental toxic exposure means deep knowledge of complex scientific and legal issues. We're committed to holding polluters accountable while maximizing your compensation and supporting your recovery."
    },
    {
      question: "What makes environmental toxic exposure cases unique?",
      answer: "Environmental cases involve complex science, multiple potentially responsible parties, long latency periods between exposure and illness, regulatory compliance issues, and significant public health implications. Success requires understanding toxicology, epidemiology, environmental engineering, and regulatory frameworks. These cases often affect entire communities, creating opportunities for class actions or coordinated individual litigation providing efficiency while maintaining personalized attention to your unique damages."
    },
    {
      question: "How do I get started with my environmental toxic exposure case?",
      answer: "Contact us immediately for a free, confidential consultation. We'll evaluate your exposure history, health effects, property damage, and legal options. Bring any medical records, environmental test results, correspondence with agencies or companies, and documentation of exposure sources. We'll explain your rights, discuss potential compensation, and outline next steps. Time is critical - evidence disappears and legal deadlines apply, so don't delay seeking legal advice."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Environmental Toxic Exposure Lawyers | PFAS, TCE, Chemical Contamination Attorney"
        description="Former defense attorney fights for toxic exposure victims. PFAS, TCE, chromium-6, benzene contamination lawsuits. Free consultation. No fees unless we win."
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section with 3D effects */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* 3D Floating Background Layers */}
        <div className="back-layer absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" style={{ transform: 'translateZ(-500px)' }}></div>
        <div className="mid-layer absolute inset-0 bg-gradient-to-tl from-green-800/15 to-blue-800/15" style={{ transform: 'translateZ(-250px)' }}></div>
        <div className="front-layer absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" style={{ transform: 'translateZ(-100px)' }}></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-display">
              California Environmental Toxic Exposure Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting for Contamination Victims</span>
            </div>
            
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded"></div>
            
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
              For decades, corporations have contaminated our water, air, and soil with toxic chemicals that cause cancer, birth defects, and chronic diseases. As a former defense attorney, I know their tactics. Now I use that insider knowledge to protect families and communities throughout California from environmental poisoning.
            </p>
            
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-glow"
              onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
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
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md hover-scale ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary shadow-elegant' 
                        : 'text-white hover:bg-white/20 hover:text-primary'
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
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <Leaf className="w-8 h-8 mr-3 text-green-500" />
                    California Environmental Toxic Exposure Attorneys
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-lg leading-relaxed mb-4">
                      Environmental toxic exposure occurs when dangerous chemicals contaminate the air you breathe, water you drink, or soil where you live and work. These invisible poisons accumulate in your body over time, causing devastating health effects that may not appear for years or even decades. California leads the nation in environmental contamination cases, with thousands of sites poisoning communities through industrial negligence, illegal dumping, and regulatory violations.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      If you or a loved one has been exposed to toxic chemicals in California, you deserve justice and maximum compensation for your suffering. These cases require immediate action - evidence disappears, witnesses scatter, and legal deadlines apply. Don't let corporations escape responsibility for poisoning your family and community.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 border border-green-200 rounded-lg bg-green-50 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Immediate Action Required
                      </h3>
                      <p className="text-green-600">
                        Contact us immediately - evidence disappears and statutes of limitation apply. We preserve critical evidence and protect your rights.
                      </p>
                    </div>

                    <div className="p-6 border border-blue-200 rounded-lg bg-blue-50 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <Award className="w-5 h-5 mr-2" />
                        Former Defense Attorney
                      </h3>
                      <p className="text-blue-600">
                        Unique insider knowledge of corporate defense tactics. We know their strategies and use that knowledge to maximize your recovery.
                      </p>
                    </div>

                    <div className="p-6 border border-purple-200 rounded-lg bg-purple-50 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-purple-700 mb-3 flex items-center">
                        <Scale className="w-5 h-5 mr-2" />
                        No Fees Unless We Win
                      </h3>
                      <p className="text-purple-600">
                        You pay nothing upfront - we advance all costs and get paid only when you receive compensation.
                      </p>
                    </div>

                    <div className="p-6 border border-red-200 rounded-lg bg-red-50 hover:scale-105 transition-all duration-300">
                      <h3 className="text-xl font-semibold text-red-700 mb-3 flex items-center">
                        <Heart className="w-5 h-5 mr-2" />
                        Maximum Compensation
                      </h3>
                      <p className="text-red-600">
                        Medical costs, lost wages, property damage, pain & suffering, and punitive damages for corporate negligence.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-subtle p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="text-xl font-semibold mb-4 text-primary">Critical Health and Property Impacts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Immediate Health Risks</h4>
                        <p className="text-sm">Respiratory problems, skin rashes, headaches, nausea, and neurological issues. Children and pregnant women face the highest risks.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Long-Term Consequences</h4>
                        <p className="text-sm">Cancer, Parkinson's disease, kidney damage, immune disorders, birth defects, and chronic diseases appearing years later.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Property Damage</h4>
                        <p className="text-sm">Contamination destroys property values, makes homes unsellable, and permanently reduces values by 20-50%.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Legal Rights</h4>
                        <p className="text-sm">California law provides strong protections including strict liability for polluters and enhanced damages for willful violations.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <Scale className="w-8 h-8 mr-3 text-blue-500" />
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={sidebarImage} 
                        alt="Environmental toxic exposure case evaluation"
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <p className="text-lg mb-6">
                        We provide comprehensive free consultations to evaluate your environmental toxic exposure case. Our experienced team will assess your exposure history, health impacts, property damage, and potential compensation.
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                            <Stethoscope className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-700">Medical Record Review</h4>
                            <p className="text-sm text-green-600">Complete analysis of your health conditions and their connection to toxic exposure</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                            <Map className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-700">Exposure Investigation</h4>
                            <p className="text-sm text-blue-600">Detailed investigation of contamination sources and exposure pathways</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="bg-purple-100 p-2 rounded-full mr-4 mt-1">
                            <Building className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-700">Property Assessment</h4>
                            <p className="text-sm text-purple-600">Evaluation of property damage, contamination, and value impacts</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <form onSubmit={handleFormSubmit} className="space-y-6 bg-gradient-subtle p-6 rounded-lg">
                        <div>
                          <label className="block text-sm font-medium mb-2">Type of Exposure *</label>
                          <Select value={formData.exposureType} onValueChange={(value) => setFormData({...formData, exposureType: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select exposure type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pfas">PFAS "Forever Chemicals"</SelectItem>
                              <SelectItem value="tce-pce">TCE/PCE Solvents</SelectItem>
                              <SelectItem value="chromium">Hexavalent Chromium</SelectItem>
                              <SelectItem value="benzene">Benzene</SelectItem>
                              <SelectItem value="vocs">VOCs (Volatile Organic Compounds)</SelectItem>
                              <SelectItem value="heavy-metals">Heavy Metals (Lead, Mercury, Arsenic)</SelectItem>
                              <SelectItem value="pesticides">Pesticides/Herbicides</SelectItem>
                              <SelectItem value="asbestos">Asbestos</SelectItem>
                              <SelectItem value="industrial">Other Industrial Chemicals</SelectItem>
                              <SelectItem value="unknown">Unknown/Multiple Chemicals</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Exposure Location *</label>
                          <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Where did exposure occur?" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="home">Home/Residential Area</SelectItem>
                              <SelectItem value="workplace">Workplace</SelectItem>
                              <SelectItem value="school">School</SelectItem>
                              <SelectItem value="military">Military Base</SelectItem>
                              <SelectItem value="industrial">Near Industrial Facility</SelectItem>
                              <SelectItem value="drinking-water">Drinking Water</SelectItem>
                              <SelectItem value="consumer-products">Consumer Products</SelectItem>
                              <SelectItem value="multiple">Multiple Locations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">First Name *</label>
                            <Input placeholder="Your first name" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Last Name *</label>
                            <Input placeholder="Your last name" required />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Phone Number *</label>
                          <Input type="tel" placeholder="(818) 123-4567" required />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Email Address *</label>
                          <Input type="email" placeholder="your.email@example.com" required />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-primary text-white font-bold py-3 hover:scale-105 transition-all duration-300 shadow-glow"
                          disabled={!formData.exposureType || !formData.location}
                        >
                          START MY FREE EVALUATION
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Your information is confidential and protected by attorney-client privilege
                        </p>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Continue with the rest of sections... */}
            
          </div>

          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              <Card className="bg-gradient-subtle border-primary shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary text-center">
                    3 Ways to Start Your Case
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Continue with sidebar content... */}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalToxic;