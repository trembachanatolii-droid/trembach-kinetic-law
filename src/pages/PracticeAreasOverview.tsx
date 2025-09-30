import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scale, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';

// Import practice area images
import mesotheliomaAsbestosImg from '@/assets/practice-areas/mesothelioma-asbestos.jpg';
import silicosisInjuriesImg from '@/assets/practice-areas/silicosis-injuries.jpg';
import talcBabyPowderCancerImg from '@/assets/practice-areas/talc-baby-powder.jpg';
import truck18WheelerAccidentsImg from '@/assets/practice-areas/truck-18-wheeler.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents.jpg';
import motorcycleAccidentsImg from '@/assets/practice-areas/motorcycle-accidents.jpg';
import pedestrianAccidentsImg from '@/assets/practice-areas/pedestrian-accidents.jpg';
import bicycleAccidentsImg from '@/assets/practice-areas/bicycle-accidents.jpg';
import uberLyftAccidentsImg from '@/assets/practice-areas/uber-lyft-accidents.jpg';
import busAccidentsImg from '@/assets/practice-areas/bus-accidents.jpg';
import aviationAccidentsImg from '@/assets/practice-areas/aviation-accidents.jpg';
import boatingAccidentsImg from '@/assets/practice-areas/maritime-accidents.jpg';
import trainAccidentsImg from '@/assets/practice-areas/railroad-accidents.jpg';
import hitRunAccidentsImg from '@/assets/practice-areas/car-accidents.jpg';
import drivingUnderInfluenceImg from '@/assets/practice-areas/car-accidents.jpg';
import electricalInjuriesImg from '@/assets/practice-areas/electrocution.jpg';
import workplaceInjuriesImg from '@/assets/practice-areas/workplace-injuries.jpg';
import constructionAccidentsImg from '@/assets/practice-areas/construction-accidents.jpg';
import slipFallAccidentsImg from '@/assets/practice-areas/premises-liability.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability.jpg';
import productLiabilityImg from '@/assets/practice-areas/product-liability.jpg';
import defectiveProductsImg from '@/assets/practice-areas/product-liability.jpg';
import medicalDeviceInjuriesImg from '@/assets/practice-areas/medical-devices.jpg';
import pharmaceuticalNegligenceImg from '@/assets/practice-areas/pharmaceutical.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice.jpg';
import surgicalErrorsImg from '@/assets/practice-areas/medical-malpractice.jpg';
import birthInjuriesImg from '@/assets/practice-areas/birth-injuries.jpg';
import nursingHomAbuseImg from '@/assets/practice-areas/elder-abuse.jpg';
import wrongfulDeathImg from '@/assets/practice-areas/wrongful-death.jpg';
import catastrophicInjuriesImg from '@/assets/practice-areas/general-personal-injury.jpg';
import brainInjuriesImg from '@/assets/practice-areas/brain-injuries.jpg';
import spinalCordInjuriesImg from '@/assets/practice-areas/spinal-cord-injuries.jpg';
import burnInjuriesImg from '@/assets/practice-areas/burn-injuries.jpg';
import amputationInjuriesImg from '@/assets/practice-areas/amputation.jpg';
import fractureBoneInjuriesImg from '@/assets/practice-areas/general-personal-injury.jpg';
import dogBitesImg from '@/assets/practice-areas/dog-bites.jpg';
import animalAttacksImg from '@/assets/practice-areas/dog-bites.jpg';
import toxicExposureImg from '@/assets/practice-areas/environmental-toxic-hero.jpg';
import environmentalPollutionImg from '@/assets/practice-areas/environmental-toxic-hero.jpg';
import industrialAccidentsImg from '@/assets/practice-areas/workplace-injuries.jpg';
import pipelineExplosionsImg from '@/assets/practice-areas/explosions.jpg';
import refineriesImg from '@/assets/practice-areas/explosions.jpg';
import chemicalPlantsImg from '@/assets/practice-areas/explosions.jpg';
import civilRightsViolationsImg from '@/assets/practice-areas/civil-rights.jpg';
import policeBrutalityImg from '@/assets/practice-areas/civil-rights.jpg';
import sexualAbuseAssaultImg from '@/assets/practice-areas/sexual-abuse.jpg';
import childAbuseImg from '@/assets/practice-areas/sexual-abuse.jpg';
import humanTraffickingImg from '@/assets/practice-areas/sexual-abuse.jpg';

gsap.registerPlugin(ScrollTrigger);

