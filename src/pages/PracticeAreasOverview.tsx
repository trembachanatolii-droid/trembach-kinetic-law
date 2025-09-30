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
  // Toxic Exposure & Environmental
  { id: 'mesothelioma-asbestos', title: 'Mesothelioma & Asbestos', image: mesotheliomaAsbestosImg, slug: 'mesothelioma-asbestos', category: 'Environmental' },
  { id: 'silicosis-injuries', title: 'Silicosis Injuries', image: silicosisInjuriesImg, slug: 'silicosis-injuries', category: 'Environmental' },
  { id: 'talc-baby-powder-cancer', title: 'Talc & Baby Powder Cancer', image: talcBabyPowderCancerImg, slug: 'talc-baby-powder-cancer', category: 'Environmental' },
  { id: 'toxic-exposure', title: 'Toxic Exposure', image: toxicExposureImg, slug: 'toxic-exposure', category: 'Environmental' },
  { id: 'environmental-pollution', title: 'Environmental Pollution', image: environmentalPollutionImg, slug: 'environmental-pollution', category: 'Environmental' },
  
  // Vehicle Accidents
  { id: 'truck-18-wheeler-accidents', title: 'Truck & 18-Wheeler Accidents', image: truck18WheelerAccidentsImg, slug: 'truck-18-wheeler-accidents', category: 'Vehicle Accidents' },
  { id: 'car-accidents', title: 'Car Accidents', image: carAccidentsImg, slug: 'car-accidents', category: 'Vehicle Accidents' },
  { id: 'motorcycle-accidents', title: 'Motorcycle Accidents', image: motorcycleAccidentsImg, slug: 'motorcycle-accidents', category: 'Vehicle Accidents' },
  { id: 'pedestrian-accidents', title: 'Pedestrian Accidents', image: pedestrianAccidentsImg, slug: 'pedestrian-accidents', category: 'Vehicle Accidents' },
  { id: 'bicycle-accidents', title: 'Bicycle Accidents', image: bicycleAccidentsImg, slug: 'bicycle-accidents', category: 'Vehicle Accidents' },
  { id: 'uber-lyft-accidents', title: 'Uber & Lyft Accidents', image: uberLyftAccidentsImg, slug: 'uber-lyft-accidents', category: 'Vehicle Accidents' },
  { id: 'bus-accidents', title: 'Bus Accidents', image: busAccidentsImg, slug: 'bus-accidents', category: 'Vehicle Accidents' },
  { id: 'aviation-accidents', title: 'Aviation Accidents', image: aviationAccidentsImg, slug: 'aviation-accidents', category: 'Vehicle Accidents' },
  { id: 'boating-accidents', title: 'Maritime Accidents', image: boatingAccidentsImg, slug: 'boating-accidents', category: 'Vehicle Accidents' },
  { id: 'train-accidents', title: 'Train Accidents', image: trainAccidentsImg, slug: 'train-accidents', category: 'Vehicle Accidents' },
  
  // Workplace Injuries
  { id: 'electrical-injuries', title: 'Electrocution Injuries', image: electricalInjuriesImg, slug: 'electrical-injuries', category: 'Workplace' },
  { id: 'workplace-injuries', title: 'Workplace Injuries', image: workplaceInjuriesImg, slug: 'workplace-injuries', category: 'Workplace' },
  { id: 'construction-accidents', title: 'Construction Accidents', image: constructionAccidentsImg, slug: 'construction-accidents', category: 'Workplace' },
  { id: 'industrial-accidents', title: 'Industrial Accidents', image: industrialAccidentsImg, slug: 'industrial-accidents', category: 'Workplace' },
  { id: 'pipeline-explosions', title: 'Pipeline Explosions', image: pipelineExplosionsImg, slug: 'pipeline-explosions', category: 'Workplace' },
  
  // Premises Liability
  { id: 'slip-fall-accidents', title: 'Slip & Fall Accidents', image: slipFallAccidentsImg, slug: 'slip-fall-accidents', category: 'Premises' },
  { id: 'premises-liability', title: 'Premises Liability', image: premisesLiabilityImg, slug: 'premises-liability', category: 'Premises' },
  
  // Product Liability
  { id: 'product-liability', title: 'Product Liability', image: productLiabilityImg, slug: 'product-liability', category: 'Products' },
  { id: 'defective-products', title: 'Defective Products', image: defectiveProductsImg, slug: 'defective-products', category: 'Products' },
  
  // Medical Negligence
  { id: 'medical-device-injuries', title: 'Medical Device Injuries', image: medicalDeviceInjuriesImg, slug: 'medical-device-injuries', category: 'Medical' },
  { id: 'pharmaceutical-negligence', title: 'Pharmaceutical Negligence', image: pharmaceuticalNegligenceImg, slug: 'pharmaceutical-negligence', category: 'Medical' },
  { id: 'medical-malpractice', title: 'Medical Malpractice', image: medicalMalpracticeImg, slug: 'medical-malpractice', category: 'Medical' },
  { id: 'surgical-errors', title: 'Surgical Errors', image: surgicalErrorsImg, slug: 'surgical-errors', category: 'Medical' },
  { id: 'birth-injuries', title: 'Birth Injuries', image: birthInjuriesImg, slug: 'birth-injuries', category: 'Medical' },
  { id: 'nursing-hom-abuse', title: 'Nursing Home Abuse', image: nursingHomAbuseImg, slug: 'nursing-hom-abuse', category: 'Medical' },
  
  // Catastrophic Injuries
  { id: 'wrongful-death', title: 'Wrongful Death', image: wrongfulDeathImg, slug: 'wrongful-death', category: 'Catastrophic' },
  { id: 'catastrophic-injuries', title: 'Catastrophic Injuries', image: catastrophicInjuriesImg, slug: 'catastrophic-injuries', category: 'Catastrophic' },
  { id: 'brain-injuries', title: 'Traumatic Brain Injuries', image: brainInjuriesImg, slug: 'brain-injuries', category: 'Catastrophic' },
  { id: 'spinal-cord-injuries', title: 'Spinal Cord Injuries', image: spinalCordInjuriesImg, slug: 'spinal-cord-injuries', category: 'Catastrophic' },
  { id: 'burn-injuries', title: 'Burn Injuries', image: burnInjuriesImg, slug: 'burn-injuries', category: 'Catastrophic' },
  { id: 'amputation-injuries', title: 'Amputation Injuries', image: amputationInjuriesImg, slug: 'amputation-injuries', category: 'Catastrophic' },
  { id: 'fracture-bone-injuries', title: 'Fracture & Bone Injuries', image: fractureBoneInjuriesImg, slug: 'fracture-bone-injuries', category: 'Catastrophic' },
  
  // Animal Attacks
  { id: 'dog-bites', title: 'Dog Bites', image: dogBitesImg, slug: 'dog-bites', category: 'Animal Attacks' },
  { id: 'animal-attacks', title: 'Animal Attacks', image: animalAttacksImg, slug: 'animal-attacks', category: 'Animal Attacks' },
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

      <div className="min-h-screen bg-white pt-[44px]">
        <div className="flex">
          {/* Apple-style Sidebar */}
          <aside className="hidden lg:block w-[280px] fixed left-0 top-[44px] bottom-0 overflow-y-auto bg-white/80 backdrop-blur-2xl border-r border-gray-100">
            <div className="p-6 pb-12">
              <div className="mb-8">
                <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Practice Areas</h1>
                <p className="text-sm text-gray-500 mt-1">{practiceAreas.length} specializations</p>
              </div>
              <nav className="space-y-0.5">
                {practiceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleAreaClick(area.id)}
                    className={`group w-full text-left py-2.5 px-3 text-sm font-medium transition-all duration-200 rounded-lg ${
                      selectedArea === area.id
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[280px]">
            {/* Apple-style Hero Section */}
            <section 
              ref={heroRef}
              className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-50"
            >
              <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
                <h2 className="text-6xl md:text-8xl font-semibold mb-6 text-gray-900 tracking-tight leading-none">
                  Expert Legal<br />Representation
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
                  Comprehensive injury law coverage across California.<br />
                  We fight for your rights.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <div className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium">
                    {practiceAreas.length}+ Practice Areas
                  </div>
                  <div className="px-5 py-2.5 bg-white text-gray-900 rounded-full text-sm font-medium border border-gray-200">
                    No Fees Unless We Win
                  </div>
                </div>
              </div>
            </section>

            {/* Apple-style Cards Grid with 3D effects */}
            <section ref={cardsRef} className="py-20 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practiceAreas.map((area, index) => (
                  <Link
                    key={area.id}
                    id={`card-${area.id}`}
                    to={`/practice-areas/${area.slug}`}
                    className="practice-card group relative h-[400px] rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Background Image with 3D parallax */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      {/* Category badge */}
                      <div className="self-start">
                        <span className="inline-block px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-gray-900 text-xs font-medium">
                          {area.category}
                        </span>
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight leading-tight">
                          {area.title}
                        </h3>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all duration-300">
                          <span>Learn more</span>
                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Apple-style CTA Section */}
            <section className="py-32 px-6 bg-gray-50">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 tracking-tight">
                  Get the compensation<br />you deserve.
                </h2>
                <p className="text-xl text-gray-600 mb-12 font-light max-w-2xl mx-auto">
                  Free consultation. No fees unless we win your case.<br />
                  Available 24/7 with multilingual support.
                </p>
                <div className="flex gap-4 justify-center flex-wrap mb-12">
                  <a
                    href="tel:213-908-9708"
                    className="group px-8 py-4 bg-gray-900 text-white font-medium text-base rounded-full transition-all duration-200 hover:bg-gray-800 flex items-center gap-2"
                  >
                    Call (213) 908-9708
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-white text-gray-900 font-medium text-base rounded-full border border-gray-300 transition-all duration-200 hover:border-gray-900"
                  >
                    Free Consultation
                  </Link>
                </div>
                <div className="flex gap-8 justify-center text-sm text-gray-600">
                  <div>Available 24/7</div>
                  <div>·</div>
                  <div>Multilingual Staff</div>
                  <div>·</div>
                  <div>$100M+ Recovered</div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default PracticeAreasOverview;
