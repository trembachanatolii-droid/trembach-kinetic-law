import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const SeatBeltDefects = () => {
  const currentCategory = 'Product Liability';
  
  return (
    <>
      <SEO 
        title="Seat Belt Defect Claims in California: Safety System Failures | Trembach Law"
        description="Understanding seat belt failures, inertial unlatching, and manufacturer liability. Expert legal representation for seat belt defect injuries from Trembach Law."
        keywords="seat belt defect, seat belt failure, inertial unlatching, seat belt unbuckling, defective restraint, product liability, seat belt defect attorney"
        canonical="https://www.trembachlawfirm.com/blog/seat-belt-defects"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
            alt="Seat belt defect legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Seat Belt Defect Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 29, 2025
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
              Seat belts are the most important safety feature in vehicles, preventing ejection and reducing injury severity. When defective seat belts fail during crashes, occupants suffer catastrophic injuries or death. Understanding seat belt defect liability is crucial for obtaining compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Seat Belt Defects</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Inertial Unlatching</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Buckle releases:</strong> Latch opens during crash forces</li>
              <li><strong>Design flaw:</strong> Buckle not strong enough</li>
              <li><strong>Common in rollovers:</strong> Particularly dangerous</li>
              <li><strong>Ejection risk:</strong> Occupant thrown from vehicle</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Webbing Failures</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tearing:</strong> Fabric rips under load</li>
              <li><strong>Fraying:</strong> Deteriorated from age or wear</li>
              <li><strong>Manufacturing defects:</strong> Weak stitching or materials</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Anchor Failures</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Anchor pulls out:</strong> Mounting point fails</li>
              <li><strong>Improper installation:</strong> Not adequately secured</li>
              <li><strong>Weak attachment points:</strong> Design inadequacy</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Injuries from Seat Belt Failures</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ejection Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Complete ejection:</strong> Thrown entirely from vehicle</li>
              <li><strong>Partial ejection:</strong> Body partly outside vehicle</li>
              <li><strong>Run over by own vehicle:</strong> Vehicle rolls over occupant</li>
              <li><strong>Extreme trauma:</strong> Often fatal</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Enhanced Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Head injuries:</strong> Striking interior or being ejected</li>
              <li><strong>Spinal cord damage:</strong> Unrestrained movement in crash</li>
              <li><strong>Multiple trauma:</strong> Tumbling inside vehicle</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Product Liability Claims</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Crashworthiness Doctrine</h3>
            <p className="text-gray-700 mb-6">
              Even if another driver caused the crash, manufacturers liable if defective seat belt enhanced injuries:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Two causes:</strong> Both other driver and defect responsible</li>
              <li><strong>Manufacturer pays for enhanced injury:</strong> Additional harm from defect</li>
              <li><strong>Separate claims:</strong> Against both other driver and manufacturer</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Seat Belt Defect Representation</h3>
              <p className="text-gray-700 mb-6">
                Seat belt defect cases require proving the safety system failed and enhanced injuries. Our firm has successfully represented numerous victims of seat belt failures throughout California, holding manufacturers accountable.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="seat-belt-defects" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default SeatBeltDefects;
