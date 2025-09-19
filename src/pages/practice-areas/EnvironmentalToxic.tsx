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
import solventsImage from '@/assets/practice-areas/environmental-toxic-solvents.jpg';
import chromiumImage from '@/assets/practice-areas/environmental-toxic-chromium.jpg';
import benzeneImage from '@/assets/practice-areas/environmental-toxic-benzene.jpg';
import heavyMetalsImage from '@/assets/practice-areas/environmental-toxic-heavy-metals.jpg';
import vocsImage from '@/assets/practice-areas/environmental-toxic-vocs.jpg';

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

    // Go Back button scroll behavior
    const handleScroll = () => {
      const goBackButton = document.querySelector('.go-back-button');
      if (goBackButton) {
        const scrollY = window.scrollY;
        if (scrollY > 200) {
          goBackButton.classList.add('show');
        } else {
          goBackButton.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
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
      <GoBack className="go-back-button fixed top-32 left-4 z-50 opacity-0 invisible transition-all duration-300 [&.show]:opacity-100 [&.show]:visible" />

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
                          <label className="block text-base font-medium mb-3 text-foreground">Type of Exposure *</label>
                          <Select value={formData.exposureType} onValueChange={(value) => setFormData({...formData, exposureType: value})}>
                            <SelectTrigger className="text-base">
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
                          <label className="block text-base font-medium mb-3 text-foreground">Exposure Location *</label>
                          <Select value={formData.location} onValueChange={(value) => setFormData({...formData, location: value})}>
                            <SelectTrigger className="text-base">
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
                            <label className="block text-base font-medium mb-3 text-foreground">First Name *</label>
                            <Input placeholder="Your first name" required className="text-base" />
                          </div>
                          <div>
                            <label className="block text-base font-medium mb-3 text-foreground">Last Name *</label>
                            <Input placeholder="Your last name" required className="text-base" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-base font-medium mb-3 text-foreground">Phone Number *</label>
                          <Input type="tel" placeholder="(818) 123-4567" required className="text-base" />
                        </div>

                        <div>
                          <label className="block text-base font-medium mb-3 text-foreground">Email Address *</label>
                          <Input type="email" placeholder="your.email@example.com" required className="text-base" />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-primary text-white font-bold py-4 text-lg hover:scale-105 transition-all duration-300 shadow-glow"
                          disabled={!formData.exposureType || !formData.location}
                        >
                          <span className="text-white font-bold">START MY FREE EVALUATION</span>
                        </Button>

                        <p className="text-sm text-muted-foreground text-center opacity-100">
                          Your information is confidential and protected by attorney-client privilege
                        </p>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Toxic Chemicals Section */}
            <section id="toxic-chemicals" className="content-section mb-12">
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <FlaskConical className="w-8 h-8 mr-3 text-red-500" />
                    Dangerous Chemicals We Fight
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-8">Understanding the toxins poisoning California communities</p>

                  <div className="space-y-6">
                    {/* PFAS Section */}
                    <Collapsible open={expandedSections['pfas']} onOpenChange={() => toggleSection('pfas')}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-6 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300">
                          <h3 className="text-xl font-semibold flex items-center">
                            <Droplets className="w-6 h-6 mr-3" />
                            PFAS "Forever Chemicals" - The Modern Environmental Crisis
                          </h3>
                          <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections['pfas'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-6 bg-white border border-primary/20 rounded-b-lg">
                          <img src={pfasImage} alt="PFAS contamination" className="w-full h-64 object-cover rounded-lg mb-6" />
                          
                          <h4 className="text-lg font-semibold mb-4">What Are PFAS?</h4>
                          <p className="mb-4">Per- and polyfluoroalkyl substances (PFAS) are a group of over 9,000 synthetic chemicals used since the 1940s in firefighting foam, non-stick cookware, food packaging, and waterproof products. Called "forever chemicals" because they never break down naturally, PFAS accumulate in our bodies and environment forever.</p>

                          <h4 className="text-lg font-semibold mb-4">Sources of PFAS Contamination</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Military Bases & Airports:</strong> Firefighting foam (AFFF) used for decades has contaminated groundwater at hundreds of California sites</li>
                            <li><strong>Industrial Facilities:</strong> Manufacturing plants releasing PFAS into water and air</li>
                            <li><strong>Landfills:</strong> Consumer products leaching PFAS into groundwater</li>
                            <li><strong>Wastewater Treatment Plants:</strong> Concentrating PFAS from household products</li>
                            <li><strong>Agricultural Areas:</strong> Biosolids and contaminated irrigation water spreading PFAS</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">Health Effects of PFAS</h4>
                          <p className="mb-2">The EPA and CDC link PFAS exposure to:</p>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Kidney and testicular cancer</li>
                            <li>Liver damage and increased cholesterol</li>
                            <li>Decreased fertility and pregnancy complications</li>
                            <li>Thyroid disease and immune system damage</li>
                            <li>Developmental delays in children</li>
                            <li>Reduced vaccine response</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">California PFAS Regulations</h4>
                          <p className="mb-4">California leads the nation in PFAS regulation with strict drinking water standards of 5.1 parts per trillion for PFOA and 6.5 ppt for PFOS - among the lowest in the world. The state requires testing, notification, and cleanup of contaminated water supplies.</p>

                          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                            <h4 className="text-lg font-semibold text-green-700 mb-2">Your Legal Rights</h4>
                            <p className="text-green-600">If you've been exposed to PFAS contamination, you may be entitled to compensation for medical monitoring, treatment costs, property damage, and quality of life impacts. Companies that manufactured, used, or released PFAS can be held strictly liable for contamination.</p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* TCE/PCE Section */}
                    <Collapsible open={expandedSections['tce-pce']} onOpenChange={() => toggleSection('tce-pce')}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-6 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300">
                          <h3 className="text-xl font-semibold flex items-center">
                            <Factory className="w-6 h-6 mr-3" />
                            TCE & PCE - Industrial Solvents Causing Cancer
                          </h3>
                          <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections['tce-pce'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-6 bg-white border border-primary/20 rounded-b-lg">
                          <h4 className="text-lg font-semibold mb-4">Understanding TCE and PCE</h4>
                          <p className="mb-4">Trichloroethylene (TCE) and Perchloroethylene (PCE) are chlorinated solvents widely used in degreasing, dry cleaning, and manufacturing. These carcinogenic chemicals contaminate groundwater throughout California, with the EPA recently banning most uses due to severe health risks.</p>

                          <h4 className="text-lg font-semibold mb-4">Common Sources</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Dry Cleaners:</strong> PCE used for decades has contaminated soil and groundwater beneath thousands of facilities</li>
                            <li><strong>Manufacturing:</strong> Metal degreasing and electronics manufacturing releasing TCE</li>
                            <li><strong>Military Sites:</strong> Aircraft maintenance and weapons cleaning using TCE</li>
                            <li><strong>Landfills:</strong> Improper disposal creating toxic plumes</li>
                            <li><strong>Vapor Intrusion:</strong> Contaminated groundwater releasing toxic vapors into buildings</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">Health Impacts</h4>
                          <p className="mb-2">TCE and PCE cause:</p>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Kidney cancer, liver cancer, and non-Hodgkin's lymphoma</li>
                            <li>Parkinson's disease (strongly linked to TCE)</li>
                            <li>Birth defects including cardiac malformations</li>
                            <li>Neurological damage and cognitive impairment</li>
                            <li>Immune system suppression</li>
                            <li>Reproductive toxicity and miscarriage</li>
                          </ul>

                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                            <h4 className="text-lg font-semibold text-red-700 mb-2">EPA Ban and Legal Implications</h4>
                            <p className="text-red-600">The EPA's December 2024 ban on TCE and restrictions on PCE acknowledge these chemicals' extreme danger. This strengthens legal cases by establishing regulatory recognition of unacceptable risk.</p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Hexavalent Chromium Section */}
                    <Collapsible open={expandedSections['chromium']} onOpenChange={() => toggleSection('chromium')}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-6 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300">
                          <h3 className="text-xl font-semibold flex items-center">
                            <Factory className="w-6 h-6 mr-3" />
                            Hexavalent Chromium - The Erin Brockovich Chemical
                          </h3>
                          <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections['chromium'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-6 bg-white border border-primary/20 rounded-b-lg">
                          <img src={chromiumImage} alt="Hexavalent chromium contamination" className="w-full h-64 object-cover rounded-lg mb-6" />
                          
                          <h4 className="text-lg font-semibold mb-4">The Chromium-6 Crisis</h4>
                          <p className="mb-4">Made famous by the Erin Brockovich case against PG&E, hexavalent chromium (Chromium-6) contamination affects hundreds of California water systems. This highly toxic metal causes cancer when ingested or inhaled, with no safe exposure level.</p>

                          <h4 className="text-lg font-semibold mb-4">Sources of Chromium-6</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Industrial Operations:</strong> Chrome plating, stainless steel production, leather tanning</li>
                            <li><strong>Natural Geology:</strong> Naturally occurring in some California groundwater</li>
                            <li><strong>Cooling Towers:</strong> Anti-corrosion agents like in the Hinkley case</li>
                            <li><strong>Wood Treatment:</strong> Chromated copper arsenate (CCA) preservatives</li>
                            <li><strong>Remediation Sites:</strong> Oxidation of Chromium-3 during cleanup creating Chromium-6</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">Health Effects</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Lung cancer (when inhaled)</li>
                            <li>Stomach and intestinal cancer (when ingested)</li>
                            <li>Liver and kidney damage</li>
                            <li>Reproductive harm and birth defects</li>
                            <li>Skin burns and ulcers</li>
                            <li>Respiratory problems and nasal damage</li>
                          </ul>

                          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="text-lg font-semibold text-blue-700 mb-2">California's Nation-Leading Standard</h4>
                            <p className="text-blue-600">California set the nation's first drinking water standard for hexavalent chromium at 10 parts per billion in 2024, affecting 330 water sources statewide. The highest levels are in Riverside, Los Angeles, Yolo, and Ventura counties.</p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Benzene Section */}
                    <Collapsible open={expandedSections['benzene']} onOpenChange={() => toggleSection('benzene')}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-6 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300">
                          <h3 className="text-xl font-semibold flex items-center">
                            <Beaker className="w-6 h-6 mr-3" />
                            Benzene - Widespread Carcinogen in Products and Water
                          </h3>
                          <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections['benzene'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-6 bg-white border border-primary/20 rounded-b-lg">
                          <img src={benzeneImage} alt="Benzene contamination" className="w-full h-64 object-cover rounded-lg mb-6" />
                          
                          <h4 className="text-lg font-semibold mb-4">The Benzene Threat</h4>
                          <p className="mb-4">Benzene is a known human carcinogen causing leukemia and other blood cancers. Despite its dangers, benzene remains widespread in petroleum products, industrial operations, and consumer goods, contaminating air, water, and soil throughout California.</p>

                          <h4 className="text-lg font-semibold mb-4">Exposure Sources</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Petroleum Industry:</strong> Refineries, gas stations, and oil operations</li>
                            <li><strong>Consumer Products:</strong> Contaminated sunscreens, deodorants, hand sanitizers</li>
                            <li><strong>Vehicle Exhaust:</strong> Major source of ambient benzene exposure</li>
                            <li><strong>Industrial Solvents:</strong> Paints, adhesives, and chemical manufacturing</li>
                            <li><strong>Groundwater:</strong> BTEX contamination from underground storage tanks</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">Health Consequences</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Acute myeloid leukemia (AML)</li>
                            <li>Acute lymphocytic leukemia (ALL)</li>
                            <li>Chronic lymphocytic leukemia (CLL)</li>
                            <li>Multiple myeloma</li>
                            <li>Non-Hodgkin's lymphoma</li>
                            <li>Aplastic anemia and other blood disorders</li>
                            <li>Reproductive harm and birth defects</li>
                          </ul>

                          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                            <h4 className="text-lg font-semibold text-red-700 mb-2">Recent Contamination Scandals</h4>
                            <p className="text-red-600">Major recalls of sunscreens, dry shampoos, and antiperspirants containing benzene highlight ongoing exposure risks. Johnson & Johnson, Procter & Gamble, and other companies face lawsuits for benzene contamination in consumer products.</p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* Heavy Metals Section */}
                    <Collapsible open={expandedSections['heavy-metals']} onOpenChange={() => toggleSection('heavy-metals')}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-6 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300">
                          <h3 className="text-xl font-semibold flex items-center">
                            <AlertTriangle className="w-6 h-6 mr-3" />
                            Heavy Metals - Lead, Mercury, and Arsenic Poisoning
                          </h3>
                          <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections['heavy-metals'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-6 bg-white border border-primary/20 rounded-b-lg">
                          <img src={heavyMetalsImage} alt="Heavy metals contamination" className="w-full h-64 object-cover rounded-lg mb-6" />
                          
                          <h4 className="text-lg font-semibold mb-4">Persistent Toxic Metals</h4>
                          <p className="mb-4">Heavy metals accumulate in the body and environment, causing permanent damage to organs and developmental systems. Lead, mercury, arsenic, and cadmium contamination affects millions of Californians through drinking water, soil, and consumer products.</p>

                          <h4 className="text-lg font-semibold mb-4">Common Sources</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Lead:</strong> Old paint, pipes, soil contamination, imported products</li>
                            <li><strong>Mercury:</strong> Industrial emissions, dental amalgams, contaminated fish</li>
                            <li><strong>Arsenic:</strong> Groundwater, pressure-treated wood, pesticides</li>
                            <li><strong>Cadmium:</strong> Industrial operations, batteries, tobacco smoke</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">Health Effects</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Brain development damage in children</li>
                            <li>Cardiovascular disease and high blood pressure</li>
                            <li>Kidney and liver damage</li>
                            <li>Cancer (arsenic, cadmium)</li>
                            <li>Neurological disorders and memory loss</li>
                            <li>Reproductive harm and birth defects</li>
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* VOCs Section */}
                    <Collapsible open={expandedSections['vocs']} onOpenChange={() => toggleSection('vocs')}>
                      <CollapsibleTrigger className="w-full">
                        <div className="flex items-center justify-between p-6 bg-gradient-primary text-white rounded-lg hover:scale-105 transition-all duration-300">
                          <h3 className="text-xl font-semibold flex items-center">
                            <Leaf className="w-6 h-6 mr-3" />
                            VOCs - Volatile Organic Compounds in Air and Products
                          </h3>
                          <ChevronDown className={`w-6 h-6 transition-transform ${expandedSections['vocs'] ? 'rotate-180' : ''}`} />
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="p-6 bg-white border border-primary/20 rounded-b-lg">
                          <img src={vocsImage} alt="VOCs contamination" className="w-full h-64 object-cover rounded-lg mb-6" />
                          
                          <h4 className="text-lg font-semibold mb-4">Indoor and Outdoor Air Pollution</h4>
                          <p className="mb-4">Volatile Organic Compounds (VOCs) easily evaporate into the air we breathe, creating both indoor and outdoor pollution. These chemicals come from building materials, consumer products, industrial emissions, and vehicle exhaust.</p>

                          <h4 className="text-lg font-semibold mb-4">Common VOCs</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-2">
                            <li><strong>Formaldehyde:</strong> Building materials, furniture, adhesives</li>
                            <li><strong>Toluene:</strong> Paints, nail polish, gasoline</li>
                            <li><strong>Xylene:</strong> Printing inks, rubber, leather</li>
                            <li><strong>Ethylbenzene:</strong> Styrene production, gasoline</li>
                            <li><strong>Methylene Chloride:</strong> Paint strippers, aerosols</li>
                          </ul>

                          <h4 className="text-lg font-semibold mb-4">Health Effects</h4>
                          <ul className="list-disc pl-6 mb-4 space-y-1">
                            <li>Headaches and dizziness</li>
                            <li>Respiratory irritation and asthma</li>
                            <li>Eye, nose, and throat irritation</li>
                            <li>Liver and kidney damage</li>
                            <li>Cancer (some VOCs are carcinogenic)</li>
                            <li>Central nervous system effects</li>
                          </ul>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>

                    {/* More chemical sections would continue here... */}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Health Effects Section */}
            <section id="health-effects" className="content-section mb-12">
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <Heart className="w-8 h-8 mr-3 text-red-500" />
                    Health Effects of Toxic Exposure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={healthImage} alt="Environmental health effects" className="w-full h-64 object-cover rounded-lg mb-6" />
                  
                  <p className="text-lg mb-8">Environmental toxins attack every system in your body, causing immediate symptoms and long-term diseases that may not appear for decades.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                      <h3 className="text-xl font-semibold text-red-700 mb-4">Cancer Risks</h3>
                      <p className="text-red-600 mb-4">Many environmental toxins are known carcinogens causing various cancers years or decades after exposure. Children and pregnant women face the highest risks.</p>
                      <ul className="list-disc pl-4 text-red-600 space-y-1">
                        <li>Lung, kidney, and liver cancers</li>
                        <li>Leukemia and lymphomas</li>
                        <li>Brain and nervous system tumors</li>
                        <li>Reproductive organ cancers</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h3 className="text-xl font-semibold text-blue-700 mb-4">Neurological Effects</h3>
                      <p className="text-blue-600 mb-4">Toxic chemicals damage the nervous system, causing cognitive impairment, movement disorders, and behavioral changes.</p>
                      <ul className="list-disc pl-4 text-blue-600 space-y-1">
                        <li>Parkinson's and Alzheimer's disease</li>
                        <li>Learning disabilities in children</li>
                        <li>Memory loss and confusion</li>
                        <li>Depression and anxiety</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h3 className="text-xl font-semibold text-green-700 mb-4">Reproductive Harm</h3>
                      <p className="text-green-600 mb-4">Environmental toxins disrupt hormones and reproductive systems, affecting fertility and pregnancy outcomes.</p>
                      <ul className="list-disc pl-4 text-green-600 space-y-1">
                        <li>Infertility and miscarriage</li>
                        <li>Birth defects and developmental delays</li>
                        <li>Early puberty in children</li>
                        <li>Pregnancy complications</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h3 className="text-xl font-semibold text-purple-700 mb-4">Organ Damage</h3>
                      <p className="text-purple-600 mb-4">Toxic exposure damages vital organs, causing chronic diseases and reducing life expectancy.</p>
                      <ul className="list-disc pl-4 text-purple-600 space-y-1">
                        <li>Kidney and liver disease</li>
                        <li>Heart disease and stroke</li>
                        <li>Respiratory problems</li>
                        <li>Immune system disorders</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <Shield className="w-8 h-8 mr-3 text-blue-500" />
                    The Legal Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={legalProcessImage} alt="Environmental legal process" className="w-full h-64 object-cover rounded-lg mb-6" />
                  
                  <p className="text-lg mb-8">How we fight for your rights and maximum compensation</p>

                  <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Free Consultation & Case Evaluation</h3>
                        <p className="text-muted-foreground mb-3">We begin with a comprehensive evaluation of your exposure and damages, completely free and confidential.</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Documenting your exposure history and timeline</li>
                          <li>Reviewing medical records and diagnoses</li>
                          <li>Identifying all potentially responsible parties</li>
                          <li>Assessing property damage and economic losses</li>
                        </ul>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">Investigation & Evidence Collection</h3>
                        <p className="text-muted-foreground mb-3">We conduct thorough investigations to build your case with compelling evidence.</p>
                        <ul className="list-disc pl-6 space-y-1 text-sm">
                          <li>Environmental testing of soil, water, and air</li>
                          <li>Review of regulatory records and violations</li>
                          <li>Corporate document discovery</li>
                          <li>Expert witness consultation</li>
                        </ul>
                      </div>
                    </div>

                    {/* Continue with more steps... */}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <MessageCircle className="w-8 h-8 mr-3 text-green-500" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-8">Get answers to common questions about environmental toxic exposure cases</p>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-lg pr-4 text-foreground">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 text-primary transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedFaq === index && (
                          <div className="p-6 border-t border-gray-200 bg-gray-50">
                            <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <Card className="hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-primary mb-6 flex items-center">
                    <Building className="w-8 h-8 mr-3 text-purple-500" />
                    Resources & Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Legal Resources</h3>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}>
                          <Scale className="w-4 h-4 mr-2" />
                          Free Case Evaluation
                        </Button>
                        <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/environmental-toxic-compensation-calculator'}>
                          <AlertTriangle className="w-4 h-4 mr-2" />
                          Compensation Calculator
                        </Button>
                        <Button variant="outline" className="w-full justify-start" onClick={() => window.location.href = '/environmental-toxic-legal-guidance'}>
                          <FileText className="w-4 h-4 mr-2" />
                          Legal Guidance
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Emergency Contacts</h3>
                      <div className="space-y-3 bg-red-50 p-4 rounded-lg">
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 mr-3 text-red-600" />
                          <div>
                            <p className="font-medium">24/7 Legal Hotline</p>
                            <p className="text-red-600 font-bold">(818) 123-4567</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-red-600" />
                          <div>
                            <p className="font-medium">Emergency Email</p>
                            <p className="text-red-600">urgent@lawfirm.com</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Don't Wait - Time Limits Apply Section */}
            <section className="content-section mb-12">
              <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white hover:scale-105 transition-all duration-300 shadow-elegant">
                <CardContent className="p-8 text-center">
                  <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                  <h2 className="text-3xl font-bold mb-4">Don't Wait - Time Limits Apply for California</h2>
                  <p className="text-xl mb-6 leading-relaxed">
                    California has strict deadlines for environmental toxic exposure claims. Evidence disappears, witnesses scatter, and corporations destroy documents. Acting quickly preserves your rights and maximizes your compensation.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <Clock className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Statute of Limitations</h3>
                      <p className="text-sm">Generally 2 years from discovery, but exceptions apply for toxic exposure cases</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <Shield className="w-8 h-8 mx-auto mb-2" />
                      <h3 className="font-semibold mb-2">Evidence Preservation</h3>
                      <p className="text-sm">Critical documents and testing evidence must be secured immediately</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg"
                      onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                    >
                      START YOUR FREE CASE EVALUATION NOW
                    </Button>
                    <p className="text-red-600 text-sm opacity-100">Call (818) 123-4567 - Available 24/7 for Environmental Emergencies</p>
                  </div>
                </CardContent>
              </Card>
            </section>
            
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
                  <div className="text-center">
                    <img 
                      src={sidebarImage} 
                      alt="Environmental toxic exposure legal consultation"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </div>

                  {/* Option 1 - Phone */}
                  <div className="p-4 border-2 border-green-200 rounded-lg bg-green-50 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">1</div>
                      <Phone className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="font-semibold text-green-700">Call Now</h3>
                    </div>
                    <p className="text-green-600 text-sm mb-3">Speak directly with an experienced environmental attorney</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold" 
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <span className="text-white font-bold">(818) 123-4567</span>
                    </Button>
                  </div>

                  {/* Option 2 - Online Form */}
                  <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">2</div>
                      <FileText className="w-6 h-6 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-blue-700">Online Form</h3>
                    </div>
                    <p className="text-blue-600 text-sm mb-3">Complete our confidential case evaluation form</p>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold" 
                      onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                    >
                      <span className="text-white font-bold">Start Evaluation</span>
                    </Button>
                  </div>

                  {/* Option 3 - Email */}
                  <div className="p-4 border-2 border-purple-200 rounded-lg bg-purple-50 hover:scale-105 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">3</div>
                      <Mail className="w-6 h-6 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-purple-700">Email Us</h3>
                    </div>
                    <p className="text-purple-600 text-sm mb-3">Send us details about your toxic exposure case</p>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold" 
                      onClick={() => window.location.href = 'mailto:contact@lawfirm.com'}
                    >
                      <span className="text-white font-bold">Send Email</span>
                    </Button>
                  </div>

                  <div className="bg-gradient-primary text-white p-4 rounded-lg text-center">
                    <Star className="w-8 h-8 mx-auto mb-2 text-yellow-300" />
                    <p className="font-semibold mb-2">No Fees Unless We Win</p>
                    <p className="text-sm opacity-90">Free consultation • No upfront costs</p>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Available 24/7 for Environmental Emergencies</p>
                    <p className="font-semibold">Attorney-Client Privilege Protected</p>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Sidebar Resources */}
              <Card className="bg-gradient-subtle border-red-200 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-red-600 text-center">
                    🚨 Environmental Emergency?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm mb-4">If you're experiencing immediate health effects from toxic exposure:</p>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold mb-2" 
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <span className="text-white font-bold">CALL EMERGENCY LINE</span>
                  </Button>
                  <p className="text-xs text-red-600">Available 24/7 • Immediate Response</p>
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