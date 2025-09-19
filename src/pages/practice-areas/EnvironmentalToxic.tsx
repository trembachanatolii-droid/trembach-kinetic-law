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
import { ToxicHeroScene } from '@/components/three/ToxicHeroScene';
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

      // Floating Background Layers + Interactive Parallax
      let heroEl: HTMLElement | null = null;
      if (heroRef.current) {
        heroEl = heroRef.current as HTMLElement;
        const backLayer = heroEl.querySelector('.back-layer') as HTMLElement | null;
        const midLayer = heroEl.querySelector('.mid-layer') as HTMLElement | null;
        const frontLayer = heroEl.querySelector('.front-layer') as HTMLElement | null;

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

        const onMouseMove = (e: MouseEvent) => {
          const rect = heroEl!.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          gsap.to(heroEl!.querySelector('.hero-content'), {
            x: relX * 20,
            y: relY * 20,
            rotationY: relX * 6,
            rotationX: -relY * 6,
            transformPerspective: 1000,
            transformOrigin: 'center',
            duration: 0.5,
            ease: 'power3.out'
          });

          backLayer && gsap.to(backLayer, { x: relX * -30, y: relY * -30, duration: 0.8, ease: 'power2.out' });
          midLayer && gsap.to(midLayer, { x: relX * -60, y: relY * -40, duration: 0.8, ease: 'power2.out' });
          frontLayer && gsap.to(frontLayer, { x: relX * 40, y: relY * 30, duration: 0.8, ease: 'power2.out' });
        };

        heroEl.addEventListener('mousemove', onMouseMove);
        // store remover on element for cleanup
        (heroEl as any)._onMouseMove = onMouseMove;
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Environmental Toxic Exposure Lawyers | PFAS, TCE, Chemical Contamination Attorney"
        description="Former defense attorney fights for toxic exposure victims. PFAS, TCE, chromium-6, benzene contamination lawsuits. Free consultation. No fees unless we win."
        canonical="/practice-areas/environmental-toxic"
      />
      
      <Navigation />
      <GoBack className="go-back-button fixed top-32 left-4 z-50 opacity-0 invisible transition-all duration-300 [&.show]:opacity-100 [&.show]:visible" />

      {/* Hero Section with improved visibility */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden parallax-container"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* 3D Canvas Layer */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {/* Toxic 3D Hero Scene */}
          <ToxicHeroScene />
        </div>

        {/* Contrast overlay */}
        <div className="absolute inset-0 bg-black/75"></div>
        
        {/* Floating Background Layers */}
        <div className="absolute inset-0 opacity-30">
          <div className="back-layer absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent"></div>
          <div className="mid-layer absolute inset-0 bg-gradient-to-tr from-transparent to-accent/25"></div>
          <div className="front-layer absolute inset-0 bg-gradient-to-bl from-primary-glow/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-white drop-shadow-2xl">
              Environmental
              <span className="block bg-gradient-primary bg-clip-text text-transparent drop-shadow-none">
                Toxic Exposure
              </span>
              <span className="text-white drop-shadow-2xl">Attorney</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white drop-shadow-xl font-medium max-w-4xl mx-auto">
              For decades, corporations have contaminated our water, air, and soil with toxic 
              chemicals that cause cancer, birth defects, and chronic diseases. As a former 
              defense attorney, I know their tactics. Now I use that insider knowledge to protect 
              families and communities throughout California from environmental poisoning.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary text-white font-bold text-lg px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-white/20"
              onClick={handleFormSubmit}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-background/95 border-b border-border shadow-lg">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 space-x-1">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  className={`flex items-center space-x-2 whitespace-nowrap px-4 py-2 rounded-full transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-primary text-white shadow-lg scale-105' 
                      : 'text-gray-600 hover:text-primary hover:bg-primary/10'
                  }`}
                  onClick={() => scrollToSection(tab.id)}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium text-foreground">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-12 gap-12" ref={contentRef}>
        {/* Main Content */}
        <div className="flex-1 space-y-16">
          
          {/* Overview Section */}
          <section id="overview" className="content-section scroll-mt-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                California Environmental Toxic Exposure Victims
              </h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                If you've been harmed by environmental contamination in California, you have rights. 
                We fight for maximum compensation from responsible corporations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50">
                <CardContent className="p-8 text-center">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">No Upfront Costs</h3>
                  <p className="text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-green-50/50">
                <CardContent className="p-8 text-center">
                  <Award className="w-16 h-16 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Former Defense Attorney</h3>
                  <p className="text-muted-foreground">Insider knowledge of corporate defense tactics gives you an advantage.</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/50">
                <CardContent className="p-8 text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Proven Track Record</h3>
                  <p className="text-muted-foreground">Millions recovered for toxic exposure victims across California.</p>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Environmental Toxic Exposure Overview</h3>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                Environmental toxic exposure occurs when individuals are exposed to harmful chemicals in their environment, 
                leading to serious health consequences, property damage, and diminished quality of life. In California, 
                we've seen widespread contamination from industrial activities, military operations, and corporate negligence 
                affecting entire communities.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <h4 className="font-semibold mb-3 text-red-800 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Common Contamination Sources
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-red-700 text-sm">
                    <li>Industrial manufacturing facilities</li>
                    <li>Military bases and testing sites</li>
                    <li>Dry cleaning operations using TCE/PCE</li>
                    <li>Landfills and waste disposal sites</li>
                    <li>Agricultural pesticide and herbicide use</li>
                    <li>Aerospace and defense contractors</li>
                    <li>Metal plating and chrome facilities</li>
                  </ul>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20">
                  <h4 className="font-semibold mb-3 text-primary flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Health Effects
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-primary/80 text-sm">
                    <li>Various cancers and tumors</li>
                    <li>Neurological and cognitive disorders</li>
                    <li>Reproductive and birth defects</li>
                    <li>Respiratory and lung diseases</li>
                    <li>Liver and kidney damage</li>
                    <li>Immune system suppression</li>
                    <li>Chronic fatigue and illness</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case Evaluation Section */}
          <section id="evaluation" className="content-section scroll-mt-24 bg-gradient-to-br from-blue-50 to-indigo-50 p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Free Case Evaluation</h2>
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Type of Exposure</label>
                  <Select value={formData.exposureType} onValueChange={(value) => setFormData({...formData, exposureType: value})}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select exposure type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pfas">PFAS "Forever Chemicals"</SelectItem>
                      <SelectItem value="tce-pce">TCE/PCE Solvents</SelectItem>
                      <SelectItem value="chromium">Hexavalent Chromium</SelectItem>
                      <SelectItem value="benzene">Benzene</SelectItem>
                      <SelectItem value="heavy-metals">Heavy Metals</SelectItem>
                      <SelectItem value="pesticides">Pesticides/Herbicides</SelectItem>
                      <SelectItem value="other">Other/Multiple</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Location of Exposure</label>
                  <Input 
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="City, workplace, or facility name"
                    className="bg-white"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary text-white font-bold text-lg py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Get My Free Case Evaluation
                </Button>
              </form>
            </div>
          </section>

          {/* Toxic Chemicals Section */}
          <section id="toxic-chemicals" className="content-section scroll-mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Major Toxic Chemicals We Handle</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "PFAS 'Forever Chemicals'",
                  image: pfasImage,
                  description: "Persistent chemicals that never break down, linked to cancer, liver damage, and immune system problems. Found in drinking water, firefighting foam, and consumer products.",
                  health: ["Kidney & testicular cancer", "Liver damage", "Immune system damage", "Thyroid disease"]
                },
                {
                  title: "TCE/PCE Solvents",
                  image: solventsImage,
                  description: "Industrial solvents used in dry cleaning and degreasing operations. Cause kidney cancer, liver cancer, and Parkinson's disease.",
                  health: ["Kidney cancer", "Liver cancer", "Non-Hodgkin's lymphoma", "Parkinson's disease"]
                },
                {
                  title: "Hexavalent Chromium",
                  image: chromiumImage,
                  description: "Known carcinogen with no safe exposure level. Made famous by Erin Brockovich case. Causes lung and stomach cancer.",
                  health: ["Lung cancer", "Stomach cancer", "Respiratory problems", "Skin ulcers"]
                },
                {
                  title: "Benzene",
                  image: benzeneImage,
                  description: "Petroleum-based carcinogen causing blood cancers. Found in gasoline, industrial solvents, and contaminated consumer products.",
                  health: ["Leukemia", "Lymphoma", "Blood disorders", "Immune suppression"]
                },
                {
                  title: "Heavy Metals",
                  image: heavyMetalsImage,
                  description: "Lead, mercury, arsenic, and cadmium accumulate in the body causing permanent damage to organs and nervous system.",
                  health: ["Brain damage", "Kidney damage", "Cancer", "Developmental disorders"]
                },
                {
                  title: "VOCs",
                  image: vocsImage,
                  description: "Volatile organic compounds that evaporate into air, including formaldehyde, toluene, and xylene. Cause respiratory and neurological problems.",
                  health: ["Respiratory problems", "Headaches", "Neurological damage", "Cancer risk"]
                }
              ].map((chemical, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${chemical.image})` }}>
                    <div className="h-full bg-black/50 flex items-end p-4">
                      <h3 className="text-xl font-bold text-white drop-shadow-lg">{chemical.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">{chemical.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-700">Health Effects:</h4>
                      <ul className="text-sm text-red-600 space-y-1">
                        {chemical.health.map((effect, i) => (
                          <li key={i}>• {effect}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Health Effects Section */}
          <section id="health-effects" className="content-section scroll-mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Health Effects of Toxic Exposure</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img src={healthImage} alt="Health effects of toxic exposure" className="rounded-2xl shadow-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Immediate and Long-Term Health Impacts</h3>
                <p className="text-lg mb-6 text-muted-foreground">
                  Toxic exposure can cause immediate symptoms like headaches and nausea, but the most serious 
                  effects often appear years or decades later. Many victims don't realize their health problems 
                  are connected to past exposure until it's almost too late to seek legal remedies.
                </p>
                
                <div className="space-y-4">
                  {[
                    { category: "Cancer & Tumors", effects: "Various cancers including lung, kidney, liver, blood, and brain cancers" },
                    { category: "Neurological", effects: "Parkinson's disease, cognitive impairment, memory loss, seizures" },
                    { category: "Reproductive", effects: "Infertility, miscarriages, birth defects, developmental delays" },
                    { category: "Organ Damage", effects: "Liver disease, kidney failure, heart problems, lung disease" }
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">{item.category}</h4>
                      <p className="text-sm text-muted-foreground">{item.effects}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Legal Process Section */}
          <section id="legal-process" className="content-section scroll-mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our Legal Process</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">How We Handle Your Case</h3>
                
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Free Consultation", description: "We evaluate your case at no cost and explain your legal options." },
                    { step: 2, title: "Investigation", description: "We conduct thorough investigation including environmental testing and expert analysis." },
                    { step: 3, title: "File Claims", description: "We file strategic legal claims to maximize your recovery potential." },
                    { step: 4, title: "Discovery", description: "We gather evidence, take depositions, and build your strongest case." },
                    { step: 5, title: "Settlement/Trial", description: "We negotiate for maximum compensation or take your case to trial." }
                  ].map((item) => (
                    <div key={item.step} className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img src={legalProcessImage} alt="Legal process for toxic exposure cases" className="rounded-2xl shadow-xl" />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="content-section scroll-mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Collapsible key={index} open={expandedFaq === index} onOpenChange={(open) => setExpandedFaq(open ? index : null)}>
                    <CollapsibleTrigger 
                      className="flex w-full items-center justify-between rounded-lg bg-secondary p-6 text-left hover:bg-secondary/80 transition-colors duration-200"
                    >
                      <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="px-6 pb-6 pt-2">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="content-section scroll-mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Additional Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Scale className="w-5 h-5 mr-2" />
                    Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Get a comprehensive evaluation of your toxic exposure case.</p>
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                  >
                    Start Evaluation
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <FileText className="w-5 h-5 mr-2" />
                    Legal Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Understand your rights and the legal process.</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/environmental-toxic-legal-guidance'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Building className="w-5 h-5 mr-2" />
                    Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">Access support services and educational materials.</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/environmental-toxic-resources'}
                  >
                    View Resources
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar */}
        <div className="lg:w-80 lg:sticky lg:top-32 lg:self-start">
          <Card className="shadow-2xl bg-gradient-to-br from-white to-blue-50/30 border-2 border-primary/20">
            <CardHeader className="text-center bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-lg">
              <CardTitle className="text-xl font-bold">3 Ways to Start Your Case</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="p-6">
                <img src={sidebarImage} alt="Environmental toxic exposure evaluation" className="w-full h-40 object-cover rounded-lg mb-6" />
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-base hover:scale-105 transition-all duration-300 shadow-lg"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-sm font-medium text-foreground mb-1">Speak directly with an experienced</p>
                    <p className="text-sm text-muted-foreground">environmental attorney</p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 text-base transition-all duration-300"
                  onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Free Case Evaluation
                </Button>
              </div>

              <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-b-lg">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white font-bold py-3 text-base transition-all duration-300"
                  onClick={() => window.location.href = '/environmental-toxic-compensation-calculator'}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Compensation Calculator
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Contact Info */}
          <div className="mt-6 text-center bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-2 text-foreground">Available 24/7</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Environmental emergencies don't wait. Neither do we.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center text-primary">
                <Clock className="w-4 h-4 mr-2" />
                <span>24 Hours / 7 Days</span>
              </div>
              <div className="flex items-center justify-center text-primary">
                <Map className="w-4 h-4 mr-2" />
                <span>Serving All of California</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentalToxic;