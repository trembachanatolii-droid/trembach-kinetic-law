import { ArrowLeft, FileText, Users, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import resourcesHeroImage from "@/assets/camp-lejeune-resources-hero.jpg";

export default function CampLejeuneResources() {
  return (
    <>
      <Helmet>
        <title>Camp Lejeune Resources | Trembach Law Firm</title>
        <meta 
          name="description" 
          content="Essential resources for Camp Lejeune water contamination claims. Access forms, medical guidelines, VA resources, and support services for veterans and families." 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${resourcesHeroImage})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Camp Lejeune Resources
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Essential resources and support for Camp Lejeune water contamination victims and their families
              </p>
            </div>
          </div>
        </section>

        {/* Resources Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Medical Resources */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <Shield className="w-6 h-6 mr-3 text-primary" />
                    Medical Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">VA Healthcare Services</h3>
                    <ul className="space-y-2 text-base">
                      <li>• Free healthcare for qualifying conditions related to Camp Lejeune exposure</li>
                      <li>• Priority scheduling for medical appointments and treatments</li>
                      <li>• Specialized care at VA medical centers nationwide</li>
                      <li>• Mental health services and counseling support</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Medical Documentation</h3>
                    <ul className="space-y-2 text-base">
                      <li>• Medical records from service at Camp Lejeune (1953-1987)</li>
                      <li>• Current medical records showing qualifying diagnoses</li>
                      <li>• Medical opinions linking conditions to contaminated water exposure</li>
                      <li>• Treatment records and ongoing care documentation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Resources */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    Legal Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Camp Lejeune Justice Act</h3>
                    <p className="text-base mb-4">
                      The Camp Lejeune Justice Act of 2022 allows veterans, their families, and civilian workers 
                      to file lawsuits for harm caused by contaminated water at Camp Lejeune between 1953 and 1987.
                    </p>
                    <ul className="space-y-2 text-base">
                      <li>• Two-year filing deadline from August 10, 2022</li>
                      <li>• Must file administrative claim first with Navy JAG</li>
                      <li>• No caps on damages or compensation amounts</li>
                      <li>• Covers medical expenses, pain and suffering, lost wages</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Required Documentation</h3>
                    <ul className="space-y-2 text-base">
                      <li>• Military service records showing Camp Lejeune service (1953-1987)</li>
                      <li>• Medical records proving qualifying health conditions</li>
                      <li>• Marriage certificates for family member claims</li>
                      <li>• Birth certificates for children affected in utero</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Support Services */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <Users className="w-6 h-6 mr-3 text-primary" />
                    Support Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Veteran Support Organizations</h3>
                    <ul className="space-y-2 text-base">
                      <li>• Veterans of Foreign Wars (VFW) advocacy and assistance</li>
                      <li>• American Legion support services</li>
                      <li>• Disabled American Veterans (DAV) claims assistance</li>
                      <li>• Camp Lejeune survivor support groups</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Family Support</h3>
                    <ul className="space-y-2 text-base">
                      <li>• Counseling services for affected families</li>
                      <li>• Financial assistance programs</li>
                      <li>• Medical care coordination</li>
                      <li>• Educational resources about toxic exposure</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Timeline and Deadlines */}
              <Card className="glass-card group hover-glow-primary">
                <CardHeader>
                  <CardTitle className="flex items-center group-hover:text-primary transition-colors text-2xl">
                    <Clock className="w-6 h-6 mr-3 text-primary" />
                    Important Deadlines
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <h3 className="font-semibold text-lg mb-3 text-destructive">Critical Filing Deadline</h3>
                    <p className="text-base mb-4">
                      <strong>August 10, 2024:</strong> Deadline to file Camp Lejeune Justice Act claims. 
                      Time is running out - don't delay in seeking legal representation.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-primary">Claims Process Timeline</h3>
                    <ul className="space-y-2 text-base">
                      <li>• <strong>Step 1:</strong> File administrative claim with Navy JAG (6 months to respond)</li>
                      <li>• <strong>Step 2:</strong> If denied or no response, file federal lawsuit</li>
                      <li>• <strong>Step 3:</strong> Discovery phase and evidence gathering</li>
                      <li>• <strong>Step 4:</strong> Settlement negotiations or trial proceedings</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass-card border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-primary">
                    Need Help With Your Camp Lejeune Claim?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-lg text-muted-foreground">
                    Our experienced attorneys are here to help you navigate the Camp Lejeune claims process
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/camp-lejeune-evaluation">
                      <Button size="lg" className="w-full sm:w-auto">
                        Free Case Evaluation
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href="tel:8181234567" className="text-primary hover:text-primary-foreground">
                        Call (818) 123-4567
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}