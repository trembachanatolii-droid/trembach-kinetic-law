import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const HighSpeedCrashes = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="High-Speed Crash Claims in California: Catastrophic Injury Rights | Trembach Law"
        description="Understanding high-speed collision injuries, punitive damages, and maximum compensation. Expert legal representation for devastating high-speed accidents."
        keywords="high-speed crash, catastrophic accident, excessive speed, fatal accident, high-speed collision, punitive damages, speed-related crash attorney"
        canonical="https://www.trembachlawfirm.com/blog/high-speed-crashes"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1509350842-e02e14f87284?auto=format&fit=crop&q=80"
            alt="High-speed crash legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              High-Speed Crash Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                12 min read
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0051D5] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              High-speed crashes cause the most devastating injuries and deaths on California roads. Excessive speed dramatically increases crash severity, often resulting in catastrophic injuries, wrongful death, and the potential for punitive damages against reckless drivers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Deadly Nature of High-Speed Crashes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Speed and Crash Severity</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Kinetic energy increases exponentially:</strong> Doubling speed quadruples crash forces</li>
              <li><strong>Death risk multiplies:</strong> Pedestrian struck at 40 mph has 85% death risk vs. 10% at 20 mph</li>
              <li><strong>Stopping distance:</strong> At 60 mph, car travels 271 feet before stopping</li>
              <li><strong>Impact forces:</strong> Occupants absorb massive forces</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Speed-Related Statistics</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Speed involved in approximately 29% of all traffic fatalities</li>
              <li>Over 9,000 speed-related deaths annually nationwide</li>
              <li>Speeding costs society over $40 billion per year</li>
              <li>Young drivers disproportionately involved in speed-related crashes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Speed Laws</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prima Facie Speed Limits</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>15 mph:</strong> Near schools, senior centers, railroad crossings</li>
              <li><strong>25 mph:</strong> Residential areas, business districts</li>
              <li><strong>65 mph:</strong> Most highways and freeways</li>
              <li><strong>Basic speed law:</strong> Must drive at safe speed for conditions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Excessive Speed</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>20+ mph over limit:</strong> Significantly increases penalties</li>
              <li><strong>100+ mph:</strong> Potential jail time and license suspension</li>
              <li><strong>Reckless driving:</strong> Willful disregard for safety</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Catastrophic Injuries from High-Speed Crashes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fatal and Near-Fatal Trauma</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Severe traumatic brain injury:</strong> Permanent cognitive impairment</li>
              <li><strong>Spinal cord injuries:</strong> Paralysis and loss of function</li>
              <li><strong>Multiple organ damage:</strong> Liver, spleen, kidney rupture</li>
              <li><strong>Massive internal bleeding:</strong> Life-threatening hemorrhage</li>
              <li><strong>Polytrauma:</strong> Multiple body systems injured</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Extreme Impact Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Crush injuries:</strong> Severe tissue and bone damage</li>
              <li><strong>Amputations:</strong> Traumatic or surgical limb loss</li>
              <li><strong>Severe burns:</strong> From fire or fuel ignition</li>
              <li><strong>Facial trauma:</strong> Requiring extensive reconstruction</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Establishing Excessive Speed</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Evidence of Speed</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>EDR (black box) data:</strong> Vehicle speed before crash</li>
              <li><strong>Skid marks:</strong> Length indicates minimum speed</li>
              <li><strong>Damage severity:</strong> Extent of destruction shows force</li>
              <li><strong>Debris scatter:</strong> Distance objects thrown indicates speed</li>
              <li><strong>Witness testimony:</strong> Observations of speeding</li>
              <li><strong>Surveillance video:</strong> Footage showing excessive speed</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accident Reconstruction</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Physics calculations from damage and scene evidence</li>
              <li>Computer simulation of crash dynamics</li>
              <li>Expert testimony on speed and causation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Punitive Damages in Speed Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When Punitive Damages Apply</h3>
            <p className="text-gray-700 mb-6">
              Excessive speeding may support punitive damages when it demonstrates:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Conscious disregard:</strong> Awareness of danger</li>
              <li><strong>Willful misconduct:</strong> Intentional dangerous behavior</li>
              <li><strong>Extreme recklessness:</strong> Grossly negligent conduct</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Factors Supporting Punitive Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Extreme speeding:</strong> 30+ mph over limit</li>
              <li><strong>Racing:</strong> Street racing or exhibition of speed</li>
              <li><strong>Prior violations:</strong> Pattern of speeding tickets</li>
              <li><strong>Impairment combined:</strong> Drunk or drugged driving plus speed</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wrongful Death in High-Speed Crashes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fatal Crash Factors</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Speed single biggest factor in fatal crashes</li>
              <li>High-speed crashes more likely to be fatal</li>
              <li>Multiple occupant deaths common</li>
              <li>Pedestrians and cyclists have minimal survival chance</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Wrongful Death Compensation</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Loss of financial support:</strong> Lifetime income lost</li>
              <li><strong>Loss of companionship:</strong> Relationship value</li>
              <li><strong>Funeral expenses:</strong> Burial costs</li>
              <li><strong>Punitive damages:</strong> If conduct egregious</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Maximum Compensation Strategies</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Identifying All Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Lifetime medical care:</strong> Ongoing treatment costs</li>
              <li><strong>Lost earning capacity:</strong> Total lifetime income loss</li>
              <li><strong>Pain and suffering:</strong> Physical and emotional trauma</li>
              <li><strong>Loss of quality of life:</strong> Inability to enjoy life</li>
              <li><strong>Permanent disability:</strong> Accommodation costs</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Pursuing All Liable Parties</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Speeding driver:</strong> Primary defendant</li>
              <li><strong>Employer:</strong> If driving for work</li>
              <li><strong>Vehicle owner:</strong> If different from driver</li>
              <li><strong>Multiple policies:</strong> Umbrella coverage, excess policies</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aggressive High-Speed Crash Representation</h3>
              <p className="text-gray-700 mb-6">
                High-speed crashes cause the most devastating injuries and require maximum compensation. Our firm has successfully represented numerous victims of high-speed collisions throughout California, securing substantial recoveries including punitive damages.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0051D5] transition-all shadow-lg hover:shadow-xl"
              >
                Free Consultation
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="high-speed-crashes" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HighSpeedCrashes;
