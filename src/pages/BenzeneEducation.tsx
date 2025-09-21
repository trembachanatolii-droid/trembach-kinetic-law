import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FlaskConical, AlertTriangle, Factory, Star, Phone } from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/benzene-education-hero.jpg';

const BenzeneEducation: React.FC = () => {
  useScrollRestoration();

  return (
    <>
      <SEO
        title="Benzene Education & Awareness | Learn About Chemical Exposure Risks"
        description="Learn about benzene exposure sources, health effects, and prevention. Educational resources for benzene safety and blood cancer awareness."
        canonical="/benzene-education"
      />
      
      <div className="min-h-screen bg-background">
        <GoBack fallbackPath="/practice-areas/benzene-exposure" />
        
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Educational Resources</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Benzene Education & Awareness</h1>
            <p className="text-xl">Learn about benzene exposure sources, health effects, and prevention</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          
          {/* What is Benzene */}
          <section className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <FlaskConical className="w-6 h-6 mr-2" />
                  Understanding Benzene
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">What is Benzene?</h3>
                    <p className="text-muted-foreground mb-4">
                      Benzene is a colorless, sweet-smelling liquid that evaporates quickly and is highly flammable. 
                      It's classified as a Group 1 human carcinogen by the International Agency for Research on Cancer.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Chemical formula: C₆H₆</li>
                      <li>• Found naturally in crude oil and gasoline</li>
                      <li>• Used to make plastics, resins, synthetic fibers</li>
                      <li>• No safe level of exposure</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Health Effects</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Acute Myeloid Leukemia (AML)</li>
                      <li>• Multiple Myeloma</li>
                      <li>• Non-Hodgkin Lymphoma</li>
                      <li>• Chronic Lymphocytic Leukemia</li>
                      <li>• Aplastic Anemia</li>
                      <li>• Myelodysplastic Syndromes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Exposure Sources */}
          <section className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center text-2xl">
                  <Factory className="w-6 h-6 mr-2" />
                  Common Exposure Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Workplace Exposure</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Oil refineries</li>
                      <li>• Chemical plants</li>
                      <li>• Gas stations</li>
                      <li>• Auto repair shops</li>
                      <li>• Printing facilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Environmental Exposure</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Contaminated groundwater</li>
                      <li>• Industrial emissions</li>
                      <li>• Gasoline vapors</li>
                      <li>• Cigarette smoke</li>
                      <li>• Vehicle exhaust</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-3">Consumer Products</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Paint strippers</li>
                      <li>• Cleaning products</li>
                      <li>• Adhesives</li>
                      <li>• Some detergents</li>
                      <li>• Art supplies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Prevention */}
          <section className="mb-12">
            <Card className="shadow-xl border-2 border-green-200">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-center text-2xl">Prevention & Safety</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Workplace Safety</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use proper ventilation systems</li>
                      <li>• Wear appropriate protective equipment</li>
                      <li>• Follow safety protocols</li>
                      <li>• Regular air monitoring</li>
                      <li>• Employee training programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Personal Protection</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Avoid gasoline vapor exposure</li>
                      <li>• Use safer alternatives when possible</li>
                      <li>• Ensure good ventilation at home</li>
                      <li>• Read product labels carefully</li>
                      <li>• Seek medical monitoring if exposed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="shadow-xl bg-gradient-to-r from-red-50 to-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need Help with Benzene Exposure?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  If you've been exposed to benzene and developed blood cancer, we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = '/benzene-case-evaluation'}
                  >
                    Get Free Case Evaluation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default BenzeneEducation;