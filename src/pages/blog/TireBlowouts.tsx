import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const TireBlowouts = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Tire Blowout Accident Claims in California: Product Liability | Trembach Law"
        description="Understanding tire defect liability, tread separation, and manufacturer responsibility. Expert legal representation for tire blowout accidents from Trembach Law."
        keywords="tire blowout, tread separation, tire defect, product liability, tire failure, California tire law, tire blowout attorney"
        canonical="https://www.trembachlawfirm.com/blog/tire-blowouts"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80"
            alt="Tire blowout accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tire Blowout Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 26, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                10 min read
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
              Tire blowouts can cause drivers to lose control, resulting in devastating accidents. When defective tires or tread separation cause crashes, tire manufacturers can be held liable through product liability claims. Understanding your rights is essential for obtaining fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Causes of Tire Blowouts</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Manufacturing Defects</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tread separation:</strong> Tread layer detaching from tire</li>
              <li><strong>Belt separation:</strong> Steel belts separating internally</li>
              <li><strong>Sidewall defects:</strong> Weak or damaged sidewalls</li>
              <li><strong>Poor bonding:</strong> Inadequate adhesion between layers</li>
              <li><strong>Contamination:</strong> Foreign materials in rubber</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Design Defects</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Inadequate strength:</strong> Tire not strong enough for use</li>
              <li><strong>Improper materials:</strong> Substandard rubber compounds</li>
              <li><strong>Poor heat dissipation:</strong> Overheating causing failure</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Maintenance Issues</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Under-inflation:</strong> Low pressure causing excessive flexing</li>
              <li><strong>Over-inflation:</strong> Too much pressure stressing tire</li>
              <li><strong>Worn tread:</strong> Insufficient tread depth</li>
              <li><strong>Old age:</strong> Deterioration over time</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Product Liability Claims</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Strict Liability</h3>
            <p className="text-gray-700 mb-6">
              California imposes strict liability on tire manufacturers for defective products:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>No need to prove negligence:</strong> Only that tire was defective</li>
              <li><strong>Manufacturer responsible:</strong> For design or manufacturing flaws</li>
              <li><strong>Foreseeable use:</strong> Tire failed during normal use</li>
              <li><strong>Causation:</strong> Defect caused the accident</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Potentially Liable Parties</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tire manufacturer:</strong> Company that made tire</li>
              <li><strong>Distributor:</strong> Sold defective product</li>
              <li><strong>Retailer:</strong> Sold tire to consumer</li>
              <li><strong>Installer:</strong> If improperly installed</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Famous Tire Recalls</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Firestone/Ford Explorer:</strong> Massive tread separation recall</li>
              <li><strong>Multiple manufacturers:</strong> Ongoing tire safety issues</li>
              <li><strong>Known defects:</strong> Companies aware of problems</li>
              <li><strong>Failure to warn:</strong> Not alerting consumers</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Preserving Evidence</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Critical Steps</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Keep the tire:</strong> Don't discard failed tire</li>
              <li><strong>Photograph everything:</strong> All angles of tire and damage</li>
              <li><strong>Document DOT number:</strong> Manufacturing date code</li>
              <li><strong>Preserve tread:</strong> All pieces of separated tread</li>
              <li><strong>Vehicle inspection:</strong> Examine for other damage</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Expert Analysis Required</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tire experts:</strong> Analyze failure mechanisms</li>
              <li><strong>Metallurgists:</strong> Examine steel belt failures</li>
              <li><strong>Engineers:</strong> Design defect analysis</li>
              <li><strong>Accident reconstruction:</strong> Show tire caused crash</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Tire Blowout Representation</h3>
              <p className="text-gray-700 mb-6">
                Tire blowout cases require attorneys with resources to take on major manufacturers. Our firm has successfully represented numerous victims of tire failures throughout California, holding manufacturers accountable for defective products.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="tire-blowouts" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default TireBlowouts;
