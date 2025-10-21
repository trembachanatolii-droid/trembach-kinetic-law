import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ladyJustice from '@/assets/lady-justice.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/orb-XpZ9UBCVc4Xmof5gjx0kCWq5/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="3D Background"
        />
      </div>
      
      
      {/* Lady Justice Image - Top Right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-[3] animate-fade-in">
        <img 
          src={ladyJustice} 
          alt="Lady Justice statue symbolizing law and justice"
          className="w-24 h-auto md:w-32 lg:w-40 xl:w-48 object-contain drop-shadow-2xl opacity-80 hover:opacity-90 transition-opacity duration-300"
        />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-8 flex items-center justify-center min-h-screen relative z-[3]">
        <div className="max-w-3xl pt-24 text-center">
          <div className="space-y-8 flex flex-col items-center">
            <h1 className="font-sans text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-2xl">
              Former insurance defense attorney now representing injured plaintiffs
            </h1>
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
