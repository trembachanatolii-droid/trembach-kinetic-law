import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ladyJusticeHero from '@/assets/lady-justice-hero.png';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%), url(${ladyJusticeHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a1a'
      }}
    >
      {/* Content container */}
      <div className="container mx-auto px-8 flex items-center justify-start min-h-screen relative z-[3]">
        <div className="max-w-xl pt-24">
          <div className="space-y-6">
            <h1 className="font-sans text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
              California's premier<br />
              personal injury<br />
              and mesothelioma<br />
              lawyers
            </h1>
            <p className="font-sans text-white text-lg md:text-xl font-normal leading-relaxed drop-shadow-lg max-w-lg">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
            </p>
            <Button 
              size="lg"
              className="text-white font-bold px-10 py-7 rounded-xl text-lg bg-[#E50914] hover:bg-[#C11119] transition-colors duration-200 shadow-2xl"
              asChild
            >
              <Link to="/free-consultation">START YOUR FREE CASE REVIEW</Link>
            </Button>
          </div>
        </div>
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
