import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calculator, Scale, Phone, FileText, Users, Award, Building } from 'lucide-react';
import heroBackground from '@/assets/aviation-resources.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const AviationResources: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Aviation Accident Resources | California Airplane & Helicopter Crash Help"
        description="Comprehensive resources for aviation accident victims including calculators, guides, and support services. Expert help for California airplane and helicopter crash cases."
        keywords="aviation accident resources, airplane crash help, helicopter accident support, California aviation assistance, flight accident guidance"
        canonical="https://www.trembachlawfirm.com/aviation/resources"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Aviation Accident Resources",
          "description": "Comprehensive resources and tools for aviation accident victims in California",
          "url": "https://www.trembachlawfirm.com/aviation/resources"
        }}
      />
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviation Accident Resources
          </h1>
          <p className="text-xl">Comprehensive tools and information for aviation accident victims</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Quick Access Tools */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Essential Tools & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <Card className="aviation-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Scale className="w-6 h-6 mr-3" />
                  Free Case Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Get a professional assessment of your aviation accident case with no obligation.</p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = '/aviation/case-evaluation'}
                >
                  Start Evaluation
                </Button>
              </CardContent>
            </Card>

            <Card className="aviation-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Calculator className="w-6 h-6 mr-3" />
                  Compensation Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Estimate potential compensation for your aviation accident case.</p>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.location.href = '/aviation/compensation-calculator'}
                >
                  Calculate Value
                </Button>
              </CardContent>
            </Card>

            <Card className="aviation-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Phone className="w-6 h-6 mr-3" />
                  24/7 Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Speak with an aviation accident attorney immediately.</p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  Call (818) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Educational Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Educational Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <Card className="aviation-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <BookOpen className="w-6 h-6 mr-3" />
                  Legal Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Comprehensive guide to aviation accident law, your rights, and the legal process.</p>
                <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                  <li>• Understanding your legal rights</li>
                  <li>• Time limits and deadlines</li>
                  <li>• Types of compensation available</li>
                  <li>• The legal process explained</li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.location.href = '/aviation/legal-guidance'}
                >
                  Access Guide
                </Button>
              </CardContent>
            </Card>

            <Card className="aviation-card">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <FileText className="w-6 h-6 mr-3" />
                  Medical Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Understanding aviation accident injuries and treatment options.</p>
                <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                  <li>• Common aviation injuries</li>
                  <li>• Treatment and recovery process</li>
                  <li>• Medical documentation importance</li>
                  <li>• Working with healthcare providers</li>
                </ul>
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.location.href = '/aviation/medical-guidance'}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <Card className="aviation-card">
            <CardContent className="p-8">
              <p className="text-lg mb-6">Get answers to the most common questions about aviation accident cases, liability, compensation, and the legal process.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Legal Questions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Who can be sued in aviation accidents?</li>
                    <li>• How long do I have to file a lawsuit?</li>
                    <li>• What if I signed a waiver?</li>
                    <li>• International flight considerations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Case Value Questions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• How much is my case worth?</li>
                    <li>• Types of compensation available</li>
                    <li>• Factors affecting case value</li>
                    <li>• Settlement vs. trial considerations</li>
                  </ul>
                </div>
              </div>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.location.href = '/aviation/faq'}
              >
                View All FAQs
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Our Firm */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Trembach Law Firm</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card className="aviation-card text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Former Defense Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Our attorney's background defending aviation companies provides unique insights into corporate strategies.</p>
              </CardContent>
            </Card>

            <Card className="aviation-card text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Our team includes former pilots and investigators who understand aviation accident complexities.</p>
              </CardContent>
            </Card>

            <Card className="aviation-card text-center">
              <CardHeader>
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-primary">No Win, No Fee</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">We advance all costs and only get paid when we win your case. No upfront fees ever.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-3xl font-bold text-primary mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Don't wait - aviation accident cases have strict deadlines. Contact us now for your free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 flex-1"
                  onClick={() => window.location.href = '/aviation/case-evaluation'}
                >
                  Free Case Evaluation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 flex-1"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AviationResources;