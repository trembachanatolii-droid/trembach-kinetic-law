import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const TrenchCollapse = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Trench Collapse Claims in California: Excavation Safety Failures | Trembach Law"
        description="Understanding trench collapse liability, cave-in injuries, and contractor responsibility. Expert legal representation for excavation accidents from Trembach Law."
        keywords="trench collapse, cave-in, excavation accident, trenching injury, OSHA excavation, California trench law, trench collapse attorney"
        canonical="https://www.trembachlawfirm.com/blog/trench-collapse"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80"
            alt="Trench collapse legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Trench Collapse Claims in California
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
              Trench collapses are among the deadliest construction accidents. When soil caves in on workers in excavations, they face crushing forces and suffocation. Despite clear OSHA regulations, trench collapses continue to kill and injure workers due to contractor negligence.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Deadly Nature of Trench Collapses</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Immediate burial:</strong> Workers trapped under tons of soil</li>
              <li><strong>Suffocation risk:</strong> Unable to breathe under weight</li>
              <li><strong>Crush injuries:</strong> Massive force on body</li>
              <li><strong>Difficult rescue:</strong> Hard to reach buried workers</li>
              <li><strong>High fatality rate:</strong> Often deadly</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">OSHA Trenching Requirements</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Protection required:</strong> For trenches 5+ feet deep</li>
              <li><strong>Sloping or shoring:</strong> Must use protective systems</li>
              <li><strong>Competent person:</strong> Qualified supervisor required</li>
              <li><strong>Daily inspections:</strong> Before workers enter</li>
              <li><strong>Exit access:</strong> Ladder within 25 feet</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Potentially Liable Parties</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>General contractors:</strong> Overall site safety</li>
              <li><strong>Excavation subcontractors:</strong> Trenching responsibility</li>
              <li><strong>Property owners:</strong> Dangerous conditions</li>
              <li><strong>Engineers:</strong> Improper soil analysis</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Trench Collapse Representation</h3>
              <p className="text-gray-700 mb-6">
                Trench collapse cases cause catastrophic injuries or death requiring maximum compensation. Our firm has successfully represented victims and families throughout California, holding negligent contractors accountable.
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

export default TrenchCollapse;
