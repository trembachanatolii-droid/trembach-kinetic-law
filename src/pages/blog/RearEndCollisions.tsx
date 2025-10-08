import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const RearEndCollisions = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Rear-End Collision Claims in California: Liability and Recovery | Trembach Law"
        description="Understanding rear-end accident liability, common injuries like whiplash, and maximizing your compensation. Expert legal representation from Trembach Law Firm."
        keywords="rear-end collision, rear-end accident, following too close, whiplash injury, California accident law, rear-end crash attorney"
        canonical="https://www.trembachlawfirm.com/blog/rear-end-collisions"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1550565118-3a14e8d0386f?auto=format&fit=crop&q=80"
            alt="Rear-end collision legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Rear-End Collision Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                10 min read
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
              Rear-end collisions are among the most common types of car accidents in California. While they may seem straightforward, these accidents can cause serious injuries and involve complex liability questions, especially in chain-reaction crashes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Rear-End Collision Statistics</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Rear-end collisions account for approximately 29% of all crashes</li>
              <li>They cause over 2,000 deaths and 950,000 injuries annually nationwide</li>
              <li>Most common cause of whiplash injuries</li>
              <li>Can occur at any speed, from parking lots to freeways</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Presumption of Liability</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Following Too Closely</h3>
            <p className="text-gray-700 mb-6">
              California Vehicle Code Section 21703 requires drivers to maintain a safe following distance. Rear-end crashes create a legal presumption that the rear driver violated this law:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Rear driver presumed at fault:</strong> Burden shifts to them to prove otherwise</li>
              <li><strong>Must maintain safe distance:</strong> Enough space to stop safely</li>
              <li><strong>Three-second rule:</strong> General guideline for safe following</li>
              <li><strong>Conditions matter:</strong> More distance needed in rain, fog, heavy traffic</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Exceptions to Rear Driver Liability</h3>
            <p className="text-gray-700 mb-6">
              The front driver may share fault if they:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Suddenly reversed without warning</li>
              <li>Had non-functioning brake lights</li>
              <li>Made an abrupt, unreasonable stop</li>
              <li>Pulled out in front of rear vehicle without enough space</li>
              <li>Were engaged in "brake checking" (intentionally stopping short)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Rear-End Collisions</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Distracted Driving</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Cell phone use:</strong> Texting, calling, navigation</li>
              <li><strong>Not watching road:</strong> Looking at passengers, adjusting controls</li>
              <li><strong>Eating or drinking:</strong> Taking hands off wheel, eyes off road</li>
              <li><strong>Daydreaming:</strong> Not paying attention to traffic</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Tailgating</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Following too close for conditions</li>
              <li>Aggressive driving behavior</li>
              <li>No time to react when front vehicle stops</li>
              <li>More severe impacts at higher speeds</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Driver Impairment</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Drunk or drugged driving:</strong> Reduced reaction time</li>
              <li><strong>Drowsy driving:</strong> Delayed responses, microsleeps</li>
              <li><strong>Medication effects:</strong> Impaired judgment or awareness</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Rear-End Collision Injuries</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Whiplash and Neck Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Whiplash:</strong> Soft tissue injury from head whipping forward and back</li>
              <li><strong>Cervical strain:</strong> Muscle and ligament damage</li>
              <li><strong>Herniated discs:</strong> Disc damage in cervical spine</li>
              <li><strong>Delayed symptoms:</strong> May not appear for days after crash</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Back and Spine Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Lumbar strain:</strong> Lower back muscle injuries</li>
              <li><strong>Disc herniation:</strong> Bulging or ruptured discs</li>
              <li><strong>Spinal cord damage:</strong> Can cause permanent disability</li>
              <li><strong>Compression fractures:</strong> Vertebrae damage</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Head Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Concussions:</strong> From head striking headrest or windshield</li>
              <li><strong>Traumatic brain injury:</strong> More severe head trauma</li>
              <li><strong>Facial injuries:</strong> Impact with steering wheel or airbag</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chain-Reaction Collisions</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Multiple Vehicle Crashes</h3>
            <p className="text-gray-700 mb-6">
              When one rear-end collision causes additional impacts:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Vehicle A strikes Vehicle B, pushing it into Vehicle C</li>
              <li>Common in heavy traffic or at red lights</li>
              <li>Can involve many vehicles in pile-ups</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Determining Liability</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Initial impact driver:</strong> Usually primarily responsible</li>
              <li><strong>Multiple at-fault drivers:</strong> Each following driver may share fault</li>
              <li><strong>Pushed vehicles:</strong> Generally not liable for secondary impacts</li>
              <li><strong>Complex investigation:</strong> Requires reconstruction and analysis</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance Company Tactics</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Defense Strategies</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Minimal impact:</strong> Claiming low-speed impact couldn't cause injury</li>
              <li><strong>Pre-existing conditions:</strong> Blaming prior injuries</li>
              <li><strong>Delayed treatment:</strong> Questioning why you didn't seek immediate care</li>
              <li><strong>Comparative fault:</strong> Trying to shift some blame to you</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Rear-End Collision Representation</h3>
              <p className="text-gray-700 mb-6">
                While rear-end collisions may seem simple, insurance companies often fight hard to minimize payouts. Our firm has successfully handled numerous rear-end collision cases throughout California, securing full compensation for our clients.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="rear-end-collisions" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default RearEndCollisions;
