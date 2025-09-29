import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, UserRound, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const PracticeAreasLanding = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        }
      });
    }
  }, []);

  const autoAccidentCategories = [
    { name: 'Truck Accidents', path: '/practice-areas/truck-18-wheeler-accidents' },
    { name: 'Car Accidents', path: '/practice-areas/car-accidents' },
    { name: 'Motorcycle Accidents', path: '/practice-areas/motorcycle-accidents' },
    { name: 'Uber & Lyft Accidents', path: '/practice-areas/uber-lyft-accidents' },
    { name: 'Pedestrian Accidents', path: '/practice-areas/pedestrian-accidents' },
  ];

  const personalInjuryCategories = [
    { name: 'Dog Bite Injuries', path: '/practice-areas/dog-bites-animal-attacks' },
    { name: 'Brain Injury', path: '/practice-areas/brain-injuries' },
    { name: 'Birth Injury', path: '/practice-areas/birth-injuries' },
    { name: 'Burn/Fire Injury', path: '/practice-areas/burn-injuries' },
    { name: 'Spinal Cord Injuries', path: '/practice-areas/spinal-cord-injuries' },
  ];

  return (
    <>
      <Helmet>
        <title>Practice Areas - Trembach Law Firm</title>
        <meta name="description" content="We fight for every case—big or small. Explore our comprehensive practice areas including auto accidents, personal injury, and more." />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen pt-[44px] bg-[#fbfbfd]">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Title & Description */}
            <div className="lg:col-span-1">
              <h1 className="text-5xl font-bold text-[#1d1d1f] mb-6 leading-tight">
                Cases We Handle
              </h1>
              <p className="text-[#1d1d1f]/70 text-base leading-relaxed">
                We fight for every case—big or small. As a leading injury firm, you get a team of legal professionals dedicated to getting you every dollar you deserve. And with over $2 billion recovered, thousands of clients served, and decades of experience, we know what it takes to win. Why call anyone else?
              </p>
            </div>

            {/* Right Column - Categories */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Auto Accidents Category */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="w-12 h-12 text-red-600 stroke-[1.5]" />
                  <h2 className="text-2xl font-bold text-[#1d1d1f]">Auto Accidents</h2>
                </div>
                
                <ul className="space-y-3">
                  {autoAccidentCategories.map((category) => (
                    <li key={category.path}>
                      <Link 
                        to={category.path}
                        className="text-[#1d1d1f]/70 hover:text-red-600 transition-colors text-base block"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/practice-areas/car-accidents"
                  className="inline-flex items-center gap-2 text-[#1d1d1f] hover:text-red-600 font-medium mt-4 transition-colors group"
                >
                  See All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Personal Injury Category */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <UserRound className="w-12 h-12 text-red-600 stroke-[1.5]" />
                  <h2 className="text-2xl font-bold text-[#1d1d1f]">Personal Injury</h2>
                </div>
                
                <ul className="space-y-3">
                  {personalInjuryCategories.map((category) => (
                    <li key={category.path}>
                      <Link 
                        to={category.path}
                        className="text-[#1d1d1f]/70 hover:text-red-600 transition-colors text-base block"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/practice-areas/personal-injury"
                  className="inline-flex items-center gap-2 text-[#1d1d1f] hover:text-red-600 font-medium mt-4 transition-colors group"
                >
                  See All
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PracticeAreasLanding;
