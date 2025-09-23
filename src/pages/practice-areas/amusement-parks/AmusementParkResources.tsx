import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  ExternalLink, 
  Download, 
  BookOpen, 
  Shield,
  AlertTriangle,
  Users,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import GoBack from '@/components/GoBack';
import resourcesHeroImage from '@/assets/amusement-park-resources-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'guide' | 'regulation' | 'organization' | 'emergency';
  url?: string;
  downloadable?: boolean;
  category: string;
}

const AmusementParkResources: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const resources: Resource[] = [
    {
      id: 1,
      title: "IAAPA Safety Guidelines",
      description: "International Association of Amusement Parks and Attractions comprehensive safety standards and best practices for ride operations.",
      type: "regulation",
      url: "https://www.iaapa.org/safety",
      category: "safety"
    },
    {
      id: 2,
      title: "ASTM Safety Standards",
      description: "American Society for Testing and Materials standards for amusement rides and devices, including design, manufacturing, and operation requirements.",
      type: "regulation",
      url: "https://www.astm.org/",
      category: "safety"
    },
    {
      id: 3,
      title: "Consumer Product Safety Commission Reports",
      description: "CPSC annual reports on amusement park injuries, recalls, and safety recommendations for rides and attractions.",
      type: "guide",
      url: "https://www.cpsc.gov/",
      category: "statistics"
    },
    {
      id: 4,
      title: "State Ride Inspection Requirements",
      description: "Comprehensive guide to amusement ride inspection requirements by state, including frequency, certification, and reporting mandates.",
      type: "guide",
      downloadable: true,
      category: "regulations"
    },
    {
      id: 5,
      title: "Amusement Ride Accident Database",
      description: "Searchable database of reported amusement ride accidents, injuries, and fatalities with detailed incident analysis.",
      type: "guide",
      url: "#",
      category: "statistics"
    },
    {
      id: 6,
      title: "Emergency Contact Directory",
      description: "Essential contact information for medical emergencies, park management, and immediate incident reporting procedures.",
      type: "emergency",
      downloadable: true,
      category: "emergency"
    },
    {
      id: 7,
      title: "Ride Safety Checklist for Visitors",
      description: "Pre-ride safety checklist to help park visitors identify potential hazards and make informed decisions about ride participation.",
      type: "guide",
      downloadable: true,
      category: "prevention"
    },
    {
      id: 8,
      title: "National Association of Amusement Ride Safety Officials",
      description: "Professional organization dedicated to amusement ride safety, offering training, certification, and industry resources.",
      type: "organization",
      url: "https://www.naarso.org/",
      category: "organizations"
    },
    {
      id: 9,
      title: "Incident Documentation Guide",
      description: "Step-by-step guide for properly documenting amusement park incidents, including evidence collection and witness information.",
      type: "guide",
      downloadable: true,
      category: "legal"
    },
    {
      id: 10,
      title: "Medical Emergency Response Protocols",
      description: "Standardized emergency response procedures for amusement park medical incidents and evacuation protocols.",
      type: "emergency",
      downloadable: true,
      category: "emergency"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Resources', icon: BookOpen },
    { value: 'safety', label: 'Safety Standards', icon: Shield },
    { value: 'regulations', label: 'Regulations', icon: FileText },
    { value: 'statistics', label: 'Statistics & Data', icon: AlertTriangle },
    { value: 'organizations', label: 'Organizations', icon: Users },
    { value: 'emergency', label: 'Emergency Info', icon: Phone },
    { value: 'prevention', label: 'Prevention', icon: Shield },
    { value: 'legal', label: 'Legal Resources', icon: FileText }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    
    if (!hero || !content) return;

    // Hero animation
    gsap.fromTo(hero, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // Resource cards animation
    gsap.fromTo(".resource-card",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredResources]);

  const getTypeColor = (type: Resource['type']) => {
    switch (type) {
      case 'guide': return 'bg-blue-500/10 text-blue-600 border-blue-200';
      case 'regulation': return 'bg-red-500/10 text-red-600 border-red-200';
      case 'organization': return 'bg-green-500/10 text-green-600 border-green-200';
      case 'emergency': return 'bg-orange-500/10 text-orange-600 border-orange-200';
      default: return 'bg-gray-500/10 text-gray-600 border-gray-200';
    }
  };

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'guide': return <BookOpen className="w-4 h-4" />;
      case 'regulation': return <FileText className="w-4 h-4" />;
      case 'organization': return <Users className="w-4 h-4" />;
      case 'emergency': return <AlertTriangle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Amusement Park Safety Resources & Guidelines | Expert Legal Resources</title>
        <meta name="description" content="Access comprehensive amusement park safety resources, regulations, emergency contacts, and industry guidelines. Essential information for park visitors and injury victims." />
        <meta name="keywords" content="amusement park safety resources, ride safety guidelines, park injury regulations, IAAPA standards, ASTM safety requirements" />
        <link rel="canonical" href="/practice-areas/amusement-parks/resources" />
      </Helmet>

      <GoBack />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${resourcesHeroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
          </div>
          
          <div className="relative container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
                Safety Resources
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive safety guidelines, regulations, and emergency resources for amusement park visitors and injury victims
            </p>
          </div>
        </section>

        {/* Resources Content */}
        <section ref={contentRef} className="py-16">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <div className="mb-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                      : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 hover:shadow-md'
                  }`}
                >
                  <category.icon className="w-6 h-6 mb-2" />
                  <span className="text-sm font-medium text-center">{category.label}</span>
                </button>
              ))}
            </div>

            {/* Resources Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="resource-card shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <Badge className={`${getTypeColor(resource.type)} flex items-center gap-1`}>
                        {getTypeIcon(resource.type)}
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </Badge>
                      {resource.downloadable && (
                        <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex gap-3">
                      {resource.url && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                          onClick={() => window.open(resource.url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit
                        </Button>
                      )}
                      {resource.downloadable && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contacts Section */}
            <div className="mt-16">
              <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                    Emergency Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-red-500" />
                      <div>
                        <h4 className="font-semibold">Emergency Services</h4>
                        <p className="text-muted-foreground">911</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Legal Consultation</h4>
                        <p className="text-muted-foreground">(818) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-blue-500" />
                      <div>
                        <h4 className="font-semibold">Report Incidents</h4>
                        <p className="text-muted-foreground">safety@example.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-red-500/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Legal Guidance?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our experienced attorneys can help you navigate the complex legal landscape of amusement park injuries.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:8181234567"
                      className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                    >
                      Call (818) 123-4567
                    </a>
                    <a 
                      href="/practice-areas/amusement-parks/case-evaluation"
                      className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200 font-semibold"
                    >
                      Free Case Review
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AmusementParkResources;