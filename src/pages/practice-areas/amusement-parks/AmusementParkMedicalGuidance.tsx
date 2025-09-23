import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Brain, Bone, AlertTriangle, Stethoscope, FileText, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GoBack from "@/components/GoBack";

gsap.registerPlugin(ScrollTrigger);

const AmusementParkMedicalGuidance = () => {
  useEffect(() => {
    // Hero animation
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Cards animation
    gsap.fromTo(".guidance-card", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".guidance-grid",
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const commonInjuries = [
    {
      title: "Head and Brain Injuries",
      icon: Brain,
      severity: "High",
      description: "Concussions, traumatic brain injuries, and skull fractures from ride malfunctions or falls.",
      symptoms: ["Headaches", "Dizziness", "Memory loss", "Nausea", "Confusion"],
      urgency: "Immediate medical attention required"
    },
    {
      title: "Spinal Cord Injuries",
      icon: Bone,
      severity: "Critical",
      description: "Back and neck injuries from sudden stops, whiplash, or falls from height.",
      symptoms: ["Severe back pain", "Numbness", "Paralysis", "Loss of sensation"],
      urgency: "Emergency medical care needed"
    },
    {
      title: "Broken Bones and Fractures",
      icon: Bone,
      severity: "Moderate",
      description: "Fractures to arms, legs, ribs, or other bones from impacts or falls.",
      symptoms: ["Visible deformity", "Severe pain", "Swelling", "Inability to move"],
      urgency: "Immediate medical evaluation"
    },
    {
      title: "Lacerations and Burns",
      icon: Heart,
      severity: "Variable",
      description: "Cuts from sharp edges or burns from malfunctioning equipment.",
      symptoms: ["Deep cuts", "Severe bleeding", "Burns", "Scarring potential"],
      urgency: "Prompt medical care required"
    }
  ];

  const immediateSteps = [
    {
      step: 1,
      title: "Ensure Safety",
      description: "Move to a safe location away from the ride or attraction that caused injury."
    },
    {
      step: 2,
      title: "Call Emergency Services",
      description: "Dial 911 for serious injuries. Park medical staff should also be notified."
    },
    {
      step: 3,
      title: "Document Everything",
      description: "Take photos of injuries, the scene, and any equipment involved if safe to do so."
    },
    {
      step: 4,
      title: "Preserve Evidence",
      description: "Keep tickets, wristbands, and any witness contact information."
    },
    {
      step: 5,
      title: "Report to Park Management",
      description: "File an incident report with park officials and request a copy."
    }
  ];

  const medicalConsiderations = [
    {
      title: "Hidden Injuries",
      description: "Adrenaline can mask pain. Some injuries like concussions or internal bleeding may not be immediately apparent.",
      recommendation: "Seek medical evaluation even if you feel fine initially."
    },
    {
      title: "Pre-existing Conditions",
      description: "Rides can aggravate existing medical conditions like heart problems, back issues, or pregnancy complications.",
      recommendation: "Inform medical providers of any pre-existing conditions."
    },
    {
      title: "Delayed Symptoms",
      description: "Some symptoms may appear hours or days after the incident, particularly with head injuries.",
      recommendation: "Monitor for changes and seek immediate care if symptoms worsen."
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "destructive";
      case "High": return "destructive";
      case "Moderate": return "secondary";
      default: return "default";
    }
  };

  return (
    <>
      <Helmet>
        <title>Amusement Park Injury Medical Guidance | Understanding and Managing Theme Park Injuries</title>
        <meta name="description" content="Comprehensive medical guidance for amusement park injuries. Learn about common theme park injuries, immediate response steps, and when to seek emergency medical care." />
        <meta name="keywords" content="amusement park injuries, theme park medical guidance, ride injuries, emergency response, medical treatment" />
        <link rel="canonical" href="/practice-areas/amusement-parks/medical-guidance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <GoBack />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Stethoscope className="h-4 w-4" />
              <span className="text-sm font-medium">Medical Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
              Amusement Park Injury Medical Guidance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Essential medical information for understanding, treating, and managing injuries that occur at theme parks and amusement facilities.
            </p>
          </div>
        </section>

        {/* Common Injuries Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Common Amusement Park Injuries</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the types of injuries that can occur helps in providing appropriate immediate care and seeking proper treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 guidance-grid">
              {commonInjuries.map((injury, index) => {
                const IconComponent = injury.icon;
                return (
                  <Card key={index} className="guidance-card hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{injury.title}</CardTitle>
                            <Badge variant={getSeverityColor(injury.severity)} className="mt-1">
                              {injury.severity} Risk
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {injury.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2 text-sm text-primary">Common Symptoms:</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {injury.symptoms.map((symptom, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                {symptom}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-center gap-2 p-3 bg-destructive/10 rounded-lg">
                          <AlertTriangle className="h-4 w-4 text-destructive" />
                          <span className="text-sm font-medium text-destructive">{injury.urgency}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Immediate Response Steps */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Immediate Response Steps</h2>
              <p className="text-muted-foreground">
                Follow these critical steps immediately after an amusement park injury occurs.
              </p>
            </div>

            <div className="space-y-6">
              {immediateSteps.map((step, index) => (
                <Card key={index} className="guidance-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Considerations */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Important Medical Considerations</h2>
              <p className="text-muted-foreground">
                Key factors to keep in mind when dealing with amusement park injuries.
              </p>
            </div>

            <div className="grid gap-6">
              {medicalConsiderations.map((consideration, index) => (
                <Card key={index} className="guidance-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      {consideration.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {consideration.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-primary/5 rounded-lg">
                      <p className="text-sm font-semibold text-primary mb-1">Recommendation:</p>
                      <p className="text-sm">{consideration.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-destructive">
                  <Phone className="h-5 w-5" />
                  Emergency Medical Contacts
                </CardTitle>
                <CardDescription>
                  Keep these important numbers readily available during your visit.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-center">
                  <div>
                    <h3 className="font-semibold mb-2">Emergency Services</h3>
                    <p className="text-2xl font-bold text-destructive">911</p>
                    <p className="text-sm text-muted-foreground">For life-threatening emergencies</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Poison Control</h3>
                    <p className="text-2xl font-bold text-destructive">1-800-222-1222</p>
                    <p className="text-sm text-muted-foreground">For toxic exposures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Need Legal Guidance After a Medical Emergency?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you've been injured at an amusement park, our experienced legal team can help protect your rights while you focus on recovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/practice-areas/amusement-parks/case-evaluation">
                      Free Case Evaluation
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/practice-areas/amusement-parks/legal-guidance">
                      Legal Guidance
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default AmusementParkMedicalGuidance;