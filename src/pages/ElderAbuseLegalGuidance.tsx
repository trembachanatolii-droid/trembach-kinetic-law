import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp,
  Scale,
  Shield,
  AlertTriangle,
  FileText,
  Clock,
  Users,
  Phone,
  CheckCircle,
  XCircle,
  Info,
  Gavel,
  Heart,
  DollarSign
} from 'lucide-react';
import elderAbuseLegalGuidanceHero from '@/assets/elder-abuse-legal-guidance-hero.jpg';

interface GoBackProps {
  onGoBack?: () => void;
  fromSection?: string;
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack, fromSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    if (onGoBack) {
      onGoBack();
    } else if (fromSection) {
      const targetElement = document.getElementById(fromSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.back();
    } else {
      window.history.back();
    }
  };
  
  return (
    <div className={`fixed top-20 left-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        variant="ghost" 
        onClick={handleClick}
        className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
};

const ElderAbuseLegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const immediateSteps = [
    {
      title: "Ensure Immediate Safety",
      description: "Remove the elder from immediate danger if possible",
      icon: Shield,
      isGood: true,
      details: [
        "Call 911 if there's immediate physical danger",
        "Seek emergency medical care for serious injuries",
        "Move elder to safe location if necessary",
        "Document unsafe conditions with photos"
      ]
    },
    {
      title: "Preserve Evidence",
      description: "Document everything before it can be altered or destroyed",
      icon: FileText,
      isGood: true,
      details: [
        "Photograph all injuries and living conditions",
        "Collect medical records and care documentation",
        "Secure financial records and bank statements",
        "Get witness contact information"
      ]
    },
    {
      title: "Report the Abuse",
      description: "File required reports with appropriate agencies",
      icon: Phone,
      isGood: true,
      details: [
        "Call Adult Protective Services: 833-401-0832",
        "Report to law enforcement if criminal activity",
        "Contact facility ombudsman if applicable",
        "File within required time limits"
      ]
    },
    {
      title: "Contact Legal Counsel",
      description: "Get experienced legal representation immediately",
      icon: Scale,
      isGood: true,
      details: [
        "Call Trembach Law Firm: (818) 123-4567",
        "Free consultation available 24/7",
        "Attorney-client privilege protects discussions",
        "No fees unless we win your case"
      ]
    }
  ];

  const neverDoSteps = [
    {
      title: "Don't Confront Facility Management Alone",
      description: "Avoid direct confrontation without legal representation",
      icon: Users,
      isGood: false,
      details: [
        "Facilities may try to cover up evidence",
        "Statements can be used against you later",
        "Management may intimidate or mislead you",
        "Let your attorney handle all communications"
      ]
    },
    {
      title: "Don't Sign Any Documents",
      description: "Never sign releases or agreements without attorney review",
      icon: XCircle,
      isGood: false,
      details: [
        "Facilities may try to limit liability",
        "Releases can waive your legal rights",
        "Settlement offers are often inadequate",
        "You may not understand full legal implications"
      ]
    },
    {
      title: "Don't Delay Taking Action",
      description: "Time limits apply - evidence disappears quickly",
      icon: Clock,
      isGood: false,
      details: [
        "Two-year statute of limitations in California",
        "Witnesses memories fade over time",
        "Medical evidence becomes less reliable",
        "Facility records may be destroyed"
      ]
    },
    {
      title: "Don't Accept Initial Explanations",
      description: "Facilities often minimize or explain away serious abuse",
      icon: AlertTriangle,
      isGood: false,
      details: [
        "\"Accidents happen\" is not an acceptable explanation",
        "Patterns of neglect indicate systemic problems",
        "Isolated incidents often reveal larger issues",
        "Independent investigation is necessary"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Elder Abuse Legal Guidance | California Law | Trembach Law Firm</title>
        <meta 
          name="description" 
          content="Complete legal guidance for California elder abuse cases. Learn your rights under EADACPA, what steps to take after discovering abuse, and how to protect your loved one."
        />
        <meta name="keywords" content="elder abuse legal guidance, California EADACPA, nursing home abuse law, elder rights attorney" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Go Back Component */}
        <GoBack />

        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${elderAbuseLegalGuidanceHero})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Elder Abuse Legal Guidance
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Your comprehensive guide to California elder abuse law and protecting your loved one's rights
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-lg">
              <div className="flex items-center gap-2">
                <Scale className="w-5 h-5" />
                <span>Know Your Rights</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Protect Your Loved One</span>
              </div>
              <div className="flex items-center gap-2">
                <Gavel className="w-5 h-5" />
                <span>Seek Justice</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-16">
          
          {/* Immediate Action Steps */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Immediate Steps to Take</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                If you suspect or have discovered elder abuse, take these critical steps immediately to protect your loved one and preserve your legal rights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {immediateSteps.map((step, index) => (
                <Card key={index} className={`glass-card group hover-glow-green transition-all duration-300 hover:scale-105 border-l-4 ${step.isGood ? 'border-l-green-500' : 'border-l-red-500'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 group-hover:text-green-600 transition-colors">
                      <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                        <step.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">Step {index + 1}:</span>
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="text-base font-semibold">{step.title}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* What Never to Do */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-destructive">Critical Mistakes to Avoid</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These common mistakes can seriously harm your case and reduce your ability to seek justice for elder abuse.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {neverDoSteps.map((step, index) => (
                <Card key={index} className={`glass-card group hover-glow-red transition-all duration-300 hover:scale-105 border-l-4 ${step.isGood ? 'border-l-green-500' : 'border-l-red-500'}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 group-hover:text-red-600 transition-colors">
                      <div className="p-2 rounded-full bg-red-100 dark:bg-red-900">
                        <step.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">Never:</span>
                          <XCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="text-base font-semibold">{step.title}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-muted-foreground">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* California Elder Abuse Law Overview */}
          <section className="mb-16">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Scale className="w-6 h-6 text-primary" />
                  California Elder Abuse Law (EADACPA)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed">
                  California's Elder Abuse and Dependent Adult Civil Protection Act (EADACPA) provides some of the strongest protections in the nation for vulnerable adults. Understanding your rights under this law is crucial for seeking justice and compensation.
                </p>

                <Collapsible open={expandedSections.eadacpa} onOpenChange={() => toggleSection('eadacpa')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Learn About Enhanced Remedies Under EADACPA
                      {expandedSections.eadacpa ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6 space-y-4">
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="text-center">
                        <CardHeader>
                          <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                          <CardTitle className="text-lg">Attorney Fees</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Successful cases can recover attorney fees from defendants, making legal representation more accessible.</p>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardHeader>
                          <Gavel className="w-8 h-8 text-primary mx-auto mb-2" />
                          <CardTitle className="text-lg">Punitive Damages</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Courts can award punitive damages to punish egregious conduct and deter future abuse.</p>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardHeader>
                          <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                          <CardTitle className="text-lg">Pain & Suffering</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">Enhanced compensation for emotional distress and loss of quality of life.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Requirements for Enhanced Damages:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-medium mb-2">Standards of Proof:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Clear and convincing evidence</li>
                            <li>• Higher than normal burden of proof</li>
                            <li>• Requires strong documentation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium mb-2">Defendant Conduct Must Show:</h5>
                          <ul className="text-sm space-y-1">
                            <li>• Recklessness or oppression</li>
                            <li>• Fraud or malice</li>
                            <li>• Willful disregard for elder safety</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </section>

          {/* Types of Elder Abuse Covered */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Types of Elder Abuse Under California Law</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Physical Abuse",
                  icon: AlertTriangle,
                  description: "Hitting, restraining, inappropriate use of drugs, or any physical harm",
                  examples: ["Unexplained injuries", "Bruises in various stages", "Broken bones", "Restraint marks"]
                },
                {
                  title: "Neglect", 
                  icon: Heart,
                  description: "Failure to provide necessary care, services, or protection",
                  examples: ["Bedsores", "Malnutrition", "Poor hygiene", "Medication errors"]
                },
                {
                  title: "Financial Abuse",
                  icon: DollarSign, 
                  description: "Theft, fraud, or misuse of an elder's money or property",
                  examples: ["Unauthorized withdrawals", "Forged signatures", "New beneficiaries", "Isolation during financial changes"]
                },
                {
                  title: "Emotional Abuse",
                  icon: Users,
                  description: "Inflicting mental pain, distress, or anguish through threats or harassment",
                  examples: ["Verbal threats", "Humiliation", "Intimidation", "Social isolation"]
                },
                {
                  title: "Abandonment", 
                  icon: Shield,
                  description: "Desertion by someone who has assumed responsibility for care",
                  examples: ["Facility closures", "Caregiver departure", "Family abandonment", "Unsafe discharge"]
                },
                {
                  title: "Sexual Abuse",
                  icon: XCircle,
                  description: "Any non-consensual sexual contact or inappropriate sexual behavior", 
                  examples: ["Unwanted touching", "Sexual assault", "Forced nudity", "Sexual photography"]
                }
              ].map((abuseType, index) => (
                <Card key={index} className="glass-card hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <abuseType.icon className="w-5 h-5 text-primary" />
                      {abuseType.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3 text-sm text-muted-foreground">{abuseType.description}</p>
                    <div>
                      <h5 className="font-medium text-sm mb-2">Common Signs:</h5>
                      <ul className="text-xs space-y-1">
                        {abuseType.examples.map((example, idx) => (
                          <li key={idx} className="flex items-center gap-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Time Limits and Deadlines */}
          <section className="mb-16">
            <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-amber-950/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                      Critical Time Limits for Elder Abuse Cases
                    </h2>
                    <div className="space-y-4 text-amber-700 dark:text-amber-300">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-2">Statute of Limitations:</h3>
                          <ul className="space-y-1 text-sm">
                            <li>• 2 years from discovery of abuse</li>
                            <li>• 4 years for financial abuse cases</li>
                            <li>• May be extended for concealed abuse</li>
                            <li>• Cognitive impairment may toll deadlines</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Immediate Reporting Requirements:</h3>
                          <ul className="space-y-1 text-sm">
                            <li>• Report to APS within 24 hours</li>
                            <li>• Physical abuse: 2-hour law enforcement reporting</li>
                            <li>• Written reports required for facilities</li>
                            <li>• Ombudsman notification for care facilities</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-amber-100 dark:bg-amber-900 rounded-lg">
                        <p className="text-sm font-medium">
                          ⚠️ Don't wait to take action. Evidence disappears, witnesses become unavailable, and facilities may destroy records. Contact an attorney immediately to protect your rights.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Legal Process Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">The Legal Process for Elder Abuse Cases</h2>
            
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Free Case Evaluation",
                  description: "We review your case details and determine the strength of your claims",
                  duration: "1-2 days",
                  icon: Scale
                },
                {
                  step: 2,
                  title: "Investigation & Evidence Gathering", 
                  description: "Comprehensive investigation including medical records, facility documentation, and expert analysis",
                  duration: "2-6 months",
                  icon: FileText
                },
                {
                  step: 3,
                  title: "Filing the Lawsuit",
                  description: "Legal complaint filed against responsible parties with enhanced damage claims",
                  duration: "30 days",
                  icon: Gavel
                },
                {
                  step: 4,
                  title: "Discovery & Depositions",
                  description: "Exchange of information, document production, and witness testimony under oath",
                  duration: "6-12 months", 
                  icon: Users
                },
                {
                  step: 5,
                  title: "Mediation & Settlement",
                  description: "Negotiation for fair compensation with potential for trial if settlement inadequate",
                  duration: "Varies",
                  icon: Shield
                }
              ].map((processStep, index) => (
                <Card key={index} className="glass-card hover-glow-primary transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                        {processStep.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <processStep.icon className="w-5 h-5 text-primary" />
                          <h3 className="text-lg font-semibold">{processStep.title}</h3>
                          <Badge variant="secondary" className="ml-auto">{processStep.duration}</Badge>
                        </div>
                        <p className="text-muted-foreground">{processStep.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="text-center p-12">
                <h2 className="text-3xl font-bold mb-4">Need Legal Guidance Right Now?</h2>
                <p className="text-xl mb-8 opacity-90">
                  Don't navigate elder abuse alone. Get experienced legal guidance to protect your loved one and preserve your rights.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full md:w-auto"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567 - Available 24/7
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full md:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.location.href = '/elder-abuse-case-evaluation'}
                  >
                    Get Free Case Evaluation
                  </Button>
                </div>
                <div className="mt-6 text-sm opacity-75">
                  <p>✓ Free Consultation ✓ No Fees Unless We Win ✓ Completely Confidential</p>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default ElderAbuseLegalGuidance;