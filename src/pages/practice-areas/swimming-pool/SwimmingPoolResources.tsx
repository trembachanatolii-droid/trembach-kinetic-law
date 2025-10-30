import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  Shield, 
  Phone, 
  ExternalLink, 
  AlertTriangle,
  FileText,
  Users,
  Heart,
  Scale,
  Clock
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GoBack from '@/components/GoBack';
import resourcesHero from '@/assets/swimming-pool-resources-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const SwimmingPoolResources: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.resource-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.resources-content',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const safetyResources = [
    {
      title: "Pool Safety Guidelines",
      description: "Essential safety measures every pool owner should implement to prevent accidents",
      content: "Proper fencing, safety equipment, supervision protocols, and maintenance requirements"
    },
    {
      title: "California Pool Laws",
      description: "Understanding state and local regulations for pool safety and liability",
      content: "Building codes, safety requirements, and legal obligations for pool owners"
    },
    {
      title: "Emergency Procedures",
      description: "What to do in case of a swimming pool emergency or accident",
      content: "First aid, CPR, emergency contacts, and immediate response protocols"
    }
  ];

  const legalResources = [
    {
      title: "Know Your Rights",
      description: "Understanding your legal rights after a swimming pool accident",
      icon: Scale,
      points: [
        "Right to seek compensation for injuries",
        "Right to hold property owners accountable",
        "Right to medical treatment coverage",
        "Right to legal representation"
      ]
    },
    {
      title: "Important Time Limits",
      description: "Critical deadlines for filing swimming pool accident claims in California",
      icon: Clock,
      points: [
        "2-year statute of limitations for personal injury claims",
        "6-month deadline for claims against government entities",
        "Prompt investigation preserves evidence",
        "Early legal consultation is crucial"
      ]
    },
    {
      title: "Types of Compensation",
      description: "Understanding what damages may be recoverable in your case",
      icon: FileText,
      points: [
        "Medical expenses (past and future)",
        "Lost wages and earning capacity",
        "Pain and suffering damages",
        "Rehabilitation and therapy costs"
      ]
    }
  ];

  const supportResources = [
    {
      title: "Medical Support",
      icon: Heart,
      resources: [
        { name: "UCLA Medical Center - Trauma Unit", phone: "(310) 825-9111" },
        { name: "UCSF Benioff Children's Hospital", phone: "(415) 476-1000" },
        { name: "Scripps Mercy Hospital San Diego", phone: "(619) 294-8111" },
        { name: "California Poison Control", phone: "1-800-222-1222" }
      ]
    },
    {
      title: "Support Groups",
      icon: Users,
      resources: [
        { name: "Drowning Prevention Coalition", phone: "(916) 445-4171" },
        { name: "California Safety Council", phone: "(916) 263-2489" },
        { name: "Brain Injury Association of California", phone: "(916) 442-1710" },
        { name: "Spinal Cord Injury Network", phone: "(800) 539-7309" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <GoBack fallbackPath="/practice-areas/swimming-pool-accidents" />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${resourcesHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Swimming Pool Safety & Legal Resources
            </h1>
            <p className="text-xl">
              Comprehensive resources for swimming pool safety, legal rights, and support services
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="resources-content">
          
          {/* Safety Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Pool Safety Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safetyResources.map((resource, index) => (
                <Card key={index} className="resource-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-600" />
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <p className="text-sm">{resource.content}</p>
                    <Button variant="outline" size="sm" className="mt-4">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Legal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalResources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="resource-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="w-5 h-5 mr-2 text-red-600" />
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <ul className="space-y-2">
                        {resource.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Support Resources */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Support & Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {supportResources.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="resource-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="w-5 h-5 mr-2 text-green-600" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.resources.map((resource, resourceIndex) => (
                          <div key={resourceIndex} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                            <span className="font-medium text-sm">{resource.name}</span>
                            <Button variant="outline" size="sm" asChild>
                              <a href={`tel:${resource.phone}`}>
                                <Phone className="w-4 h-4 mr-2" />
                                {resource.phone}
                              </a>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Emergency Information */}
          <section className="mb-12">
            <Card className="resource-card border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-700">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Emergency Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Immediate Emergency</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-bold">Emergency Services</span>
                        <Button size="sm" asChild className="bg-red-600 hover:bg-red-700">
                          <a href="tel:911">
                            <Phone className="w-4 h-4 mr-2" />
                            911
                          </a>
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium">Poison Control</span>
                        <Button variant="outline" size="sm" asChild>
                          <a href="tel:1-800-222-1222">
                            <Phone className="w-4 h-4 mr-2" />
                            1-800-222-1222
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Legal Emergency</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                        <span className="font-medium">24/7 Legal Hotline</span>
                        <Button variant="outline" size="sm" asChild>
                          <a href="tel:(818) 123-4567">
                            <Phone className="w-4 h-4 mr-2" />
                            (818) 123-4567
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-red-600">
                        Call immediately after any serious swimming pool accident to protect your rights
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* California-Specific Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">California Pool Safety Laws</h2>
            <Card className="resource-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Pool Barrier Requirements</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Minimum 5-foot height for pool barriers</li>
                      <li>• Self-closing, self-latching gates</li>
                      <li>• No gaps larger than 4 inches</li>
                      <li>• Proper gate hardware installation</li>
                      <li>• Annual safety inspections required</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Safety Equipment</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Anti-entrapment drain covers required</li>
                      <li>• Emergency shut-off switches</li>
                      <li>• Proper pool lighting</li>
                      <li>• First aid equipment accessibility</li>
                      <li>• Emergency phone or communication device</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-sm text-yellow-700">
                    California pool safety laws are comprehensive and frequently updated. Pool owners, landlords, 
                    and facility managers should regularly review current requirements with qualified professionals 
                    to ensure compliance and prevent liability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <Card className="resource-card border-primary bg-primary/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Need Legal Help?</h2>
                <p className="text-muted-foreground mb-6">
                  If you or a loved one has been injured in a swimming pool accident, don't wait. 
                  Contact our experienced California swimming pool accident attorneys for a free consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/practice-areas/swimming-pool/case-evaluation">
                      Get Free Case Evaluation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:(818) 123-4567">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolResources;