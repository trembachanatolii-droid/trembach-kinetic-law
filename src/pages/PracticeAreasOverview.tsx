import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

// Import practice area images
import mesotheliomaAsbestosImg from '@/assets/practice-areas/mesothelioma-asbestos.jpg';
import silicosisInjuriesImg from '@/assets/practice-areas/silicosis-injuries.jpg';
import talcBabyPowderImg from '@/assets/practice-areas/talc-baby-powder.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents.jpg';
import truckAccidentsImg from '@/assets/practice-areas/truck-18-wheeler.jpg';
import motorcycleAccidentsImg from '@/assets/practice-areas/motorcycle-accidents.jpg';
import pedestrianAccidentsImg from '@/assets/practice-areas/pedestrian-accidents.jpg';
import bicycleAccidentsImg from '@/assets/practice-areas/bicycle-accidents.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability.jpg';
import dogBitesImg from '@/assets/practice-areas/dog-bites.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice.jpg';
import wrongfulDeathImg from '@/assets/practice-areas/wrongful-death.jpg';
import productLiabilityImg from '@/assets/practice-areas/product-liability.jpg';
import constructionAccidentsImg from '@/assets/practice-areas/construction-accidents.jpg';
import brainInjuriesImg from '@/assets/practice-areas/brain-injuries.jpg';
import spinalCordInjuriesImg from '@/assets/practice-areas/spinal-cord-injuries.jpg';
import burnInjuriesImg from '@/assets/practice-areas/burn-injuries.jpg';
import amputationImg from '@/assets/practice-areas/amputation.jpg';
import workplaceInjuriesImg from '@/assets/practice-areas/workplace-injuries.jpg';
import medicalDevicesImg from '@/assets/practice-areas/medical-devices.jpg';
import pharmaceuticalImg from '@/assets/practice-areas/pharmaceutical.jpg';
import massTortsImg from '@/assets/practice-areas/mass-torts.jpg';
import classActionsImg from '@/assets/practice-areas/class-actions.jpg';
import environmentalToxicImg from '@/assets/practice-areas/environmental-toxic-hero.jpg';
import campLejeuneImg from '@/assets/practice-areas/camp-lejeune.jpg';
import pfasExposureImg from '@/assets/practice-areas/pfas-exposure.jpg';
import benzeneExposureImg from '@/assets/practice-areas/benzene-exposure.jpg';
import opioidLitigationImg from '@/assets/practice-areas/opioid-litigation.jpg';
import sexualAbuseImg from '@/assets/practice-areas/sexual-abuse.jpg';
import clergyAbuseImg from '@/assets/practice-areas/clergy-abuse.jpg';
import elderAbuseImg from '@/assets/practice-areas/elder-abuse.jpg';
import birthInjuriesImg from '@/assets/practice-areas/birth-injuries.jpg';
import uberLyftAccidentsImg from '@/assets/practice-areas/uber-lyft-accidents.jpg';
import busAccidentsImg from '@/assets/practice-areas/bus-accidents.jpg';
import aviationAccidentsImg from '@/assets/practice-areas/aviation-accidents.jpg';
import maritimeAccidentsImg from '@/assets/practice-areas/maritime-accidents.jpg';
import swimmingPoolImg from '@/assets/practice-areas/swimming-pool.jpg';
import amusementParksImg from '@/assets/practice-areas/amusement-parks.jpg';
import electrocutionImg from '@/assets/practice-areas/electrocution.jpg';
import explosionsImg from '@/assets/practice-areas/explosions.jpg';
import visionLossImg from '@/assets/practice-areas/vision-loss.jpg';
import hearingLossImg from '@/assets/practice-areas/hearing-loss.jpg';
import paralysisImg from '@/assets/practice-areas/paralysis.jpg';
import civilRightsImg from '@/assets/practice-areas/civil-rights.jpg';
import retailAccidentsImg from '@/assets/practice-areas/retail-accidents.jpg';
import scaffoldingFallsImg from '@/assets/practice-areas/scaffolding-falls.jpg';
import craneAccidentsImg from '@/assets/practice-areas/crane-accidents.jpg';
import defamationImg from '@/assets/practice-areas/defamation.jpg';
import generalPersonalInjuryImg from '@/assets/practice-areas/general-personal-injury.jpg';

interface PracticeArea {
  id: string;
  title: string;
  image: string;
  slug: string;
}

