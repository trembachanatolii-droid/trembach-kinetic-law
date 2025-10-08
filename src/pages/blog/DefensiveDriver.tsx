import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const DefensiveDriver = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Defensive Driver Accidents in California: When Caution Isn't Enough | Trembach Law"
        description="Understanding liability when defensive driving can't prevent accidents caused by others. Expert legal representation for cautious drivers from Trembach Law."
        keywords="defensive driving accident, careful driver, unavoidable accident, sudden emergency, California driving law, defensive driver attorney"
        canonical="https://www.trembachlawfirm.com/blog/defensive-driver-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80"
            alt="Defensive driving legal guidance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              When Defensive Driving Isn't Enough
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 27, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                9 min read
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
              Even the most careful, defensive drivers can't prevent all accidents. When another driver's negligence causes a crash despite your best efforts to avoid it, understanding your rights and proving the other driver's fault is essential for obtaining fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What is Defensive Driving?</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Anticipating hazards:</strong> Watching for potential dangers</li>
              <li><strong>Maintaining safe distances:</strong> Following at safe intervals</li>
              <li><strong>Adjusting for conditions:</strong> Slowing in bad weather</li>
              <li><strong>Watching other drivers:</strong> Monitoring traffic around you</li>
              <li><strong>Having escape routes:</strong> Planning ways to avoid crashes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When Defensive Driving Can't Prevent Crashes</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Unavoidable Situations</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Sudden lane changes:</strong> Driver cuts you off without warning</li>
              <li><strong>Running red lights:</strong> No time to react to violation</li>
              <li><strong>Wrong-way drivers:</strong> Head-on collision unavoidable</li>
              <li><strong>Drunk drivers:</strong> Erratic, unpredictable behavior</li>
              <li><strong>Mechanical failures:</strong> Other vehicle loses control</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving You Were Not at Fault</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Evidence of Defensive Driving</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Safe speed:</strong> You were driving appropriately</li>
              <li><strong>Proper lane position:</strong> In correct lane</li>
              <li><strong>Following distance:</strong> Adequate space from vehicles</li>
              <li><strong>Attention to road:</strong> Not distracted</li>
              <li><strong>Evasive action:</strong> Attempted to avoid collision</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Witness Testimony</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Other drivers confirming your safe driving</li>
              <li>Witnesses seeing other driver's violations</li>
              <li>Observations of your attempt to avoid crash</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Comparative Negligence Defense</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Insurance Company Tactics</h3>
            <p className="text-gray-700 mb-6">
              Even when clearly at fault, insurers try to shift some blame:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>"You could have avoided it":</strong> Claiming defensive driving would have prevented crash</li>
              <li><strong>Speed arguments:</strong> Suggesting you were going too fast</li>
              <li><strong>Following distance:</strong> Claiming you were too close</li>
              <li><strong>Distraction allegations:</strong> Suggesting you weren't paying attention</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Countering These Arguments</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Evidence showing you had no time to react</li>
              <li>Expert testimony on reaction times</li>
              <li>Physics showing collision unavoidable</li>
              <li>Proving other driver's sudden, unexpected action</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Protecting Careful Drivers' Rights</h3>
              <p className="text-gray-700 mb-6">
                Insurance companies shouldn't blame defensive drivers for unavoidable accidents. Our firm has successfully represented numerous careful drivers throughout California, proving that despite their best efforts, the other driver's negligence caused the crash.
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
              <RelatedPosts posts={blogPosts} currentCategory={currentCategory} currentPostId="defensive-driver-accidents" />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default DefensiveDriver;
