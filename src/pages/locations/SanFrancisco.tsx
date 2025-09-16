import React from 'react';
import { ArrowLeft, Phone, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SchemaMarkup from '@/components/SchemaMarkup';
import ParallaxSection from '@/components/ParallaxSection';
import AnimatedStatistics from '@/components/AnimatedStatistics';
import ExpandedFAQ from '@/components/ExpandedFAQ';
import sanFranciscoSkyline from '@/assets/san-francisco-skyline.jpg';

const SanFrancisco = () => {
  const locationData = {
    address: {
      "@type": "PostalAddress",
      "streetAddress": "555 California Street, Suite 4900",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94104",
      "addressCountry": "US"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": "37.7749",
      "longitude": "-122.4194"
    },
    areaServed: [
      "San Francisco, CA",
      "Oakland, CA",
      "San Jose, CA",
      "Berkeley, CA",
      "Fremont, CA",
      "Hayward, CA",
      "Sunnyvale, CA"
    ],
    url: "https://trembach-law.com/locations/san-francisco"
  };

  const statistics = [
    { label: "Bay Area Cases", value: 200, suffix: "+", icon: "⚖️" },
    { label: "Million Recovered", value: 75, prefix: "$", suffix: "M+", icon: "💰" },
    { label: "Years in SF", value: 15, suffix: "+", icon: "📅" },
    { label: "Success Rate", value: 95, suffix: "%", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup type="local-business" data={locationData} />
      
      {/* Hero Section */}
      <ParallaxSection 
        backgroundImage={sanFranciscoSkyline}
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
            San Francisco Mesothelioma Attorneys
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Serving the Bay Area Since 2008</span>
          </div>
          
          <p className="text-xl mb-8 leading-relaxed">
            Fighting for shipyard workers, veterans, and families affected by 
            San Francisco's industrial asbestos legacy.
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

      {/* Statistics Section */}
      <AnimatedStatistics 
        statistics={statistics}
        title="Our San Francisco Results"
        className="bg-primary/5"
      />

      {/* FAQ Section */}
      <ExpandedFAQ />

      {/* CTA Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Protecting Bay Area Families for Over 15 Years
          </h2>
          <p className="text-xl mb-8">
            From Hunters Point to Mare Island, we understand San Francisco's 
            asbestos exposure history. Contact us today.
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

export default SanFrancisco;