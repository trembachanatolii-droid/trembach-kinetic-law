import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const PedestrianAccidents = () => {
  const currentCategory = 'Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="Pedestrian Accident Claims in California: Rights & Compensation | Trembach Law"
        description="Understanding pedestrian rights, crosswalk laws, and compensation for pedestrian accidents in California. Expert legal representation for injured pedestrians from Trembach Law Firm."
        keywords="pedestrian accident lawyer, crosswalk accident attorney, hit by car, California pedestrian laws, jaywalking accident, pedestrian injury compensation"
        canonical="https://www.trembachlawfirm.com/blog/pedestrian-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80"
            alt="Pedestrian safety and crosswalk protection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Pedestrian Accident Claims: Your Rights After Being Hit
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 29, 2025
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
              Pedestrians are the most vulnerable road users. When drivers fail to exercise reasonable care, the results can be catastrophic. Understanding your legal rights is essential for obtaining fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Pedestrian Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Most pedestrian accidents involve driver negligence:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Failure to Yield at Crosswalks:</strong> Not stopping for pedestrians in marked or unmarked crosswalks</li>
              <li><strong>Left Turns:</strong> Turning left without checking for pedestrians</li>
              <li><strong>Right Turns on Red:</strong> Failing to yield when turning right</li>
              <li><strong>Distracted Driving:</strong> Texting, phone calls, or other distractions</li>
              <li><strong>Speeding:</strong> Excessive speed reducing reaction time</li>
              <li><strong>Impaired Driving:</strong> DUI accidents involving pedestrians</li>
              <li><strong>Backing Up:</strong> Not checking for pedestrians when reversing</li>
              <li><strong>Poor Visibility:</strong> Failing to use headlights or adjust for conditions</li>
              <li><strong>Parking Lots:</strong> Negligent driving in pedestrian-heavy areas</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California Pedestrian Right-of-Way Laws</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California Vehicle Code provides strong pedestrian protections:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Marked Crosswalks:</strong> Drivers must yield to pedestrians in crosswalks</li>
              <li><strong>Unmarked Crosswalks:</strong> Right-of-way exists at all intersections, marked or not</li>
              <li><strong>Mid-Block Crossings:</strong> Drivers must exercise due care even outside crosswalks</li>
              <li><strong>Sidewalk Safety:</strong> Vehicles entering/exiting driveways must yield to sidewalk pedestrians</li>
              <li><strong>Traffic Signals:</strong> Pedestrians have right-of-way when signal permits crossing</li>
              <li><strong>School Zones:</strong> Enhanced pedestrian protections near schools</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Severe Pedestrian Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Pedestrians lack any protection, often resulting in catastrophic injuries:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Traumatic Brain Injuries:</strong> Head impact causing permanent cognitive damage</li>
              <li><strong>Spinal Cord Injuries:</strong> Paralysis or permanent mobility impairment</li>
              <li><strong>Multiple Fractures:</strong> Broken bones throughout body</li>
              <li><strong>Internal Injuries:</strong> Organ damage, internal bleeding</li>
              <li><strong>Amputations:</strong> Loss of limbs from severe trauma</li>
              <li><strong>Pelvic Fractures:</strong> Long-term mobility and pain issues</li>
              <li><strong>Soft Tissue Damage:</strong> Torn ligaments, muscle damage</li>
              <li><strong>Facial Injuries:</strong> Dental damage, jaw fractures, disfigurement</li>
              <li><strong>Wrongful Death:</strong> Fatal pedestrian accidents</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Jaywalking and Comparative Negligence</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Even if crossing illegally, pedestrians may still recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>California Comparative Fault:</strong> Damages reduced by pedestrian's percentage of fault, not eliminated</li>
              <li><strong>Driver's Duty of Care:</strong> Even jaywalking pedestrians must be avoided if reasonably possible</li>
              <li><strong>Burden on Driver:</strong> Drivers must prove pedestrian's negligence contributed to accident</li>
              <li><strong>Partial Recovery:</strong> Can still recover damages even if 49% at fault</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Hit-and-Run Pedestrian Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When drivers flee after hitting a pedestrian:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Uninsured Motorist Coverage:</strong> Your own auto policy may cover hit-and-run</li>
              <li><strong>Police Investigation:</strong> Critical to report immediately</li>
              <li><strong>Surveillance Footage:</strong> Traffic cameras, business security systems</li>
              <li><strong>Witness Information:</strong> Descriptions of vehicle and driver</li>
              <li><strong>Physical Evidence:</strong> Vehicle parts, paint, tire marks</li>
              <li><strong>Crime Victim Compensation:</strong> State program may provide assistance</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Determining Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Multiple parties may be responsible:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Negligent Drivers:</strong> Primary liability for traffic violations</li>
              <li><strong>Employers:</strong> If driver was working at time of accident</li>
              <li><strong>Vehicle Owners:</strong> If different from driver</li>
              <li><strong>Municipalities:</strong> Dangerous intersections, poor lighting, inadequate crosswalks</li>
              <li><strong>Property Owners:</strong> Parking lot accidents on private property</li>
              <li><strong>Bars/Restaurants:</strong> Dram shop liability for over-serving intoxicated drivers</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Evidence in Pedestrian Accident Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Building a strong case requires:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Police Reports:</strong> Official documentation of accident and violations</li>
              <li><strong>Accident Scene Photos:</strong> Crosswalk location, traffic signals, lighting</li>
              <li><strong>Witness Statements:</strong> Testimony from people who saw the accident</li>
              <li><strong>Traffic Camera Footage:</strong> Video evidence of accident</li>
              <li><strong>Medical Records:</strong> Documenting injuries and treatment</li>
              <li><strong>Accident Reconstruction:</strong> Expert analysis of impact and fault</li>
              <li><strong>Driver's Cell Phone Records:</strong> Proving distracted driving</li>
              <li><strong>Toxicology Reports:</strong> Evidence of impaired driving</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation for Pedestrian Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Injured pedestrians may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> Emergency care, surgery, rehabilitation, future treatment</li>
              <li><strong>Lost Wages:</strong> Income lost during recovery</li>
              <li><strong>Lost Earning Capacity:</strong> Reduced ability to work due to permanent injuries</li>
              <li><strong>Pain and Suffering:</strong> Physical pain and emotional trauma</li>
              <li><strong>Disability:</strong> Permanent impairments affecting quality of life</li>
              <li><strong>Scarring/Disfigurement:</strong> Permanent visible injuries</li>
              <li><strong>Loss of Enjoyment:</strong> Inability to participate in activities</li>
              <li><strong>Wrongful Death:</strong> If pedestrian dies from injuries</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Children and Pedestrian Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Special considerations for child pedestrians:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Lower Standard:</strong> Children not held to adult standard of care</li>
              <li><strong>School Zones:</strong> Enhanced driver responsibility near schools</li>
              <li><strong>Residential Areas:</strong> Duty to anticipate children in neighborhoods</li>
              <li><strong>Extended Time Limits:</strong> Statute of limitations may be tolled until age 18</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Steps After a Pedestrian Accident</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Protect your rights by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Calling 911 immediately for medical help and police</li>
              <li>Getting driver's information and insurance details if possible</li>
              <li>Taking photos of scene, vehicles, and injuries</li>
              <li>Collecting witness names and contact information</li>
              <li>Seeking immediate medical evaluation, even if injuries seem minor</li>
              <li>Not admitting fault or signing any documents</li>
              <li>Documenting all injuries and treatment</li>
              <li>Consulting with an attorney before giving insurance statements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time Limits for Filing Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California statutes of limitations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Personal Injury:</strong> Two years from date of accident</li>
              <li><strong>Wrongful Death:</strong> Two years from date of death</li>
              <li><strong>Government Claims:</strong> Six months to file claim against city/county for dangerous conditions</li>
              <li><strong>Minor Victims:</strong> Time may be extended for children</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Pedestrian Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Pedestrian accidents often result in life-changing injuries. Our firm fights to hold negligent drivers accountable and secure maximum compensation for injured pedestrians and their families.
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

export default PedestrianAccidents;
