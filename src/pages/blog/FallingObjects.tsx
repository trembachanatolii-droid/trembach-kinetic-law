import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const FallingObjects = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Falling Object Accident Claims in California: Struck-By Injuries | Trembach Law"
        description="Understanding falling object liability, construction site safety, and compensation for struck-by injuries. Expert legal representation from Trembach Law."
        keywords="falling object, struck by object, construction falling debris, head injury, California construction law, falling object attorney"
        canonical="https://www.trembachlawfirm.com/blog/falling-objects"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
            alt="Falling object accident legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Falling Object Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 28, 2025
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
              Being struck by falling objects is a leading cause of construction site fatalities and serious injuries. When tools, materials, or debris fall from heights, the results can be catastrophic. Understanding liability for falling object accidents is essential for obtaining full compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Falling Object Scenarios</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tools dropped from heights:</strong> Equipment falling from scaffolds or roofs</li>
              <li><strong>Material storage:</strong> Improperly stacked materials falling</li>
              <li><strong>Crane loads:</strong> Items falling from crane operations</li>
              <li><strong>Building debris:</strong> Materials falling during demolition</li>
              <li><strong>Unsecured objects:</strong> Items not properly fastened</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Catastrophic Injuries</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Traumatic brain injuries:</strong> Head impacts</li>
              <li><strong>Skull fractures:</strong> Severe head trauma</li>
              <li><strong>Spinal cord injuries:</strong> Back and neck injuries</li>
              <li><strong>Crush injuries:</strong> Heavy objects causing severe trauma</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Third-Party Liability</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>General contractors:</strong> Overall site safety</li>
              <li><strong>Subcontractors:</strong> Failed to secure materials</li>
              <li><strong>Property owners:</strong> Dangerous conditions</li>
              <li><strong>Equipment suppliers:</strong> Defective storage systems</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Falling Object Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Falling object cases require identifying all responsible parties and proving safety violations. Our firm has successfully represented numerous struck-by accident victims throughout California.
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

export default FallingObjects;
