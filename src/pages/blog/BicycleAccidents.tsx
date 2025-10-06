import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const BicycleAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Bicycle Accident Claims in California: Protecting Cyclists' Rights | Trembach Law"
        description="Understanding bicycle accident laws, cyclist rights, common causes of bike crashes, and how to recover compensation. Expert legal representation from Trembach Law Firm."
        keywords="bicycle accident, bike crash, cyclist injury, bike lane laws, California bicycle law, cyclist rights, bicycle accident attorney"
        canonical="https://www.trembachlawfirm.com/blog/bicycle-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1571333250630-f0230c1e6d6e?auto=format&fit=crop&q=80"
            alt="Bicycle accident legal protection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bicycle Accident Claims in California: Protecting Cyclists' Rights
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 26, 2025
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
              Bicycle accidents with motor vehicles often result in severe injuries to cyclists. California law provides important protections for bicyclists, but navigating the legal process after an accident requires understanding your rights and the evidence needed to prove your case.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Bicycle Laws and Cyclist Rights</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Same Rights and Responsibilities</h3>
            <p className="text-gray-700 mb-6">
              Under California Vehicle Code, bicyclists have the same rights and responsibilities as motor vehicle drivers:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Right to use public roadways (except freeways)</li>
              <li>Must obey all traffic signals and signs</li>
              <li>Must ride in same direction as traffic</li>
              <li>Required to use bike lanes where provided</li>
              <li>Must signal turns and stops</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Three-Foot Passing Rule</h3>
            <p className="text-gray-700 mb-6">
              California Vehicle Code Section 21760 requires drivers to:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Leave at least three feet of space when passing a cyclist</li>
              <li>Slow down and only pass when safe if three feet isn't possible</li>
              <li>Wait until safe to pass rather than squeezing by</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Bicycle Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dooring Accidents</h3>
            <p className="text-gray-700 mb-6">
              One of the most common and dangerous bicycle accidents occurs when:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Driver or passenger opens car door into path of cyclist</li>
              <li>Cyclist has no time to avoid collision</li>
              <li>Results in cyclist hitting door or swerving into traffic</li>
              <li>Often causes serious injuries even at low speeds</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Right Hook Accidents</h3>
            <p className="text-gray-700 mb-6">
              Occurs when a vehicle passes a cyclist then immediately turns right:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Driver fails to yield to cyclist in bike lane</li>
              <li>Vehicle cuts across cyclist's path</li>
              <li>Common at intersections and driveways</li>
              <li>Driver may not check mirror before turning</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Bicycle Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Bicycle accident cases require attorneys who understand cycling, traffic laws affecting cyclists, and how to counter driver bias against bicyclists. Our firm has successfully represented numerous injured cyclists throughout California.
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

export default BicycleAccidents;
