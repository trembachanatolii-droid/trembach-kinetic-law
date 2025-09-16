import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Phone, MapPin, Users, Award, ArrowRight } from 'lucide-react';

const MedicalGuidance: React.FC = () => {
  const treatmentCenters = [
    {
      name: "UCLA Jonsson Comprehensive Cancer Center",
      location: "Los Angeles, CA",
      specialties: ["Pleural Mesothelioma", "Clinical Trials", "Multimodal Therapy"],
      contact: "(310) 825-5268"
    },
    {
      name: "UCSF Helen Diller Family Comprehensive Cancer Center",
      location: "San Francisco, CA",
      specialties: ["Peritoneal Mesothelioma", "HIPEC Treatment", "Surgical Excellence"],
      contact: "(415) 353-7070"
    },
    {
      name: "Stanford Cancer Institute",
      location: "Palo Alto, CA",
      specialties: ["Immunotherapy", "Precision Medicine", "Clinical Research"],
      contact: "(650) 498-6000"
    },
    {
      name: "City of Hope",
      location: "Los Angeles, CA",
      specialties: ["Innovative Treatments", "Palliative Care", "Family Support"],
      contact: "(626) 256-4673"
    }
  ];

  const treatmentOptions = [
    {
      title: "Surgery",
      description: "Extrapleural pneumonectomy, pleurectomy/decortication, and cytoreductive surgery for appropriate candidates.",
      icon: Heart
    },
    {
      title: "Chemotherapy",
      description: "Combination therapies including pemetrexed, cisplatin, and newer targeted agents.",
      icon: Award
    },
    {
      title: "Radiation Therapy",
      description: "Intensity-modulated radiation therapy (IMRT) and stereotactic body radiation therapy (SBRT).",
      icon: Users
    },
    {
      title: "Immunotherapy",
      description: "Checkpoint inhibitors and combination immunotherapy approaches showing promising results.",
      icon: Phone
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Medical Guidance for Mesothelioma Patients
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Connect with the best mesothelioma specialists and treatment centers in California
          </p>
        </div>
      </section>

      {/* Treatment Centers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Leading Mesothelioma Treatment Centers</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              California is home to world-renowned cancer centers with specialized mesothelioma programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {treatmentCenters.map((center, index) => (
              <Card key={index} className="glass-card group hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-5 h-5 text-destructive" />
                    <Badge variant="outline">Specialized Center</Badge>
                  </div>
                  <CardTitle className="text-xl">{center.name}</CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{center.location}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary">{specialty}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="font-medium">{center.contact}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Get Referral <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Treatment Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Treatment Options</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatmentOptions.map((option, index) => (
                <Card key={index} className="glass-card text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <option.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Important Information */}
          <Card className="glass-card bg-gradient-to-br from-primary/10 to-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">Important Medical Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Time is Critical</h4>
                <p className="text-muted-foreground">
                  Mesothelioma is an aggressive cancer. Early intervention with specialized treatment can significantly impact outcomes. Don't delay in seeking expert care.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Second Opinions</h4>
                <p className="text-muted-foreground">
                  We strongly encourage getting a second opinion from a mesothelioma specialist. Different centers may offer different treatment approaches and clinical trials.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Clinical Trials</h4>
                <p className="text-muted-foreground">
                  Clinical trials may offer access to cutting-edge treatments not yet widely available. Ask your oncologist about trial eligibility.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Support Services</h4>
                <p className="text-muted-foreground">
                  Most cancer centers offer support services including social workers, nutritionists, and support groups for patients and families.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-primary-foreground">
              We Can Help Connect You with Specialists
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Our team has relationships with leading mesothelioma doctors and can help facilitate appointments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <Phone className="w-5 h-5 mr-2" />
                Call 855-TREMBACH-WINS
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Free Medical Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalGuidance;