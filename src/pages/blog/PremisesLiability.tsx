import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const PremisesLiability = () => {
  const currentCategory = 'Premises Liability';
  
  return (
    <>
      <SEO 
        title="Premises Liability Claims: Property Owner Responsibilities in California | Trembach Law"
        description="Understanding property owner duties, dangerous conditions, and your rights after injuries on someone else's property. Expert premises liability representation from Trembach Law Firm."
        keywords="premises liability, property owner negligence, slip and fall, dangerous property, California injury law, property accident attorney"
        canonical="https://www.trembachlawfirm.com/blog/premises-liability"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
            alt="Premises liability and property safety"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premises Liability Claims: Property Owner Responsibilities
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                January 3, 2026
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
              Property owners in California have a legal duty to maintain safe conditions for visitors. When they fail in this duty and someone is injured, they may be held liable through a premises liability claim.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Premises Liability?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Premises liability law holds property owners and occupiers responsible for accidents and injuries that occur on their property due to unsafe conditions.
            </p>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Premises Liability Representation</h3>
              <p className="text-gray-700 mb-6">
                Property owners and their insurance companies often deny responsibility for accidents on their property. Our attorneys thoroughly investigate premises liability claims and fight for full compensation.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0051D5] transition-all shadow-lg hover:shadow-xl"
              >
                Free Case Evaluation
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

export default PremisesLiability;