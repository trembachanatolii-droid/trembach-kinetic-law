import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const CellTowerAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Cell Tower Accident Claims in California: Telecommunications Worker Safety | Trembach Law"
        description="Understanding cell tower fall liability, climbing safety, and contractor responsibility. Expert legal representation for tower climbing accidents from Trembach Law."
        keywords="cell tower accident, tower climbing fall, telecommunications injury, OSHA violation, fall protection, California tower law, tower accident attorney"
        canonical="https://www.trembachlawfirm.com/blog/cell-tower-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
            alt="Cell tower accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Cell Tower Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 25, 2025
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
              Cell tower climbing is one of the most dangerous jobs in America. When safety protocols are ignored or equipment fails, tower climbers suffer catastrophic falls. Understanding third-party liability beyond workers' compensation is essential for maximum recovery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Extreme Danger of Tower Climbing</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Heights exceeding 1,000 feet:</strong> Extreme fall distances</li>
              <li><strong>Weather exposure:</strong> Wind, ice, lightning</li>
              <li><strong>Heavy equipment:</strong> Carrying tools and materials</li>
              <li><strong>Fatigue:</strong> Long climbs requiring stamina</li>
              <li><strong>One of deadliest jobs:</strong> High fatality rate</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Tower Accidents</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Fall protection failures:</strong> Harness or anchor failures</li>
              <li><strong>Inadequate training:</strong> Workers not properly trained</li>
              <li><strong>Structural failures:</strong> Tower collapse or component failure</li>
              <li><strong>Equipment defects:</strong> Defective climbing gear</li>
              <li><strong>Electrical hazards:</strong> Electrocution from power lines</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Potentially Liable Third Parties</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tower owners:</strong> Dangerous tower conditions</li>
              <li><strong>General contractors:</strong> Site safety responsibility</li>
              <li><strong>Equipment manufacturers:</strong> Defective safety gear</li>
              <li><strong>Training companies:</strong> Inadequate instruction</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Cell Tower Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Cell tower accidents cause catastrophic injuries requiring substantial compensation. Our firm has successfully represented tower climbers and their families throughout California, pursuing all liable parties.
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

export default CellTowerAccidents;
