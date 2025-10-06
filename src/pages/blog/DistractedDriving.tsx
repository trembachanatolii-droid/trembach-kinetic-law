import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const DistractedDriving = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Distracted Driving Accidents in California: Proving Negligence | Trembach Law"
        description="Understanding distracted driving laws, types of distractions, and how to prove cell phone use caused your accident. Expert legal representation from Trembach Law."
        keywords="distracted driving, texting while driving, cell phone accident, California hands-free law, driver distraction, phone records, distracted driver attorney"
        canonical="https://www.trembachlawfirm.com/blog/distracted-driving"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1532191761053-986b7e97096e?auto=format&fit=crop&q=80"
            alt="Distracted driving accident prevention"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Distracted Driving Accidents: Proving Negligence in California
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
              Distracted driving is one of the leading causes of accidents in California. With smartphones, navigation systems, and countless other distractions, drivers are taking their attention off the road more than ever, causing devastating crashes.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Scope of the Problem</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Distracted driving kills approximately 3,000 people annually nationwide</li>
              <li>Nearly 400,000 people are injured in distracted driving crashes each year</li>
              <li>Texting while driving increases crash risk by 23 times</li>
              <li>Sending or reading a text takes eyes off road for 5 seconds - at 55 mph, that's like driving the length of a football field blind</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Driver Distractions</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Visual Distractions</h3>
            <p className="text-gray-700 mb-6">Taking eyes off the road:</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Looking at phone (texting, social media, emails)</li>
              <li>Checking navigation or GPS</li>
              <li>Looking at passengers</li>
              <li>Rubbernecking at accidents or other roadside events</li>
              <li>Adjusting controls or radio</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Manual Distractions</h3>
            <p className="text-gray-700 mb-6">Taking hands off the wheel:</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Holding and using cell phone</li>
              <li>Eating or drinking</li>
              <li>Reaching for objects</li>
              <li>Grooming (makeup, shaving)</li>
              <li>Adjusting climate controls or radio</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cognitive Distractions</h3>
            <p className="text-gray-700 mb-6">Taking mind off driving:</p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Talking on phone (even hands-free)</li>
              <li>Conversations with passengers</li>
              <li>Daydreaming or being lost in thought</li>
              <li>Emotional distress or stress</li>
              <li>Road rage or aggressive driving</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California's Distracted Driving Laws</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hands-Free Law (Vehicle Code 23123.5)</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Handheld phone ban:</strong> Illegal to hold phone while driving</li>
              <li><strong>Touch allowed:</strong> Single swipe or tap to activate voice-operated functions</li>
              <li><strong>Mounting required:</strong> Phone must be mounted, not held</li>
              <li><strong>Age restrictions:</strong> Drivers under 18 cannot use phone at all, even hands-free</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Texting Ban (Vehicle Code 23123)</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Prohibited to write, send, or read text messages while driving</li>
              <li>Includes emails, social media, and any text-based communication</li>
              <li>Emergency exceptions allowed</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Distracted Driving in Accident Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cell Phone Records</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Call logs:</strong> Time and duration of calls</li>
              <li><strong>Text message records:</strong> Sent/received times</li>
              <li><strong>Data usage:</strong> App activity, internet browsing</li>
              <li><strong>Subpoena process:</strong> Attorney can obtain through legal discovery</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Witness Testimony</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Other drivers who saw distracted behavior</li>
              <li>Passengers in at-fault vehicle</li>
              <li>Pedestrians or bystanders</li>
              <li>Your own observations before impact</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Physical Evidence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Phone location:</strong> Found in driver's hand or lap after crash</li>
              <li><strong>Social media posts:</strong> Posted at or near time of accident</li>
              <li><strong>Admission by driver:</strong> Statements made at scene</li>
              <li><strong>Citation issued:</strong> Ticket for phone use violation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Distracted Driving Cases Are Valuable</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Clear Negligence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Violating distracted driving laws is negligence per se</li>
              <li>Makes liability easier to establish</li>
              <li>Strong foundation for settlement negotiations</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Punitive Damages Potential</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Distracted driving can be considered reckless</li>
              <li>Particularly if repeated behavior or extreme circumstances</li>
              <li>Punitive damages punish defendant and deter future conduct</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Distracted Driving Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Proving distracted driving requires knowing how to obtain phone records, subpoena carriers, and present compelling evidence. Our firm has successfully handled numerous distracted driving cases throughout California.
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

export default DistractedDriving;
