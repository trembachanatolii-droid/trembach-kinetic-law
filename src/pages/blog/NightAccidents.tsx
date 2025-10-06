import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const NightAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Nighttime Accident Claims in California: Visibility and Liability | Trembach Law"
        description="Understanding nighttime driving dangers, visibility issues, and establishing liability in after-dark crashes. Expert legal representation from Trembach Law."
        keywords="nighttime accident, night crash, visibility, headlight laws, dark accident, California night driving, nighttime collision attorney"
        canonical="https://www.trembachlawfirm.com/blog/nighttime-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1487622750296-6360190669a1?auto=format&fit=crop&q=80"
            alt="Nighttime accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Nighttime Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 24, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                9 min read
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
              Nighttime driving is significantly more dangerous than daytime travel. Reduced visibility, drowsy drivers, and impaired motorists combine to create deadly conditions. Understanding liability in nighttime accidents is crucial for obtaining fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Night Driving is More Dangerous</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Statistics</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Nearly 50% of traffic fatalities occur at night</li>
              <li>Only 25% of driving happens after dark</li>
              <li>Night driving is 3 times more deadly than day</li>
              <li>Weekend nights especially dangerous</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contributing Factors</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Reduced visibility:</strong> Can't see as far ahead</li>
              <li><strong>Drowsy driving:</strong> Fatigue peaks late at night</li>
              <li><strong>Impaired drivers:</strong> More drunk drivers on road</li>
              <li><strong>Depth perception:</strong> Harder to judge distances</li>
              <li><strong>Compromised vision:</strong> Many drivers have night vision problems</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Headlight and Visibility Laws</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When Headlights Required</h3>
            <p className="text-gray-700 mb-6">
              Vehicle Code Section 24400 requires headlights:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>30 minutes after sunset to 30 minutes before sunrise</strong></li>
              <li><strong>Poor visibility:</strong> Weather, fog, dust</li>
              <li><strong>Cannot see 1,000 feet:</strong> Insufficient illumination</li>
              <li><strong>High beams:</strong> Must dim within 500 feet of oncoming traffic</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Proper Equipment</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Both headlights must work</li>
              <li>Taillights must be visible</li>
              <li>Brake lights must function</li>
              <li>License plate must be illuminated</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Nighttime Accident Causes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Drowsy Driving</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Reaction time:</strong> Slower responses</li>
              <li><strong>Microsleeps:</strong> Brief losses of consciousness</li>
              <li><strong>Drifting:</strong> Leaving lane or roadway</li>
              <li><strong>Missing signals:</strong> Not seeing traffic controls</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Visibility Issues</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Broken headlights:</strong> Driving without proper lights</li>
              <li><strong>Dirty windshield:</strong> Smeared or dirty glass</li>
              <li><strong>Glare:</strong> Oncoming headlights blinding driver</li>
              <li><strong>Dark clothing:</strong> Pedestrians not visible</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Pedestrian and Cyclist Accidents at Night</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Heightened Danger</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Pedestrians much harder to see at night</li>
              <li>Cyclists often lack proper lights</li>
              <li>Drivers have less time to react</li>
              <li>More likely to be fatal</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Driver Responsibility</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Extra vigilance required:</strong> Must watch for pedestrians</li>
              <li><strong>Slow speeds:</strong> Drive slower in areas with foot traffic</li>
              <li><strong>High beam use:</strong> When appropriate to see further</li>
              <li><strong>Crosswalk attention:</strong> Watch marked crossing areas</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Nighttime Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Nighttime accidents often involve visibility and equipment issues. Our firm has successfully represented numerous clients injured in after-dark crashes throughout California, proving driver negligence despite challenging conditions.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="nighttime-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default NightAccidents;
