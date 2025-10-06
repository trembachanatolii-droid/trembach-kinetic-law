import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const Amputation = () => {
  const currentCategory = 'Catastrophic Injuries';
  
  return (
    <>
      <SEO 
        title="Amputation Injury Claims in California: Rights & Compensation | Trembach Law"
        description="Understanding amputation injuries, prosthetic needs, and maximum compensation for limb loss. Expert legal representation for amputation victims from Trembach Law Firm."
        keywords="amputation injury lawyer, limb loss attorney, prosthetic compensation, California amputation claims, traumatic amputation, workplace amputation"
        canonical="https://www.trembachlawfirm.com/blog/amputation"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80"
            alt="Medical rehabilitation and prosthetic care"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Amputation Injury Claims: Securing Your Future After Limb Loss
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 26, 2025
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
              Losing a limb is a life-altering catastrophic injury that affects every aspect of a victim's life. Understanding your legal rights and the full scope of available compensation is essential for rebuilding your future.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Amputation Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amputations occur in several ways:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Traumatic Amputation:</strong> Limb severed at time of accident by machinery, vehicles, or crushing force</li>
              <li><strong>Surgical Amputation:</strong> Medical necessity due to severe injury, infection, or non-viable tissue</li>
              <li><strong>Upper Extremity:</strong> Fingers, hand, forearm, arm, or shoulder</li>
              <li><strong>Lower Extremity:</strong> Toes, foot, below-knee, above-knee, or hip disarticulation</li>
              <li><strong>Partial Amputation:</strong> Some tissue connection remains but limb is non-functional</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Amputation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amputations most often result from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Workplace Accidents:</strong> Industrial machinery, power tools, forklifts, manufacturing equipment</li>
              <li><strong>Vehicle Accidents:</strong> Severe car, truck, motorcycle, or train collisions</li>
              <li><strong>Construction Accidents:</strong> Heavy machinery, power tools, falling objects</li>
              <li><strong>Medical Malpractice:</strong> Surgical errors, misdiagnosis, delayed treatment of infections</li>
              <li><strong>Defective Products:</strong> Faulty machinery, inadequate safety guards</li>
              <li><strong>Explosions:</strong> Burns and trauma requiring amputation</li>
              <li><strong>Electrocution:</strong> Severe electrical burns damaging tissue</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Immediate Medical Treatment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Emergency care for amputation includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Hemorrhage Control:</strong> Stopping life-threatening bleeding</li>
              <li><strong>Wound Stabilization:</strong> Protecting remaining tissue and bone</li>
              <li><strong>Reattachment Attempts:</strong> If severed part is salvageable and found quickly</li>
              <li><strong>Surgical Revision:</strong> Creating optimal residual limb for prosthetic fitting</li>
              <li><strong>Pain Management:</strong> Controlling acute and phantom limb pain</li>
              <li><strong>Infection Prevention:</strong> Antibiotics and wound care</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Long-Term Physical Impacts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amputees face ongoing challenges:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Phantom Limb Pain:</strong> Sensation of pain in missing limb, affecting 60-80% of amputees</li>
              <li><strong>Residual Limb Pain:</strong> Chronic pain at amputation site</li>
              <li><strong>Mobility Limitations:</strong> Difficulty walking, climbing stairs, maintaining balance</li>
              <li><strong>Secondary Injuries:</strong> Strain on remaining limbs, back problems, joint issues</li>
              <li><strong>Skin Problems:</strong> Pressure sores, irritation from prosthetics</li>
              <li><strong>Cardiovascular Strain:</strong> Increased energy required for mobility</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Prosthetic Limbs and Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Modern prosthetics offer various options:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Basic Prosthetics:</strong> Standard artificial limbs for basic function ($5,000-$15,000)</li>
              <li><strong>Myoelectric Prosthetics:</strong> Electronic limbs controlled by muscle signals ($25,000-$75,000)</li>
              <li><strong>Microprocessor Limbs:</strong> Advanced computerized joints adapting to terrain ($50,000-$100,000+)</li>
              <li><strong>Activity-Specific Prosthetics:</strong> Specialized for running, swimming, sports</li>
              <li><strong>Osseointegration:</strong> Implant directly into bone for better control and comfort</li>
              <li><strong>Replacement Schedule:</strong> Prosthetics need replacement every 3-5 years</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Rehabilitation and Adaptation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recovery requires extensive rehabilitation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Physical Therapy:</strong> Strengthening, balance, prosthetic training</li>
              <li><strong>Occupational Therapy:</strong> Relearning daily activities, adaptive equipment</li>
              <li><strong>Gait Training:</strong> Learning to walk with prosthetic</li>
              <li><strong>Pain Management:</strong> Treatment for phantom and residual limb pain</li>
              <li><strong>Home Modifications:</strong> Accessibility improvements for wheelchair or prosthetic use</li>
              <li><strong>Vehicle Modifications:</strong> Adaptive driving controls</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Psychological and Emotional Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amputation profoundly affects mental health:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Depression and Anxiety:</strong> Common following limb loss</li>
              <li><strong>Post-Traumatic Stress:</strong> Especially with traumatic amputations</li>
              <li><strong>Body Image Issues:</strong> Adjusting to changed appearance</li>
              <li><strong>Loss of Identity:</strong> Particularly for athletes or manual workers</li>
              <li><strong>Relationship Strain:</strong> Impact on family and intimate relationships</li>
              <li><strong>Social Isolation:</strong> Withdrawal from activities and social situations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Employment and Vocational Impact</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Career implications of amputation:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Job Loss:</strong> Inability to perform previous occupation</li>
              <li><strong>Reduced Earning Capacity:</strong> Lower-paying alternative employment</li>
              <li><strong>Vocational Retraining:</strong> Learning new skills for different career</li>
              <li><strong>Workplace Accommodations:</strong> Modifications needed for continued employment</li>
              <li><strong>Early Retirement:</strong> Permanent inability to work</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Lifetime Costs of Amputation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Financial burden includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Initial Medical Treatment:</strong> Surgery, hospitalization ($100,000-$500,000+)</li>
              <li><strong>Prosthetic Costs:</strong> Initial fitting and lifetime replacements ($500,000-$1,500,000)</li>
              <li><strong>Ongoing Medical Care:</strong> Follow-up surgeries, pain management, complications</li>
              <li><strong>Rehabilitation:</strong> Physical and occupational therapy</li>
              <li><strong>Home Modifications:</strong> Accessibility improvements ($25,000-$100,000)</li>
              <li><strong>Vehicle Modifications:</strong> Adaptive controls ($20,000-$80,000)</li>
              <li><strong>Lost Wages:</strong> Reduced earning capacity over lifetime</li>
              <li><strong>Attendant Care:</strong> Assistance with daily living activities</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Liability in Amputation Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strong cases require:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Accident Investigation:</strong> Detailed analysis of how amputation occurred</li>
              <li><strong>Safety Violations:</strong> OSHA citations, manufacturer defects</li>
              <li><strong>Medical Records:</strong> Complete documentation of injuries and treatment</li>
              <li><strong>Expert Testimony:</strong> Medical experts, vocational experts, life care planners</li>
              <li><strong>Economic Analysis:</strong> Lifetime cost projections</li>
              <li><strong>Witness Statements:</strong> Testimony about accident and impact on victim</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation in Amputation Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amputation victims may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> All past and future treatment, prosthetics, therapy</li>
              <li><strong>Lost Wages:</strong> Income lost during recovery</li>
              <li><strong>Lost Earning Capacity:</strong> Reduced lifetime earnings</li>
              <li><strong>Pain and Suffering:</strong> Physical pain, phantom limb pain</li>
              <li><strong>Emotional Distress:</strong> Depression, anxiety, PTSD</li>
              <li><strong>Disfigurement:</strong> Permanent physical changes</li>
              <li><strong>Loss of Enjoyment:</strong> Inability to participate in activities</li>
              <li><strong>Loss of Consortium:</strong> Impact on marital relationship</li>
              <li><strong>Home and Vehicle Modifications:</strong> Accessibility costs</li>
              <li><strong>Punitive Damages:</strong> In cases of gross negligence</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Specialized Legal Representation Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Amputation cases require attorneys who:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Understand the lifetime medical needs of amputees</li>
              <li>Work with life care planners to calculate future costs</li>
              <li>Retain prosthetic experts to testify about ongoing needs</li>
              <li>Have relationships with vocational experts for earning capacity analysis</li>
              <li>Can present the full impact to juries effectively</li>
              <li>Fight for maximum compensation to secure victim's future</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Amputation Injury Representation</h3>
              <p className="text-gray-700 mb-6">
                Amputation injuries require comprehensive legal representation that accounts for lifetime costs and impacts. Our firm fights to ensure victims receive full compensation for their catastrophic losses.
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

export default Amputation;
