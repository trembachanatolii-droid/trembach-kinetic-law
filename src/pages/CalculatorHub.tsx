import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calculator, Search, ArrowRight } from 'lucide-react';

interface CalculatorArea {
  id: string;
  name: string;
  description: string;
  route: string;
  category: 'personal-injury' | 'workplace' | 'medical' | 'toxic-exposure' | 'transportation' | 'abuse' | 'product-liability' | 'civil-rights';
}

const calculatorAreas: CalculatorArea[] = [
  // Personal Injury - Catastrophic
  { id: 'brain-injury', name: 'Brain Injury', description: 'Traumatic brain injury compensation', route: '/brain-injury-calculator', category: 'personal-injury' },
  { id: 'spinal-cord', name: 'Spinal Cord Injury', description: 'Spinal damage compensation', route: '/spinal-cord-calculator', category: 'personal-injury' },
  { id: 'burn-injury', name: 'Burn Injury', description: 'Burn injury settlement estimates', route: '/burn-injury-calculator', category: 'personal-injury' },
  { id: 'amputation', name: 'Amputation', description: 'Loss of limb compensation', route: '/amputation-calculator', category: 'personal-injury' },
  { id: 'paralysis', name: 'Paralysis', description: 'Quadriplegia & paraplegia claims', route: '/practice-areas/paralysis/compensation-calculator', category: 'personal-injury' },
  { id: 'wrongful-death', name: 'Wrongful Death', description: 'Loss of loved one claims', route: '/wrongful-death-calculator', category: 'personal-injury' },
  
  // Personal Injury - General
  { id: 'personal-injury', name: 'Personal Injury', description: 'General injury compensation', route: '/personal-injury-calculator', category: 'personal-injury' },
  { id: 'dog-bite', name: 'Dog Bite', description: 'Animal attack injury claims', route: '/dog-bite-calculator', category: 'personal-injury' },
  { id: 'premises-liability', name: 'Premises Liability', description: 'Property accident compensation', route: '/premises-liability-calculator', category: 'personal-injury' },
  { id: 'vision-loss', name: 'Vision Loss', description: 'Eye injury & blindness claims', route: '/practice-areas/vision-loss/compensation-calculator', category: 'personal-injury' },
  { id: 'hearing-loss', name: 'Hearing Loss', description: 'Occupational deafness claims', route: '/practice-areas/hearing-loss/compensation-calculator', category: 'personal-injury' },
  { id: 'swimming-pool', name: 'Swimming Pool Accidents', description: 'Pool & spa injury claims', route: '/practice-areas/swimming-pool/compensation-calculator', category: 'personal-injury' },
  { id: 'amusement-park', name: 'Amusement Park', description: 'Theme park injury claims', route: '/practice-areas/amusement-parks/compensation-calculator', category: 'personal-injury' },
  { id: 'retail-accidents', name: 'Retail Store Accidents', description: 'Slip & fall in stores', route: '/practice-areas/retail-accidents/compensation-calculator', category: 'personal-injury' },
  
  // Transportation
  { id: 'car-accident', name: 'Car Accidents', description: 'Auto collision compensation', route: '/practice-areas/car-accidents/compensation-calculator', category: 'transportation' },
  { id: 'motorcycle', name: 'Motorcycle Accidents', description: 'Motorcycle crash claims', route: '/motorcycle-calculator', category: 'transportation' },
  { id: 'bicycle', name: 'Bicycle Accidents', description: 'Bicycle injury claims', route: '/bicycle-calculator', category: 'transportation' },
  { id: 'pedestrian', name: 'Pedestrian Accidents', description: 'Pedestrian injury compensation', route: '/pedestrian-calculator', category: 'transportation' },
  { id: 'bus-accident', name: 'Bus Accidents', description: 'Bus crash injury claims', route: '/practice-areas/bus-accident/compensation-calculator', category: 'transportation' },
  { id: 'uber-lyft', name: 'Uber & Lyft', description: 'Rideshare accident claims', route: '/practice-areas/uber-lyft/compensation-calculator', category: 'transportation' },
  { id: 'aviation', name: 'Aviation Accidents', description: 'Airplane crash compensation', route: '/practice-areas/aviation/compensation-calculator', category: 'transportation' },
  { id: 'maritime', name: 'Maritime Accidents', description: 'Jones Act & LHWCA claims', route: '/practice-areas/maritime/compensation-calculator', category: 'transportation' },
  { id: 'railroad', name: 'Railroad Accidents', description: 'FELA railroad worker claims', route: '/practice-areas/railroad-accidents/compensation-calculator', category: 'transportation' },
  
  // Workplace
  { id: 'workplace-injury', name: 'Workplace Injuries', description: 'Workers comp & third-party', route: '/workplace-injury-calculator', category: 'workplace' },
  { id: 'construction', name: 'Construction Accidents', description: 'Construction site injuries', route: '/construction-calculator', category: 'workplace' },
  { id: 'scaffolding', name: 'Scaffolding Falls', description: 'Height injury compensation', route: '/practice-areas/scaffolding-falls/compensation-calculator', category: 'workplace' },
  { id: 'crane-accident', name: 'Crane Accidents', description: 'Crane-related injuries', route: '/practice-areas/crane-accidents/compensation-calculator', category: 'workplace' },
  { id: 'electrocution', name: 'Electrocution', description: 'Electrical injury compensation', route: '/practice-areas/electrocution/compensation-calculator', category: 'workplace' },
  { id: 'explosions', name: 'Explosions & Fires', description: 'Blast injury compensation', route: '/practice-areas/explosions/compensation-calculator', category: 'workplace' },
  
  // Medical
  { id: 'medical-malpractice', name: 'Medical Malpractice', description: 'Medical negligence claims', route: '/medical-malpractice-calculator', category: 'medical' },
  { id: 'birth-injury', name: 'Birth Injuries', description: 'Birth trauma compensation', route: '/birth-injury-calculator', category: 'medical' },
  { id: 'medical-devices', name: 'Medical Devices', description: 'Defective device claims', route: '/medical-devices-calculator', category: 'medical' },
  { id: 'pharmaceutical', name: 'Pharmaceutical', description: 'Dangerous drug compensation', route: '/pharmaceutical-calculator', category: 'medical' },
  
  // Toxic Exposure
  { id: 'asbestos', name: 'Asbestos & Mesothelioma', description: 'Asbestos exposure claims', route: '/compensation-calculator', category: 'toxic-exposure' },
  { id: 'benzene', name: 'Benzene Exposure', description: 'Benzene-related illness', route: '/benzene-calculator', category: 'toxic-exposure' },
  { id: 'pfas', name: 'PFAS Contamination', description: 'Forever chemicals exposure', route: '/pfas-calculator', category: 'toxic-exposure' },
  { id: 'camp-lejeune', name: 'Camp Lejeune', description: 'Water contamination claims', route: '/camp-lejeune-calculator', category: 'toxic-exposure' },
  { id: 'environmental-toxic', name: 'Environmental Toxic', description: 'Chemical exposure claims', route: '/environmental-toxic-calculator', category: 'toxic-exposure' },
  { id: 'silicosis', name: 'Silicosis', description: 'Silica dust exposure', route: '/silicosis-calculator', category: 'toxic-exposure' },
  { id: 'talc', name: 'Talc Exposure', description: 'Talcum powder claims', route: '/talc-calculator', category: 'toxic-exposure' },
  
  // Abuse
  { id: 'elder-abuse', name: 'Elder Abuse', description: 'Nursing home neglect claims', route: '/elder-abuse-calculator', category: 'abuse' },
  { id: 'sexual-abuse', name: 'Sexual Abuse', description: 'Sexual assault compensation', route: '/sexual-abuse-calculator', category: 'abuse' },
  { id: 'clergy-abuse', name: 'Clergy Abuse', description: 'Religious abuse claims', route: '/clergy-abuse-calculator', category: 'abuse' },
  
  // Product Liability & Mass Torts
  { id: 'product-liability', name: 'Product Liability', description: 'Defective product injuries', route: '/product-liability-calculator', category: 'product-liability' },
  { id: 'mass-torts', name: 'Mass Torts', description: 'Multi-party injury claims', route: '/mass-torts-calculator', category: 'product-liability' },
  { id: 'class-actions', name: 'Class Action', description: 'Group litigation claims', route: '/class-actions-calculator', category: 'product-liability' },
  { id: 'opioid', name: 'Opioid Crisis', description: 'Opioid addiction claims', route: '/opioid-calculator', category: 'product-liability' },
  
  // Civil Rights
  { id: 'civil-rights', name: 'Civil Rights Violations', description: 'Constitutional rights claims', route: '/practice-areas/civil-rights/compensation-calculator', category: 'civil-rights' },
  { id: 'defamation', name: 'Defamation', description: 'Libel & slander damages', route: '/defamation-calculator', category: 'civil-rights' },
];

