import React from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SchemaMarkup from '@/components/SchemaMarkup';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedStatistics from '@/components/AnimatedStatistics';
import ExpandedFAQ from '@/components/ExpandedFAQ';

const LosAngeles = () => {
  const locationData = {
    address: {
      "@type": "PostalAddress",
      "streetAddress": "123 Wilshire Boulevard, Suite 1000",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": "34.0522",
      "longitude": "-118.2437"
    },
    areaServed: [
      "Los Angeles, CA",
      "Beverly Hills, CA",
      "Santa Monica, CA",
      "West Hollywood, CA",
      "Pasadena, CA",
      "Glendale, CA",
      "Burbank, CA"
    ],
    url: "https://trembach-law.com/locations/los-angeles"
  };

  const statistics = [
    { label: "Cases Won", value: 500, suffix: "+", icon: "⚖️" },
    { label: "Million Recovered", value: 150, prefix: "$", suffix: "M+", icon: "💰" },
    { label: "Years Experience", value: 25, suffix: "+", icon: "📅" },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup type="local-business" data={locationData} />
      
      {/* Hero Section */}
      <ParallaxSection 
        backgroundImage="/api/placeholder/1920/800"
        className="min-h-[80vh] flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Go Back Button */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Los Angeles Mesothelioma Lawyers
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Trusted by LA Families Since 1998</span>
          </div>
          
          <p className="text-xl mb-8 leading-relaxed">
            Serving Los Angeles County with aggressive representation for asbestos exposure victims. 
            Local expertise, proven results, compassionate service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="magnetic bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              FREE CASE EVALUATION
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="magnetic border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = 'tel:8559851234'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (855) 985-1234
            </Button>
          </div>
        </div>
      </ParallaxSection>

      {/* Location Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Your Local Los Angeles Legal Team
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our Los Angeles office has been fighting for mesothelioma victims throughout 
                  Southern California for over two decades. We understand the unique industrial 
                  history of LA County, from the shipyards of San Pedro to the aerospace industry 
                  in El Segundo, and how asbestos exposure has affected local families.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Office Location</h3>
                      <p className="text-muted-foreground">123 Wilshire Boulevard, Suite 1000<br />Los Angeles, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Available 24/7</h3>
                      <p className="text-muted-foreground">Emergency consultations available<br />Flexible meeting arrangements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Direct Line</h3>
                      <p className="text-muted-foreground">(855) 985-1234<br />Free consultation guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-background border border-border rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Areas We Serve</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Los Angeles", "Beverly Hills", "Santa Monica", "West Hollywood",
                    "Pasadena", "Glendale", "Burbank", "Long Beach",
                    "Torrance", "El Segundo", "Manhattan Beach", "Redondo Beach"
                  ].map((city, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <AnimatedStatistics 
        statistics={statistics}
        title="Our Los Angeles Results"
        className="bg-primary/5"
      />

      {/* Local Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Why Choose Our Los Angeles Team?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Local Knowledge</h3>
                <p className="text-muted-foreground">
                  Deep understanding of LA's industrial history and asbestos exposure sites
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Results</h3>
                <p className="text-muted-foreground">
                  Millions recovered for LA County families affected by mesothelioma
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Personal Service</h3>
                <p className="text-muted-foreground">
                  Dedicated attorneys who understand your community and its challenges
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ExpandedFAQ />

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Fight for Your Rights in Los Angeles?
          </h2>
          <p className="text-xl mb-8">
            Don't wait - California's statute of limitations is just one year from diagnosis. 
            Contact our Los Angeles team today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="magnetic bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="magnetic bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8559851234'}
            >
              Call (855) 985-1234
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LosAngeles;