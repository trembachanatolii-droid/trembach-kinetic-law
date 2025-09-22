import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import { 
  BookOpen, 
  Phone, 
  Shield, 
  Heart, 
  Users, 
  FileText,
  AlertCircle,
  Clock,
  Scale,
  HelpCircle
} from 'lucide-react';
import heroImage from '@/assets/sexual-abuse-resources-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const SexualAbuseResources: React.FC = () => {
  const navigate = useNavigate();
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

  const seo = {
    title: "Sexual Abuse Resources & Support | California Legal Help",
    description: "Comprehensive resources for sexual abuse survivors in California. Find support services, legal guidance, and crisis hotlines. Free confidential consultation available.",
    keywords: "sexual abuse resources, survivor support, California crisis hotline, legal help, counseling services, victim rights"
  };

  const hero = {
    backgroundImage: heroImage,
    title: "Sexual Abuse Resources & Support",
    subtitle: "Comprehensive Support for Survivors in California"
  };

  const resources = [
    {
      category: "Crisis Support",
      icon: Phone,
      color: "text-red-500",
      items: [
        {
          name: "National Sexual Assault Hotline",
          phone: "1-800-656-4673",
          description: "24/7 confidential support from trained staff"
        },
        {
          name: "California Coalition Against Sexual Assault",
          phone: "1-916-446-2520",
          description: "Statewide resources and local referrals"
        },
        {
          name: "Crisis Text Line",
          phone: "Text HOME to 741741",
          description: "Free 24/7 crisis support via text"
        }
      ]
    },
    {
      category: "Legal Resources",
      icon: Scale,
      color: "text-blue-500",
      items: [
        {
          name: "California Victims' Rights",
          description: "Understanding your legal rights as a survivor"
        },
        {
          name: "Statute of Limitations Guide",
          description: "Important deadlines for filing claims in California"
        },
        {
          name: "Court Support Services",
          description: "Assistance navigating the legal system"
        }
      ]
    },
    {
      category: "Counseling & Therapy",
      icon: Heart,
      color: "text-green-500",
      items: [
        {
          name: "RAINN National Database",
          description: "Find local counseling and support services"
        },
        {
          name: "Trauma-Informed Therapy",
          description: "Specialized treatment for sexual trauma"
        },
        {
          name: "Group Support Sessions",
          description: "Connect with other survivors in safe spaces"
        }
      ]
    },
    {
      category: "Educational Materials",
      icon: BookOpen,
      color: "text-purple-500",
      items: [
        {
          name: "Understanding Sexual Abuse",
          description: "Comprehensive guide to recognizing abuse"
        },
        {
          name: "Healing Process Guide",
          description: "What to expect during recovery"
        },
        {
          name: "Legal Process Overview",
          description: "Step-by-step guide to pursuing justice"
        }
      ]
    }
  ];

  const importantNotices = [
    {
      icon: Clock,
      title: "Time Limits Apply",
      description: "California has specific deadlines for filing sexual abuse claims. Don't wait to seek legal help.",
      urgency: "high"
    },
    {
      icon: Shield,
      title: "Confidentiality Protected",
      description: "All consultations are completely confidential and protected by attorney-client privilege.",
      urgency: "medium"
    },
    {
      icon: AlertCircle,
      title: "No Upfront Costs",
      description: "We work on a contingency basis - you pay nothing unless we win your case.",
      urgency: "low"
    }
  ];

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
      />
      
      <Navigation />
      <GoBack fallbackPath="/practice-areas/sexual-abuse" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div ref={contentRef} className="container mx-auto px-4 py-16">
          
          {/* Important Notices */}
          <div className="content-card mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {importantNotices.map((notice, index) => (
                <Card key={index} className={`border-l-4 ${
                  notice.urgency === 'high' ? 'border-l-red-500' :
                  notice.urgency === 'medium' ? 'border-l-yellow-500' :
                  'border-l-green-500'
                }`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <notice.icon className={`w-6 h-6 ${
                        notice.urgency === 'high' ? 'text-red-500' :
                        notice.urgency === 'medium' ? 'text-yellow-500' :
                        'text-green-500'
                      }`} />
                      <CardTitle className="text-lg">{notice.title}</CardTitle>
                    </div>
                    <CardDescription>{notice.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {resources.map((category, index) => (
              <Card key={index} className="content-card">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                    <CardTitle className="text-2xl">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-4 bg-muted/50 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">{item.name}</h4>
                        {item.phone && (
                          <div className="flex items-center gap-2 mb-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <span className="font-mono text-primary">{item.phone}</span>
                          </div>
                        )}
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Links */}
          <Card className="content-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-primary" />
                Quick Access Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto p-4 flex flex-col items-start"
                  onClick={() => navigate('/sexual-abuse-case-evaluation')}
                >
                  <FileText className="w-6 h-6 mb-2 text-primary" />
                  <span className="text-left">
                    <div className="font-semibold">Case Evaluation</div>
                    <div className="text-sm text-muted-foreground">Free confidential review</div>
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto p-4 flex flex-col items-start"
                  onClick={() => navigate('/sexual-abuse-legal-guidance')}
                >
                  <Users className="w-6 h-6 mb-2 text-primary" />
                  <span className="text-left">
                    <div className="font-semibold">Support Groups</div>
                    <div className="text-sm text-muted-foreground">Local survivor networks</div>
                  </span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-auto p-4 flex flex-col items-start"
                  onClick={() => navigate('/sexual-abuse-legal-guidance')}
                >
                  <Shield className="w-6 h-6 mb-2 text-primary" />
                  <span className="text-left">
                    <div className="font-semibold">Safety Planning</div>
                    <div className="text-sm text-muted-foreground">Protective resources</div>
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="content-card mt-16 text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
                <p className="text-xl mb-6 opacity-90">
                  Our experienced attorneys are here to help you understand your rights and options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary">
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="text-foreground">Call (818) 123-4567</span>
                    </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-foreground hover:bg-white hover:text-primary"
                    onClick={() => navigate('/sexual-abuse-case-evaluation')}
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

export default SexualAbuseResources;