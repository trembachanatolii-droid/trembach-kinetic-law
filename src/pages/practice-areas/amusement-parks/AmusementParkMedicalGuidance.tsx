import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Heart, Brain, Bone, AlertTriangle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/amusement-park-medical-hero.jpg';
import SEO from '@/components/SEO';

const AmusementParkMedicalGuidance: React.FC = () => {
  const commonInjuries = [
    {
      title: "Head and Brain Injuries",
      icon: Brain,
      severity: "High Risk",
      symptoms: ["Headaches", "Dizziness", "Memory loss", "Nausea"],
      action: "Seek immediate medical attention"
    },
    {
      title: "Spinal Cord Injuries", 
      icon: Bone,
      severity: "Critical",
      symptoms: ["Back pain", "Numbness", "Loss of sensation"],
      action: "Emergency medical care needed"
    },
    {
      title: "Broken Bones",
      icon: Bone,
      severity: "Moderate",
      symptoms: ["Severe pain", "Swelling", "Inability to move"],
      action: "Immediate medical evaluation"
    },
    {
      title: "Cuts and Burns",
      icon: Heart,
      severity: "Variable",
      symptoms: ["Deep cuts", "Severe bleeding", "Burns"],
      action: "Prompt medical care required"
    }
  ];

  const immediateSteps = [
    "Move to a safe location",
    "Call 911 for serious injuries",
    "Document with photos if safe",
    "Report to park management",
    "Seek medical attention"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amusement Park Injury Medical Guidance | Trembach Law Firm"
        description="Essential medical guidance for amusement park injuries. Learn about common injuries, immediate response steps, and when to seek emergency care."
        keywords="amusement park injuries, theme park medical guidance, ride injuries, emergency response"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Medical Guidance
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-white">Expert Medical Information</span>
          </div>
          
          <p className="text-lg text-white opacity-90">
            Essential medical information for amusement park injuries
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Common Injuries */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Common Amusement Park Injuries</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {commonInjuries.map((injury, index) => {
              const IconComponent = injury.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{injury.title}</CardTitle>
                        <Badge variant={injury.severity === "Critical" ? "destructive" : "secondary"}>
                          {injury.severity}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Symptoms:</h4>
                        <ul className="space-y-1">
                          {injury.symptoms.map((symptom, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                        <span className="text-sm font-medium text-red-600">{injury.action}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Immediate Steps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Immediate Response Steps</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                {immediateSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-12">
          <Card className="bg-red-50 border-red-200 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-red-600">
                <Phone className="h-5 w-5" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <h3 className="font-semibold mb-2">Emergency Services</h3>
                  <p className="text-2xl font-bold text-red-600">911</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal Help</h3>
                  <p className="text-2xl font-bold text-red-600">(818) 123-4567</p>
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
                If you've been injured at an amusement park, our experienced team can help protect your rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/practice-areas/amusement-parks/case-evaluation">
                    Free Case Evaluation
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Call (818) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkMedicalGuidance;