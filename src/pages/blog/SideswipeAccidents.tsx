import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const SideswipeAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Sideswipe Accident Claims in California: Lane Change Liability | Trembach Law"
        description="Understanding sideswipe collision liability, unsafe lane changes, and proving fault. Expert legal representation for sideswipe accidents from Trembach Law."
        keywords="sideswipe accident, lane change accident, side collision, California traffic law, unsafe lane change, sideswipe crash attorney"
        canonical="https://www.trembachlawfirm.com/blog/sideswipe-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80"
            alt="Sideswipe accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sideswipe Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 25, 2025
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
              Sideswipe accidents occur when the sides of two parallel vehicles make contact, typically during lane changes or merges. While they may seem minor, sideswipes can cause significant vehicle damage, injuries, and complex liability disputes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Sideswipe Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Unsafe Lane Changes</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Failure to check blind spots:</strong> Not seeing adjacent vehicle</li>
              <li><strong>No turn signal:</strong> Not warning other drivers</li>
              <li><strong>Sudden lane changes:</strong> Cutting across lanes quickly</li>
              <li><strong>Drifting between lanes:</strong> Not staying centered</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Merging Errors</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Merging without sufficient space</li>
              <li>Not yielding to through traffic</li>
              <li>Misjudging speed of other vehicles</li>
              <li>Forced merges at lane endings</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Distracted Driving</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Cell phone use:</strong> Eyes off road during lane change</li>
              <li><strong>Not paying attention:</strong> Drifting into adjacent lane</li>
              <li><strong>Passenger distraction:</strong> Looking away from road</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Lane Change Laws</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vehicle Code Requirements</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Safe lane change (VC 22107):</strong> Must be made safely and with signal</li>
              <li><strong>Signal requirement (VC 22108):</strong> Must signal at least 100 feet before turn</li>
              <li><strong>Unsafe movement (VC 22107):</strong> Can't move unless safe</li>
              <li><strong>Keeping right (VC 21650):</strong> Drive in rightmost lane except passing</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Determining Fault in Sideswipe Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Generally At-Fault Party</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Driver changing lanes:</strong> Usually at fault</li>
              <li><strong>Merging driver:</strong> Must yield to through traffic</li>
              <li><strong>Duty to ensure safety:</strong> Responsibility to check before moving</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exceptions and Shared Fault</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Both changing lanes:</strong> Both may share liability</li>
              <li><strong>Speeding in blind spot:</strong> Some fault for speeding driver</li>
              <li><strong>Drifting over line:</strong> Driver straddling lanes may be liable</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Evidence in Sideswipe Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Damage Pattern Analysis</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Scrape marks:</strong> Direction and angle of contact</li>
              <li><strong>Paint transfer:</strong> Which vehicle contacted which</li>
              <li><strong>Impact location:</strong> Front, middle, or rear of vehicle</li>
              <li><strong>Damage severity:</strong> Force and speed indications</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Witness Statements</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Which vehicle crossed lane line</li>
              <li>Whether signals were used</li>
              <li>Speed and positioning before contact</li>
              <li>Observations of driver behavior</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skilled Sideswipe Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Sideswipe accidents often involve disputes over who changed lanes and who had the right of way. Our firm has successfully represented numerous clients in sideswipe collision cases throughout California.
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

export default SideswipeAccidents;
