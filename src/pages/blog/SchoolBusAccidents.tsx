import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const SchoolBusAccidents = () => {
  const currentCategory = 'Motor Vehicle Accidents';
  
  return (
    <>
      <SEO 
        title="School Bus Accident Claims in California: Protecting Children's Rights | Trembach Law"
        description="Understanding school bus accident liability, school district responsibility, and pursuing compensation for injured children. Expert legal representation from Trembach Law."
        keywords="school bus accident, school bus crash, injured child, school district liability, California school bus law, bus accident attorney"
        canonical="https://www.trembachlawfirm.com/blog/school-bus-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80"
            alt="School bus accident legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              School Bus Accident Claims in California
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 24, 2025
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
              School bus accidents can be devastating for children and families. Whether the accident involves the bus itself or a child being struck near a stopped bus, understanding liability and your child's rights is crucial for obtaining full compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of School Bus Accidents</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Bus Crash Accidents</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Collisions with other vehicles:</strong> Other drivers striking school bus</li>
              <li><strong>Bus driver negligence:</strong> Unsafe operation of bus</li>
              <li><strong>Mechanical failures:</strong> Brake failure, tire blowouts</li>
              <li><strong>Rollovers:</strong> Bus tipping over due to speed or road conditions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Loading Zone Accidents</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Child struck crossing street:</strong> Drivers illegally passing stopped bus</li>
              <li><strong>Bus pulls away with child near door:</strong> Driver doesn't see child</li>
              <li><strong>Child falls boarding or exiting:</strong> Steps too steep or slippery</li>
              <li><strong>Door closes on child:</strong> Automatic door malfunctions</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">On-Bus Incidents</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Sudden stops:</strong> Children thrown from seats</li>
              <li><strong>Inadequate supervision:</strong> Fights, bullying on bus</li>
              <li><strong>No seat belts:</strong> Children injured in collisions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">School District Liability</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Government Claims Act</h3>
            <p className="text-gray-700 mb-6">
              Claims against school districts are governed by California Government Claims Act:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Six-month claim deadline:</strong> Must file claim within 6 months of accident</li>
              <li><strong>Shorter than typical statute:</strong> Much less time than private lawsuits</li>
              <li><strong>Strict requirements:</strong> Specific form and content required</li>
              <li><strong>Failure to comply bars lawsuit:</strong> Missing deadline prevents recovery</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">District Responsibilities</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Safe bus maintenance:</strong> Regular inspections and repairs</li>
              <li><strong>Qualified drivers:</strong> Proper licensing and training</li>
              <li><strong>Safe routes:</strong> Planning routes avoiding hazards</li>
              <li><strong>Adequate supervision:</strong> Monitoring student safety</li>
              <li><strong>Safe stops:</strong> Choosing locations minimizing danger</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Bus Driver Negligence</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Driver Errors</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Distracted driving:</strong> Not watching road or students</li>
              <li><strong>Failure to use signals:</strong> Not activating stop arm and lights</li>
              <li><strong>Unsafe speeds:</strong> Driving too fast for conditions</li>
              <li><strong>Running stops:</strong> Failing to stop at railroad crossings</li>
              <li><strong>Poor mirror use:</strong> Not checking before moving</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Driver Requirements</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Commercial driver's license with passenger endorsement</li>
              <li>Special school bus certification</li>
              <li>Background checks and fingerprinting</li>
              <li>Regular drug and alcohol testing</li>
              <li>Annual physical examinations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Illegal Passing of School Buses</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">California Law</h3>
            <p className="text-gray-700 mb-6">
              Vehicle Code Section 22454 prohibits passing stopped school buses:
            </p>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Red lights flashing:</strong> All traffic must stop in both directions</li>
              <li><strong>Stop arm extended:</strong> No passing allowed</li>
              <li><strong>20-foot distance:</strong> Must remain at least 20 feet from bus</li>
              <li><strong>Divided highways:</strong> Opposite direction may proceed on divided roads</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Penalties and Liability</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Criminal penalties:</strong> Fines up to $1,000</li>
              <li><strong>Negligence per se:</strong> Violation establishes negligence</li>
              <li><strong>Clear liability:</strong> Strong cases when child struck</li>
              <li><strong>Serious injuries common:</strong> Children vulnerable to severe harm</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common School Bus Accident Injuries</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Catastrophic Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Traumatic brain injuries:</strong> Head impacts in unrestrained children</li>
              <li><strong>Spinal cord injuries:</strong> Being thrown or struck</li>
              <li><strong>Broken bones:</strong> Arms, legs, facial fractures</li>
              <li><strong>Internal injuries:</strong> Organ damage from impacts</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Loading Zone Injuries</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Struck by vehicles:</strong> Pedestrian impact injuries</li>
              <li><strong>Run over:</strong> Wheels rolling over child</li>
              <li><strong>Falls:</strong> Injuries from falling on pavement</li>
              <li><strong>Door injuries:</strong> Caught or crushed by closing door</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Special Considerations for Child Injury Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Long-Term Impact</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Lifetime effects:</strong> Injuries affect child's entire life</li>
              <li><strong>Future medical care:</strong> Ongoing treatment needs</li>
              <li><strong>Educational impact:</strong> Effect on schooling and development</li>
              <li><strong>Lost earning capacity:</strong> Reduced future income potential</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Court Approval Required</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Minor's compromise:</strong> Settlements must be court-approved</li>
              <li><strong>Structured settlements:</strong> Often used for large awards</li>
              <li><strong>Guardianship issues:</strong> Parents must act as guardians ad litem</li>
              <li><strong>Protected funds:</strong> Money held until child turns 18</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate School Bus Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                School bus accident cases involving children require attorneys who understand both the complex government claims process and the special considerations for injured minors. Our firm has successfully represented numerous families after school bus accidents throughout California.
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

export default SchoolBusAccidents;