const categories = [
  { id: 'all', name: 'All Areas', color: 'bg-slate-900' },
  { id: 'personal-injury', name: 'Personal Injury', color: 'bg-blue-600' },
  { id: 'transportation', name: 'Transportation', color: 'bg-purple-600' },
  { id: 'workplace', name: 'Workplace', color: 'bg-orange-600' },
  { id: 'medical', name: 'Medical', color: 'bg-red-600' },
  { id: 'toxic-exposure', name: 'Toxic Exposure', color: 'bg-green-600' },
  { id: 'abuse', name: 'Abuse', color: 'bg-pink-600' },
  { id: 'product-liability', name: 'Product Liability', color: 'bg-yellow-600' },
  { id: 'civil-rights', name: 'Civil Rights', color: 'bg-indigo-600' },
];

const CalculatorHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredAreas = calculatorAreas.filter(area => {
    const matchesSearch = area.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         area.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || area.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Compensation Calculators | Free Case Value Estimates | Trembach Law</title>
        <meta 
          name="description" 
          content="Calculate your potential compensation across 50+ practice areas. Free, instant estimates for personal injury, workplace accidents, toxic exposure, and more." 
        />
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Hero Section - Apple Style */}
        <section className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-6 tracking-tight leading-[1.05]">
                Calculate Your<br />Case Value
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 font-light leading-relaxed">
                Instant estimates across 50+ practice areas.<br />Professional. Accurate. Free.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto mb-16">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                <input
                  type="text"
                  placeholder="Search by injury type or practice area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-16 pl-16 pr-6 text-lg bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all shadow-sm hover:shadow-md"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-lg scale-105'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-900 hover:shadow-md'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            {filteredAreas.length === 0 ? (
              <div className="text-center py-20">
                <Calculator className="mx-auto mb-6 text-slate-300" size={64} />
                <h3 className="text-2xl font-bold text-slate-900 mb-3">No calculators found</h3>
                <p className="text-slate-600">Try adjusting your search or category filter</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <p className="text-slate-600 text-lg">
                    Showing <span className="font-semibold text-slate-900">{filteredAreas.length}</span> calculator{filteredAreas.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAreas.map((area) => (
                    <Link
                      key={area.id}
                      to={area.route}
                      className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                          <Calculator className="text-slate-600 group-hover:text-white transition-colors" size={24} />
                        </div>
                        <ArrowRight className="text-slate-400 group-hover:text-slate-900 transition-all group-hover:translate-x-1" size={20} />
                      </div>
                      
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-900">
                        {area.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Need Help Calculating?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              Our attorneys provide personalized case evaluations with detailed compensation analysis
            </p>
            <Link
              to="/free-consultation"
              className="inline-flex items-center justify-center h-14 px-10 text-lg font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 hover:text-white visited:text-white no-underline transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              Get Free Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <p className="text-slate-500 mt-6 text-sm">
              Available 24/7 • Free Case Review • No Fees Unless We Win
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculatorHub;
