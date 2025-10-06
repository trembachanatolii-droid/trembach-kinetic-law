import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const MachineryAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Machinery Accident Claims in California: Industrial Equipment Injuries | Trembach Law"
        description="Understanding industrial machinery liability, safety guard failures, and manufacturer responsibility. Expert legal representation from Trembach Law Firm."
        keywords="machinery accident, industrial equipment injury, caught in machine, machine guard failure, OSHA violation, California machinery law, machinery injury attorney"
        canonical="https://www.trembachlawfirm.com/blog/machinery-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
            alt="Machinery accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Machinery Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 27, 2025
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
              Industrial machinery accidents cause catastrophic injuries including amputations, crush injuries, and death. When safety guards are missing or equipment is defective, workers suffer preventable harm. Understanding third-party liability is essential for maximum recovery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Machinery Accidents</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Caught in machinery:</strong> Body parts pulled into equipment</li>
              <li><strong>Crush injuries:</strong> Compressed between machine parts</li>
              <li><strong>Amputations:</strong> Severed fingers, hands, arms, legs</li>
              <li><strong>Struck by moving parts:</strong> Hit by machine components</li>
              <li><strong>Ejected materials:</strong> Objects thrown from machines</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">OSHA Machine Guarding Requirements</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Guards required:</strong> Moving parts must be protected</li>
              <li><strong>Point of operation:</strong> Where work is performed must be guarded</li>
              <li><strong>Emergency stops:</strong> Accessible shut-off controls</li>
              <li><strong>Lockout/tagout:</strong> Procedures for maintenance</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Product Liability Claims</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Equipment manufacturers:</strong> Design or manufacturing defects</li>
              <li><strong>Missing guards:</strong> Inadequate safety features</li>
              <li><strong>Failure to warn:</strong> Insufficient warnings</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Machinery Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Machinery accidents cause devastating injuries requiring substantial compensation. Our firm has successfully represented numerous industrial workers injured by dangerous equipment throughout California.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="machinery-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default MachineryAccidents;
