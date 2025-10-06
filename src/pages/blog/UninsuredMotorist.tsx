import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const UninsuredMotorist = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Uninsured Motorist Claims in California: Protecting Your Recovery | Trembach Law"
        description="What to do when an at-fault driver has no insurance. Understanding uninsured and underinsured motorist coverage and how to maximize your recovery in California."
        keywords="uninsured motorist, underinsured motorist, UM UIM coverage, no insurance accident, California insurance law, uninsured driver accident"
        canonical="https://www.trembachlawfirm.com/blog/uninsured-motorist"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
            alt="Uninsured motorist insurance claims"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Uninsured Motorist Claims: Protecting Your Recovery
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 28, 2025
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
              Getting hit by an uninsured or underinsured driver can be devastating. While California requires all drivers to carry insurance, many don't comply. Understanding your uninsured/underinsured motorist coverage is crucial for protecting yourself financially.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Uninsured Driver Problem in California</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Statistics</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Approximately 16% of California drivers are uninsured</li>
              <li>That's roughly 1 in 6 drivers on the road without insurance</li>
              <li>Many more carry only minimum liability limits ($15,000/$30,000)</li>
              <li>Severe injuries often exceed these minimum limits</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Why Drivers Don't Have Insurance</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Cost:</strong> Can't afford insurance premiums</li>
              <li><strong>Lapses:</strong> Missed payments causing policy cancellation</li>
              <li><strong>Deliberate avoidance:</strong> Knowingly driving without coverage</li>
              <li><strong>Suspended licenses:</strong> Can't legally get insurance</li>
              <li><strong>New residents:</strong> Haven't obtained California insurance yet</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Understanding UM/UIM Coverage</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Uninsured Motorist (UM) Coverage</h3>
            <p className="text-gray-700 mb-6">
              Protects you when hit by a driver who:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Has no insurance at all</li>
              <li>Has a fraudulent or invalid policy</li>
              <li>Flees the scene (hit and run)</li>
              <li>Cannot be identified</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Underinsured Motorist (UIM) Coverage</h3>
            <p className="text-gray-700 mb-6">
              Protects you when the at-fault driver:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Has insurance but insufficient limits to cover your damages</li>
              <li>Example: Driver has $15,000 policy but your damages are $100,000</li>
              <li>Your UIM coverage makes up the difference (minus what you received)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">California Requirements</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Insurance companies must offer UM/UIM coverage</li>
              <li>Must be equal to your liability limits unless you reject it in writing</li>
              <li>Most policies automatically include it</li>
              <li>You can decline it but must do so explicitly</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How UM/UIM Claims Work</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Filing a Claim</h3>
            <p className="text-gray-700 mb-6">
              When you're hit by an uninsured/underinsured driver:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Notify your insurer immediately:</strong> Prompt notice is required</li>
              <li><strong>Provide documentation:</strong> Police report, medical records, bills</li>
              <li><strong>Prove other driver's fault:</strong> Must establish liability</li>
              <li><strong>Document damages:</strong> All injuries and losses</li>
              <li><strong>Cooperate with investigation:</strong> Provide statements and records</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Stacking vs. Non-Stacking</h3>
            <p className="text-gray-700 mb-6">
              California is a "non-stacking" state, meaning:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>You can only collect from one UM/UIM policy per accident</li>
              <li>Can't add together limits from multiple vehicles you insure</li>
              <li>Exception: Different policies from different insurers may stack</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Settlement Process</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Claim with at-fault driver first:</strong> Exhaust their coverage</li>
              <li><strong>Then claim UIM if insufficient:</strong> File with your insurer</li>
              <li><strong>Negotiate with your insurer:</strong> They'll evaluate your claim</li>
              <li><strong>Arbitration if needed:</strong> Binding arbitration often required</li>
              <li><strong>Litigation as last resort:</strong> Suing your own insurance company</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Challenges in UM/UIM Claims</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Insurer Becomes the Adversary</h3>
            <p className="text-gray-700 mb-6">
              Unlike typical claims against another driver's insurance:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>You're claiming against your own insurance company</li>
              <li>They have financial incentive to minimize payment</li>
              <li>May dispute fault, causation, or damages</li>
              <li>Can hire investigators and experts against you</li>
              <li>Relationship with company can become adversarial</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Proving the Other Driver's Fault</h3>
            <p className="text-gray-700 mb-6">
              You must prove the uninsured driver was at fault:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Police report is crucial evidence</li>
              <li>Witness statements are important</li>
              <li>Physical evidence from scene</li>
              <li>Your insurer may dispute liability</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Valuation Disputes</h3>
            <p className="text-gray-700 mb-6">
              Your insurance company may challenge:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Medical necessity:</strong> Whether treatment was reasonable</li>
              <li><strong>Causation:</strong> Whether injuries resulted from accident</li>
              <li><strong>Pre-existing conditions:</strong> Claiming prior injuries responsible</li>
              <li><strong>Damages amount:</strong> Disputing value of pain and suffering</li>
              <li><strong>Lost wages:</strong> Questioning time off work</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Policy Interpretation Issues</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Disputes over policy limits and terms</li>
              <li>Coordination with other coverage</li>
              <li>Exclusions and limitations</li>
              <li>Whether coverage applies to specific circumstances</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hit and Run Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What to Do Immediately</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Call 911:</strong> Report to police immediately</li>
              <li><strong>Try to identify vehicle:</strong> License plate, make, model, color</li>
              <li><strong>Look for witnesses:</strong> Get contact information</li>
              <li><strong>Document scene:</strong> Photos, damage, location</li>
              <li><strong>Check for cameras:</strong> Traffic cams, business surveillance</li>
              <li><strong>Don't leave scene:</strong> Wait for police to arrive</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Police Report Requirements</h3>
            <p className="text-gray-700 mb-6">
              For UM coverage to apply in hit and run cases:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Must report to police or DMV within 24 hours</li>
              <li>Failure to report can void coverage</li>
              <li>Police report creates official record</li>
              <li>Report number needed for insurance claim</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Maximizing Your UM/UIM Recovery</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Document Everything</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Medical treatment:</strong> All visits, tests, procedures</li>
              <li><strong>Medical bills:</strong> Every expense related to injuries</li>
              <li><strong>Lost wages:</strong> Pay stubs, employer letters</li>
              <li><strong>Property damage:</strong> Vehicle damage, repair estimates</li>
              <li><strong>Impact on life:</strong> Journal of pain, limitations, emotional effects</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Don't Rush Settlement</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Wait until maximum medical improvement</li>
              <li>Understand full extent of injuries</li>
              <li>Know if future treatment will be needed</li>
              <li>Can't reopen claim after settling</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Consider All Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Past and future medical expenses</li>
              <li>Past and future lost income</li>
              <li>Loss of earning capacity</li>
              <li>Pain and suffering</li>
              <li>Emotional distress</li>
              <li>Loss of enjoyment of life</li>
              <li>Scarring and disfigurement</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">When You Need an Attorney</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Complex Situations Requiring Legal Help</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Serious injuries:</strong> Significant damages at stake</li>
              <li><strong>Disputed liability:</strong> Insurer denies at-fault driver was negligent</li>
              <li><strong>Low settlement offers:</strong> Insurer offering far less than damages</li>
              <li><strong>Bad faith:</strong> Insurer acting unreasonably</li>
              <li><strong>Arbitration proceedings:</strong> Formal dispute resolution required</li>
              <li><strong>Multiple policies:</strong> Coordination issues</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How Attorneys Help</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Properly value your claim</li>
              <li>Gather and present evidence effectively</li>
              <li>Negotiate with insurance company</li>
              <li>Handle arbitration proceedings</li>
              <li>File lawsuit if necessary</li>
              <li>Protect you from bad faith practices</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert UM/UIM Claim Representation</h3>
              <p className="text-gray-700 mb-6">
                Uninsured and underinsured motorist claims require attorneys who understand insurance law and aren't intimidated by insurance companies. Our firm has successfully handled numerous UM/UIM claims, recovering maximum compensation for clients throughout California.
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

export default UninsuredMotorist;
