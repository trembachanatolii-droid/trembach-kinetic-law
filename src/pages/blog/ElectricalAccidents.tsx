import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const ElectricalAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Electrical Accident Claims in California: Electrocution Injury Rights | Trembach Law"
        description="Understanding electrical injury liability, electrocution damages, and contractor responsibility. Expert legal representation from Trembach Law Firm."
        keywords="electrical accident, electrocution injury, electrical burn, shock injury, OSHA electrical, California electrical law, electrocution attorney"
        canonical="https://www.trembachlawfirm.com/blog/electrical-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80"
            alt="Electrical accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Electrical Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 26, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                11 min read
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
              Electrical accidents cause some of the most severe and permanent injuries. From construction sites to residential properties, when electrical hazards cause electrocution or severe burns, multiple parties may be liable for catastrophic damages.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Electrical Injuries</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Electrocution:</strong> Fatal electrical shock</li>
              <li><strong>Electric shock:</strong> Non-fatal electrical contact</li>
              <li><strong>Arc flash burns:</strong> Thermal burns from electrical arcs</li>
              <li><strong>Contact burns:</strong> Direct contact with electrical source</li>
              <li><strong>Falls from shock:</strong> Losing balance after electrical contact</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Exposed wiring:</strong> Unprotected electrical conductors</li>
              <li><strong>Overhead power lines:</strong> Contact with high-voltage lines</li>
              <li><strong>Defective equipment:</strong> Faulty electrical tools or devices</li>
              <li><strong>Improper grounding:</strong> Inadequate electrical grounding</li>
              <li><strong>Water contact:</strong> Electrical equipment near water</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Liability</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Property owners:</strong> Dangerous electrical conditions</li>
              <li><strong>General contractors:</strong> Site safety failures</li>
              <li><strong>Electricians:</strong> Improper installations</li>
              <li><strong>Equipment manufacturers:</strong> Defective products</li>
              <li><strong>Utility companies:</strong> Power line maintenance failures</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Electrical Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Electrical injury cases require pursuing all liable parties and proving severe damages. Our firm has successfully represented numerous electrocution and electrical burn victims throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="electrical-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ElectricalAccidents;
