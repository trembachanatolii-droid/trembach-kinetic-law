import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import practice area images
import truckAccidentsImg from '@/assets/practice-areas/truck-accidents.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents.jpg';
import motorcycleAccidentsImg from '@/assets/practice-areas/motorcycle-accidents.jpg';
import wrongfulDeathImg from '@/assets/practice-areas/wrongful-death.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability.jpg';
import distractedDrivingImg from '@/assets/practice-areas/distracted-driving.jpg';
import pedestrianAccidentsImg from '@/assets/practice-areas/pedestrian-accidents.jpg';
import busAccidentsImg from '@/assets/practice-areas/bus-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'truck-accidents',
    title: 'Truck Accidents',
    description: 'Commercial truck crashes cause catastrophic injuries due to size and weight disparities. Federal regulations create complex liability issues requiring expert legal representation.',
    image: truckAccidentsImg,
    slug: 'truck-accidents'
  },
  {
    id: 'car-accidents', 
    title: 'Car Accidents',
    description: 'California\'s congested highways see thousands of serious crashes annually. Our former defense experience reveals insurance company tactics.',
    image: carAccidentsImg,
    slug: 'car-accidents'
  },
  {
    id: 'motorcycle-accidents',
    title: 'Motorcycle Accidents', 
    description: 'Protecting California riders against bias and securing fair compensation. Despite following laws, motorcyclists face prejudice from insurers.',
    image: motorcycleAccidentsImg,
    slug: 'motorcycle-accidents'
  },
  {
    id: 'wrongful-death',
    title: 'Wrongful Death',
    description: 'When negligence causes death, surviving family members deserve justice and financial security during devastating loss.',
    image: wrongfulDeathImg,
    slug: 'wrongful-death'
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    description: 'Healthcare providers must meet professional standards. Misdiagnosis delays treatment allowing conditions to worsen.',
    image: medicalMalpracticeImg,
    slug: 'medical-malpractice'
  },
  {
    id: 'premises-liability',
    title: 'Premises Liability Accidents',
    description: 'Property owners must maintain safe conditions. Slip and falls from wet floors, uneven surfaces cause serious injuries.',
    image: premisesLiabilityImg,
    slug: 'premises-liability'
  },
  {
    id: 'slip-fall',
    title: 'Slip & Fall Injuries',
    description: 'Property owners have a duty to maintain safe conditions. Wet floors, uneven surfaces, and poor lighting create dangerous conditions.',
    image: premisesLiabilityImg,
    slug: 'slip-fall'
  },
  {
    id: 'distracted-driving',
    title: 'Distracted Driving Accidents',
    description: 'Cell phone use, texting, and other distractions cause thousands of preventable accidents each year with devastating consequences.',
    image: distractedDrivingImg,
    slug: 'distracted-driving'
  },
  {
    id: 'pedestrian-accidents',
    title: 'Pedestrian Accidents',
    description: 'California law provides strong protections for pedestrians, but injuries from vehicle strikes are often severe or fatal.',
    image: pedestrianAccidentsImg,
    slug: 'pedestrian-accidents'
  },
  {
    id: 'bus-accidents',
    title: 'Bus Accidents',
    description: 'Public transportation accidents involving municipal and private bus companies require specialized legal knowledge.',
    image: busAccidentsImg,
    slug: 'bus-accidents'
  }
];

const PracticeAreasReference: React.FC = () => {
  const [activeArea, setActiveArea] = useState<PracticeArea>(practiceAreas[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 60 },
      {
        opacity: 1, 
        y: 0,
        duration: 1,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleAreaClick = (area: PracticeArea) => {
    if (area.id === activeArea.id || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out current content
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
        onComplete: () => {
          setActiveArea(area);
          // Fade in new content
          gsap.fromTo(contentRef.current, 
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.4,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              onComplete: () => setIsTransitioning(false)
            }
          );
        }
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 orb animate-float opacity-10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 orb-secondary animate-float-delayed opacity-15"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 min-h-[600px]">
        {/* Header */}
        <div className="text-center py-16 px-6">
          <h2 className="text-display mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Practice Areas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal representation across all areas of personal injury law. 
            Our experienced attorneys fight for maximum compensation in every case.
          </p>
        </div>

        {/* Practice Areas Layout */}
        <div className="flex">
          {/* Left Sidebar - Practice Area Links */}
          <div className="w-80 bg-gray-900 min-h-[700px] relative">
            {/* Red accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600"></div>
            
            {/* Navigation Links */}
            <div className="p-8 pt-12">
              <nav className="space-y-1">
                {practiceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleAreaClick(area)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-gray-800 hover:text-white ${
                      activeArea.id === area.id 
                        ? 'text-red-500 bg-gray-800 border-l-2 border-red-500' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 relative">
            <div 
              ref={contentRef}
              className="relative h-[700px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${activeArea.image})` }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-center h-full px-16">
                <div className="max-w-2xl">
                  <h3 className="text-5xl font-bold text-white mb-6 leading-tight">
                    {activeArea.title}
                  </h3>
                  <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                    {activeArea.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <a 
                    href={`/practice-areas/${activeArea.slug}`}
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-semibold transition-all duration-200 hover:translate-x-1"
                  >
                    Learn More
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite">
        Currently showing {activeArea.title} practice area information
      </div>
    </section>
  );
};

export default PracticeAreasReference;