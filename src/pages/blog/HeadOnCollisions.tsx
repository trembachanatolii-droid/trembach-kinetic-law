import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const HeadOnCollisions = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Head-On Collision Claims in California: Fatal Crash Representation | Trembach Law"
        description="Understanding head-on crash causes, catastrophic injuries, and wrongful death claims. Expert legal representation for devastating frontal impact accidents."
        keywords="head-on collision, frontal impact, wrong way driver, head-on crash, California fatal accident, head-on collision attorney"
        canonical="https://www.trembachlawfirm.com/blog/head-on-collisions"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
            alt="Head-on collision legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Head-On Collision Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 24, 2025
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
              Head-on collisions are among the deadliest types of car accidents. When two vehicles strike each other front-to-front, the combined force of impact often results in catastrophic injuries or death. Understanding your rights after a head-on crash is crucial for obtaining full compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Deadly Nature of Head-On Collisions</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Head-on crashes account for only 2% of all accidents but 10% of traffic fatalities</li>
              <li>Combined impact force is exponentially greater than other collision types</li>
              <li>Occupants absorb massive forces even with airbags and safety features</li>
              <li>Death rate in head-on collisions is significantly higher than rear-end or side impacts</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Head-On Crashes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Wrong-Way Driving</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Impaired drivers:</strong> Alcohol or drugs causing confusion</li>
              <li><strong>Elderly drivers:</strong> Confusion or dementia</li>
              <li><strong>Freeway entrance errors:</strong> Entering exit ramp</li>
              <li><strong>Poor signage:</strong> Inadequate warnings about one-way streets</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Passing Accidents</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Unsafe passing zones:</strong> Crossing double yellow lines</li>
              <li><strong>Misjudging oncoming traffic:</strong> Not enough time to complete pass</li>
              <li><strong>Blind hill or curve passes:</strong> Can't see oncoming vehicles</li>
              <li><strong>Aggressive driving:</strong> Impatient drivers taking risks</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Distracted Driving</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Drifting across center line due to inattention</li>
              <li>Looking at phone and veering into oncoming lane</li>
              <li>Reaching for objects and losing control</li>
              <li>Not noticing road curves</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Road and Weather Conditions</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Icy or wet roads:</strong> Vehicle slides across centerline</li>
              <li><strong>Poor visibility:</strong> Fog, heavy rain, snow</li>
              <li><strong>Sharp curves:</strong> Failing to navigate turns</li>
              <li><strong>Narrow roads:</strong> Limited space between vehicles</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Catastrophic Injuries from Head-On Crashes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Fatal Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Instant death:</strong> Massive trauma from impact force</li>
              <li><strong>Internal bleeding:</strong> Fatal organ damage</li>
              <li><strong>Traumatic brain injury:</strong> Unsurvivable head trauma</li>
              <li><strong>Multiple system failure:</strong> Injuries to multiple organs</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Severe Brain Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Diffuse axonal injury:</strong> Widespread brain damage</li>
              <li><strong>Cognitive impairment:</strong> Memory, reasoning problems</li>
              <li><strong>Personality changes:</strong> Behavioral and emotional issues</li>
              <li><strong>Permanent disability:</strong> Requiring lifelong care</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Spinal Cord Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Complete paralysis:</strong> Loss of all function below injury</li>
              <li><strong>Incomplete paralysis:</strong> Partial loss of sensation and mobility</li>
              <li><strong>Quadriplegia:</strong> Paralysis of all four limbs</li>
              <li><strong>Paraplegia:</strong> Lower body paralysis</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Multiple Fractures and Crush Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Chest trauma:</strong> Broken ribs, sternum, lung injuries</li>
              <li><strong>Leg and hip fractures:</strong> Dashboard and firewall intrusion</li>
              <li><strong>Arm fractures:</strong> Impact with steering wheel, dashboard</li>
              <li><strong>Facial trauma:</strong> Severe disfigurement requiring reconstruction</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Establishing Liability</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Clear Fault Scenarios</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Wrong-way driver:</strong> Clearly at fault</li>
              <li><strong>Illegal passing:</strong> Crossing double yellow line</li>
              <li><strong>DUI:</strong> Impaired driving is negligence per se</li>
              <li><strong>Lane departure:</strong> Drifting across center line</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Critical Evidence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Accident reconstruction:</strong> Expert analysis of collision dynamics</li>
              <li><strong>Skid marks:</strong> Direction of travel before impact</li>
              <li><strong>Witness statements:</strong> Who was in correct lane</li>
              <li><strong>Vehicle damage:</strong> Impact points indicate fault</li>
              <li><strong>Traffic cameras:</strong> Video evidence when available</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Wrongful Death Claims</h2>
            <p className="text-gray-700 mb-6">
              Many head-on collisions result in death. Surviving family members can pursue wrongful death claims for:
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Economic Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Loss of financial support and income</li>
              <li>Loss of benefits and inheritance</li>
              <li>Funeral and burial expenses</li>
              <li>Medical bills before death</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Non-Economic Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Loss of companionship and love</li>
              <li>Loss of consortium for spouse</li>
              <li>Loss of guidance for children</li>
              <li>Mental anguish and grief</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Head-On Collision Representation</h3>
              <p className="text-gray-700 mb-6">
                Head-on collisions cause the most devastating injuries and losses. Our firm has successfully represented numerous clients and families affected by frontal impact crashes throughout California, securing maximum compensation for these catastrophic accidents.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default HeadOnCollisions;
