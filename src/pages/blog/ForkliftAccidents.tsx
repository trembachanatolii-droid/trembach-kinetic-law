import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const ForkliftAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Forklift Accident Claims in California: Workplace Safety Violations | Trembach Law"
        description="Understanding forklift accident liability, OSHA violations, and third-party claims. Expert legal representation for forklift injuries from Trembach Law Firm."
        keywords="forklift accident, warehouse injury, forklift crush, OSHA violation, workplace safety, California forklift law, forklift injury attorney"
        canonical="https://www.trembachlawfirm.com/blog/forklift-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80"
            alt="Forklift accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Forklift Accident Claims in California
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
              Forklift accidents cause some of the most serious workplace injuries. When safety protocols are ignored or equipment is defective, workers and bystanders face devastating consequences. Understanding your rights beyond workers' compensation is essential for full recovery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Forklift Accidents</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tip-overs:</strong> Forklift overturns crushing operator</li>
              <li><strong>Struck by forklift:</strong> Pedestrians hit by moving equipment</li>
              <li><strong>Falling loads:</strong> Materials falling from forks</li>
              <li><strong>Pinch points:</strong> Crushed between forklift and objects</li>
              <li><strong>Falls from forks:</strong> Workers riding on forks</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Liability Beyond Workers' Comp</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Equipment Manufacturers</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Design defects:</strong> Unstable forklift design</li>
              <li><strong>Manufacturing defects:</strong> Brake or steering failures</li>
              <li><strong>Inadequate safety features:</strong> Missing rollover protection</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Maintenance Companies</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Negligent repairs:</strong> Improper maintenance</li>
              <li><strong>Failure to identify defects:</strong> Missed safety issues</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Forklift Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Forklift accidents require pursuing third-party claims beyond workers' compensation. Our firm has successfully represented numerous forklift accident victims throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="forklift-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ForkliftAccidents;
