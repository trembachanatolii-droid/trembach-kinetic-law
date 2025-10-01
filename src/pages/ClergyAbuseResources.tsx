import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import {
  Phone, 
  ExternalLink, 
  Heart, 
  Shield, 
  Users, 
  BookOpen,
  AlertCircle,
  MessageCircle,
  Stethoscope,
  Scale,
  Home
} from 'lucide-react';
import heroImage from '@/assets/clergy-abuse-resources-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const ClergyAbuseResources: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const cards = contentRef.current.querySelectorAll('.content-card');
      
      gsap.fromTo(cards, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const crisisResources = [
    {
      name: "National Suicide Prevention Lifeline",
      phone: "988",
      description: "24/7 crisis support and suicide prevention",
      icon: Heart
    },
    {
      name: "Crisis Text Line",
      phone: "Text HOME to 741741",
      description: "24/7 text-based crisis support",
      icon: MessageCircle
    },
    {
      name: "RAINN National Sexual Assault Hotline",
      phone: "1-800-656-4673",
      description: "24/7 support for sexual assault survivors",
      icon: Shield
    },
    {
      name: "California Youth Crisis Line",
      phone: "1-800-843-5200",
      description: "Crisis support for youth and families",
      icon: Users
    }
  ];

  const supportOrganizations = [
    {
      name: "SNAP (Survivors Network of those Abused by Priests)",
      description: "Support group and advocacy organization for clergy abuse survivors",
      website: "www.snapnetwork.org",
      services: ["Peer support", "Advocacy", "Public awareness", "Healing resources"]
    },
    {
      name: "California Trauma Recovery Centers",
      description: "Free mental health services for crime victims including clergy abuse",
      services: ["Individual therapy", "Group therapy", "Case management", "Crisis intervention"]
    },
    {
      name: "Faith Trust Institute",
      description: "Education and resources addressing sexual and domestic violence in religious communities",
      website: "www.faithtrustinstitute.org",
      services: ["Educational resources", "Training programs", "Advocacy", "Policy development"]
    },
    {
      name: "Bishop Accountability",
      description: "Database and resources tracking clergy abuse cases",
      website: "www.bishop-accountability.org",
      services: ["Case databases", "Document archives", "News updates", "Research resources"]
    }
  ];

  const legalResources = [
    {
      title: "California Victim Compensation Board",
      description: "State program providing financial assistance to crime victims",
      benefits: ["Medical expenses", "Mental health counseling", "Lost wages", "Funeral expenses"],
      website: "victims.ca.gov"
    },
    {
      title: "California Crime Victims Legal Clinic",
      description: "Free legal services for crime victims",
      services: ["Legal consultation", "Court accompaniment", "Rights advocacy", "Referrals"]
    },
    {
      title: "State Bar of California Lawyer Referral Service",
      description: "Find qualified attorneys specializing in clergy abuse cases",
      website: "www.calbar.ca.gov"
    }
  ];

  const therapeuticResources = [
    {
      type: "Trauma-Informed Therapy",
      description: "Specialized therapy for trauma survivors",
      approaches: ["EMDR (Eye Movement Desensitization)", "Cognitive Behavioral Therapy", "Somatic Therapy", "Narrative Therapy"]
    },
    {
      type: "Religious Trauma Syndrome Support",
      description: "Specialized support for religious trauma",
      approaches: ["Faith deconstruction support", "Spiritual counseling", "Identity rebuilding", "Community connections"]
    },
    {
      type: "Group Therapy",
      description: "Peer support in therapeutic settings",
      benefits: ["Shared experiences", "Reduced isolation", "Coping strategies", "Healing community"]
    }
  ];

  return (
    <>
      <SEO 
        title="Clergy Abuse Support Resources | California"
        description="Comprehensive support resources for clergy abuse survivors in California. Crisis hotlines, support organizations, legal resources, and therapeutic services."
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Resources for Survivors
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive support services, crisis resources, and healing programs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div ref={contentRef} className="container mx-auto px-4 py-16">
          
          {/* Crisis Resources */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">Crisis Support - Available 24/7</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                If you're in crisis or need immediate support, these resources are available around the clock
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {crisisResources.map((resource, index) => (
                <Card key={index} className="border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <resource.icon className="w-6 h-6 text-red-500" />
                      {resource.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-lg">{resource.phone}</span>
                      </div>
                      <p className="text-muted-foreground">{resource.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`tel:${resource.phone.replace(/[^\d]/g, '')}`)}
                        className="w-full"
                      >
                        Call Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Support Organizations */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Organizations</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Organizations dedicated to supporting clergy abuse survivors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {supportOrganizations.map((org, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      {org.website ? (
                        <a 
                          href={`https://${org.website}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline cursor-pointer"
                        >
                          {org.name}
                        </a>
                      ) : (
                        org.name
                      )}
                    </CardTitle>
                    <CardDescription>{org.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {org.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-primary" />
                          <a 
                            href={`https://${org.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            {org.website}
                          </a>
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold mb-2">Services:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {org.services.map((service, idx) => (
                            <li key={idx}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Resources */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Legal Resources</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Legal assistance and victim compensation programs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {legalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Scale className="w-6 h-6 text-primary" />
                      {resource.title}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {resource.website && (
                        <div className="flex items-center gap-2">
                          <ExternalLink className="w-4 h-4 text-primary" />
                          <a 
                            href={`https://${resource.website}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline text-sm"
                          >
                            {resource.website}
                          </a>
                        </div>
                      )}
                      {resource.benefits && (
                        <div>
                          <h4 className="font-semibold mb-2">Benefits Available:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {resource.benefits.map((benefit, idx) => (
                              <li key={idx}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {resource.services && (
                        <div>
                          <h4 className="font-semibold mb-2">Services:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {resource.services.map((service, idx) => (
                              <li key={idx}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Therapeutic Resources */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Therapeutic Support</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Specialized therapy and healing approaches for clergy abuse survivors
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {therapeuticResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Stethoscope className="w-6 h-6 text-primary" />
                      {resource.type}
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-2">
                        {resource.approaches ? 'Approaches:' : 'Benefits:'}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {(resource.approaches || resource.benefits)?.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Safety Planning */}
          <div className="content-card mb-16">
            <Card className="border-l-4 border-l-amber-500 bg-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-800">
                  <AlertCircle className="w-6 h-6" />
                  Safety Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-amber-700">
                  <p className="font-semibold">If you're in immediate danger:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Call 911 for immediate emergency assistance</li>
                    <li>Have a safety plan including safe places to go</li>
                    <li>Keep important documents and emergency contacts accessible</li>
                    <li>Trust your instincts about dangerous situations</li>
                    <li>Consider a restraining order if being threatened or harassed</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reading and Educational Resources */}
          <div className="content-card mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Educational Resources
                </CardTitle>
                <CardDescription>
                  Books, articles, and educational materials for survivors and supporters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Reading</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• "The Body Keeps the Score" by Bessel van der Kolk</li>
                      <li>• "Trauma and Recovery" by Judith Herman</li>
                      <li>• "Religious Trauma Syndrome" by Marlene Winell</li>
                      <li>• "Healing the Shame That Binds You" by John Bradshaw</li>
                      <li>• "Complex PTSD" by Pete Walker</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Online Resources</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• National Center for PTSD</li>
                      <li>• RAINN (Rape, Abuse & Incest National Network)</li>
                      <li>• Trauma Informed Oregon</li>
                      <li>• International Society for Traumatic Stress Studies</li>
                      <li>• Religious Trauma Institute</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="content-card text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Need Legal Support?</h2>
                <p className="text-xl mb-6 opacity-90">
                  Our experienced attorneys are here to help you navigate your legal options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2 text-foreground" />
                    <span className="text-foreground">Call (818) 123-4567</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-foreground hover:bg-white hover:text-primary font-bold hover-scale"
                    onClick={() => window.location.href = '/clergy-abuse-case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};

export default ClergyAbuseResources;