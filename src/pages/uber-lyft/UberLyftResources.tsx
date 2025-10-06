import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  BookOpen, 
  Scale, 
  Shield, 
  Phone, 
  FileText,
  ExternalLink,
  Download,
  Clock,
  Users,
  MapPin,
  AlertTriangle
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import ResourcesCTA from '@/components/ResourcesCTA';

import heroImage from '@/assets/uber-lyft-resources-hero.jpg';

const UberLyftResources = () => {
  useScrollRestoration();
  
  const legalResources = [
    {
      title: "California Vehicle Code Section 21200-21212",
      description: "Traffic laws applicable to rideshare vehicles and commercial transportation",
      type: "Law",
      url: "#"
    },
    {
      title: "California Public Utilities Commission (CPUC) Regulations",
      description: "State regulations governing transportation network companies",
      type: "Regulation",
      url: "#"
    },
    {
      title: "Assembly Bill 5 (AB5) and Proposition 22",
      description: "California gig worker classification laws affecting rideshare drivers",
      type: "Legislation",
      url: "#"
    },
    {
      title: "California Civil Code Section 1714",
      description: "General negligence statute applicable to rideshare accident cases",
      type: "Law",
      url: "#"
    }
  ];

  const medicalResources = [
    {
      title: "California Trauma Centers",
      description: "List of Level I and II trauma centers for serious rideshare accident injuries",
      type: "Medical",
      facilities: ["UCLA Medical Center", "UCSF Medical Center", "Stanford Hospital", "Cedars-Sinai"]
    },
    {
      title: "Brain Injury Rehabilitation Centers",
      description: "Specialized facilities for traumatic brain injury treatment",
      type: "Medical",
      facilities: ["Casa Colina", "Centre for Neuro Skills", "Rebound Rehabilitation"]
    },
    {
      title: "Spinal Cord Injury Centers",
      description: "Centers specializing in spinal cord injury treatment and rehabilitation",
      type: "Medical",
      facilities: ["Craig Hospital", "Santa Clara Valley Medical Center", "Rancho Los Amigos"]
    }
  ];

  const supportResources = [
    {
      title: "Victims of Crime Resource Center",
      description: "Support and assistance for crime victims including rideshare assaults",
      phone: "1-800-VICTIMS",
      type: "Support"
    },
    {
      title: "California Department of Insurance",
      description: "File complaints against insurance companies for bad faith practices",
      phone: "1-800-927-4357",
      type: "Government"
    },
    {
      title: "Brain Injury Association of California",
      description: "Support groups and resources for traumatic brain injury survivors",
      phone: "(916) 442-1710",
      type: "Support"
    },
    {
      title: "Spinal Cord Injury Network",
      description: "Resources and support for spinal cord injury patients and families",
      phone: "(800) 539-7309",
      type: "Support"
    }
  ];

  return (
    <div className="uberlyft-page min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Uber/Lyft Accident Resources
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto body-text">
            Comprehensive resources for rideshare accident victims in California including legal references, medical facilities, and support organizations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">

            {/* Legal Resources */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Scale className="w-8 h-8" />
                Legal Resources & References
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {legalResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg text-primary">{resource.title}</CardTitle>
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Medical Resources */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Building className="w-8 h-8" />
                Medical Treatment Facilities
              </h2>
              <div className="space-y-6">
                {medicalResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl text-primary">{resource.title}</CardTitle>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {resource.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {resource.facilities.map((facility, facilityIndex) => (
                          <div key={facilityIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                            <span>{facility}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Organizations */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Users className="w-8 h-8" />
                Support Organizations & Hotlines
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {supportResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg text-primary">{resource.title}</CardTitle>
                        <Badge variant="outline" className={
                          resource.type === 'Support' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          'bg-purple-50 text-purple-700 border-purple-200'
                        }>
                          {resource.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        {resource.phone}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* California-Specific Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <MapPin className="w-8 h-8" />
                California-Specific Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Statute of Limitations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                        <span className="font-medium">Personal Injury Claims</span>
                        <Badge variant="destructive">2 Years</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="font-medium">Property Damage</span>
                        <Badge className="bg-orange-500">3 Years</Badge>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                        <span className="font-medium">Government Claims</span>
                        <Badge className="bg-yellow-500">6 Months</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Insurance Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium">Period 3 (Passenger in vehicle)</p>
                          <p className="text-sm text-muted-foreground">$1 Million liability coverage</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-orange-600" />
                        <div>
                          <p className="font-medium">Period 2 (En route to passenger)</p>
                          <p className="text-sm text-muted-foreground">$1 Million liability coverage</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-yellow-600" />
                        <div>
                          <p className="font-medium">Period 1 (App on, available)</p>
                          <p className="text-sm text-muted-foreground">$50K/$100K liability coverage</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Downloadable Resources */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <Download className="w-8 h-8" />
                Downloadable Guides & Checklists
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg">Accident Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Step-by-step guide for what to do immediately after a rideshare accident.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg">Evidence Collection Guide</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      How to document your rideshare accident for maximum compensation.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg">Medical Documentation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Guide to tracking injuries and medical treatment for your case.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Related Practice Areas */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8" />
                Related Practice Areas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Car Accidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Traditional vehicle accident cases with similar legal principles.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/practice-areas/car-accidents'}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Pedestrian Accidents</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Cases involving pedestrians struck by rideshare vehicles.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/practice-areas/pedestrian-accidents'}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Sexual Abuse</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Assault and harassment cases involving rideshare drivers.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/practice-areas/sexual-abuse'}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Brain Injuries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Traumatic brain injuries from rideshare accidents.
                    </p>
                    <Button variant="outline" size="sm" className="w-full" onClick={() => window.location.href = '/brain-case-evaluation'}>
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Need Additional Resources?</CardTitle>
                <p className="text-muted-foreground">
                  Our experienced team can provide personalized guidance and additional resources for your specific case.
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    size="lg"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Free Consultation
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 • No fees unless we win • Se habla español
                </p>
              </CardContent>
            </Card>

            {/* Resources Toolbar CTA */}
            <ResourcesCTA />

          </div>
        </div>
      </section>

      {/* Don't Wait Section */}
      <section className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Wait - Time Limits Apply for California Rideshare Cases</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            California's statute of limitations gives you only 2 years to file. Use these resources and get legal help now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white !text-destructive hover:bg-gray-100 hover:!text-destructive"
              onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Your Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white !text-white hover:bg-white/20 hover:!text-primary-foreground"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberLyftResources;