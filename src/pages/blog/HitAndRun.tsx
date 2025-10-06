import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const HitAndRun = () => {
  const currentCategory = 'Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Hit and Run Accident Claims in California: Your Legal Options | Trembach Law"
        description="Understanding uninsured motorist coverage and compensation after hit-and-run accidents. Expert legal representation for hit-and-run victims from Trembach Law Firm."
        keywords="hit and run lawyer, uninsured motorist attorney, hit and run compensation, California hit and run claims, fleeing driver, phantom vehicle"
        canonical="https://www.trembachlawfirm.com/blog/hit-and-run"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80"
            alt="Police investigation and accident scene"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hit-and-Run Accidents: Protecting Your Rights When Drivers Flee
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                12 min read
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
              Being injured by a driver who flees the scene adds insult to injury. Understanding your legal options and insurance coverage is critical for recovering compensation when the at-fault driver disappears.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Is a Hit-and-Run?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hit-and-run occurs when a driver:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Leaves Without Stopping:</strong> Fails to stop after causing accident</li>
              <li><strong>Doesn't Provide Information:</strong> Flees without exchanging details</li>
              <li><strong>Fails to Help Injured:</strong> Leaves without rendering aid</li>
              <li><strong>Criminal Offense:</strong> Violates California Vehicle Code 20001-20004</li>
              <li><strong>Increased Penalties:</strong> Severe punishment if injuries or death occurred</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Hit-and-Run Statistics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The problem is widespread:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Frequency:</strong> Over 700,000 hit-and-run crashes annually in the U.S.</li>
              <li><strong>California Numbers:</strong> Thousands of hit-and-run accidents yearly</li>
              <li><strong>Solve Rate:</strong> Only about 10% of cases result in finding the driver</li>
              <li><strong>Peak Times:</strong> More common at night and on weekends</li>
              <li><strong>Common Reasons:</strong> DUI, uninsured, suspended license, warrants</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Hit-and-Run Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hit-and-runs take various forms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Rear-End Collision:</strong> Driver hits you from behind and flees</li>
              <li><strong>Side-Swipe:</strong> Driver merges into you and leaves</li>
              <li><strong>Pedestrian/Cyclist:</strong> Driver strikes pedestrian or cyclist and flees</li>
              <li><strong>Parked Vehicle:</strong> Driver damages unoccupied parked car</li>
              <li><strong>Phantom Vehicle:</strong> Causes accident without direct contact (forcing you off road)</li>
              <li><strong>Multi-Vehicle:</strong> Chain reaction where initial at-fault driver flees</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Immediate Steps After Hit-and-Run</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Critical actions to take:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Call 911:</strong> Report accident immediately to police and get medical help</li>
              <li><strong>Note Vehicle Details:</strong> License plate, make, model, color, damage, direction fled</li>
              <li><strong>Driver Description:</strong> Gender, age, clothing, distinguishing features</li>
              <li><strong>Take Photos:</strong> Scene, your vehicle damage, debris, skid marks</li>
              <li><strong>Find Witnesses:</strong> Get names and contact information</li>
              <li><strong>Look for Cameras:</strong> Traffic cameras, business security footage</li>
              <li><strong>Check for Evidence:</strong> Paint transfer, vehicle parts left behind</li>
              <li><strong>Don't Pursue:</strong> Never chase the fleeing driver</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Police Investigation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Law enforcement will:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>File Police Report:</strong> Official documentation required for insurance claim</li>
              <li><strong>Search for Driver:</strong> Using your description and evidence</li>
              <li><strong>Review Surveillance:</strong> Checking traffic and security cameras</li>
              <li><strong>Canvass Area:</strong> Looking for witnesses or additional evidence</li>
              <li><strong>Check DMV Records:</strong> If partial plate number obtained</li>
              <li><strong>Issue BOLO:</strong> Be On the Look Out alert for matching vehicles</li>
              <li><strong>Crime Scene Processing:</strong> Collecting paint, glass, or part evidence</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Uninsured Motorist Coverage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your primary recovery option:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>UM Coverage:</strong> Covers hit-and-run as "uninsured motorist"</li>
              <li><strong>Coverage Limits:</strong> Up to your policy's UM limits</li>
              <li><strong>Stacking:</strong> May be able to combine coverage from multiple vehicles</li>
              <li><strong>Bodily Injury:</strong> Medical bills, lost wages, pain and suffering</li>
              <li><strong>Property Damage:</strong> Vehicle repairs (if you have UM property damage)</li>
              <li><strong>No Deductible:</strong> UM coverage typically has no deductible for hit-and-run</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Collision Coverage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              For vehicle damage:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Repairs Your Vehicle:</strong> Pays to fix your car</li>
              <li><strong>Deductible Applies:</strong> You pay deductible first</li>
              <li><strong>Faster Payment:</strong> Quicker than waiting for driver to be found</li>
              <li><strong>May Waive Deductible:</strong> If driver is later identified and convicted</li>
              <li><strong>Supplemental to UM:</strong> Doesn't cover injuries, only property</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">MedPay Coverage</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Additional medical coverage:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Payments:</strong> Pays medical bills regardless of fault</li>
              <li><strong>Quick Payment:</strong> Faster than UM claim</li>
              <li><strong>Limited Amount:</strong> Usually $1,000-$10,000</li>
              <li><strong>No Fault Required:</strong> Doesn't matter who caused accident</li>
              <li><strong>Covers Passengers:</strong> Medical bills for anyone in your vehicle</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">If the Driver Is Found</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Additional recovery options:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Their Insurance:</strong> File claim against at-fault driver's policy</li>
              <li><strong>Personal Lawsuit:</strong> Sue driver directly for damages</li>
              <li><strong>Criminal Restitution:</strong> Court may order driver to pay damages</li>
              <li><strong>Punitive Damages:</strong> May be available for fleeing the scene</li>
              <li><strong>Subrogation:</strong> Your insurer may seek reimbursement</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Phantom Vehicle Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When vehicle causes accident without contact:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Definition:</strong> Vehicle forces you to crash without hitting you</li>
              <li><strong>UM Coverage Applies:</strong> If witnessed by non-occupant</li>
              <li><strong>Witness Required:</strong> Someone other than you or your passengers</li>
              <li><strong>Corroborating Evidence:</strong> Dash cam, traffic camera footage helpful</li>
              <li><strong>Police Report:</strong> Critical for establishing phantom vehicle</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance Company Challenges</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your own insurer may dispute claim:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Questioning If Hit-and-Run:</strong> Suggesting you know the driver</li>
              <li><strong>Phantom Vehicle Denial:</strong> Claiming no independent witness</li>
              <li><strong>Policy Exclusions:</strong> Arguing coverage doesn't apply</li>
              <li><strong>Low Valuation:</strong> Undervaluing injuries and damages</li>
              <li><strong>Delay Tactics:</strong> Hoping you'll settle for less</li>
              <li><strong>Investigation Demands:</strong> Requiring extensive proof</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Evidence to Gather</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strengthen your claim with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Police Report:</strong> Official record of hit-and-run</li>
              <li><strong>Photos/Video:</strong> Scene, damage, injuries</li>
              <li><strong>Witness Statements:</strong> Written or recorded accounts</li>
              <li><strong>Surveillance Footage:</strong> Traffic or security cameras</li>
              <li><strong>Medical Records:</strong> All treatment documentation</li>
              <li><strong>Repair Estimates:</strong> Vehicle damage assessment</li>
              <li><strong>Lost Wage Documentation:</strong> Time off work</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Rewards and Assistance Programs</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Help finding the driver:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Crime Stoppers:</strong> Rewards for information leading to arrest</li>
              <li><strong>News Media:</strong> Publicizing accident to find witnesses</li>
              <li><strong>Social Media:</strong> Community groups sharing information</li>
              <li><strong>Private Investigators:</strong> Hired to locate driver</li>
              <li><strong>Surveillance Canvassing:</strong> Checking area cameras</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Crime Victim Compensation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              State assistance available:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>CalVCP Program:</strong> Compensation for crime victims</li>
              <li><strong>Medical Expenses:</strong> Up to $70,000 for treatment</li>
              <li><strong>Lost Wages:</strong> Income replacement assistance</li>
              <li><strong>Funeral Expenses:</strong> In wrongful death cases</li>
              <li><strong>Mental Health:</strong> Counseling and therapy coverage</li>
              <li><strong>Application Deadline:</strong> Must file within three years</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation in Hit-and-Run Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Victims may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> All treatment and future care</li>
              <li><strong>Lost Wages:</strong> Income lost during recovery</li>
              <li><strong>Lost Earning Capacity:</strong> If permanent limitations</li>
              <li><strong>Property Damage:</strong> Vehicle repairs or replacement</li>
              <li><strong>Pain and Suffering:</strong> Physical pain and emotional distress</li>
              <li><strong>Emotional Distress:</strong> Trauma from being victimized</li>
              <li><strong>Punitive Damages:</strong> If driver found, for fleeing scene</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time Limits for Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Important deadlines:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Insurance Claim:</strong> Report to your insurer immediately</li>
              <li><strong>UM Claim Notification:</strong> Usually within reasonable time</li>
              <li><strong>Lawsuit Filing:</strong> Two years from accident date</li>
              <li><strong>Crime Victim Compensation:</strong> Three years from incident</li>
              <li><strong>If Driver Found Later:</strong> New deadline from discovery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Legal Representation Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hit-and-run cases require attorneys who:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Understand UM coverage and policy requirements</li>
              <li>Know how to investigate and find evidence</li>
              <li>Work with police and investigators</li>
              <li>Fight insurance company denials</li>
              <li>Maximize all available coverage sources</li>
              <li>Navigate crime victim compensation programs</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Hit-and-Run Representation</h3>
              <p className="text-gray-700 mb-6">
                Hit-and-run accidents require navigating complex insurance coverage and investigation challenges. Our firm fights to maximize recovery from all available sources and holds fleeing drivers accountable when found.
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

export default HitAndRun;
