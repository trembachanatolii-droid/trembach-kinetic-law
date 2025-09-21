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
import heroImage from '@/assets/sexual-abuse-legal-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const SexualAbuseLegalGuidance: React.FC = () => {
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
    title: "Sexual Abuse Legal Guidance | California Law Firm",
    description: "Expert legal guidance for sexual abuse cases in California. Understand your rights, legal process, and compensation options. Free confidential consultation.",
    keywords: "sexual abuse lawyer, California legal guidance, victim rights, statute of limitations, compensation, legal process"
  };

  const hero = {
    backgroundImage: heroImage,
    title: "Sexual Abuse Legal Guidance",
    subtitle: "Understanding Your Rights and Legal Options in California"
  };

  const legalSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Confidential discussion of your case with experienced attorneys",
      details: "During this private meeting, we'll listen to your story, explain your rights, and discuss potential legal options. Everything you share is protected by attorney-client privilege.",
      icon: Users,
      color: "text-blue-500"
    },
    {
      step: 2,
      title: "Case Investigation",
      description: "Thorough investigation to build a strong legal foundation",
      details: "Our team will gather evidence, interview witnesses, review medical records, and work with experts to establish the facts of your case.",
      icon: FileText,
      color: "text-green-500"
    },
    {
      step: 3,
      title: "Filing Your Claim",
      description: "Legal paperwork filed within statute of limitations",
      details: "We'll prepare and file all necessary legal documents, ensuring compliance with California's specific deadlines and procedural requirements.",
      icon: Scale,
      color: "text-purple-500"
    },
    {
      step: 4,
      title: "Negotiation & Resolution",
      description: "Pursuing maximum compensation through negotiation or trial",
      details: "We'll aggressively negotiate with defendants and their insurers. If necessary, we're prepared to take your case to trial to secure fair compensation.",
      icon: Gavel,
      color: "text-red-500"
    }
  ];

  const legalRights = [
    {
      title: "Right to Seek Compensation",
      description: "You may be entitled to damages for medical expenses, therapy costs, lost wages, and pain and suffering.",
      icon: DollarSign
    },
    {
      title: "Right to Privacy",
      description: "Your identity and case details are protected by strict confidentiality laws during legal proceedings.",
      icon: Shield
    },
    {
      title: "Right to Support",
      description: "You have the right to have a support person present during interviews and court proceedings.",
      icon: Users
    },
    {
      title: "Right to Legal Representation",
      description: "You have the right to be represented by an attorney at no upfront cost through contingency fee arrangements.",
      icon: Scale
    }
  ];

  const importantDeadlines = [
    {
      age: "Under 18",
      deadline: "Until age 40 or within 5 years of discovery",
      details: "Extended time limits apply for childhood sexual abuse cases under California law"
    },
    {
      age: "18 and over",
      deadline: "Within 10 years of the incident or 3 years of discovery",
      details: "Standard statute of limitations for adult sexual abuse cases"
    },
    {
      age: "Institutional Abuse",
      deadline: "Special provisions may apply",
      details: "Different deadlines may apply for abuse by institutions, schools, or organizations"
    }
  ];

  const compensationTypes = [
    "Medical and therapy expenses",
    "Lost wages and future earning capacity",
    "Pain and suffering",
    "Emotional distress",
    "Loss of enjoyment of life",
    "Punitive damages (in certain cases)"
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
          
          {/* Legal Process Steps */}
          <div className="content-card mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Legal Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding what to expect when pursuing a sexual abuse case in California
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
                  California law provides strong protections and rights for sexual abuse survivors
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

          {/* Statute of Limitations */}
          <div className="content-card mb-16">
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-red-500" />
                  <div>
                    <CardTitle className="text-3xl">Important Deadlines</CardTitle>
                    <CardDescription className="text-lg">
                      California statute of limitations for sexual abuse cases
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
                    Don't wait to seek legal help. Missing important deadlines could prevent you from pursuing your case.
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
                  Types of damages you may be entitled to recover
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
                      No. We work on a contingency fee basis, meaning you pay nothing unless we win your case.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">Will my case be kept confidential?</h4>
                    <p className="text-muted-foreground">
                      Yes. All discussions are protected by attorney-client privilege, and we can pursue confidential settlements when appropriate.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-lg mb-2">How long do these cases typically take?</h4>
                    <p className="text-muted-foreground">
                      Timeline varies depending on case complexity, but we work diligently to resolve cases as efficiently as possible while maximizing your recovery.
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
                  Our experienced attorneys are ready to help you understand your rights and options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="text-foreground">Call (818) 123-4567</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.location.href = '/sexual-abuse-case-evaluation'}
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

export default SexualAbuseLegalGuidance;