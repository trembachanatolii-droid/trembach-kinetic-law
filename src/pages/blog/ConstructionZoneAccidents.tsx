import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const ConstructionZoneAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Construction Zone Accident Claims in California: Work Zone Safety | Trembach Law"
        description="Understanding construction zone accident liability, work zone safety, and contractor responsibility. Expert legal representation from Trembach Law Firm."
        keywords="construction zone accident, work zone crash, road construction accident, California construction zone law, work zone safety attorney"
        canonical="https://www.trembachlawfirm.com/blog/construction-zone-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
            alt="Construction zone accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Construction Zone Accident Claims in California
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
              Construction zones create hazardous driving conditions with lane shifts, reduced speed limits, and workers on the roadway. When inadequate safety measures cause accidents, multiple parties may be liable beyond just negligent drivers.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Construction Zone Hazards</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Lane shifts:</strong> Sudden changes in traffic patterns</li>
              <li><strong>Narrow lanes:</strong> Reduced lane widths</li>
              <li><strong>Uneven surfaces:</strong> Pavement transitions</li>
              <li><strong>Reduced visibility:</strong> Barriers and equipment</li>
              <li><strong>Workers on roadway:</strong> People near traffic</li>
              <li><strong>Confusion:</strong> Unclear signage or markings</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Potentially Liable Parties</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Construction Companies</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Inadequate signage:</strong> Insufficient warning signs</li>
              <li><strong>Poor traffic control:</strong> Improper lane closures</li>
              <li><strong>Equipment placement:</strong> Blocking sight lines</li>
              <li><strong>Unsafe work zone design:</strong> Dangerous setup</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Government Entities</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Approval of unsafe plans:</strong> Permitted dangerous design</li>
              <li><strong>Inadequate oversight:</strong> Failed to ensure compliance</li>
              <li><strong>Dangerous conditions:</strong> Created or allowed hazards</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Negligent Drivers</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Speeding:</strong> Exceeding reduced speed limits</li>
              <li><strong>Following too closely:</strong> Inadequate distance for conditions</li>
              <li><strong>Distraction:</strong> Not paying attention to changing conditions</li>
              <li><strong>Ignoring signs:</strong> Failing to follow work zone warnings</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Enhanced Penalties for Work Zone Violations</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Doubled fines:</strong> Traffic violations in construction zones</li>
              <li><strong>Higher insurance impact:</strong> More severe consequences</li>
              <li><strong>Negligence per se:</strong> Violations establish fault</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Construction Zone Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Construction zone accidents may involve multiple liable parties beyond just other drivers. Our firm has successfully represented numerous clients injured in work zone crashes throughout California, pursuing all responsible parties.
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

export default ConstructionZoneAccidents;
