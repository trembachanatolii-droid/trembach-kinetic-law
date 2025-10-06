import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const BicycleAccidents = () => {
  const currentCategory = 'Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Bicycle Accident Claims in California: Rights & Compensation | Trembach Law"
        description="Understanding cyclist rights, driver negligence, and compensation for bicycle accidents in California. Expert legal representation for injured cyclists from Trembach Law Firm."
        keywords="bicycle accident lawyer, cyclist injury attorney, bike accident compensation, California cycling laws, dooring accident, hit and run cyclist"
        canonical="https://www.trembachlawfirm.com/blog/bicycle-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80"
            alt="Bicycle safety and cyclist rights"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bicycle Accident Claims: Protecting Cyclist Rights
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
              Cyclists face unique dangers on California roads. When drivers fail to share the road safely, injured cyclists deserve full compensation for their losses.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Bicycle Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most bicycle accidents involve driver negligence:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Dooring:</strong> Drivers or passengers opening car doors into cyclist's path</li>
              <li><strong>Right Hook Turns:</strong> Drivers turning right across cyclist's path</li>
              <li><strong>Left Cross:</strong> Drivers turning left in front of oncoming cyclists</li>
              <li><strong>Failure to Yield:</strong> Not giving right-of-way at intersections</li>
              <li><strong>Following Too Closely:</strong> Rear-ending cyclists or insufficient passing distance</li>
              <li><strong>Lane Changes:</strong> Merging into bike lanes or cyclists without checking</li>
              <li><strong>Running Red Lights/Stop Signs:</strong> Striking cyclists with right-of-way</li>
              <li><strong>Distracted Driving:</strong> Texting, phone use, or other inattention</li>
              <li><strong>Road Rage:</strong> Intentional harassment or aggression toward cyclists</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Cyclist Rights and Laws</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California Vehicle Code provides strong protections:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Same Rights as Vehicles:</strong> Cyclists have the same road rights as motorists</li>
              <li><strong>Three-Foot Rule:</strong> Drivers must give at least 3 feet when passing cyclists</li>
              <li><strong>Bike Lane Protection:</strong> Drivers cannot enter or block bike lanes</li>
              <li><strong>Dooring Prohibition:</strong> Opening car doors without checking for cyclists is illegal</li>
              <li><strong>Right to Full Lane:</strong> Cyclists may use full lane when necessary for safety</li>
              <li><strong>No Harassment:</strong> Laws prohibit intimidating or harassing cyclists</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Serious Bicycle Accident Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cyclists lack protective barriers, leading to severe injuries:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Traumatic Brain Injuries:</strong> Even with helmets, concussions and TBIs are common</li>
              <li><strong>Spinal Cord Injuries:</strong> Paralysis or permanent nerve damage</li>
              <li><strong>Fractures:</strong> Broken bones, especially collarbones, wrists, arms, legs</li>
              <li><strong>Road Rash:</strong> Severe skin abrasions requiring skin grafts</li>
              <li><strong>Internal Injuries:</strong> Organ damage, internal bleeding</li>
              <li><strong>Facial Injuries:</strong> Broken jaw, dental damage, facial fractures</li>
              <li><strong>Soft Tissue Damage:</strong> Torn ligaments, muscle damage</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Determining Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Potentially liable parties include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Negligent Drivers:</strong> Primary liability for traffic violations and carelessness</li>
              <li><strong>Employers:</strong> If driver was working at time of accident</li>
              <li><strong>Vehicle Owners:</strong> If different from driver</li>
              <li><strong>Municipalities:</strong> Dangerous road conditions, poor signage, inadequate bike infrastructure</li>
              <li><strong>Product Manufacturers:</strong> Defective bicycle parts or safety equipment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hit-and-Run Bicycle Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When drivers flee the scene:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Uninsured Motorist Coverage:</strong> Your own policy may cover hit-and-run</li>
              <li><strong>Police Investigation:</strong> Report immediately to law enforcement</li>
              <li><strong>Witness Information:</strong> Gather any available witness statements</li>
              <li><strong>Surveillance Footage:</strong> Check for traffic cameras or business security cameras</li>
              <li><strong>Physical Evidence:</strong> Vehicle parts, paint transfer, tire marks</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Driver Negligence</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strong cases require comprehensive evidence:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Police Reports:</strong> Official documentation of accident and violations</li>
              <li><strong>Witness Statements:</strong> Testimony from people who saw the crash</li>
              <li><strong>Photos/Video:</strong> Scene documentation, vehicle damage, injuries</li>
              <li><strong>Medical Records:</strong> Injuries consistent with bicycle accident</li>
              <li><strong>Accident Reconstruction:</strong> Expert analysis of how crash occurred</li>
              <li><strong>Traffic Citations:</strong> Violations issued to driver</li>
              <li><strong>Bicycle Damage:</strong> Evidence of impact and force</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation for Bicycle Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Injured cyclists may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> Emergency care, surgery, rehabilitation, future treatment</li>
              <li><strong>Lost Income:</strong> Time off work during recovery</li>
              <li><strong>Lost Earning Capacity:</strong> Reduced ability to work due to permanent injuries</li>
              <li><strong>Pain and Suffering:</strong> Physical pain and emotional distress</li>
              <li><strong>Bicycle Replacement:</strong> Cost of damaged bicycle and equipment</li>
              <li><strong>Scarring/Disfigurement:</strong> Permanent visible injuries</li>
              <li><strong>Loss of Enjoyment:</strong> Inability to participate in cycling and activities</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance Company Tactics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Insurers often try to minimize cyclist claims:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Blame the Cyclist:</strong> Claiming cyclist violated traffic laws</li>
              <li><strong>No Helmet Argument:</strong> Suggesting injuries were cyclist's fault for not wearing helmet</li>
              <li><strong>Visibility Claims:</strong> Arguing cyclist wasn't visible or wore dark clothing</li>
              <li><strong>Contributory Negligence:</strong> Trying to reduce payout by assigning partial fault</li>
              <li><strong>Low Initial Offers:</strong> Quick settlements for far less than fair value</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Steps After a Bicycle Accident</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Protect your rights by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Calling 911 for police and medical assistance</li>
              <li>Getting driver's information and insurance details</li>
              <li>Taking photos of scene, vehicles, injuries, bicycle damage</li>
              <li>Collecting witness names and contact information</li>
              <li>Seeking immediate medical evaluation</li>
              <li>Not admitting fault or apologizing at scene</li>
              <li>Preserving damaged bicycle and gear as evidence</li>
              <li>Consulting with an attorney before giving recorded statements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time Limits for Filing Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California statutes of limitations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Personal Injury:</strong> Two years from date of accident</li>
              <li><strong>Property Damage:</strong> Three years for bicycle and equipment damage</li>
              <li><strong>Government Claims:</strong> Six months to file claim against city/county for road defects</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Bicycle Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Our firm understands the unique challenges cyclists face on California roads. We fight to hold negligent drivers accountable and secure full compensation for injured cyclists.
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

export default BicycleAccidents;