interface PracticeArea {
  id: string;
  title: string;
  image: string;
  slug: string;
  category: string;
}

const practiceAreas: PracticeArea[] = [
  { id: 'mesothelioma-asbestos', title: 'Mesothelioma & Asbestos', image: mesotheliomaAsbestosImg, slug: 'mesothelioma-asbestos', category: 'toxic' },
  { id: 'silicosis-injuries', title: 'Silicosis Injuries', image: silicosisInjuriesImg, slug: 'silicosis-injuries', category: 'toxic' },
  { id: 'talc-baby-powder-cancer', title: 'Talc & Baby Powder Cancer', image: talcBabyPowderCancerImg, slug: 'talc-baby-powder-cancer', category: 'toxic' },
  { id: 'truck-18-wheeler-accidents', title: 'Truck & 18-Wheeler Accidents', image: truck18WheelerAccidentsImg, slug: 'truck-18-wheeler-accidents', category: 'vehicle' },
  { id: 'car-accidents', title: 'Car Accidents', image: carAccidentsImg, slug: 'car-accidents', category: 'vehicle' },
  { id: 'motorcycle-accidents', title: 'Motorcycle Accidents', image: motorcycleAccidentsImg, slug: 'motorcycle-accidents', category: 'vehicle' },
  { id: 'pedestrian-accidents', title: 'Pedestrian Accidents', image: pedestrianAccidentsImg, slug: 'pedestrian-accidents', category: 'vehicle' },
  { id: 'bicycle-accidents', title: 'Bicycle Accidents', image: bicycleAccidentsImg, slug: 'bicycle-accidents', category: 'vehicle' },
  { id: 'uber-lyft-accidents', title: 'Uber & Lyft Accidents', image: uberLyftAccidentsImg, slug: 'uber-lyft-accidents', category: 'vehicle' },
  { id: 'bus-accidents', title: 'Bus Accidents', image: busAccidentsImg, slug: 'bus-accidents', category: 'vehicle' },
  { id: 'aviation-accidents', title: 'Aviation Accidents', image: aviationAccidentsImg, slug: 'aviation-accidents', category: 'vehicle' },
  { id: 'boating-accidents', title: 'Boating Accidents', image: boatingAccidentsImg, slug: 'boating-accidents', category: 'vehicle' },
  { id: 'train-accidents', title: 'Train Accidents', image: trainAccidentsImg, slug: 'train-accidents', category: 'vehicle' },
  { id: 'hit-run-accidents', title: 'Hit & Run Accidents', image: hitRunAccidentsImg, slug: 'hit-run-accidents', category: 'vehicle' },
  { id: 'driving-under-influence', title: 'Driving Under Influence', image: drivingUnderInfluenceImg, slug: 'driving-under-influence', category: 'vehicle' },
  { id: 'electrical-injuries', title: 'Electrical Injuries', image: electricalInjuriesImg, slug: 'electrical-injuries', category: 'workplace' },
  { id: 'workplace-injuries', title: 'Workplace Injuries', image: workplaceInjuriesImg, slug: 'workplace-injuries', category: 'workplace' },
  { id: 'construction-accidents', title: 'Construction Accidents', image: constructionAccidentsImg, slug: 'construction-accidents', category: 'workplace' },
  { id: 'slip-fall-accidents', title: 'Slip & Fall Accidents', image: slipFallAccidentsImg, slug: 'slip-fall-accidents', category: 'premises' },
  { id: 'premises-liability', title: 'Premises Liability', image: premisesLiabilityImg, slug: 'premises-liability', category: 'premises' },
  { id: 'product-liability', title: 'Product Liability', image: productLiabilityImg, slug: 'product-liability', category: 'product' },
  { id: 'defective-products', title: 'Defective Products', image: defectiveProductsImg, slug: 'defective-products', category: 'product' },
  { id: 'medical-device-injuries', title: 'Medical Device Injuries', image: medicalDeviceInjuriesImg, slug: 'medical-device-injuries', category: 'medical' },
  { id: 'pharmaceutical-negligence', title: 'Pharmaceutical Negligence', image: pharmaceuticalNegligenceImg, slug: 'pharmaceutical-negligence', category: 'medical' },
  { id: 'medical-malpractice', title: 'Medical Malpractice', image: medicalMalpracticeImg, slug: 'medical-malpractice', category: 'medical' },
  { id: 'surgical-errors', title: 'Surgical Errors', image: surgicalErrorsImg, slug: 'surgical-errors', category: 'medical' },
  { id: 'birth-injuries', title: 'Birth Injuries', image: birthInjuriesImg, slug: 'birth-injuries', category: 'medical' },
  { id: 'nursing-hom-abuse', title: 'Nursing Home Abuse', image: nursingHomAbuseImg, slug: 'nursing-hom-abuse', category: 'medical' },
  { id: 'wrongful-death', title: 'Wrongful Death', image: wrongfulDeathImg, slug: 'wrongful-death', category: 'catastrophic' },
  { id: 'catastrophic-injuries', title: 'Catastrophic Injuries', image: catastrophicInjuriesImg, slug: 'catastrophic-injuries', category: 'catastrophic' },
  { id: 'brain-injuries', title: 'Brain Injuries', image: brainInjuriesImg, slug: 'brain-injuries', category: 'catastrophic' },
  { id: 'spinal-cord-injuries', title: 'Spinal Cord Injuries', image: spinalCordInjuriesImg, slug: 'spinal-cord-injuries', category: 'catastrophic' },
  { id: 'burn-injuries', title: 'Burn Injuries', image: burnInjuriesImg, slug: 'burn-injuries', category: 'catastrophic' },
  { id: 'amputation-injuries', title: 'Amputation Injuries', image: amputationInjuriesImg, slug: 'amputation-injuries', category: 'catastrophic' },
  { id: 'fracture-bone-injuries', title: 'Fracture & Bone Injuries', image: fractureBoneInjuriesImg, slug: 'fracture-bone-injuries', category: 'catastrophic' },
  { id: 'dog-bites', title: 'Dog Bites', image: dogBitesImg, slug: 'dog-bites', category: 'animal' },
  { id: 'animal-attacks', title: 'Animal Attacks', image: animalAttacksImg, slug: 'animal-attacks', category: 'animal' },
  { id: 'toxic-exposure', title: 'Toxic Exposure', image: toxicExposureImg, slug: 'toxic-exposure', category: 'toxic' },
  { id: 'environmental-pollution', title: 'Environmental Pollution', image: environmentalPollutionImg, slug: 'environmental-pollution', category: 'toxic' },
  { id: 'industrial-accidents', title: 'Industrial Accidents', image: industrialAccidentsImg, slug: 'industrial-accidents', category: 'workplace' },
  { id: 'pipeline-explosions', title: 'Pipeline Explosions', image: pipelineExplosionsImg, slug: 'pipeline-explosions', category: 'workplace' },
  { id: 'refineries', title: 'Refineries', image: refineriesImg, slug: 'refineries', category: 'workplace' },
  { id: 'chemical-plants', title: 'Chemical Plants', image: chemicalPlantsImg, slug: 'chemical-plants', category: 'workplace' },
  { id: 'civil-rights-violations', title: 'Civil Rights Violations', image: civilRightsViolationsImg, slug: 'civil-rights-violations', category: 'civil' },
  { id: 'police-brutality', title: 'Police Brutality', image: policeBrutalityImg, slug: 'police-brutality', category: 'civil' },
  { id: 'sexual-abuse-assault', title: 'Sexual Abuse & Assault', image: sexualAbuseAssaultImg, slug: 'sexual-abuse-assault', category: 'civil' },
  { id: 'child-abuse', title: 'Child Abuse', image: childAbuseImg, slug: 'child-abuse', category: 'civil' },
  { id: 'human-trafficking', title: 'Human Trafficking', image: humanTraffickingImg, slug: 'human-trafficking', category: 'civil' },
];

