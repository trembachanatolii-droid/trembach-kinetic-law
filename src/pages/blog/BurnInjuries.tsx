import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const BurnInjuries = () => {
  const currentCategory = 'Catastrophic Injuries';
  
  return (
    <>
      <SEO 
        title="Burn Injury Claims in California: Degrees, Treatment & Compensation | Trembach Law"
        description="Understanding burn injury severity, treatment options, liability, and how to pursue compensation for serious burn injuries. Expert legal guidance from Trembach Law Firm."
        keywords="burn injury lawyer, California burn accident, thermal burns, chemical burns, electrical burns, catastrophic injury attorney"
        canonical="https://www.trembachlawfirm.com/blog/burn-injuries"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
            alt="Burn injury medical treatment and legal representation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Burn Injury Claims: Understanding Your Rights and Recovery Options
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                January 9, 2026
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
              Burn injuries are among the most painful and devastating injuries a person can suffer. They often require extensive medical treatment, multiple surgeries, and result in permanent scarring and disability. Understanding your legal rights is crucial for obtaining the compensation needed for recovery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Degrees of Burn Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Burn injuries are classified by severity:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>First-Degree Burns:</strong> Affect only the outer layer of skin (epidermis). Causes redness, minor swelling, and pain. Usually heal within a week without scarring</li>
              <li><strong>Second-Degree Burns:</strong> Extend into the second layer of skin (dermis). Cause blistering, severe pain, swelling, and may result in scarring. Healing takes several weeks</li>
              <li><strong>Third-Degree Burns:</strong> Destroy both layers of skin and may damage underlying tissue. Skin appears white, charred, or leathery. May cause permanent nerve damage resulting in numbness. Always require medical treatment and often skin grafts</li>
              <li><strong>Fourth-Degree Burns:</strong> Extend through all skin layers into muscles, tendons, and bones. Life-threatening injuries requiring immediate emergency care and often amputation</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Burn Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Burn injuries can result from various accidents:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Thermal Burns:</strong> From fire, steam, hot liquids, or contact with hot objects</li>
              <li><strong>Electrical Burns:</strong> From contact with electrical currents, often causing internal damage not visible externally</li>
              <li><strong>Chemical Burns:</strong> From exposure to acids, alkalies, or other corrosive substances</li>
              <li><strong>Radiation Burns:</strong> From sun exposure, tanning beds, or radiation therapy</li>
              <li><strong>Friction Burns:</strong> From skin rubbing against rough surfaces at high speeds (road rash)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Where Burn Accidents Occur</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Common settings for serious burn injuries include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Workplace Accidents:</strong> Industrial settings, restaurants, construction sites</li>
              <li><strong>Car Accidents:</strong> Vehicle fires following collisions</li>
              <li><strong>Defective Products:</strong> Exploding batteries, faulty appliances, flammable products</li>
              <li><strong>Building Fires:</strong> Residential or commercial fires due to negligence</li>
              <li><strong>Electrical Accidents:</strong> Power line contact, faulty wiring, electrocution</li>
              <li><strong>Chemical Spills:</strong> Industrial accidents or improper storage</li>
              <li><strong>Scalding Incidents:</strong> Hot water heater malfunctions, restaurant accidents</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Medical Treatment for Burn Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Severe burns require comprehensive medical care:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Emergency Care:</strong> Immediate treatment to stabilize the patient and prevent infection</li>
              <li><strong>Debridement:</strong> Removal of dead or damaged tissue</li>
              <li><strong>Skin Grafts:</strong> Transplanting healthy skin to cover burned areas</li>
              <li><strong>Pain Management:</strong> Ongoing medication to control severe pain</li>
              <li><strong>Physical Therapy:</strong> To maintain mobility and prevent contractures</li>
              <li><strong>Reconstructive Surgery:</strong> Multiple procedures to restore function and appearance</li>
              <li><strong>Psychological Counseling:</strong> To address trauma, depression, and body image issues</li>
              <li><strong>Occupational Therapy:</strong> To regain daily living skills</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Long-Term Effects of Burn Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Serious burns often cause permanent consequences:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Scarring and Disfigurement:</strong> Permanent marks that can affect appearance and self-esteem</li>
              <li><strong>Loss of Function:</strong> Reduced mobility in affected areas</li>
              <li><strong>Chronic Pain:</strong> Ongoing discomfort requiring long-term pain management</li>
              <li><strong>Nerve Damage:</strong> Numbness, tingling, or hypersensitivity</li>
              <li><strong>Psychological Trauma:</strong> PTSD, depression, anxiety, social withdrawal</li>
              <li><strong>Increased Infection Risk:</strong> Compromised skin barrier</li>
              <li><strong>Temperature Sensitivity:</strong> Difficulty regulating body temperature</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Establishing Liability for Burn Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Liability may be based on:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Negligence:</strong> Failure to exercise reasonable care (unsafe premises, inadequate training, poor maintenance)</li>
              <li><strong>Product Liability:</strong> Defective products that catch fire or explode</li>
              <li><strong>Strict Liability:</strong> Certain dangerous activities or products</li>
              <li><strong>Workers' Compensation:</strong> Workplace burn injuries</li>
              <li><strong>Third-Party Claims:</strong> When someone other than the employer is responsible</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Calculating Damages in Burn Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Burn injury cases often involve substantial damages:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> Emergency care, hospitalization, surgeries, medications, ongoing treatment (often exceeding millions of dollars)</li>
              <li><strong>Lost Income:</strong> Time off work during recovery and rehabilitation</li>
              <li><strong>Diminished Earning Capacity:</strong> Permanent disabilities affecting future employment</li>
              <li><strong>Pain and Suffering:</strong> Compensation for physical pain and emotional distress</li>
              <li><strong>Disfigurement:</strong> Additional compensation for permanent scarring and appearance changes</li>
              <li><strong>Loss of Enjoyment:</strong> Inability to participate in activities once enjoyed</li>
              <li><strong>Home Modifications:</strong> Adaptations needed for permanent disabilities</li>
              <li><strong>Future Care Costs:</strong> Ongoing medical needs, therapy, and procedures</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving a Burn Injury Claim</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strong evidence is essential:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Photographs of injuries throughout treatment and recovery</li>
              <li>Complete medical records documenting all treatment</li>
              <li>Accident scene photos and evidence preservation</li>
              <li>Expert testimony from burn specialists and reconstructive surgeons</li>
              <li>Economic expert analysis of lifetime costs and lost earnings</li>
              <li>Witness statements describing the accident and its impact</li>
              <li>Product evidence if defective item caused the burn</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Special Considerations for Children</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Burn injuries to children present unique challenges:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Higher risk of infection and complications</li>
              <li>Need for multiple surgeries as they grow</li>
              <li>Greater psychological impact during formative years</li>
              <li>Longer lifetime of dealing with scars and limitations</li>
              <li>Potential for developmental delays from trauma</li>
              <li>Extended statute of limitations in California</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time Limits for Filing Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California generally allows two years from the date of injury to file a burn injury lawsuit. However, if the burn resulted from a defective product, different time limits may apply. Claims against government entities require filing a government claim within six months.
            </p>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Representation for Burn Injury Victims</h3>
              <p className="text-gray-700 mb-6">
                Burn injuries require attorneys who understand the extensive medical treatment involved and the lifetime impact on victims. Our firm works with leading burn specialists and economic experts to build compelling cases that secure maximum compensation for our clients.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0051D5] transition-all shadow-lg hover:shadow-xl"
              >
                Free Case Evaluation
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

export default BurnInjuries;