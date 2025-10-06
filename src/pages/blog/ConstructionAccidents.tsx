import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const ConstructionAccidents = () => {
  const currentCategory = 'Workplace Injuries';
  
  return (
    <>
      <SEO 
        title="Construction Accident Claims in California: Rights & Compensation | Trembach Law"
        description="Understanding construction site hazards, OSHA violations, workers' compensation, and third-party liability claims. Expert construction accident representation from Trembach Law Firm."
        keywords="construction accident lawyer, California OSHA violations, construction injury, third-party liability, workers compensation, construction site safety"
        canonical="https://www.trembachlawfirm.com/blog/construction-accidents"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
            alt="Construction site safety and accident prevention"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Construction Accident Claims: Protecting Worker Rights
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
              Construction sites are among the most dangerous work environments in California. When safety regulations are violated and workers are injured, they may have multiple avenues for compensation beyond workers' compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Types of Construction Accidents</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Construction workers face numerous hazards daily:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Falls from Heights:</strong> Scaffolding collapses, ladder accidents, roof falls, elevator shaft falls</li>
              <li><strong>Struck-By Accidents:</strong> Falling objects, swinging equipment, vehicle strikes</li>
              <li><strong>Caught-In/Between:</strong> Trench collapses, equipment entanglement, crushing between objects</li>
              <li><strong>Electrocution:</strong> Contact with power lines, faulty wiring, improper grounding</li>
              <li><strong>Machinery Accidents:</strong> Cranes, forklifts, excavators, power tools</li>
              <li><strong>Explosions and Fires:</strong> Gas leaks, improper storage, welding accidents</li>
              <li><strong>Structural Collapses:</strong> Building failures, scaffolding, temporary structures</li>
              <li><strong>Chemical Exposure:</strong> Toxic substances, asbestos, silica dust</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">OSHA's "Fatal Four" in Construction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Occupational Safety and Health Administration (OSHA) identifies four leading causes of construction worker deaths:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Falls:</strong> Account for over 35% of construction deaths</li>
              <li><strong>Struck by Object:</strong> Roughly 10% of fatalities</li>
              <li><strong>Electrocution:</strong> Approximately 9% of deaths</li>
              <li><strong>Caught-in/Between:</strong> Around 5% of fatalities</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              These four hazards account for nearly 60% of all construction worker deaths, yet most are preventable with proper safety measures.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Workers' Compensation vs. Third-Party Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Construction accident victims may have two types of claims:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Workers' Compensation:</strong> Covers medical expenses and partial wage replacement regardless of fault. Does not require proving negligence but limits available damages (no pain and suffering)</li>
              <li><strong>Third-Party Liability Claims:</strong> Lawsuits against parties other than your employer who contributed to the accident. Can recover full damages including pain and suffering, lost future earnings, and punitive damages</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who Can Be Held Liable?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Multiple parties may share responsibility for construction accidents:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>General Contractors:</strong> Overall responsibility for site safety and coordination</li>
              <li><strong>Subcontractors:</strong> Specific trade contractors who created dangerous conditions</li>
              <li><strong>Property Owners:</strong> May be liable for unsafe conditions they knew about or created</li>
              <li><strong>Equipment Manufacturers:</strong> Producers of defective machinery or tools</li>
              <li><strong>Equipment Rental Companies:</strong> For poorly maintained or defective rented equipment</li>
              <li><strong>Architects and Engineers:</strong> Design defects leading to structural failures</li>
              <li><strong>Site Supervisors:</strong> Inadequate safety training or enforcement</li>
              <li><strong>Utility Companies:</strong> Unmarked underground lines or exposed electrical hazards</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California OSHA Safety Requirements</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cal/OSHA requires construction sites to maintain:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Fall Protection:</strong> Guardrails, safety nets, or personal fall arrest systems for work above 6 feet</li>
              <li><strong>Scaffolding Safety:</strong> Proper assembly, inspection, and fall protection</li>
              <li><strong>Ladder Requirements:</strong> Appropriate ladder type, three-point contact, proper angle</li>
              <li><strong>Trench Protection:</strong> Shoring, sloping, or protective systems for excavations over 5 feet deep</li>
              <li><strong>Personal Protective Equipment:</strong> Hard hats, safety glasses, gloves, appropriate for hazards</li>
              <li><strong>Electrical Safety:</strong> Proper grounding, ground fault circuit interrupters, clearance from power lines</li>
              <li><strong>Machine Guarding:</strong> Protective barriers on dangerous equipment</li>
              <li><strong>Hazard Communication:</strong> Material safety data sheets, warning signs, training</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Serious Construction Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Construction accidents often cause catastrophic injuries:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Traumatic Brain Injuries:</strong> From falls or struck-by accidents</li>
              <li><strong>Spinal Cord Injuries:</strong> Resulting in paralysis or permanent disability</li>
              <li><strong>Amputations:</strong> From machinery accidents or severe crush injuries</li>
              <li><strong>Severe Burns:</strong> From electrical accidents, explosions, or fires</li>
              <li><strong>Multiple Fractures:</strong> Broken bones requiring extensive surgery and recovery</li>
              <li><strong>Internal Injuries:</strong> Damage to organs from falls or crushing</li>
              <li><strong>Respiratory Diseases:</strong> From toxic exposure or dust inhalation</li>
              <li><strong>Hearing Loss:</strong> From prolonged noise exposure</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Negligence in Construction Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strong construction accident cases require comprehensive evidence:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>OSHA Violation Reports:</strong> Citations and inspection records showing safety failures</li>
              <li><strong>Accident Scene Photos:</strong> Documenting hazardous conditions</li>
              <li><strong>Witness Statements:</strong> Testimony from coworkers who saw the accident</li>
              <li><strong>Safety Records:</strong> Training logs, inspection reports, maintenance records</li>
              <li><strong>Expert Testimony:</strong> Construction safety experts explaining violations</li>
              <li><strong>Medical Records:</strong> Documenting extent of injuries and treatment</li>
              <li><strong>Equipment Inspection:</strong> Evidence of defects or poor maintenance</li>
              <li><strong>Site Plans and Permits:</strong> Showing approved safety measures</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation in Construction Accident Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Through third-party liability claims, victims may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> All past and future treatment, surgeries, rehabilitation</li>
              <li><strong>Lost Wages:</strong> Income lost during recovery</li>
              <li><strong>Lost Earning Capacity:</strong> Reduced ability to work in the future</li>
              <li><strong>Pain and Suffering:</strong> Compensation for physical pain and emotional distress</li>
              <li><strong>Disability:</strong> Permanent impairments affecting quality of life</li>
              <li><strong>Disfigurement:</strong> Scarring or permanent appearance changes</li>
              <li><strong>Loss of Enjoyment:</strong> Inability to participate in activities</li>
              <li><strong>Vocational Rehabilitation:</strong> Retraining for new career if unable to return to construction</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Undocumented Workers' Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Immigration status does not affect your right to workers' compensation or to file third-party injury claims in California. All workers, regardless of documentation status, are entitled to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Full workers' compensation benefits</li>
              <li>Safe working conditions under OSHA</li>
              <li>Third-party liability claims against negligent parties</li>
              <li>Protection from employer retaliation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Steps to Take After a Construction Accident</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Protect your rights by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Seeking immediate medical attention</li>
              <li>Reporting the accident to your supervisor and requesting a written report</li>
              <li>Taking photos of the accident scene and hazards if possible</li>
              <li>Getting contact information from witnesses</li>
              <li>Filing a workers' compensation claim promptly</li>
              <li>Preserving any equipment or materials involved</li>
              <li>Not signing any documents without legal review</li>
              <li>Consulting with an attorney before giving recorded statements</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time Limits for Construction Accident Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Different deadlines apply:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Workers' Compensation:</strong> Report within 30 days; file claim within one year</li>
              <li><strong>Third-Party Lawsuit:</strong> Generally two years from the date of injury</li>
              <li><strong>Government Claims:</strong> Six months to file claim against public entities</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Construction Accident Representation</h3>
              <p className="text-gray-700 mb-6">
                Construction accident cases require attorneys who understand both workers' compensation and personal injury law. Our firm thoroughly investigates all potentially liable parties and fights to maximize recovery for injured workers.
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

export default ConstructionAccidents;