import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Scale, Shield } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';

// Import practice area images - bright versions with natural light
import mesotheliomaAsbestosImg from '@/assets/practice-areas/mesothelioma-asbestos-bright.jpg';
import silicosisInjuriesImg from '@/assets/practice-areas/silicosis-injuries-bright.jpg';
import talcBabyPowderImg from '@/assets/practice-areas/talc-baby-powder-bright.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents-bright.jpg';
import truckAccidentsImg from '@/assets/practice-areas/truck-accidents-bright.jpg';
import motorcycleAccidentsImg from '@/assets/practice-areas/motorcycle-accidents-bright.jpg';
import pedestrianAccidentsImg from '@/assets/practice-areas/pedestrian-accidents-bright.jpg';
import bicycleAccidentsImg from '@/assets/practice-areas/bicycle-accidents-bright.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability-bright.jpg';
import dogBitesImg from '@/assets/practice-areas/dog-bites-bright.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice-bright.jpg';
import wrongfulDeathImg from '@/assets/practice-areas/wrongful-death-bright.jpg';
import productLiabilityImg from '@/assets/practice-areas/product-liability-bright.jpg';
import constructionAccidentsImg from '@/assets/practice-areas/construction-accidents-bright.jpg';
import brainInjuriesImg from '@/assets/practice-areas/brain-injuries-bright.jpg';
import spinalCordInjuriesImg from '@/assets/practice-areas/spinal-cord-injuries-bright.jpg';
import burnInjuriesImg from '@/assets/practice-areas/burn-injuries.jpg';
import amputationImg from '@/assets/practice-areas/amputation.jpg';
import workplaceInjuriesImg from '@/assets/practice-areas/workplace-injuries.jpg';
import medicalDevicesImg from '@/assets/practice-areas/medical-devices.jpg';
import pharmaceuticalImg from '@/assets/practice-areas/pharmaceutical.jpg';
import massTortsImg from '@/assets/practice-areas/general-personal-injury-bright.jpg';
import classActionsImg from '@/assets/practice-areas/class-actions-bright.jpg';
import environmentalToxicImg from '@/assets/practice-areas/environmental-toxic-bright.jpg';
import campLejeuneImg from '@/assets/practice-areas/camp-lejeune-bright.jpg';
import pfasExposureImg from '@/assets/practice-areas/pfas-exposure-bright.jpg';
import benzeneExposureImg from '@/assets/practice-areas/benzene-exposure-bright.jpg';
import opioidLitigationImg from '@/assets/practice-areas/opioid-litigation-bright.jpg';
import sexualAbuseImg from '@/assets/practice-areas/sexual-abuse-bright.jpg';
import clergyAbuseImg from '@/assets/practice-areas/clergy-abuse-bright.jpg';
import elderAbuseImg from '@/assets/practice-areas/elder-abuse.jpg';
import birthInjuriesImg from '@/assets/practice-areas/birth-injuries-bright.jpg';
import uberLyftAccidentsImg from '@/assets/practice-areas/uber-lyft-accidents.jpg';
import busAccidentsImg from '@/assets/practice-areas/bus-accidents-bright.jpg';
import aviationAccidentsImg from '@/assets/practice-areas/aviation-accidents.jpg';
import maritimeAccidentsImg from '@/assets/practice-areas/maritime-accidents.jpg';
import swimmingPoolImg from '@/assets/practice-areas/swimming-pool-bright.jpg';
import amusementParksImg from '@/assets/practice-areas/amusement-parks-bright.jpg';
import electrocutionImg from '@/assets/practice-areas/electrocution.jpg';
import explosionsImg from '@/assets/practice-areas/explosions.jpg';
import visionLossImg from '@/assets/practice-areas/vision-loss-bright.jpg';
import hearingLossImg from '@/assets/practice-areas/hearing-loss-bright.jpg';
import paralysisImg from '@/assets/practice-areas/paralysis-bright.jpg';
import civilRightsImg from '@/assets/practice-areas/civil-rights-bright.jpg';
import retailAccidentsImg from '@/assets/practice-areas/premises-liability.jpg';
import scaffoldingFallsImg from '@/assets/practice-areas/scaffolding-falls-bright.jpg';
import craneAccidentsImg from '@/assets/practice-areas/crane-accidents-bright.jpg';
import railroadAccidentsImg from '@/assets/practice-areas/railroad-accidents-bright.jpg';
import defamationImg from '@/assets/practice-areas/defamation-bright.jpg';
import generalPersonalInjuryImg from '@/assets/practice-areas/general-personal-injury-bright.jpg';
gsap.registerPlugin(ScrollTrigger);
interface PracticeArea {
  id: string;
  title: string;
  image: string;
  slug: string;
  category: string;
}
const practiceAreas: PracticeArea[] = [{
  id: 'mesothelioma-asbestos',
  title: 'Mesothelioma & Asbestos',
  image: mesotheliomaAsbestosImg,
  slug: 'mesothelioma-asbestos',
  category: 'Toxic Exposure'
}, {
  id: 'silicosis-injuries',
  title: 'Silicosis Injuries',
  image: silicosisInjuriesImg,
  slug: 'silicosis-injuries',
  category: 'Toxic Exposure'
}, {
  id: 'talc-baby-powder',
  title: 'Talc & Baby Powder Cancer',
  image: talcBabyPowderImg,
  slug: 'talc-baby-powder-cancer',
  category: 'Toxic Exposure'
}, {
  id: 'car-accidents',
  title: 'Car Accidents',
  image: carAccidentsImg,
  slug: 'car-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'truck-18-wheeler',
  title: 'Truck & 18-Wheeler',
  image: truckAccidentsImg,
  slug: 'truck-18-wheeler',
  category: 'Vehicle Accidents'
}, {
  id: 'motorcycle-accidents',
  title: 'Motorcycle Accidents',
  image: motorcycleAccidentsImg,
  slug: 'motorcycle-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'pedestrian-accidents',
  title: 'Pedestrian Accidents',
  image: pedestrianAccidentsImg,
  slug: 'pedestrian-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'bicycle-accidents',
  title: 'Bicycle Accidents',
  image: bicycleAccidentsImg,
  slug: 'bicycle-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'premises-liability',
  title: 'Premises Liability',
  image: premisesLiabilityImg,
  slug: 'premises-liability',
  category: 'Premises'
}, {
  id: 'dog-bites',
  title: 'Dog Bites',
  image: dogBitesImg,
  slug: 'dog-bites-animal-attacks',
  category: 'Animal Attacks'
}, {
  id: 'medical-malpractice',
  title: 'Medical Malpractice',
  image: medicalMalpracticeImg,
  slug: 'medical-malpractice',
  category: 'Medical'
}, {
  id: 'wrongful-death',
  title: 'Wrongful Death',
  image: wrongfulDeathImg,
  slug: 'wrongful-death',
  category: 'Catastrophic'
}, {
  id: 'product-liability',
  title: 'Product Liability',
  image: productLiabilityImg,
  slug: 'product-liability',
  category: 'Products'
}, {
  id: 'construction-accidents',
  title: 'Construction Accidents',
  image: constructionAccidentsImg,
  slug: 'construction-accidents',
  category: 'Workplace'
}, {
  id: 'brain-injuries',
  title: 'Brain Injuries',
  image: brainInjuriesImg,
  slug: 'brain-injuries',
  category: 'Catastrophic'
}, {
  id: 'spinal-cord-injuries',
  title: 'Spinal Cord Injuries',
  image: spinalCordInjuriesImg,
  slug: 'spinal-cord-injuries',
  category: 'Catastrophic'
}, {
  id: 'burn-injuries',
  title: 'Burn Injuries',
  image: burnInjuriesImg,
  slug: 'burn-injuries',
  category: 'Catastrophic'
}, {
  id: 'amputation',
  title: 'Amputation',
  image: amputationImg,
  slug: 'amputation-injuries',
  category: 'Catastrophic'
}, {
  id: 'workplace-injuries',
  title: 'Workplace Injuries',
  image: workplaceInjuriesImg,
  slug: 'workplace-injuries',
  category: 'Workplace'
}, {
  id: 'medical-devices',
  title: 'Medical Devices',
  image: medicalDevicesImg,
  slug: 'medical-devices',
  category: 'Medical'
}, {
  id: 'pharmaceutical',
  title: 'Pharmaceutical',
  image: pharmaceuticalImg,
  slug: 'pharmaceutical',
  category: 'Medical'
}, {
  id: 'mass-torts',
  title: 'Mass Torts',
  image: massTortsImg,
  slug: 'mass-torts',
  category: 'Complex Litigation'
}, {
  id: 'class-actions',
  title: 'Class Actions',
  image: classActionsImg,
  slug: 'class-actions',
  category: 'Complex Litigation'
}, {
  id: 'environmental-toxic',
  title: 'Environmental Toxic',
  image: environmentalToxicImg,
  slug: 'environmental-toxic',
  category: 'Toxic Exposure'
}, {
  id: 'camp-lejeune',
  title: 'Camp Lejeune',
  image: campLejeuneImg,
  slug: 'camp-lejeune',
  category: 'Toxic Exposure'
}, {
  id: 'pfas-exposure',
  title: 'PFAS Exposure',
  image: pfasExposureImg,
  slug: 'pfas-exposure',
  category: 'Toxic Exposure'
}, {
  id: 'benzene-exposure',
  title: 'Benzene Exposure',
  image: benzeneExposureImg,
  slug: 'benzene-exposure',
  category: 'Toxic Exposure'
}, {
  id: 'opioid-litigation',
  title: 'Opioid Litigation',
  image: opioidLitigationImg,
  slug: 'opioid-litigation',
  category: 'Medical'
}, {
  id: 'sexual-abuse',
  title: 'Sexual Abuse',
  image: sexualAbuseImg,
  slug: 'sexual-abuse',
  category: 'Abuse'
}, {
  id: 'clergy-abuse',
  title: 'Clergy Abuse',
  image: clergyAbuseImg,
  slug: 'clergy-abuse',
  category: 'Abuse'
}, {
  id: 'elder-abuse',
  title: 'Elder Abuse',
  image: elderAbuseImg,
  slug: 'elder-abuse',
  category: 'Abuse'
}, {
  id: 'birth-injuries',
  title: 'Birth Injuries',
  image: birthInjuriesImg,
  slug: 'birth-injuries',
  category: 'Medical'
}, {
  id: 'uber-lyft-accidents',
  title: 'Uber/Lyft Accidents',
  image: uberLyftAccidentsImg,
  slug: 'uber-lyft-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'bus-accidents',
  title: 'Bus Accidents',
  image: busAccidentsImg,
  slug: 'bus-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'aviation-accidents',
  title: 'Aviation Accidents',
  image: aviationAccidentsImg,
  slug: 'aviation-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'maritime-accidents',
  title: 'Maritime Accidents',
  image: maritimeAccidentsImg,
  slug: 'maritime-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'swimming-pool',
  title: 'Swimming Pool',
  image: swimmingPoolImg,
  slug: 'swimming-pool',
  category: 'Premises'
}, {
  id: 'amusement-parks',
  title: 'Amusement Parks',
  image: amusementParksImg,
  slug: 'amusement-parks',
  category: 'Premises'
}, {
  id: 'electrocution',
  title: 'Electrocution',
  image: electrocutionImg,
  slug: 'electrocution',
  category: 'Workplace'
}, {
  id: 'explosions',
  title: 'Explosions',
  image: explosionsImg,
  slug: 'explosions',
  category: 'Workplace'
}, {
  id: 'vision-loss',
  title: 'Vision Loss',
  image: visionLossImg,
  slug: 'vision-loss',
  category: 'Catastrophic'
}, {
  id: 'hearing-loss',
  title: 'Hearing Loss',
  image: hearingLossImg,
  slug: 'hearing-loss',
  category: 'Catastrophic'
}, {
  id: 'paralysis',
  title: 'Paralysis',
  image: paralysisImg,
  slug: 'paralysis',
  category: 'Catastrophic'
}, {
  id: 'civil-rights',
  title: 'Civil Rights',
  image: civilRightsImg,
  slug: 'civil-rights',
  category: 'Civil Rights'
}, {
  id: 'retail-accidents',
  title: 'Retail Accidents',
  image: retailAccidentsImg,
  slug: 'retail-accidents',
  category: 'Premises'
}, {
  id: 'scaffolding-falls',
  title: 'Scaffolding Falls',
  image: scaffoldingFallsImg,
  slug: 'scaffolding-falls',
  category: 'Workplace'
}, {
  id: 'crane-accidents',
  title: 'Crane Accidents',
  image: craneAccidentsImg,
  slug: 'crane-accidents',
  category: 'Workplace'
}, {
  id: 'railroad-accidents',
  title: 'Railroad Accidents',
  image: railroadAccidentsImg,
  slug: 'railroad-accidents',
  category: 'Vehicle Accidents'
}, {
  id: 'defamation',
  title: 'Defamation',
  image: defamationImg,
  slug: 'defamation',
  category: 'Civil Rights'
}, {
  id: 'general-personal-injury',
  title: 'General Personal Injury',
  image: generalPersonalInjuryImg,
  slug: 'general-personal-injury',
  category: 'General'
}];
const PracticeAreasOverview = () => {
  const [selectedArea, setSelectedArea] = useState<string>('');
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
          scrub: true
        },
        y: 150,
        opacity: 0.8
      });
    }

    // Cards stagger animation
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.practice-card');
      gsap.fromTo(cards, {
        y: 100,
        opacity: 0,
        rotateX: 15,
        scale: 0.9
      }, {
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
          toggleActions: 'play none none reverse'
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const handleAreaClick = (areaId: string) => {
    setSelectedArea(areaId);
    const element = document.getElementById(`card-${areaId}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  return <>
      <SEO title="Practice Areas | California Injury Lawyers | Trembach Law Firm" description="Comprehensive legal representation across 50 practice areas including personal injury, medical malpractice, and toxic exposure. Free consultation." canonical="/practice-areas" />

      <div className="min-h-screen bg-white pt-[44px]">
        <div className="flex">
          {/* Apple-style Sidebar */}
          <aside className="hidden lg:block w-[280px] fixed left-0 top-[44px] bottom-0 overflow-y-auto bg-white">
            <div className="px-6 py-8 pb-12">
              <div className="mb-6 border border-gray-300 rounded-lg p-3">
                <h1 className="text-lg font-semibold text-gray-900">Practice Areas</h1>
                <p className="text-xs text-gray-600 mt-0.5">
                  {practiceAreas.length} specializations
                </p>
              </div>
              <nav className="space-y-1">
                {practiceAreas.map(area => <Link key={area.id} to={`/practice-areas/${area.slug}`} className={`block w-full text-left py-3 px-4 text-[15px] transition-all duration-200 rounded-lg apple-blue-hover ${selectedArea === area.id ? 'text-white bg-[#0071E3] font-normal' : 'text-black font-normal'}`}>
                    {area.title}
                  </Link>)}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[280px]">
            {/* Apple-style Hero Section */}
            <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-50">
              <div className="relative z-10 text-center px-6 py-32 max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-semibold mb-4 text-gray-900 tracking-tight leading-tight">
                  Expert Legal<br />Representation
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-normal leading-relaxed">
                  Comprehensive injury law coverage across California.<br />
                  We fight for your rights.
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <div className="px-5 py-2.5 bg-gray-900 text-white rounded-full text-sm font-medium">
                    {practiceAreas.length} Practice Areas
                  </div>
                  <Link to="/free-consultation" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 bg-[#0071E3] hover:bg-[#0066CC] active:bg-[#0057A3] !text-white hover:!text-white active:!text-white visited:!text-white hover:visited:!text-white focus:!text-white no-underline hover:no-underline visited:no-underline hover:visited:no-underline focus:no-underline focus-visible:ring-2 focus-visible:ring-white/40">
                    START YOUR FREE CASE REVIEW
                  </Link>
                </div>
              </div>
            </section>

            {/* Apple-style Cards Grid with 3D effects */}
            <section ref={cardsRef} className="py-20 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practiceAreas.map((area, index) => <Link key={area.id} id={`card-${area.id}`} to={`/practice-areas/${area.slug}`} className="practice-card group relative h-[400px] rounded-3xl overflow-hidden bg-white transition-all duration-500 hover:scale-[1.02]" style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}>
                    {/* Background Image with 3D parallax */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                        <img src={area.image} alt={area.title} className="w-full h-full object-cover brightness-110" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8">
                      {/* Title and CTA */}
                      <div className="space-y-4">
                        <h3 className="text-3xl font-semibold text-white tracking-tight leading-tight">
                          {area.title}
                        </h3>

                        {/* Apple-style interactive CTA */}
                        <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-gray-900 text-sm font-semibold border border-gray-200/20 shadow-lg transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-xl group-hover:scale-105 group-hover:border-gray-300">
                          <span className="transition-all duration-300">Learn more</span>
                          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </Link>)}
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
                  <a href="tel:213-908-9708" className="group px-8 py-4 bg-gray-900 text-white font-semibold text-base rounded-full transition-all duration-200 hover:bg-gray-800 flex items-center gap-2 shadow-lg">
                    <span className="text-white">Call (213) 908-9708</span>
                    <ChevronRight className="h-4 w-4 text-white transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                  <Link to="/free-consultation" className="px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 bg-red-600 hover:bg-red-700 shadow-lg !text-white hover:!text-white active:!text-white visited:!text-white hover:visited:!text-white focus:!text-white no-underline hover:no-underline visited:no-underline hover:visited:no-underline focus:no-underline focus-visible:ring-2 focus-visible:ring-white/40">
                    Free Consultation
                  </Link>
                </div>
                
              </div>
            </section>
          </main>
        </div>
      </div>
    </>;
};
export default PracticeAreasOverview;