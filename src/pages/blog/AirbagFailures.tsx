import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const AirbagFailures = () => {
  const currentCategory = 'Product Liability';
  
  return (
    <>
      <SEO 
        title="Airbag Failure Claims in California: Defective Safety Systems | Trembach Law"
        description="Understanding airbag defects, non-deployment, and manufacturer liability. Expert legal representation for airbag failure injuries from Trembach Law Firm."
        keywords="airbag failure, airbag defect, airbag didn't deploy, Takata recall, airbag injury, product liability, airbag defect attorney"
        canonical="https://www.trembachlawfirm.com/blog/airbag-failures"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80"
            alt="Airbag failure legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Airbag Failure Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                11 min read
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
              Airbags are designed to save lives in crashes, but when they fail to deploy or deploy improperly, they can cause catastrophic injuries. Understanding your rights when airbag defects contribute to injuries is essential for pursuing compensation from manufacturers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Airbag Defects</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Failure to Deploy</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>No deployment:</strong> Airbag doesn't inflate during crash</li>
              <li><strong>Sensor failures:</strong> Impact sensors don't trigger deployment</li>
              <li><strong>Electrical problems:</strong> Wiring or computer failures</li>
              <li><strong>Design flaws:</strong> System not sensitive enough</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Improper Deployment</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Late deployment:</strong> Inflates after occupant already struck interior</li>
              <li><strong>Partial deployment:</strong> Doesn't fully inflate</li>
              <li><strong>Inadvertent deployment:</strong> Deploys without crash</li>
              <li><strong>Excessive force:</strong> Deploys with too much power</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dangerous Deployment</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Metal shrapnel:</strong> Inflator ruptures sending metal fragments</li>
              <li><strong>Chemical burns:</strong> Propellant chemicals injuring occupants</li>
              <li><strong>Defective inflators:</strong> Takata airbag recalls</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Takata Airbag Scandal</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Largest auto recall ever:</strong> Tens of millions of vehicles</li>
              <li><strong>Metal shrapnel injuries:</strong> Exploding inflators</li>
              <li><strong>Deaths and severe injuries:</strong> Hundreds injured worldwide</li>
              <li><strong>Criminal charges:</strong> Company pled guilty to fraud</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Injuries from Airbag Failures</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Non-Deployment Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Head trauma:</strong> Striking steering wheel or dashboard</li>
              <li><strong>Facial injuries:</strong> No cushioning for face</li>
              <li><strong>Chest injuries:</strong> Steering wheel impact</li>
              <li><strong>Severe injuries that airbag would have prevented</strong></li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Defective Deployment Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Shrapnel wounds:</strong> Metal fragments in face and body</li>
              <li><strong>Eye injuries:</strong> Blinding from fragments or force</li>
              <li><strong>Burns:</strong> Chemical or thermal burns</li>
              <li><strong>Broken bones:</strong> Excessive deployment force</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Product Liability for Airbag Defects</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strict Liability</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Manufacturer responsible:</strong> For design or manufacturing defects</li>
              <li><strong>No negligence proof needed:</strong> Only that product was defective</li>
              <li><strong>Foreseeable use:</strong> Used as intended</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Multiple Defendants</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Airbag manufacturer:</strong> Company that made airbag system</li>
              <li><strong>Vehicle manufacturer:</strong> Car company that installed it</li>
              <li><strong>Parts suppliers:</strong> Component manufacturers</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Airbag Defect</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Critical Evidence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Vehicle preservation:</strong> Don't allow vehicle to be destroyed</li>
              <li><strong>Airbag module:</strong> Preserve entire system</li>
              <li><strong>Crash data:</strong> Event data recorder information</li>
              <li><strong>Photos:</strong> Document non-deployment or improper deployment</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Expert Analysis</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Airbag experts:</strong> Analyze system failure</li>
              <li><strong>Engineers:</strong> Design defect analysis</li>
              <li><strong>Accident reconstruction:</strong> Show defect caused enhanced injury</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Airbag Failure Representation</h3>
              <p className="text-gray-700 mb-6">
                Airbag defect cases require attorneys with resources to take on major auto manufacturers. Our firm has successfully represented numerous victims of airbag failures throughout California, holding manufacturers accountable for defective safety systems.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="airbag-failures" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default AirbagFailures;