const practiceAreas: PracticeArea[] = [
  { id: 'mesothelioma-asbestos', title: 'Mesothelioma & Asbestos', image: mesotheliomaAsbestosImg, slug: 'mesothelioma-asbestos' },
  { id: 'silicosis-injuries', title: 'Silicosis Injuries', image: silicosisInjuriesImg, slug: 'silicosis-injuries' },
  { id: 'talc-baby-powder', title: 'Talc & Baby Powder Cancer', image: talcBabyPowderImg, slug: 'talc-baby-powder-cancer' },
  { id: 'truck-18-wheeler', title: 'Truck & 18-Wheeler Accidents', image: truckAccidentsImg, slug: 'truck-18-wheeler' },
  { id: 'car-accidents', title: 'Car Accidents', image: carAccidentsImg, slug: 'car-accidents' },
  { id: 'motorcycle-accidents', title: 'Motorcycle Accidents', image: motorcycleAccidentsImg, slug: 'motorcycle-accidents' },
  { id: 'pedestrian-accidents', title: 'Pedestrian Accidents', image: pedestrianAccidentsImg, slug: 'pedestrian-accidents' },
  { id: 'bicycle-accidents', title: 'Bicycle Accidents', image: bicycleAccidentsImg, slug: 'bicycle-accidents' },
  { id: 'uber-lyft-accidents', title: 'Uber & Lyft Accidents', image: uberLyftAccidentsImg, slug: 'uber-lyft-accidents' },
  { id: 'bus-accidents', title: 'Bus Accidents', image: busAccidentsImg, slug: 'bus-accidents' },
  { id: 'aviation-accidents', title: 'Aviation Accidents', image: aviationAccidentsImg, slug: 'aviation-accidents' },
  { id: 'maritime-accidents', title: 'Maritime Accidents', image: maritimeAccidentsImg, slug: 'maritime-accidents' },
  { id: 'medical-malpractice', title: 'Medical Malpractice', image: medicalMalpracticeImg, slug: 'medical-malpractice' },
  { id: 'birth-injuries', title: 'Birth Injuries', image: birthInjuriesImg, slug: 'birth-injuries' },
  { id: 'premises-liability', title: 'Premises Liability', image: premisesLiabilityImg, slug: 'premises-liability' },
  { id: 'dog-bites', title: 'Dog Bites & Animal Attacks', image: dogBitesImg, slug: 'dog-bites-animal-attacks' },
  { id: 'wrongful-death', title: 'Wrongful Death', image: wrongfulDeathImg, slug: 'wrongful-death' },
  { id: 'product-liability', title: 'Product Liability', image: productLiabilityImg, slug: 'product-liability' },
  { id: 'construction-accidents', title: 'Construction Accidents', image: constructionAccidentsImg, slug: 'construction-accidents' },
  { id: 'workplace-injuries', title: 'Workplace Injuries', image: workplaceInjuriesImg, slug: 'workplace-injuries' },
  { id: 'brain-injuries', title: 'Traumatic Brain Injuries', image: brainInjuriesImg, slug: 'brain-injuries' },
  { id: 'spinal-cord-injuries', title: 'Spinal Cord Injuries', image: spinalCordInjuriesImg, slug: 'spinal-cord-injuries' },
  { id: 'burn-injuries', title: 'Burn Injuries', image: burnInjuriesImg, slug: 'burn-injuries' },
  { id: 'amputation', title: 'Amputation Injuries', image: amputationImg, slug: 'amputation-injuries' },
  { id: 'paralysis', title: 'Paralysis', image: paralysisImg, slug: 'paralysis' },
  { id: 'vision-loss', title: 'Vision Loss', image: visionLossImg, slug: 'vision-loss' },
  { id: 'hearing-loss', title: 'Hearing Loss', image: hearingLossImg, slug: 'hearing-loss' },
  { id: 'swimming-pool', title: 'Swimming Pool Accidents', image: swimmingPoolImg, slug: 'swimming-pool-accidents' },
  { id: 'amusement-parks', title: 'Amusement Park Injuries', image: amusementParksImg, slug: 'amusement-park-injuries' },
  { id: 'retail-accidents', title: 'Retail Accidents', image: retailAccidentsImg, slug: 'retail-accidents' },
  { id: 'electrocution', title: 'Electrocution', image: electrocutionImg, slug: 'electrocution' },
  { id: 'explosions', title: 'Explosions', image: explosionsImg, slug: 'explosions' },
  { id: 'scaffolding-falls', title: 'Scaffolding Falls', image: scaffoldingFallsImg, slug: 'scaffolding-falls' },
  { id: 'crane-accidents', title: 'Crane Accidents', image: craneAccidentsImg, slug: 'crane-accidents' },
  { id: 'medical-devices', title: 'Defective Medical Devices', image: medicalDevicesImg, slug: 'medical-devices' },
  { id: 'pharmaceutical', title: 'Dangerous Pharmaceuticals', image: pharmaceuticalImg, slug: 'pharmaceutical' },
  { id: 'mass-torts', title: 'Mass Torts', image: massTortsImg, slug: 'mass-torts' },
  { id: 'class-actions', title: 'Class Actions', image: classActionsImg, slug: 'class-actions' },
  { id: 'environmental-toxic', title: 'Environmental Toxic Exposure', image: environmentalToxicImg, slug: 'environmental-toxic' },
  { id: 'camp-lejeune', title: 'Camp Lejeune Water Contamination', image: campLejeuneImg, slug: 'camp-lejeune' },
  { id: 'pfas-exposure', title: 'PFAS Exposure', image: pfasExposureImg, slug: 'pfas-exposure' },
  { id: 'benzene-exposure', title: 'Benzene Exposure', image: benzeneExposureImg, slug: 'benzene-exposure' },
  { id: 'opioid-litigation', title: 'Opioid Litigation', image: opioidLitigationImg, slug: 'opioid-litigation' },
  { id: 'sexual-abuse', title: 'Sexual Abuse', image: sexualAbuseImg, slug: 'sexual-abuse' },
  { id: 'clergy-abuse', title: 'Clergy Abuse', image: clergyAbuseImg, slug: 'clergy-abuse' },
  { id: 'elder-abuse', title: 'Elder Abuse & Neglect', image: elderAbuseImg, slug: 'elder-abuse' },
  { id: 'civil-rights', title: 'Civil Rights Violations', image: civilRightsImg, slug: 'civil-rights' },
  { id: 'defamation', title: 'Defamation', image: defamationImg, slug: 'defamation' },
  { id: 'general-personal-injury', title: 'General Personal Injury', image: generalPersonalInjuryImg, slug: 'general-personal-injury' },
];

