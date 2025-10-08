import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const ScaffoldingAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Scaffolding Accident Claims in California: Fall Protection Failures | Trembach Law"
        description="Understanding scaffolding collapse liability, fall protection, and contractor responsibility. Expert legal representation for scaffolding accidents from Trembach Law."
        keywords="scaffolding accident, scaffold collapse, construction fall, OSHA violation, fall protection, California construction law, scaffolding injury attorney"
        canonical="https://www.trembachlawfirm.com/blog/scaffolding-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
            alt="Scaffolding accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Scaffolding Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 29, 2025
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
              Scaffolding accidents are among the most serious construction injuries, often resulting in catastrophic harm or death. When scaffolding collapses or workers fall due to inadequate safety measures, multiple parties may be liable for resulting injuries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Scaffolding Accidents</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Scaffold collapses:</strong> Entire structure failing</li>
              <li><strong>Falls from scaffolding:</strong> Workers falling to ground</li>
              <li><strong>Falling objects:</strong> Materials dropping from scaffold</li>
              <li><strong>Plank failures:</strong> Walking surfaces breaking</li>
              <li><strong>Tip-overs:</strong> Unstable scaffolding tipping</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">OSHA Scaffolding Requirements</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Proper design:</strong> Engineered for loads</li>
              <li><strong>Guardrails required:</strong> Fall protection at heights</li>
              <li><strong>Stable foundation:</strong> Level and solid base</li>
              <li><strong>Regular inspections:</strong> Before each work shift</li>
              <li><strong>Competent person:</strong> Qualified supervisor on site</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Potentially Liable Parties</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>General contractors:</strong> Site safety responsibility</li>
              <li><strong>Scaffolding companies:</strong> Rental and setup</li>
              <li><strong>Subcontractors:</strong> Erected or modified scaffold</li>
              <li><strong>Property owners:</strong> Dangerous conditions</li>
              <li><strong>Manufacturers:</strong> Defective equipment</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Scaffolding Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Scaffolding accidents cause devastating injuries requiring maximum compensation. Our firm has successfully represented numerous construction workers injured in scaffold collapses and falls throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="scaffolding-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ScaffoldingAccidents;
