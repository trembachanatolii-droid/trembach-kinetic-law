import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import scalesJusticeHeroBg from '@/assets/hero-justice-reference.png';

const Hero = () => {


  return (
    <section 
       
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0) 70%), url(${scalesJusticeHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      
      <div className="container mx-auto px-8 flex items-start pt-32 min-h-[calc(100vh-6rem)] relative z-10">
        {/* Left-aligned Content - Apple Style */}
        <div className="max-w-xl">
          <div className="space-y-3">
            <h1 className="hero-line font-sans text-white text-2xl md:text-3xl font-black leading-tight tracking-tight max-w-lg">
              California's premier<br />
              personal injury<br />
              and mesothelioma<br />
              lawyers
            </h1>
            <p className="hero-line font-sans text-white text-sm md:text-base font-normal leading-relaxed max-w-md">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
            </p>
          </div>
        </div>
      </div>

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