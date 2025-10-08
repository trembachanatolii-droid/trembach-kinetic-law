import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const LeftTurnAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Left Turn Accident Claims in California: Right-of-Way Violations | Trembach Law"
        description="Understanding left turn liability, right-of-way rules, and proving fault. Expert legal representation for left turn accidents from Trembach Law Firm."
        keywords="left turn accident, turning collision, yield violation, California left turn law, intersection accident, left turn liability attorney"
        canonical="https://www.trembachlawfirm.com/blog/left-turn-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?auto=format&fit=crop&q=80"
            alt="Left turn accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Left Turn Accident Claims in California
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
              Left turn accidents are among the most common intersection collisions. When a turning vehicle fails to yield to oncoming traffic, serious crashes result. Understanding liability in left turn accidents is essential for protecting your rights and obtaining fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Left Turn Laws</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Vehicle Code Section 21801</h3>
            <p className="text-gray-700 mb-6">
              Turning driver must yield to oncoming traffic:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Must yield right-of-way:</strong> To vehicles approaching from opposite direction</li>
              <li><strong>Only turn when safe:</strong> When can be made with reasonable safety</li>
              <li><strong>Clear intersection required:</strong> Must be able to complete turn safely</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Presumption of Fault</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Turning driver usually at fault:</strong> Violated yield requirement</li>
              <li><strong>Burden on turner:</strong> Must prove they had right-of-way</li>
              <li><strong>Strong cases:</strong> Clear liability in most situations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Left Turn Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Misjudging Speed and Distance</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Oncoming vehicle closer:</strong> Than turner thought</li>
              <li><strong>Speed misjudgment:</strong> Oncoming vehicle faster than estimated</li>
              <li><strong>Gap too small:</strong> Insufficient time to complete turn</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Signal Timing Issues</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Yellow light turns:</strong> Racing to beat red light</li>
              <li><strong>Stale green light:</strong> Turning on old green signal</li>
              <li><strong>Arrow expiration:</strong> Protected phase ends</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Exceptions to Turner Liability</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When Straight Driver May Be at Fault</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Running red light:</strong> Straight driver entered on red</li>
              <li><strong>Excessive speed:</strong> Going far over speed limit</li>
              <li><strong>Protected left turn:</strong> Turner had green arrow</li>
              <li><strong>DUI:</strong> Straight driver impaired</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skilled Left Turn Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Left turn accidents often involve clear liability but insurance companies still fight these claims. Our firm has successfully represented numerous clients in left turn collision cases throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="left-turn-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default LeftTurnAccidents;
