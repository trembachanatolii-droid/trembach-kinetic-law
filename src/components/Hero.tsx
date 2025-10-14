import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SparklesCore } from '@/components/ui/sparkles';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.8}
          maxSize={1.8}
          particleDensity={220}
          className="w-full h-full pointer-events-none"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-8 flex flex-col items-center justify-center min-h-screen relative z-10">
        <div className="text-center space-y-6 max-w-4xl">
          <h1 className="font-sans text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
            California's Premier<br />
            Personal Injury and<br />
            Mesothelioma Lawyers
          </h1>
          <p className="font-sans text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
            After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          size="lg"
          className="text-white font-bold px-8 py-6 rounded text-lg bg-[#E50914] hover:bg-[#C11119] transition-colors duration-200 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
          asChild
        >
          <Link to="/free-consultation">START YOUR FREE CASE REVIEW</Link>
        </Button>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl">👨‍💼</span>
            </div>
            <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
              <p className="text-sm text-gray-700 font-medium">How can we help you?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;