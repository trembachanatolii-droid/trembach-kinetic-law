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
  ArrowRight,
  Anchor,
  Ship
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/maritime-hero-bg.jpg';
import sidebarImage from '@/assets/maritime-sidebar.jpg';
import medicalImage from '@/assets/maritime-medical-facility.jpg';
import legalProcessImage from '@/assets/maritime-legal-process.jpg';
import californiaMaritimeImage from '@/assets/california-maritime-zones.jpg';
import overviewImage from '@/assets/maritime-overview.jpg';
import immediateStepsImage from '@/assets/maritime-immediate-steps.jpg';
import resourcesImage from '@/assets/maritime-resources-section.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MaritimeAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentType: '',
    incidentDate: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'medical-care', label: 'MEDICAL CARE', icon: Stethoscope },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  // Comprehensive FAQ data with 50+ questions
  const faqData = [
    {
      category: "Jones Act & Seamen Rights",
      questions: [
        {
          q: "What is the Jones Act and who does it protect?",
          a: "The Jones Act is a federal law that protects seamen who are injured due to their employer's negligence. To qualify, you must spend at least 30% of your work time on a vessel in navigation and contribute to the vessel's function or mission. The Jones Act provides broader protections than traditional workers' compensation."
        },
        {
          q: "How do I prove I qualify as a seaman under the Jones Act?",
          a: "Courts examine your connection to a vessel in navigation, the duration of that connection, the nature of your work, and your exposure to the perils of the sea. Documentation of your work assignments, vessel logs, and employment records are crucial evidence."
        },
        {
          q: "What are maintenance and cure benefits?",
          a: "Maintenance and cure are benefits every injured seaman is entitled to regardless of fault. Maintenance covers living expenses during recovery, while cure covers all medical treatment until maximum medical improvement is reached."
        },
        {
          q: "Can I sue my employer under the Jones Act?",
          a: "Yes, if you qualify as a seaman and can prove your employer was negligent, you can sue for damages including lost wages, pain and suffering, and future earning capacity. This is in addition to maintenance and cure benefits."
        },
        {
          q: "What is vessel unseaworthiness and how does it differ from negligence?",
          a: "Unseaworthiness is an absolute duty - vessel owners must provide a seaworthy vessel regardless of negligence. A vessel can be unseaworthy due to defective equipment, inadequate crew, dangerous conditions, or poor maintenance."
        }
      ]
    },
    {
      category: "Longshore Workers (LHWCA)",
      questions: [
        {
          q: "Who is covered under the Longshore and Harbor Workers' Compensation Act?",
          a: "LHWCA covers maritime workers who don't qualify as seamen, including longshoremen, harbor workers, ship repairers, marina workers, and others working on navigable waters or adjoining areas used in maritime commerce."
        },
        {
          q: "What benefits are available under LHWCA?",
          a: "LHWCA provides medical benefits, disability compensation (two-thirds of average weekly wage), vocational rehabilitation, and death benefits. It's a federal workers' compensation system with more generous benefits than most state systems."
        },
        {
          q: "Can I file both LHWCA and third-party claims?",
          a: "Yes, LHWCA beneficiaries can often pursue third-party claims against vessel owners for unseaworthiness, equipment manufacturers for defective products, or other parties whose negligence contributed to the injury."
        },
        {
          q: "What are the status and situs requirements for LHWCA coverage?",
          a: "Status means you must be engaged in maritime employment. Situs means the injury must occur on navigable waters or qualifying adjoining areas like piers, docks, terminals, or other areas used in maritime commerce."
        },
        {
          q: "How long do I have to report an LHWCA injury?",
          a: "You must report the injury to your employer within 30 days and file a formal claim within one year of the injury or last compensation payment. Missing these deadlines can bar your claim."
        }
      ]
    },
    {
      category: "Maritime Passenger Rights",
      questions: [
        {
          q: "What legal protections do passengers have on maritime vessels?",
          a: "Passengers are owed a high duty of care by vessel operators. This includes providing reasonable care for passenger safety, maintaining the vessel in safe condition, warning of known dangers, and providing adequate safety equipment and procedures."
        },
        {
          q: "What should I do if injured as a passenger on a cruise ship?",
          a: "Seek immediate medical attention, report the incident to ship security and medical staff, document the scene and your injuries, get witness information, and preserve all evidence including tickets and medical records."
        },
        {
          q: "Are cruise ship ticket contracts enforceable?",
          a: "Many ticket contract provisions are enforceable, including forum selection clauses and shortened time limits for filing claims. However, some limitations may be challengeable, especially if they're unreasonably restrictive or unclear."
        },
        {
          q: "How long do I have to file a lawsuit for a maritime passenger injury?",
          a: "Time limits vary but are often much shorter than land-based injuries - sometimes just one year. Cruise ship tickets may require even shorter notice periods, so it's crucial to consult an attorney immediately."
        },
        {
          q: "Can I sue for injuries on a ferry or water taxi?",
          a: "Yes, ferry and water taxi operators have the same duty to provide reasonable care for passenger safety. Common claims include slip and fall accidents, inadequate safety equipment, and operator negligence."
        }
      ]
    },
    {
      category: "Types of Maritime Accidents",
      questions: [
        {
          q: "What are the most common types of maritime accidents?",
          a: "Common maritime accidents include slip and falls on wet decks, crushing injuries from cargo handling, rope and cable injuries, machinery accidents, falls overboard, fires and explosions, and injuries from heavy weather conditions."
        },
        {
          q: "What should I do immediately after a maritime accident?",
          a: "Ensure your safety first, call for medical help, report the accident to the captain or supervisor, document the scene with photos if possible, get witness contact information, and seek medical attention even for seemingly minor injuries."
        },
        {
          q: "Who can be held liable for a commercial fishing vessel accident?",
          a: "Potentially liable parties include the vessel owner, captain, crew members, equipment manufacturers, port authorities, and other vessels. Liability depends on factors like negligence, vessel condition, safety violations, and weather conditions."
        },
        {
          q: "What compensation is available for offshore platform accidents?",
          a: "Compensation may include medical expenses, lost wages, pain and suffering, disability benefits, and future care costs. Available remedies depend on your employment status and may include Jones Act, LHWCA, or other maritime law protections."
        },
        {
          q: "Are recreational boating accidents covered by maritime law?",
          a: "Yes, recreational boating accidents on navigable waters are governed by maritime law. However, the applicable laws and available remedies may differ from commercial maritime accidents, and state law may also apply."
        }
      ]
    },
    {
      category: "California Maritime Law",
      questions: [
        {
          q: "Which California waters are considered navigable for maritime law purposes?",
          a: "California's navigable waters include the Pacific Ocean, San Francisco Bay, Los Angeles and Long Beach harbors, San Diego Bay, and other waters used in interstate or international commerce. Rivers and lakes may also qualify if used for commercial navigation."
        },
        {
          q: "What major California ports handle maritime injury cases?",
          a: "Major California maritime centers include Los Angeles/Long Beach (largest port complex), San Francisco Bay Area, San Diego, Oakland, Humboldt Bay, and Santa Barbara. Each has unique industry risks and legal considerations."
        },
        {
          q: "How does California state law interact with federal maritime law?",
          a: "Maritime law is primarily federal, but state law may apply to certain aspects like maritime contracts, some recreational boating accidents, and injuries occurring on land within port facilities. The interaction can be complex and requires specialized knowledge."
        },
        {
          q: "What are the unique risks of California maritime work?",
          a: "California maritime workers face risks from large container operations, fishing vessel dangers, offshore oil platforms, cruise ship operations, ferry services, and the state's active seismic environment affecting port facilities."
        },
        {
          q: "Are there special considerations for injuries at California military ports?",
          a: "Military maritime facilities may involve federal jurisdiction, special security considerations, and different liability rules. Civilian contractors and military personnel may have different legal remedies and procedural requirements."
        }
      ]
    },
    {
      category: "Legal Process & Compensation",
      questions: [
        {
          q: "How much does it cost to hire a maritime attorney?",
          a: "Most maritime attorneys work on contingency fee arrangements - you pay no attorney fees unless we win your case. The fee is typically a percentage of any recovery obtained, and we advance all case costs during litigation."
        },
        {
          q: "What evidence is important in maritime accident cases?",
          a: "Critical evidence includes Coast Guard reports, vessel logs, maintenance records, weather reports, witness statements, photographs of the accident scene, medical records, and employment records. Evidence can deteriorate quickly, so prompt action is essential."
        },
        {
          q: "How long do maritime lawsuits typically take?",
          a: "Maritime cases can range from several months to several years, depending on complexity, severity of injuries, number of parties involved, and whether the case settles or goes to trial. We work to resolve cases as efficiently as possible while maximizing recovery."
        },
        {
          q: "What factors determine the value of a maritime injury case?",
          a: "Case value depends on the severity of injuries, medical expenses, lost wages, future earning capacity, pain and suffering, degree of fault by various parties, available insurance coverage, and the specific maritime laws that apply."
        },
        {
          q: "Can family members recover damages if a maritime worker dies?",
          a: "Yes, maritime law provides several remedies for wrongful death including survival actions, Jones Act wrongful death claims, general maritime law remedies, and Death on the High Seas Act claims for deaths beyond three nautical miles from shore."
        }
      ]
    },
    {
      category: "Medical & Recovery",
      questions: [
        {
          q: "What medical care am I entitled to under maritime law?",
          a: "Injured seamen are entitled to maintenance and cure, which includes all reasonable and necessary medical treatment until maximum medical improvement. You have the right to choose your own doctors and seek second opinions."
        },
        {
          q: "What if my employer tries to limit my medical treatment?",
          a: "Employers cannot arbitrarily limit reasonable and necessary medical care. If your employer refuses to pay for recommended treatment, you may have grounds for additional damages including punitive damages for willful failure to pay maintenance and cure."
        },
        {
          q: "Can I return to maritime work after a serious injury?",
          a: "Return to maritime work depends on your recovery and ability to meet physical and medical requirements. Coast Guard medical certifications may be required. If you cannot return to sea, you may be entitled to vocational rehabilitation and retraining benefits."
        },
        {
          q: "What rehabilitation services are available for maritime injuries?",
          a: "Rehabilitation may include physical therapy, occupational therapy, vocational retraining, psychological counseling, and assistive devices. The scope of covered rehabilitation depends on the specific maritime law remedies available in your case."
        },
        {
          q: "How are maritime injuries different from land-based workplace injuries?",
          a: "Maritime injuries often involve unique factors like salt water exposure, delayed medical treatment due to remote locations, extreme weather conditions, and specialized equipment. Treatment may require expertise in maritime-specific injuries and conditions."
        }
      ]
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Visual Effects Setup
      const container = document.querySelector('.maritime-3d-container');
      if (container) {
        gsap.set(container, {
          perspective: 1200,
          transformStyle: "preserve-3d"
        });
      }

      // Floating background layers with 3D depth
      const layers = document.querySelectorAll('.floating-layer');
      layers.forEach((layer, index) => {
        const zDepth = -500 + (index * 250); // -500px, -250px, -100px
        gsap.set(layer, {
          z: zDepth,
          rotationY: index * 2,
          transformOrigin: "center center"
        });

        // Complex floating animations
        if (index === 0) {
          // Back layer - slow vertical float
          gsap.to(layer, {
            y: 30,
            duration: 14,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
        } else if (index === 1) {
          // Mid layer - horizontal drift
          gsap.to(layer, {
            x: 40,
            duration: 18,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
        } else {
          // Front layer - complex motion
          gsap.to(layer, {
            y: 20,
            x: 25,
            duration: 10,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
          gsap.to(layer, {
            rotationZ: 2,
            duration: 22,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
          });
        }
      });

      // Parallax scroll effects
      gsap.registerPlugin(ScrollTrigger);
      
      layers.forEach((layer, index) => {
        const speed = 0.5 + (index * 0.3);
        gsap.to(layer, {
          yPercent: -50 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Hero animation with 3D entrance
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 50,
          z: -100,
          rotationX: 15
        },
        { 
          opacity: 1, 
          y: 0,
          z: 0,
          rotationX: 0,
          duration: 0.8, 
          ease: 'power2.out' 
        }
      );

      // Content sections with staggered 3D animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { 
          opacity: 0, 
          y: 30,
          z: -50,
          rotationY: 5
        },
        {
          opacity: 1,
          y: 0,
          z: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );

      // Interactive hover effects for cards
      const cards = document.querySelectorAll('.hover-3d-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            z: 20,
            rotationY: -5,
            rotationX: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            z: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, [heroRef, contentRef]);

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
    window.location.href = '/maritime/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background maritime-3d-container">
      {/* SEO */}
      <SEO
        title="California Maritime Accident Lawyers | Admiralty & Jones Act Attorneys"
        description="Experienced California maritime accident attorneys. Jones Act, LHWCA, cruise ship injuries, commercial vessel accidents. Free consultation with admiralty law specialists."
        keywords="maritime accident lawyer California, Jones Act attorney, admiralty law, LHWCA lawyer, cruise ship injury, vessel accident"
        canonical="/practice-areas/maritime-accidents"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Maritime Accident Attorneys",
          "description": "California maritime accident law firm specializing in Jones Act, LHWCA, and admiralty law cases",
          "url": "https://www.trembachlawfirm.com/practice-areas/maritime-accidents",
          "telephone": "+18181234567",
          "areaServed": "California",
          "priceRange": "No fees unless we win",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "CA",
            "addressCountry": "US"
          }
        }}
      />

      <GoBack fallbackPath="/practice-areas" />

      {/* 3D Floating Background Layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-layer absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="floating-layer absolute inset-0 opacity-10">
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-blue-600 to-indigo-600 rounded-full blur-2xl"></div>
        </div>
        <div className="floating-layer absolute inset-0 opacity-15">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <div className="flex items-center justify-center mb-4">
              <Anchor className="w-16 h-16 text-blue-400 mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                California Maritime Accident Lawyers
              </h1>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Expert Admiralty & Maritime Law</span>
            </div>

            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Jones Act, LHWCA, and admiralty law specialists protecting the rights of California maritime workers, 
              passengers, and their families. No fees unless we win your case.
            </p>
            
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '/maritime/case-evaluation'}
              >
                GET FREE MARITIME CASE EVALUATION
              </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:scale-105 ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary shadow-lg' 
                        : 'text-white hover:bg-white/20 hover:text-white'
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
              <div className="relative mb-8">
                <div 
                  className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${overviewImage})` }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Maritime Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  California's extensive coastline and major maritime ports make it one of the nation's busiest centers for maritime commerce. 
                  From the massive container operations at Los Angeles and Long Beach to the fishing fleets of San Francisco and San Diego, 
                  maritime workers face unique dangers that require specialized legal protection under federal admiralty law.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the complex intersection of federal maritime law, California state regulations, 
                  and the unique challenges facing maritime workers and passengers. Whether you're protected under the Jones Act, 
                  LHWCA, or other maritime statutes, we have the expertise to navigate these specialized legal waters.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More About Our California Maritime Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Anchor className="w-5 h-5 mr-2 text-primary" />
                          Maritime Law Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Specialized knowledge of Jones Act, LHWCA, general maritime law, and admiralty jurisdiction. We understand the unique legal framework governing maritime accidents.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Maritime Knowledge
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Deep understanding of California's maritime industry, from major ports to commercial fishing operations, offshore platforms, and cruise ship terminals.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Ship className="w-5 h-5 mr-2 text-primary" />
                          Maritime Injury Protection
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Comprehensive representation for injuries under Jones Act, LHWCA, unseaworthiness claims, and passenger rights.</p>
                      </CardContent>
                    </Card>

                    <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Clock className="w-5 h-5 mr-2 text-primary" />
                          Timely Case Handling
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We understand strict maritime deadlines and act quickly to preserve your rights and evidence.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Maritime Case Evaluation</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Get Your Free Consultation</h3>
                <p className="mb-6 text-blue-700">Maritime law has strict deadlines and complex requirements. Get expert evaluation of your case immediately.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-blue-800">Type of Maritime Accident</label>
                      <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                        <SelectTrigger className="border-blue-300 focus:border-blue-500">
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial-vessel">Commercial Vessel Accident</SelectItem>
                          <SelectItem value="cruise-ship">Cruise Ship Accident</SelectItem>
                          <SelectItem value="fishing-vessel">Fishing Vessel Accident</SelectItem>
                          <SelectItem value="cargo-ship">Cargo Ship Accident</SelectItem>
                          <SelectItem value="ferry">Ferry Accident</SelectItem>
                          <SelectItem value="yacht">Yacht/Pleasure Craft</SelectItem>
                          <SelectItem value="offshore-platform">Offshore Platform</SelectItem>
                          <SelectItem value="harbor-accident">Harbor/Port Accident</SelectItem>
                          <SelectItem value="jones-act">Jones Act Injury</SelectItem>
                          <SelectItem value="longshore">Longshore Injury</SelectItem>
                          <SelectItem value="other">Other Maritime Accident</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-blue-800">Date of Incident</label>
                      <Input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                        className="border-blue-300 focus:border-blue-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Start My Free Maritime Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* Immediate Steps Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <div className="relative mb-8">
                <div 
                  className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${immediateStepsImage})` }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Steps After a Maritime Accident</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="hover-3d-card glass-card border-green-200 hover-glow-green transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Heart className="w-5 h-5 mr-2" />
                      Do Immediately
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-green-600">
                    <p>• Seek medical attention immediately - even for minor injuries</p>
                    <p>• Report the accident to captain/supervisor immediately</p>
                    <p>• Document the scene with photos if safely possible</p>
                    <p>• Get names and contact info of all witnesses</p>
                    <p>• Request copies of incident reports</p>
                    <p>• Contact a maritime attorney within 24 hours</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-3d-card glass-card border-red-200 hover-glow-destructive transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Never Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-red-600">
                    <p>• Never sign any documents without attorney review</p>
                    <p>• Don't give recorded statements to insurance</p>
                    <p>• Never accept quick settlement offers</p>
                    <p>• Don't delay medical treatment</p>
                    <p>• Never assume you don't have a case</p>
                    <p>• Don't wait - maritime deadlines are strict</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Maritime Legal Process</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Maritime law cases follow unique procedures governed by federal admiralty jurisdiction. Understanding this process 
                  is crucial for protecting your rights and maximizing your compensation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg"
                    style={{ backgroundImage: `url(${legalProcessImage})` }}
                  ></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-primary" />
                      Maritime Court Procedures
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2 text-sm">
                      <li>• Federal court admiralty jurisdiction</li>
                      <li>• Specialized maritime rules and procedures</li>
                      <li>• Judge-tried cases (no jury in some claims)</li>
                      <li>• Maritime liens and vessel arrests</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Critical Deadlines
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Jones Act: 3 years from injury</li>
                      <li>• LHWCA: 30 days to report, 1 year to file</li>
                      <li>• Passenger claims: Often 1-2 years</li>
                      <li>• Death claims: Varying limitations</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More About Maritime Legal Process
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-2">Investigation Phase</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Accident scene documentation</li>
                        <li>• Coast Guard reports</li>
                        <li>• Witness interviews</li>
                        <li>• Expert analysis</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-2">Filing & Discovery</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Complaint preparation</li>
                        <li>• Document requests</li>
                        <li>• Depositions</li>
                        <li>• Medical examinations</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Resolution</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Settlement negotiations</li>
                        <li>• Mediation/arbitration</li>
                        <li>• Trial preparation</li>
                        <li>• Judgment enforcement</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Medical Care Section */}
            <section id="medical-care" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Maritime Medical Care & Recovery</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Maritime workers have unique rights to medical care under federal law. Understanding maintenance and cure benefits, 
                  as well as your right to choose doctors, is essential for proper recovery and case value.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 rounded-lg"
                    style={{ backgroundImage: `url(${medicalImage})` }}
                  ></div>
                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Maintenance & Cure Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-2 text-sm">
                      <li>• All reasonable medical treatment</li>
                      <li>• Living expenses during recovery</li>
                      <li>• Right to choose your doctors</li>
                      <li>• Benefits until maximum medical improvement</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-primary" />
                      Specialized Maritime Medicine
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Maritime-specific injury expertise</li>
                      <li>• Understanding of shipboard conditions</li>
                      <li>• Remote location medical challenges</li>
                      <li>• Vocational rehabilitation services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.medicalCare} onOpenChange={() => toggleSection('medicalCare')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More About Maritime Medical Rights
                    {expandedSections.medicalCare ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold text-green-800 mb-4">Your Medical Rights Under Maritime Law</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-700 mb-2">Immediate Care</h5>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Emergency medical treatment</li>
                          <li>• Evacuation from vessel if needed</li>
                          <li>• Shore-based hospital care</li>
                          <li>• Specialized maritime medical facilities</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-blue-700 mb-2">Ongoing Treatment</h5>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Doctor of your choice</li>
                          <li>• Second opinion rights</li>
                          <li>• Physical therapy and rehabilitation</li>
                          <li>• Psychological counseling if needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <div className="relative mb-8">
                <div 
                  className="w-full h-64 bg-cover bg-center rounded-lg shadow-lg"
                  style={{ backgroundImage: `url(${resourcesImage})` }}
                >
                  <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">Maritime Resources & Information</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Access comprehensive resources for maritime workers, their families, and anyone involved in California maritime accidents. 
                  From legal guides to compensation calculators, we provide the tools you need to understand your rights.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Estimate potential compensation for your maritime accident case based on injury type and circumstances.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.location.href = '/maritime/compensation-calculator'}
                    >
                      Calculate Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Legal Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Step-by-step legal guidance for maritime accident victims and their families.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.location.href = '/maritime/legal-guidance'}
                    >
                      Get Guidance
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover-3d-card glass-card group hover-glow-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Medical resources and guidance for maritime injury treatment and recovery.</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.location.href = '/maritime/medical-guidance'}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.resources} onOpenChange={() => toggleSection('resources')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    View All Maritime Resources
                    {expandedSections.resources ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                        <Map className="w-5 h-5 mr-2" />
                        California Maritime Zones
                      </h4>
                      <div 
                        className="w-full h-48 bg-cover bg-center rounded-lg mb-4 opacity-80"
                        style={{ backgroundImage: `url(${californiaMaritimeImage})` }}
                      ></div>
                      <p className="text-sm text-blue-700">
                        Understanding California's maritime jurisdiction zones and how they affect your legal rights and remedies.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h5 className="font-semibold text-green-800 mb-2">Educational Resources</h5>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Jones Act vs. LHWCA Guide</li>
                          <li>• Maritime Safety Regulations</li>
                          <li>• Worker Rights Handbook</li>
                          <li>• Case Study Library</li>
                        </ul>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 text-green-600 hover:text-green-800"
                          onClick={() => window.location.href = '/maritime/education'}
                        >
                          Access Resources →
                        </Button>
                      </div>
                      
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <h5 className="font-semibold text-purple-800 mb-2">Support Services</h5>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• 24/7 Emergency Consultation</li>
                          <li>• Family Support Services</li>
                          <li>• Medical Provider Network</li>
                          <li>• Vocational Rehabilitation</li>
                        </ul>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-2 text-purple-600 hover:text-purple-800"
                          onClick={() => window.location.href = '/schedule-consultation'}
                        >
                          Get Support →
                        </Button>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Maritime Law</h2>
              
              <div className="space-y-6">
                {faqData.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="border border-border rounded-lg overflow-hidden">
                    <div className="bg-muted p-4">
                      <h3 className="text-lg font-semibold">{category.category}</h3>
                    </div>
                    <div className="divide-y divide-border">
                      {category.questions.map((item, index) => {
                        const globalIndex = categoryIndex * 1000 + index; // Unique index
                        return (
                          <Collapsible 
                            key={globalIndex}
                            open={expandedFaq === globalIndex}
                            onOpenChange={() => setExpandedFaq(expandedFaq === globalIndex ? null : globalIndex)}
                          >
                            <CollapsibleTrigger asChild>
                              <button className="w-full px-4 py-4 text-left hover:bg-muted/50 transition-colors flex items-center justify-between">
                                <span className="font-medium">{item.q}</span>
                                {expandedFaq === globalIndex ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 pb-4">
                              <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section mb-12">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg p-8 text-center shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Don't Wait - Time Limits Apply for California Maritime Cases</h2>
                <p className="text-xl mb-6 opacity-90">
                  Maritime law imposes strict deadlines that are much shorter than typical injury cases. 
                  Missing these deadlines can forever bar your right to compensation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2">Jones Act Claims</h3>
                    <p>3 years from injury date</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2">LHWCA Claims</h3>
                    <p>30 days to report, 1 year to file</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-2">Passenger Claims</h3>
                    <p>Often just 1-2 years</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = '/maritime/case-evaluation'}
                >
                  Get Free Case Evaluation Now
                </Button>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
              <div className="sticky top-6">
                
                {/* 3 Ways to Start Your Case - Exact match to Mesothelioma */}
                <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105 mb-6">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                    <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2 text-white">3 Ways to</h3>
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
                        className="w-full"
                        onClick={() => window.location.href = '/schedule-consultation'}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = '/maritime/case-evaluation'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Button>
                    </div>
                  </CardContent>
                </Card>

              {/* Quick Links */}
              <Card className="hover-3d-card glass-card mb-6">
                <CardHeader>
                  <CardTitle>Maritime Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    onClick={() => window.location.href = '/maritime/compensation-calculator'}
                  >
                    <Building className="w-4 h-4 mr-2" />
                    Compensation Calculator
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    onClick={() => window.location.href = '/maritime/legal-guidance'}
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Legal Guidance
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    onClick={() => window.location.href = '/maritime/medical-guidance'}
                  >
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Medical Guidance
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary transition-all duration-300"
                    onClick={() => window.location.href = '/maritime/education'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Maritime Education
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Our Maritime Lawyers */}
              <Card className="hover-3d-card glass-card">
                <CardHeader>
                  <CardTitle>Why Choose Our Maritime Attorneys?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Admiralty Law Specialists</h4>
                      <p className="text-sm text-muted-foreground">Focused exclusively on maritime and admiralty law cases throughout California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Immediate Response</h4>
                      <p className="text-sm text-muted-foreground">24/7 availability for maritime emergencies and urgent case evaluation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Maritime Industry Knowledge</h4>
                      <p className="text-sm text-muted-foreground">Deep understanding of vessel operations, maritime commerce, and industry standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">No Fee Unless We Win</h4>
                      <p className="text-sm text-muted-foreground">Contingency fee arrangement - you pay nothing unless we recover compensation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeAccidents;
