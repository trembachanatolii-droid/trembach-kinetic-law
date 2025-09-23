import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Scale, Building, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/amusement-park-legal-hero.jpg';
import SEO from '@/components/SEO';

const AmusementParkLegalGuidance: React.FC = () => {
  const legalConcepts = [
    {
      title: "Premises Liability",
      icon: Building,
      description: "Parks must maintain safe conditions for visitors",
      points: ["Regular inspections", "Proper maintenance", "Safety warnings", "Staff training"]
    },
    {
      title: "Negligence Claims",
      icon: Scale,
      description: "When parks fail to meet their duty of care",
      points: ["Equipment failures", "Poor maintenance", "Inadequate training", "Ignored hazards"]
    },
    {
      title: "Product Liability",
      icon: AlertTriangle,
      description: "Ride manufacturers can be held liable for defects",
      points: ["Design defects", "Manufacturing flaws", "Warning failures", "Safety instructions"]
    }
  ];

  const evidenceTypes = [
    { type: "Photos & Videos", examples: ["Scene documentation", "Equipment damage", "Injury photos"] },
    { type: "Medical Records", examples: ["Emergency treatment", "Diagnosis reports", "Treatment plans"] },
    { type: "Witness Statements", examples: ["Other guests", "Park employees", "Emergency responders"] },
    { type: "Park Documents", examples: ["Incident reports", "Maintenance logs", "Inspection records"] }
  ];

  const timeline = [
    { time: "Immediately", action: "Seek medical care and document incident" },
    { time: "24-48 Hours", action: "Contact attorney and request incident report" },
    { time: "30 Days", action: "Complete medical evaluation and gather evidence" },
    { time: "2-3 Years", action: "File lawsuit before statute of limitations expires" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amusement Park Legal Guidance | Trembach Law Firm"
        description="Comprehensive legal guidance for amusement park injury cases. Understand your rights and legal options after a theme park injury."
        keywords="amusement park law, theme park injury lawyer, premises liability, negligence claims"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Legal Guidance
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">Expert Legal Knowledge</span>
          </div>
          
          <p className="text-lg opacity-90">
            Understanding your legal rights after an amusement park injury
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Legal Concepts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Legal Concepts</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {legalConcepts.map((concept, index) => {
              const IconComponent = concept.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{concept.title}</CardTitle>
                    </div>
                    <p className="text-sm text-muted-foreground">{concept.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {concept.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Evidence Collection */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Important Evidence</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {evidenceTypes.map((evidence, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{evidence.type}</CardTitle>
                </CardHeader>
                <CardContent>
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

        {/* Timeline */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Legal Process Timeline</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{item.time}</h4>
                      <p className="text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Pursue Your Case?</h3>
              <p className="text-muted-foreground mb-6">
                Don't let legal complexity prevent you from getting the compensation you deserve.
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
                Call now: <span className="font-semibold text-primary">(818) 123-4567</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkLegalGuidance;