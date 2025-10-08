import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const RoadRage = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Road Rage Accident Claims in California: Aggressive Driving Liability | Trembach Law"
        description="Understanding road rage liability, punitive damages, and criminal versus civil cases. Expert legal representation for aggressive driving accidents from Trembach Law."
        keywords="road rage, aggressive driving, intentional assault, California road rage law, punitive damages, assault with vehicle, road rage attorney"
        canonical="https://www.trembachlawfirm.com/blog/road-rage-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80"
            alt="Road rage accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Road Rage Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 25, 2025
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
              Road rage incidents have become increasingly common and dangerous on California roads. When aggressive driving escalates into violence or intentional collisions, victims have strong legal rights including potential punitive damages against the aggressor.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding Road Rage</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Definition and Scope</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Aggressive driving:</strong> Traffic violations endangering others</li>
              <li><strong>Road rage:</strong> Assault with vehicle or physical attack</li>
              <li><strong>Intentional acts:</strong> Deliberate dangerous behavior</li>
              <li><strong>Escalating situations:</strong> Minor incidents turning violent</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Road Rage Behaviors</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Tailgating:</strong> Following dangerously close</li>
              <li><strong>Brake checking:</strong> Sudden stops to intimidate</li>
              <li><strong>Forcing off road:</strong> Pushing vehicle onto shoulder</li>
              <li><strong>Ramming:</strong> Intentionally striking vehicle</li>
              <li><strong>Assault:</strong> Physical attacks after stopping</li>
              <li><strong>Threatening gestures:</strong> Hostile behavior and threats</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Criminal vs. Civil Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Criminal Prosecution</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Assault with deadly weapon:</strong> Using vehicle as weapon</li>
              <li><strong>Reckless driving:</strong> Willful disregard for safety</li>
              <li><strong>Battery:</strong> Physical contact or harm</li>
              <li><strong>Criminal threats:</strong> Threatening serious harm</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Civil Lawsuit</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Separate from criminal case:</strong> Independent proceedings</li>
              <li><strong>Purpose:</strong> Obtain financial compensation</li>
              <li><strong>Lower burden of proof:</strong> Preponderance of evidence</li>
              <li><strong>You control case:</strong> Your attorney represents you</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Punitive Damages in Road Rage Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">When Punitive Damages Apply</h3>
            <p className="text-gray-700 mb-6">
              Road rage cases are strong candidates for punitive damages:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Intentional conduct:</strong> Deliberate dangerous acts</li>
              <li><strong>Malice:</strong> Intent to harm or reckless disregard</li>
              <li><strong>Oppression:</strong> Despicable conduct subjecting to hardship</li>
              <li><strong>Outrageous behavior:</strong> Extreme and shocking conduct</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Purpose of Punitive Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Punishment:</strong> Penalize outrageous conduct</li>
              <li><strong>Deterrence:</strong> Discourage future incidents</li>
              <li><strong>No caps:</strong> California doesn't limit punitive awards</li>
              <li><strong>Substantial awards:</strong> Can significantly increase recovery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Road Rage</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Critical Evidence</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Dashcam footage:</strong> Video of aggressive behavior</li>
              <li><strong>Witness statements:</strong> Other drivers who saw incident</li>
              <li><strong>911 calls:</strong> Reports of aggressive driver</li>
              <li><strong>Police reports:</strong> Officer observations and arrests</li>
              <li><strong>Social media:</strong> Defendant's posts about incident</li>
              <li><strong>Criminal conviction:</strong> Assault or reckless driving conviction</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance Coverage Issues</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intentional Acts Exclusion</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Insurance may deny coverage:</strong> For intentional acts</li>
              <li><strong>Pursuing driver personally:</strong> May need to go after assets</li>
              <li><strong>Your UM coverage:</strong> May apply if attacker uninsured</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Preventing Road Rage Escalation</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">If Confronted</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Don't engage:</strong> Avoid eye contact and gestures</li>
              <li><strong>Let them pass:</strong> Slow down and give space</li>
              <li><strong>Drive to safe location:</strong> Police station or busy area</li>
              <li><strong>Call 911:</strong> Report aggressive driver</li>
              <li><strong>Stay in vehicle:</strong> Doors locked, windows up</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Aggressive Road Rage Representation</h3>
              <p className="text-gray-700 mb-6">
                Road rage cases require attorneys who understand both civil injury claims and criminal assault prosecution. Our firm has successfully represented numerous road rage victims throughout California, securing substantial compensation including punitive damages.
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

export default RoadRage;