const PracticeAreasOverview = () => {
  const [selectedArea, setSelectedArea] = useState<string>(practiceAreas[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAreaClick = (areaId: string) => {
    setSelectedArea(areaId);
    // Scroll to card in main area
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

      <div className="min-h-screen bg-background pt-[44px]">
        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden lg:block w-[365px] bg-white border-r border-gray-200 fixed left-0 top-[44px] bottom-0 overflow-y-auto shadow-sm">
            <div className="p-8 pb-12">
              <h1 className="text-3xl font-bold mb-8 text-gray-900">Our Practice Areas</h1>
              <nav className="space-y-0">
                {practiceAreas.map((area) => (
                  <button
                    key={area.id}
                    onClick={() => handleAreaClick(area.id)}
                    className={`w-full text-left py-3 px-4 text-base transition-all duration-200 border-l-4 ${
                      selectedArea === area.id
                        ? 'border-red-600 bg-red-50 text-gray-900 font-medium'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {area.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 lg:ml-[365px]">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-6 border-b border-gray-200">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-6 text-gray-900">Cases We Handle</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Comprehensive legal representation across 50+ practice areas throughout California
                </p>
              </div>
            </section>

            {/* Practice Area Cards Grid */}
            <section className="py-12 px-6 max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {practiceAreas.map((area) => (
                  <Link
                    key={area.id}
                    id={`card-${area.id}`}
                    to={`/practice-areas/${area.slug}`}
                    className="group relative h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-8">
                      <h3 className="text-3xl font-bold text-white mb-4 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                        {area.title}
                      </h3>
                      <div className="flex items-center text-white font-medium opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        <span className="text-lg">Learn More</span>
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-16 px-6 border-t border-gray-200">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Discuss Your Case?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Free consultation with a former insurance defense attorney who knows their tactics
                </p>
                <Link
                  to="/case-evaluation"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  START YOUR FREE CASE REVIEW
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default PracticeAreasOverview;
