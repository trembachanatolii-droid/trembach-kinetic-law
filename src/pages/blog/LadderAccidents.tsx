import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const LadderAccidents = () => {
  const currentCategory = 'Premises Liability';
  
  return (
    <>
      <SEO 
        title="Ladder Accident Claims in California: Fall Injury Liability | Trembach Law"
        description="Understanding ladder fall liability, defective equipment, and premises responsibility. Expert legal representation for ladder accidents from Trembach Law Firm."
        keywords="ladder accident, ladder fall, defective ladder, premises liability, fall injury, California ladder law, ladder injury attorney"
        canonical="https://www.trembachlawfirm.com/blog/ladder-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&q=80"
            alt="Ladder accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Ladder Accident Claims in California
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
              Ladder falls cause thousands of serious injuries annually. Whether from defective equipment, improper setup, or dangerous conditions, understanding liability in ladder accidents is essential for pursuing compensation beyond workers' compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Ladder Falls</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Ladder slipping:</strong> Unstable placement or surface</li>
              <li><strong>Rung failures:</strong> Breaking or bending rungs</li>
              <li><strong>Side rail failures:</strong> Rails collapsing</li>
              <li><strong>Overreaching:</strong> Losing balance while working</li>
              <li><strong>Improper angle:</strong> Ladder too steep or shallow</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Product Liability for Defective Ladders</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Design defects:</strong> Inadequate strength or stability</li>
              <li><strong>Manufacturing defects:</strong> Poor construction or materials</li>
              <li><strong>Warning defects:</strong> Insufficient safety warnings</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Premises Liability</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Property owners:</strong> Providing defective ladders</li>
              <li><strong>Dangerous conditions:</strong> Slippery or uneven surfaces</li>
              <li><strong>Inadequate lighting:</strong> Unable to see hazards</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Ladder Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Ladder fall cases require proving third-party liability beyond workers' comp. Our firm has successfully represented numerous ladder accident victims throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="ladder-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default LadderAccidents;