const PracticeAreasOverview = () => {
  const [selectedArea, setSelectedArea] = useState<string>(practiceAreas[0].id);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero parallax animation
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 150,
        opacity: 0.8,
      });
    }

    // Cards stagger animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.practice-card');
      gsap.fromTo(
        cards,
        { 
          y: 100, 
          opacity: 0,
          rotateX: 15,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleAreaClick = (areaId: string) => {
    setSelectedArea(areaId);
    const element = document.getElementById(`card-${areaId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <SEO
        title="Practice Areas | California Injury Lawyers | Trembach Law Firm"
        description="Comprehensive legal representation across 50+ practice areas including personal injury, medical malpractice, and toxic exposure. Free consultation."
        canonical="/practice-areas"
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 pt-[44px]">
        <div className="flex">
          {/* Sidebar with 3D depth */}
          <aside className="hidden lg:block w-[320px] fixed left-0 top-[44px] bottom-0 overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl">
            <div className="p-8 pb-12 backdrop-blur-sm bg-black/10">
              <div className="flex items-center gap-3 mb-8">
                <Scale className="h-8 w-8 text-red-500" />
                <h1 className="text-3xl font-bold text-white">Practice Areas</h1>
              </div>
              <nav className="space-y-1">
                {practiceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleAreaClick(area.id)}
                    className={`group w-full text-left py-3 px-4 text-sm transition-all duration-300 border-l-4 rounded-r-lg relative overflow-hidden ${
                      selectedArea === area.id
                        ? 'border-red-600 bg-gradient-to-r from-red-600/20 to-red-600/10 text-white font-semibold shadow-lg shadow-red-500/20'
                        : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5 hover:border-red-500/50'
                    }`}
                  >
                    <span className="relative z-10">{area.title}</span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[320px]">
            {/* Hero Section with parallax */}
            <section 
              ref={heroRef}
              className="relative min-h-[50vh] flex items-center justify-center overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600 opacity-90">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20" />
              </div>
              
              <div className="relative z-10 text-center px-6 py-20">
                <Shield className="h-20 w-20 text-white mx-auto mb-6 drop-shadow-2xl" />
                <h2 className="text-6xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
                  Cases We Handle
                </h2>
                <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
                  Comprehensive legal representation across 50+ practice areas throughout California
                </p>
                <div className="flex gap-4 justify-center">
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold border border-white/30">
                    50+ Practice Areas
                  </div>
                  <div className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold border border-white/30">
                    No Fees Unless We Win
                  </div>
                </div>
              </div>

              {/* 3D floating elements */}
              <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-3xl transform rotate-12 animate-pulse" />
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 backdrop-blur-md rounded-3xl transform -rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
            </section>

            {/* Practice Area Cards Grid with 3D effects */}
            <section ref={cardsRef} className="py-20 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {practiceAreas.map((area, index) => (
                  <Link
                    key={area.id}
                    id={`card-${area.id}`}
                    to={`/practice-areas/${area.slug}`}
                    className="practice-card group relative h-[450px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-red-500/20"
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Background Image with parallax */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                    </div>

                    {/* 3D layered content */}
                    <div className="relative h-full flex flex-col justify-end p-8 transform transition-transform duration-500 group-hover:translate-z-12">
                      {/* Category badge */}
                      <div className="absolute top-6 right-6 px-4 py-2 bg-red-600 text-white text-sm font-bold rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-500/50">
                        {area.category.toUpperCase()}
                      </div>

                      {/* Title with 3D text effect */}
                      <h3 className="text-4xl font-bold text-white mb-4 transform transition-all duration-500 group-hover:translate-y-[-12px] drop-shadow-2xl">
                        {area.title}
                      </h3>

                      {/* Animated underline */}
                      <div className="w-20 h-1 bg-red-600 mb-6 transform transition-all duration-500 group-hover:w-32 group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-purple-600" />

                      {/* CTA with icon */}
                      <div className="flex items-center text-white font-semibold text-lg opacity-0 transform translate-y-8 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="mr-2">Explore This Practice</span>
                        <ChevronRight className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                      </div>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 border-4 border-red-500/0 rounded-2xl transition-all duration-500 group-hover:border-red-500/30 pointer-events-none" />
                    </div>

                    {/* 3D shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform group-hover:translate-x-full" style={{ transitionDelay: '100ms' }} />
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA Section with depth */}
            <section className="relative py-24 px-6 overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <Scale className="h-16 w-16 text-red-500 mx-auto mb-6 animate-pulse" />
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
                  Ready to Discuss Your Case?
                </h2>
                <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
                  Free consultation with a former insurance defense attorney who knows their tactics
                </p>
                <Link
                  to="/case-evaluation"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-10 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
                >
                  START YOUR FREE CASE REVIEW
                  <ChevronRight className="h-6 w-6" />
                </Link>

                {/* Floating badges */}
                <div className="mt-12 flex flex-wrap gap-4 justify-center">
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20">
                    No Fees Unless We Win
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20">
                    Former Insurance Defense Attorney
                  </div>
                  <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-medium border border-white/20">
                    All 58 California Counties
                  </div>
                </div>
              </div>

              {/* 3D geometric elements */}
              <div className="absolute top-10 left-10 w-40 h-40 bg-red-500/10 backdrop-blur-md rounded-full transform -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-10 right-10 w-56 h-56 bg-purple-500/10 backdrop-blur-md rounded-full transform translate-x-1/2 translate-y-1/2" />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default PracticeAreasOverview;
