import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, FileText, Clock, AlertTriangle, CheckCircle, XCircle, Users, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoBack from "@/components/GoBack";

gsap.registerPlugin(ScrollTrigger);

const AmusementParkLegalGuidance = () => {
  useEffect(() => {
    // Hero animation
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Cards animation
    gsap.fromTo(".legal-card", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".legal-grid",
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const legalConcepts = [
    {
      title: "Premises Liability",
      icon: Building,
      description: "Amusement parks have a legal duty to maintain safe conditions for visitors.",
      details: [
        "Regular inspection and maintenance of rides",
        "Adequate safety warnings and instructions",
        "Proper training of staff and operators",
        "Safe design and construction standards"
      ]
    },
    {
      title: "Negligence Claims",
      icon: Scale,
      description: "When parks fail to meet their duty of care, resulting in injury to guests.",
      details: [
        "Failure to inspect or maintain equipment",
        "Inadequate safety protocols",
        "Poor staff training or supervision",
        "Ignoring known safety hazards"
      ]
    },
    {
      title: "Product Liability",
      icon: AlertTriangle,
      description: "Manufacturers of rides and equipment can be held liable for defective products.",
      details: [
        "Design defects in ride equipment",
        "Manufacturing defects or flaws",
        "Failure to warn of known dangers",
        "Inadequate safety instructions"
      ]
    },
    {
      title: "Assumption of Risk",
      icon: FileText,
      description: "Legal defense claiming visitors assumed inherent risks of amusement park activities.",
      details: [
        "Visitors understand some activities involve risk",
        "Risk must be inherent to the activity",
        "Does not excuse gross negligence",
        "Waivers have limited enforceability"
      ]
    }
  ];

  const evidenceTypes = [
    {
      type: "Physical Evidence",
      importance: "Critical",
      examples: ["Photos of the scene", "Medical records", "Defective equipment", "Safety inspection reports"],
      timeframe: "Collect immediately"
    },
    {
      type: "Documentary Evidence",
      importance: "High",
      examples: ["Incident reports", "Maintenance logs", "Training records", "Safety manuals"],
      timeframe: "Request within days"
    },
    {
      type: "Witness Testimony",
      importance: "High",
      examples: ["Other guests", "Park employees", "Emergency responders", "Expert witnesses"],
      timeframe: "Contact within weeks"
    },
    {
      type: "Electronic Evidence",
      importance: "Moderate",
      examples: ["Security camera footage", "Ride sensor data", "Communication logs", "Social media posts"],
      timeframe: "Preserve immediately"
    }
  ];

  const commonDefenses = [
    {
      defense: "Assumption of Risk",
      explanation: "Claiming the visitor voluntarily assumed the risks inherent in amusement park activities.",
      counter: "This defense doesn't apply to risks created by negligence or defective equipment."
    },
    {
      defense: "Comparative Negligence",
      explanation: "Arguing the injured person contributed to their own injury through their actions.",
      counter: "Even if partially at fault, you may still recover damages proportional to the park's negligence."
    },
    {
      defense: "Statutory Immunity",
      explanation: "Some states provide limited immunity to amusement park operators under specific conditions.",
      counter: "Immunity typically doesn't cover gross negligence or intentional misconduct."
    },
    {
      defense: "No Notice",
      explanation: "Claiming the park had no knowledge of the dangerous condition that caused injury.",
      counter: "Parks have a duty to regularly inspect for hazards and should have discovered obvious dangers."
    }
  ];

  const timelineFacts = [
    {
      timeframe: "Immediately",
      actions: ["Seek medical attention", "Report incident to park", "Document scene with photos", "Collect witness information"],
      legal: "Preserve evidence before it's altered or destroyed"
    },
    {
      timeframe: "Within 24-48 Hours",
      actions: ["Contact an attorney", "Request incident report copy", "Begin medical documentation", "Notify insurance"],
      legal: "Professional legal guidance protects your rights"
    },
    {
      timeframe: "Within 30 Days",
      actions: ["Complete medical evaluation", "Gather all documentation", "Identify potential witnesses", "Assess full damages"],
      legal: "Build a comprehensive case foundation"
    },
    {
      timeframe: "Statute of Limitations",
      actions: ["File lawsuit if necessary", "Complete discovery process", "Expert witness preparation", "Settlement negotiations"],
      legal: "Varies by state - typically 2-3 years from incident date"
    }
  ];

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "Critical": return "destructive";
      case "High": return "secondary";
      case "Moderate": return "default";
      default: return "outline";
    }
  };

  return (
    <>
      <Helmet>
        <title>Amusement Park Legal Guidance | Your Rights After Theme Park Injuries</title>
        <meta name="description" content="Comprehensive legal guidance for amusement park injury cases. Understand your rights, legal concepts, evidence collection, and how to pursue compensation for theme park injuries." />
        <meta name="keywords" content="amusement park law, theme park injury lawyer, premises liability, negligence claims, legal rights" />
        <link rel="canonical" href="/practice-areas/amusement-parks/legal-guidance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <GoBack />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">Legal Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Amusement Park Legal Guidance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Understanding your legal rights and options after an amusement park injury. Get expert guidance on pursuing compensation and holding negligent parties accountable.
            </p>
          </div>
        </section>

        {/* Legal Concepts */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Legal Concepts</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding these fundamental legal principles is crucial for amusement park injury cases.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 legal-grid">
              {legalConcepts.map((concept, index) => {
                const IconComponent = concept.icon;
                return (
                  <Card key={index} className="legal-card hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{concept.title}</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {concept.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold mb-3 text-sm text-primary">Key Elements:</h4>
                      <ul className="space-y-2">
                        {concept.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Evidence Collection */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Critical Evidence Collection</h2>
              <p className="text-muted-foreground">
                The strength of your case depends on preserving the right evidence at the right time.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {evidenceTypes.map((evidence, index) => (
                <Card key={index} className="legal-card">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{evidence.type}</CardTitle>
                      <Badge variant={getImportanceColor(evidence.importance)}>
                        {evidence.importance}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{evidence.timeframe}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-2 text-sm">Examples:</h4>
                    <ul className="space-y-1">
                      {evidence.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Common Defenses */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Legal Defenses</h2>
              <p className="text-muted-foreground">
                Understanding these defenses helps prepare stronger cases and anticipate opposing arguments.
              </p>
            </div>

            <div className="space-y-6">
              {commonDefenses.map((defense, index) => (
                <Card key={index} className="legal-card">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          {defense.defense}
                        </h3>
                        <p className="text-muted-foreground text-sm">{defense.explanation}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-primary">
                          <CheckCircle className="h-4 w-4" />
                          Our Counter-Strategy
                        </h4>
                        <p className="text-sm">{defense.counter}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Timeline */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Legal Process Timeline</h2>
              <p className="text-muted-foreground">
                Understanding the timeline helps you take the right actions at the right time.
              </p>
            </div>

            <div className="space-y-8">
              {timelineFacts.map((timeline, index) => (
                <Card key={index} className="legal-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{timeline.timeframe}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-primary">Required Actions:</h4>
                            <ul className="space-y-1">
                              {timeline.actions.map((action, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                  {action}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-sm text-secondary">Legal Significance:</h4>
                            <p className="text-sm text-muted-foreground">{timeline.legal}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Pursue Your Case?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Don't let the complexity of amusement park injury law prevent you from getting the compensation you deserve. Our experienced team is here to guide you through every step.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/practice-areas/amusement-parks/case-evaluation">
                      Free Case Evaluation
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/practice-areas/amusement-parks/compensation-calculator">
                      Calculate Compensation
                    </Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Call now: <span className="font-semibold text-primary">(555) 123-4567</span> - Available 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AmusementParkLegalGuidance;