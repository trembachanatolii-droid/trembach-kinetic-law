import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const DrunkDriving = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Drunk Driving Accident Claims in California: Your Rights | Trembach Law"
        description="Understanding DUI accident liability, punitive damages, and how to maximize recovery when injured by an intoxicated driver. Expert legal representation from Trembach Law."
        keywords="drunk driving accident, DUI crash, impaired driver, alcohol-related accident, California DUI law, punitive damages, drunk driver attorney"
        canonical="https://www.trembachlawfirm.com/blog/drunk-driving-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80"
            alt="Drunk driving accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Drunk Driving Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 27, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                13 min read
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
              Drunk driving accidents cause thousands of injuries and deaths in California each year. When you're injured by an intoxicated driver, you have strong legal rights including the potential for punitive damages to punish the drunk driver's reckless behavior.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Devastating Impact of Drunk Driving</h2>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Nearly 10,000 people die annually in alcohol-impaired driving crashes nationwide</li>
              <li>One person dies every 52 minutes in a drunk driving crash</li>
              <li>Drunk driving costs the United States $44 billion annually</li>
              <li>In California, approximately 1,000 people die each year in DUI-related crashes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California DUI Laws</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Blood Alcohol Content (BAC) Limits</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>0.08% or higher:</strong> Illegal for drivers 21 and over</li>
              <li><strong>0.04% or higher:</strong> Illegal for commercial drivers</li>
              <li><strong>0.01% or higher:</strong> Illegal for drivers under 21 (zero tolerance)</li>
              <li><strong>Any amount:</strong> Illegal if impaired regardless of BAC</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Criminal Penalties</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>First offense:</strong> Up to 6 months jail, fines, license suspension</li>
              <li><strong>Second offense:</strong> Up to 1 year jail, mandatory jail time</li>
              <li><strong>Third offense:</strong> Up to 1 year jail, longer suspension</li>
              <li><strong>DUI causing injury:</strong> Felony with prison time</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Civil Liability for Drunk Driving Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Negligence Per Se</h3>
            <p className="text-gray-700 mb-6">
              Driving under the influence violates California law, establishing negligence per se:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>DUI is automatically negligent conduct</li>
              <li>No need to prove driver was careless</li>
              <li>Only need to show DUI caused the accident</li>
              <li>Strong foundation for liability</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Punitive Damages</h3>
            <p className="text-gray-700 mb-6">
              Drunk driving cases are prime candidates for punitive damages:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Purpose:</strong> Punish drunk driver and deter future conduct</li>
              <li><strong>Standard:</strong> Must show oppression, fraud, or malice</li>
              <li><strong>Conscious disregard:</strong> Drunk driving demonstrates willful disregard for safety</li>
              <li><strong>No caps:</strong> Unlike some states, California doesn't cap punitive damages</li>
              <li><strong>Substantial awards:</strong> Can significantly increase total recovery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Dram Shop Liability</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When Bars and Restaurants Are Liable</h3>
            <p className="text-gray-700 mb-6">
              California's dram shop law (Business & Professions Code Section 25602.1) holds alcohol vendors liable when they:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Serve minors:</strong> Selling alcohol to anyone under 21</li>
              <li><strong>Obviously intoxicated:</strong> Serving someone who is clearly drunk</li>
              <li><strong>Proximate cause:</strong> Service must have contributed to accident</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Social Host Liability</h3>
            <p className="text-gray-700 mb-6">
              Private hosts can be liable for:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Providing alcohol to minors who then cause accidents</li>
              <li>Knowing guest was intoxicated and likely to drive</li>
              <li>Limited liability compared to commercial vendors</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving the Driver Was Intoxicated</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Chemical Test Results</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Blood test:</strong> Most accurate BAC measurement</li>
              <li><strong>Breath test:</strong> Breathalyzer results</li>
              <li><strong>Refusal:</strong> Refusal to test can be used as evidence</li>
              <li><strong>Medical records:</strong> Hospital blood tests</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Field Sobriety Tests</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Walk-and-turn test results</li>
              <li>One-leg stand performance</li>
              <li>Horizontal gaze nystagmus test</li>
              <li>Officer observations of impairment</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Physical Signs of Intoxication</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Slurred speech</li>
              <li>Bloodshot eyes</li>
              <li>Odor of alcohol</li>
              <li>Unsteady gait</li>
              <li>Confusion or disorientation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Maximizing Recovery in DUI Accident Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Multiple Sources of Compensation</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Drunk driver's insurance:</strong> Primary source</li>
              <li><strong>Bar or restaurant:</strong> If over-served</li>
              <li><strong>Your UM/UIM coverage:</strong> If driver uninsured or underinsured</li>
              <li><strong>Punitive damages:</strong> From drunk driver personally</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Enhanced Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Higher settlements:</strong> Insurance companies know juries are harsh on drunk drivers</li>
              <li><strong>Jury appeal:</strong> Strong cases for trial if needed</li>
              <li><strong>Public outrage:</strong> Drunk driving generates sympathy for victims</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Relationship Between Criminal and Civil Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Criminal Case</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Prosecuted by district attorney</li>
              <li>Purpose is to punish driver</li>
              <li>Victim has limited role</li>
              <li>No financial recovery for victim</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Civil Case</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Filed by victim's attorney</li>
              <li>Purpose is to compensate victim</li>
              <li>You control the case</li>
              <li>Seeks monetary damages</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Criminal Case Helps Civil Case</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>DUI conviction:</strong> Conclusive proof of negligence</li>
              <li><strong>BAC evidence:</strong> Chemical test results</li>
              <li><strong>Police reports:</strong> Officer observations and findings</li>
              <li><strong>Plea agreement:</strong> Admission to driving impaired</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Drunk Driving Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Drunk driving cases require attorneys who know how to pursue maximum compensation including punitive damages. Our firm has successfully represented numerous victims of drunk driving accidents throughout California, securing substantial recoveries.
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

export default DrunkDriving;
