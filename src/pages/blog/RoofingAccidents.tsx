import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const RoofingAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Roofing Accident Claims in California: Fall Protection Failures | Trembach Law"
        description="Understanding roofing fall liability, safety equipment failures, and contractor responsibility. Expert legal representation for roofing accidents from Trembach Law."
        keywords="roofing accident, roof fall, construction fall, fall protection, OSHA violation, California roofing law, roofing injury attorney"
        canonical="https://www.trembachlawfirm.com/blog/roofing-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80"
            alt="Roofing accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Roofing Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 24, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                10 min read
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
              Roofing is one of the most dangerous construction trades. Falls from roofs cause numerous deaths and catastrophic injuries each year. When contractors fail to provide proper fall protection, injured workers can pursue third-party claims for full compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Roofing Accidents</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Falls from roof edge:</strong> Stepping off or losing balance</li>
              <li><strong>Falling through roof:</strong> Weak or damaged roofing materials</li>
              <li><strong>Skylight falls:</strong> Stepping through skylights</li>
              <li><strong>Ladder accidents:</strong> Falls accessing roof</li>
              <li><strong>Slipping on surfaces:</strong> Wet or icy roofs</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">OSHA Fall Protection Requirements</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>6-foot rule:</strong> Protection required for heights over 6 feet</li>
              <li><strong>Guardrail systems:</strong> Physical barriers at roof edges</li>
              <li><strong>Safety net systems:</strong> Nets to catch falling workers</li>
              <li><strong>Personal fall arrest:</strong> Harnesses and anchor points</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Liability</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>General contractors:</strong> Failed to ensure fall protection</li>
              <li><strong>Property owners:</strong> Dangerous roof conditions</li>
              <li><strong>Equipment manufacturers:</strong> Defective fall protection gear</li>
              <li><strong>Other subcontractors:</strong> Created dangerous conditions</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Roofing Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Roofing fall cases require pursuing third-party liability beyond workers' compensation. Our firm has successfully represented numerous roofers injured in falls throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="roofing-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default RoofingAccidents;
