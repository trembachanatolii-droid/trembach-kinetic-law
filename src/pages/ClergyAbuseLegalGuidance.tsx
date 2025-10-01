import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import {
  Scale, 
  Clock, 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  Gavel,
  Users,
  DollarSign,
  BookOpen,
  Phone,
  HelpCircle
} from 'lucide-react';
import heroImage from '@/assets/clergy-abuse-legal-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const ClergyAbuseLegalGuidance: React.FC = () => {
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
    title: "Clergy Abuse Legal Guidance | California Law Firm",
    description: "Expert legal guidance for clergy abuse cases in California. Understand your rights, AB 218 law, and legal process. Free confidential consultation.",
    keywords: "clergy abuse lawyer, California legal guidance, AB 218, victim rights, statute of limitations, compensation, legal process"
  };

  const hero = {
    backgroundImage: heroImage,
    title: "Clergy Abuse Legal Guidance",
    subtitle: "Understanding Your Rights and Legal Options Under California Law"
  };

  const legalSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Confidential discussion of your case with experienced attorneys",
      details: "During this private meeting, we'll listen to your story, explain your rights under AB 218, and discuss potential legal options. Everything you share is protected by attorney-client privilege.",
      icon: Users,
      color: "text-primary"
    },
    {
      step: 2,
      title: "Case Investigation",
      description: "Thorough investigation to build a strong legal foundation",
      details: "Our team will gather evidence, interview witnesses, review institutional records, and work with experts to establish the facts of your case and uncover any cover-up evidence.",
      icon: FileText,
      color: "text-accent"
    },
    {
      step: 3,
      title: "Filing Your Claim",
      description: "Legal paperwork filed within statute of limitations",
      details: "We'll prepare and file all necessary legal documents under California's AB 218 law, ensuring compliance with deadlines and procedural requirements.",
      icon: Scale,
      color: "text-electric"
    },
    {
      step: 4,
      title: "Negotiation & Resolution",
      description: "Pursuing maximum compensation through negotiation or trial",
      details: "We'll aggressively negotiate with religious institutions and their insurers. If necessary, we're prepared to take your case to trial to secure fair compensation, including treble damages for cover-ups.",
      icon: Gavel,
      color: "text-destructive"
    }
  ];

  const legalRights = [
    {
      title: "Right to Seek Compensation",
      description: "You may be entitled to damages for medical expenses, therapy costs, lost wages, pain and suffering, and in cover-up cases, treble damages under AB 218.",
      icon: DollarSign
    },
    {
      title: "Right to Privacy",
      description: "Your identity and case details are protected by strict confidentiality laws. Cases can be filed using pseudonyms and records can be sealed.",
      icon: Shield
    },
    {
      title: "Right to Support",
      description: "You have the right to have a support person present during interviews and court proceedings, and access to trauma-informed legal representation.",
      icon: Users
    },
    {
      title: "Right to Legal Representation",
      description: "You have the right to be represented by an attorney at no upfront cost through contingency fee arrangements - we only get paid if you win.",
      icon: Scale
    }
  ];

  const importantDeadlines = [
    {
      age: "Under 18 When Abused",
      deadline: "Until age 40 or within 5 years of discovery",
      details: "Extended time limits apply for childhood clergy abuse cases under California's AB 218 law"
    },
    {
      age: "18 and Over When Abused",
      deadline: "Within 5 years of discovering psychological injury",
      details: "Discovery rule applies - deadline starts when you realize the connection between abuse and psychological harm"
    },
    {
      age: "Revival Window Cases",
      deadline: "Special provisions may still apply",
      details: "Some cases previously time-barred may still be eligible under AB 218's revival provisions"
    }
  ];

  const compensationTypes = [
    "Medical and therapy expenses (past and future)",
    "Lost wages and reduced earning capacity",
    "Pain and suffering (physical and emotional)",
    "Loss of enjoyment of life",
    "Costs of specialized trauma treatment",
    "Treble (triple) damages for institutional cover-ups"
  ];

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
      />
      
      <Navigation />
      
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
          
          {/* Legal Process Steps */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Legal Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding what to expect when pursuing a clergy abuse case in California
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {legalSteps.map((step, index) => (
                <Card key={index} className="relative border-t-4 border-t-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        Step {step.step}
                      </Badge>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Your Legal Rights */}
          <div className="content-card mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  Your Legal Rights as a Survivor
                </CardTitle>
                <CardDescription className="text-lg">
                  California law provides strong protections and rights for clergy abuse survivors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {legalRights.map((right, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <right.icon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-lg mb-2">{right.title}</h4>
                        <p className="text-muted-foreground">{right.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AB 218 Information */}
          <div className="content-card mb-16">
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-3xl">California AB 218 Law</CardTitle>
                    <CardDescription className="text-lg">
                      Groundbreaking legislation protecting clergy abuse survivors
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <span className="font-semibold text-blue-700">Key Provisions of AB 218</span>
                  </div>
                  <ul className="text-blue-700 space-y-2">
                    <li>• Extended statute of limitations to age 40 or 5 years from discovery</li>
                    <li>• Allows treble (triple) damages for institutional cover-ups</li>
                    <li>• Created revival windows for previously time-barred cases</li>
                    <li>• Recognizes delayed discovery of psychological injury</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statute of Limitations */}
          <div className="content-card mb-16">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-red-500" />
                  <div>
                    <CardTitle className="text-3xl">Important Deadlines</CardTitle>
                    <CardDescription className="text-lg">
                      California statute of limitations for clergy abuse cases
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-red-700">Time Limits Apply</span>
                  </div>
                  <p className="text-red-700">
                    Don't wait to seek legal help. While AB 218 has extended deadlines, missing important deadlines could still prevent you from pursuing your case.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {importantDeadlines.map((deadline, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">{deadline.age}</h4>
                      <p className="text-primary font-medium mb-2">{deadline.deadline}</p>
                      <p className="text-sm text-muted-foreground">{deadline.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compensation */}
          <div className="content-card mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <DollarSign className="w-8 h-8 text-green-500" />
                  Potential Compensation
                </CardTitle>
                <CardDescription className="text-lg">
                  Types of damages you may be entitled to recover under California law
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {compensationTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-green-700">{type}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Treble Damages Under AB 218</h4>
                  <p className="text-green-700 text-sm">
                    When evidence shows institutional cover-up, courts can award triple damages as punishment. 
                    This means a $1 million award becomes $3 million when cover-up is proven.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ */}
          <div className="content-card mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <HelpCircle className="w-8 h-8 text-primary" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Do I need to pay attorney fees upfront?</h4>
                    <p className="text-muted-foreground">
                      No. We work on a contingency fee basis, meaning you pay nothing unless we win your case. This ensures justice is accessible regardless of your financial situation.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Will my case be kept confidential?</h4>
                    <p className="text-muted-foreground">
                      Yes. All discussions are protected by attorney-client privilege. Cases can be filed using pseudonyms, and we can pursue confidential settlements when appropriate.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">What if the abuse happened decades ago?</h4>
                    <p className="text-muted-foreground">
                      AB 218 recognizes that trauma affects memory and disclosure. You may still have a valid claim even if the abuse occurred long ago, especially if you recently discovered the connection to psychological injury.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Can I sue if I don't have physical evidence?</h4>
                    <p className="text-muted-foreground">
                      Yes. Your testimony is evidence. We conduct thorough investigations to uncover institutional records, witness testimony, and other evidence that supports your case.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="content-card text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Get Expert Legal Guidance Today</h2>
                <p className="text-xl mb-6 opacity-90">
                  Our experienced attorneys are ready to help you understand your rights under California law.
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

export default ClergyAbuseLegalGuidance;