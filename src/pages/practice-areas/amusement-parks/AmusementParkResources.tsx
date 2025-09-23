import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, BookOpen, FileText, Users, Phone, ExternalLink, Download } from 'lucide-react';
import heroBackground from '@/assets/amusement-park-resources-hero.jpg';
import SEO from '@/components/SEO';

const AmusementParkResources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: "IAAPA Safety Guidelines",
      description: "International safety standards for amusement parks and ride operations.",
      type: "regulation",
      category: "safety",
      url: "https://www.iaapa.org/safety"
    },
    {
      id: 2,
      title: "ASTM Safety Standards",
      description: "American standards for amusement ride design and operation requirements.",
      type: "regulation",
      category: "safety",
      url: "https://www.astm.org/"
    },
    {
      id: 3,
      title: "Consumer Safety Reports",
      description: "CPSC reports on amusement park injuries and safety recommendations.",
      type: "guide",
      category: "statistics",
      url: "https://www.cpsc.gov/"
    },
    {
      id: 4,
      title: "Emergency Contact Directory",
      description: "Essential contacts for medical emergencies and incident reporting.",
      type: "emergency",
      category: "emergency",
      downloadable: true
    },
    {
      id: 5,
      title: "Visitor Safety Checklist",
      description: "Pre-ride safety checklist to help identify potential hazards.",
      type: "guide",
      category: "prevention",
      downloadable: true
    },
    {
      id: 6,
      title: "Incident Documentation Guide",
      description: "Step-by-step guide for documenting amusement park incidents.",
      type: "guide",
      category: "legal",
      downloadable: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Resources', icon: BookOpen },
    { value: 'safety', label: 'Safety', icon: FileText },
    { value: 'emergency', label: 'Emergency', icon: Phone },
    { value: 'legal', label: 'Legal', icon: Users },
    { value: 'prevention', label: 'Prevention', icon: FileText }
  ];

  const filteredResources = selectedCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'guide': return 'bg-blue-100 text-blue-600';
      case 'regulation': return 'bg-red-100 text-red-600';
      case 'emergency': return 'bg-orange-100 text-orange-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amusement Park Safety Resources & Guidelines | Trembach Law Firm"
        description="Access comprehensive amusement park safety resources, regulations, and emergency information. Essential guidance for park visitors."
        keywords="amusement park safety resources, ride safety guidelines, park injury regulations"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Safety Resources
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">Essential Safety Information</span>
          </div>
          
          <p className="text-lg opacity-90">
            Comprehensive safety guidelines and resources for amusement park visitors
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 hover:bg-secondary/70'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge className={getTypeColor(resource.type)}>
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </Badge>
                  {resource.downloadable && (
                    <Download className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {resource.description}
                </p>
                
                <div className="flex gap-2">
                  {resource.url && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center gap-2"
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
                      className="flex items-center gap-2"
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

        {/* Emergency Contacts */}
        <div className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-600">
                <Phone className="w-6 h-6" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Emergency Services</h4>
                  <p className="text-2xl font-bold text-red-600">911</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Legal Help</h4>
                  <p className="text-2xl font-bold text-red-600">(818) 123-4567</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Safety Reports</h4>
                  <p className="text-lg text-red-600">safety@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need Legal Guidance?</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced attorneys can help you navigate amusement park injury cases.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Call (818) 123-4567</Button>
                <Button variant="outline" size="lg">Free Case Review</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkResources;