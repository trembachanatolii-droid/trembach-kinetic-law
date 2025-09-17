import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
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
  Truck,
  Construction,
  Wrench,
  Gavel,
  Eye,
  CheckCircle,
  Calculator,
  BookOpen,
  HelpCircle,
  Play,
  Pause,
  RotateCcw,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/truck-accidents-hero-new.jpg';
import sidebarImage from '@/assets/practice-areas/truck-18-wheeler.jpg';
import legalProcessImage from '@/assets/practice-areas/truck-legal-process.jpg';
import truckingRegulationsImage from '@/assets/practice-areas/trucking-regulations.jpg';
import investigationImage from '@/assets/practice-areas/truck-investigation.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  speed: number;
}

const TruckAccidentsNew: React.FC = () => {
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
    description: ''
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const [stats, setStats] = useState({
    trucksDaily: 0,
    accidents: 0,
    fatalities: 0,
    experience: 0
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'trucking-regulations', label: 'TRUCKING REGULATIONS', icon: Truck },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Gavel },
    { id: 'investigation', label: 'INVESTIGATION', icon: Eye },
    { id: 'resources', label: 'RESOURCES', icon: Building },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  // Initialize particles
  useEffect(() => {
    const newParticles: ParticleProps[] = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5
      });
    }
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y + particle.speed,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.5
      })).filter(particle => particle.y < window.innerHeight)
        .concat(Array.from({ length: Math.random() > 0.98 ? 1 : 0 }, () => ({
          x: Math.random() * window.innerWidth,
          y: -10,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 0.5
        })))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for magnetic cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.fromTo(heroRef.current?.querySelector('.hero-bg'),
        { scale: 1.2 },
        { 
          scale: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // Hero content animation
      gsap.timeline()
        .fromTo(heroRef.current?.querySelector('.hero-title'),
          { opacity: 0, y: 80, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
        )
        .fromTo(heroRef.current?.querySelector('.hero-subtitle'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8'
        )
        .fromTo(heroRef.current?.querySelector('.hero-cta'),
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, '-=0.6'
        );

      // Animated statistics counter
      const animateStats = () => {
        gsap.to(setStats, {
          duration: 2,
          trucksDaily: 20000,
          accidents: 5000,
          fatalities: 150000,
          experience: 25,
          ease: "power2.out",
          onUpdate: function() {
            setStats({
              trucksDaily: Math.floor(this.targets()[0].trucksDaily),
              accidents: Math.floor(this.targets()[0].accidents),
              fatalities: Math.floor(this.targets()[0].fatalities),
              experience: Math.floor(this.targets()[0].experience)
            });
          }
        });
      };

      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: animateStats,
        once: true
      });

      // 3D card hover effects
      const cards = contentRef.current?.querySelectorAll('.practice-card');
      cards?.forEach(card => {
        const cardElement = card as HTMLElement;
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(card, {
            rotateX: -10,
            rotateY: 10,
            z: 50,
            duration: 0.3,
            ease: "power2.out",
            transformOrigin: "center center -100px"
          });
        });

        cardElement.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

      // Content sections stagger animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 60, rotateX: 15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Timeline animations
      const timelineItems = document.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
          { 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

    }, [heroRef, contentRef, statsRef]);

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
    window.location.href = '/case-evaluation';
  };

  const faqData = [
    {
      question: "How long do I have to file a truck accident claim in California?",
      answer: "In California, you generally have two years from the date of the accident to file a personal injury claim against the responsible parties. However, there are important exceptions that could extend or shorten this deadline. For example, if a government entity is involved, you may have only six months to file a claim. If the victim dies from their injuries, the family has two years from the date of death to file a wrongful death claim. It's crucial to consult with an experienced truck accident attorney immediately after your accident to ensure you don't miss any critical deadlines that could bar your claim entirely."
    },
    {
      question: "Who can be held liable in a California truck accident case?",
      answer: "Truck accident cases often involve multiple liable parties due to the complex nature of the commercial trucking industry. Potentially liable parties include: the truck driver (for violations of traffic laws, hours of service regulations, or drug/alcohol use), the trucking company (for negligent hiring, inadequate training, poor maintenance, or pressuring drivers to violate safety regulations), cargo loading companies (for improper loading that causes accidents), truck maintenance companies (for inadequate repairs or inspections), parts manufacturers (for defective truck components), and even government entities (for poor road design or maintenance). Our investigation will identify all potentially liable parties to maximize your recovery."
    },
    {
      question: "What if the truck driver was an independent contractor?",
      answer: "Even when a truck driver is classified as an independent contractor rather than an employee, the trucking company may still be held liable under various legal theories. These include negligent hiring (failing to properly screen the driver's qualifications and safety record), negligent supervision (failing to monitor the driver's performance and compliance with safety regulations), apparent authority (when the company holds the driver out as their employee to the public), and control over operations (when the company exercises significant control over how, when, and where the driver operates). California law is particularly favorable to accident victims in piercing the independent contractor shield when trucking companies try to avoid responsibility for accidents caused by drivers working under their authority."
    },
    {
      question: "How much is my truck accident case worth in California?",
      answer: "The value of a truck accident case depends on numerous factors and can range from hundreds of thousands to millions of dollars. Key factors include: severity and permanence of injuries, current and future medical expenses, lost wages and diminished earning capacity, pain and suffering, property damage, degree of fault by each party, and available insurance coverage. California's pure comparative negligence law means you can recover damages even if you were partially at fault, though your recovery will be reduced by your percentage of fault. Our attorneys work with medical experts, vocational rehabilitation specialists, and economists to accurately calculate both economic and non-economic damages to ensure you receive maximum compensation."
    },
    {
      question: "Do I need to hire an attorney for a truck accident in California?",
      answer: "Yes, hiring an experienced truck accident attorney is essential. Truck accident cases are among the most complex personal injury cases, involving federal regulations, multiple defendants, aggressive defense teams, and substantial insurance policies. Trucking companies and their insurers deploy rapid response teams immediately after accidents to minimize their liability. Without experienced legal representation, you'll be at a severe disadvantage against teams of corporate attorneys and investigators working to deny or minimize your claim. An attorney will protect evidence, handle communications with insurance companies, investigate the accident thoroughly, and fight for maximum compensation while you focus on recovery."
    }
  ];

  return (
    <>
      <SEO 
        title="California Truck Accident Lawyers | 18-Wheeler Injury Attorneys | Trembach Law Firm"
        description="Former defense attorney fighting for California truck accident victims. Catastrophic injury experts specializing in 18-wheeler collisions. Free consultation 24/7. No fees unless we win. Call (855) 985-1234."
        canonical="/practice-areas/truck-18-wheeler-accidents"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Truck Accident Division",
          "description": "California truck accident attorneys specializing in catastrophic injuries from commercial vehicle crashes",
          "url": "https://www.trembachlawfirm.com/practice-areas/truck-18-wheeler-accidents/",
          "telephone": "+18559851234",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "27001 Agoura Road, Suite 350",
            "addressLocality": "Calabasas",
            "addressRegion": "CA",
            "postalCode": "91301"
          },
          "areaServed": "California",
          "priceRange": "No fees unless we win"
        }}
      />

      <Navigation />

      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-4 h-4 bg-red-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Particle Background */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none z-0">
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute bg-white/20 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              transition: 'all 0.1s ease-out'
            }}
          />
        ))}
      </div>

      <div className="min-h-screen bg-background relative z-10">
        {/* Hero Section with Parallax */}
        <section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div 
            className="hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />
          
          {/* Go Back Button - Positioned below navigation */}
          <div className="absolute top-24 left-6 z-20">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 bg-black/20 text-white hover:bg-black/40 backdrop-blur-md border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
            <div className="hero-content space-y-8">
              <h1 className="hero-title text-6xl md:text-8xl font-bold leading-tight">
                California Truck Accident Lawyers
              </h1>
              
              <p className="hero-subtitle text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
                Former Defense Attorney Fighting Big Trucking Companies • Catastrophic Injury Experts
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-3 text-xl font-semibold">Fighting for Maximum Compensation</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="hero-cta bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/case-evaluation'}
              >
                START FREE CASE EVALUATION
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap justify-center gap-2 py-6">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`practice-card flex items-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg backdrop-blur-md border ${
                        activeTab === tab.id 
                          ? 'bg-white/20 text-white border-white/40 shadow-lg' 
                          : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10 hover:border-white/30'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Animated Statistics Section */}
        <section ref={statsRef} className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="practice-card">
                <div className="text-4xl md:text-6xl font-bold text-red-400 mb-2">
                  {stats.trucksDaily.toLocaleString()}+
                </div>
                <div className="text-lg text-gray-300">Daily Port Trucks in CA</div>
              </div>
              <div className="practice-card">
                <div className="text-4xl md:text-6xl font-bold text-red-400 mb-2">
                  {stats.accidents.toLocaleString()}+
                </div>
                <div className="text-lg text-gray-300">Annual Truck Deaths</div>
              </div>
              <div className="practice-card">
                <div className="text-4xl md:text-6xl font-bold text-red-400 mb-2">
                  {stats.fatalities.toLocaleString()}+
                </div>
                <div className="text-lg text-gray-300">Annual Truck Injuries</div>
              </div>
              <div className="practice-card">
                <div className="text-4xl md:text-6xl font-bold text-red-400 mb-2">
                  {stats.experience}+
                </div>
                <div className="text-lg text-gray-300">Years Defense Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2" ref={contentRef}>
              
              {/* Overview Section */}
              <section id="overview" className="content-section mb-16 bg-white rounded-2xl shadow-2xl p-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400" />
                
                <div className="flex items-center mb-8">
                  <div className="bg-red-100 p-4 rounded-xl mr-6">
                    <FileText className="w-8 h-8 text-red-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Fighting for California Truck Accident Victims</h2>
                </div>
                
                <div className="prose prose-xl max-w-none mb-8">
                  <p className="text-xl leading-relaxed text-gray-700 mb-6">
                    Every year, over 5,000 people die and 150,000 suffer injuries in commercial truck accidents across America, with California's massive transportation infrastructure bearing a disproportionate share of these devastating collisions. When an 80,000-pound eighteen-wheeler collides with a passenger vehicle, the results are catastrophic—traumatic brain injuries, spinal cord damage, multiple fractures, and too often, death.
                  </p>
                  
                  <p className="text-xl leading-relaxed text-gray-700">
                    At Trembach Law Firm, we leverage our former defense attorney insight to combat the immediate response teams, aggressive defense tactics, and unlimited resources trucking companies deploy to minimize their liability while you focus on recovery.
                  </p>
                </div>

                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('evaluation')}
                  className="w-full py-4 text-lg border-2 border-red-200 hover:border-red-400 hover:bg-red-50 mb-8"
                >
                  Get Your Free Case Evaluation Now
                </Button>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-16 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-2xl p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-red-200 p-4 rounded-xl mr-6">
                    <Scale className="w-8 h-8 text-red-700" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Free Case Evaluation</h2>
                </div>
                
                <div className="bg-white p-10 rounded-xl shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Get Your Free Consultation</h3>
                  <p className="text-lg mb-8 text-center text-gray-600">Provide some basic information to help us understand your truck accident case better.</p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">First Name *</label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          required
                          className="border-2 border-gray-200 focus:border-red-500 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Last Name *</label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                          className="border-2 border-gray-200 focus:border-red-500 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          required
                          className="border-2 border-gray-200 focus:border-red-500 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Phone *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          required
                          className="border-2 border-gray-200 focus:border-red-500 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Accident Date</label>
                        <Input
                          type="date"
                          value={formData.accidentDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                          className="border-2 border-gray-200 focus:border-red-500 py-3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-700">Type of Injury</label>
                        <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                          <SelectTrigger className="border-2 border-gray-200 focus:border-red-500 py-3">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                            <SelectItem value="fractures">Multiple Fractures</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="burns">Burn Injuries</SelectItem>
                            <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                            <SelectItem value="other">Other Severe Injuries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700">Brief Description of Accident</label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                        rows={4}
                        className="border-2 border-gray-200 focus:border-red-500"
                        placeholder="Please describe what happened..."
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                      Start My Free Case Evaluation
                    </Button>
                  </form>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-16 bg-white rounded-2xl shadow-2xl p-12">
                <div className="flex items-center mb-8">
                  <div className="bg-blue-100 p-4 rounded-xl mr-6">
                    <HelpCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 py-6">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Quick Contact Card */}
                <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white shadow-2xl border-0 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center text-2xl">
                      <Phone className="w-6 h-6 mr-3" />
                      Free Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative z-10">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">(855) 985-1234</div>
                      <div className="text-red-100">Available 24/7</div>
                    </div>
                    <Button className="w-full bg-white text-red-600 hover:bg-red-50 font-bold py-4">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-red-600 font-bold py-4">
                      <Mail className="w-5 h-5 mr-2" />
                      Email Consultation
                    </Button>
                    <div className="text-center text-red-100 font-semibold">
                      No Fee Unless We Win
                    </div>
                  </CardContent>
                </Card>

                {/* Sidebar Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={sidebarImage} 
                    alt="California truck accident legal representation" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Maximum Compensation</h3>
                    <p className="text-sm opacity-90">Former defense attorney advantage</p>
                  </div>
                </div>

                {/* Key Benefits */}
                <Card className="shadow-2xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Why Choose Trembach Law</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Former Defense Attorney</div>
                        <div className="text-sm text-gray-600">Inside knowledge of trucking company tactics</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">24/7 Availability</div>
                        <div className="text-sm text-gray-600">Immediate response to protect evidence</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">No Fees Unless We Win</div>
                        <div className="text-sm text-gray-600">Contingency fee arrangement</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-gray-900">Catastrophic Injury Experts</div>
                        <div className="text-sm text-gray-600">Maximum compensation specialists</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TruckAccidentsNew;