import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const BackInjuries = () => {
  const currentCategory = 'Common Injuries';
  
  return (
    <>
      <SEO 
        title="Back Injury Claims in California: Compensation for Spine Damage | Trembach Law"
        description="Understanding herniated discs, lower back injuries, and compensation for spinal damage. Expert legal representation for back injury victims from Trembach Law Firm."
        keywords="back injury lawyer, herniated disc attorney, spine injury compensation, California back injury claims, lumbar injury, chronic back pain"
        canonical="https://www.trembachlawfirm.com/blog/back-injuries"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80"
            alt="Spine treatment and back injury rehabilitation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Back Injury Claims: Securing Compensation for Spinal Damage
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 25, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                14 min read
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
              Back injuries are among the most common and debilitating consequences of accidents. Understanding the types of spinal damage, treatment options, and your legal rights is essential for securing fair compensation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Back Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Spinal injuries range from minor to catastrophic:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Herniated Disc:</strong> Disc material bulges or ruptures, pressing on nerves</li>
              <li><strong>Bulging Disc:</strong> Disc protrudes but outer layer intact</li>
              <li><strong>Degenerative Disc Disease:</strong> Accelerated disc deterioration from injury</li>
              <li><strong>Spinal Stenosis:</strong> Narrowing of spinal canal compressing nerves</li>
              <li><strong>Compression Fractures:</strong> Vertebrae crushed or collapsed</li>
              <li><strong>Facet Joint Injury:</strong> Damage to joints connecting vertebrae</li>
              <li><strong>Muscle Strains:</strong> Torn or overstretched back muscles</li>
              <li><strong>Ligament Sprains:</strong> Stretched or torn spinal ligaments</li>
              <li><strong>Radiculopathy:</strong> Nerve root compression causing radiating pain</li>
              <li><strong>Sciatica:</strong> Sciatic nerve compression causing leg pain</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Causes of Back Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Back damage frequently results from:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Car Accidents:</strong> Impact forces and sudden movements</li>
              <li><strong>Truck Accidents:</strong> Severe crashes causing major spinal trauma</li>
              <li><strong>Slip and Falls:</strong> Landing on back or twisting while falling</li>
              <li><strong>Workplace Accidents:</strong> Heavy lifting, repetitive strain, falls</li>
              <li><strong>Construction Accidents:</strong> Falls from heights, being struck by objects</li>
              <li><strong>Sports Injuries:</strong> Contact sports and recreational activities</li>
              <li><strong>Lifting Injuries:</strong> Improper lifting technique or excessive weight</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Symptoms of Back Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Back injury symptoms vary by severity and location:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Lower Back Pain:</strong> Localized pain in lumbar region</li>
              <li><strong>Radiating Pain:</strong> Pain traveling down legs (sciatica)</li>
              <li><strong>Numbness/Tingling:</strong> Nerve compression symptoms in legs or feet</li>
              <li><strong>Muscle Weakness:</strong> Difficulty with leg strength or foot drop</li>
              <li><strong>Limited Mobility:</strong> Difficulty bending, twisting, or standing</li>
              <li><strong>Muscle Spasms:</strong> Involuntary back muscle contractions</li>
              <li><strong>Stiffness:</strong> Reduced flexibility and range of motion</li>
              <li><strong>Pain with Movement:</strong> Worsening with certain positions or activities</li>
              <li><strong>Bowel/Bladder Dysfunction:</strong> Emergency symptom requiring immediate care</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Diagnostic Procedures</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Proper diagnosis requires:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Physical Examination:</strong> Range of motion, strength, reflexes testing</li>
              <li><strong>X-Rays:</strong> Showing bone alignment, fractures, arthritis</li>
              <li><strong>MRI:</strong> Detailed imaging of discs, nerves, soft tissues</li>
              <li><strong>CT Scan:</strong> Bone detail and complex injuries</li>
              <li><strong>EMG/Nerve Conduction:</strong> Testing nerve function and damage</li>
              <li><strong>Discography:</strong> Injecting dye to identify painful discs</li>
              <li><strong>Myelogram:</strong> Imaging spinal cord and nerve roots</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conservative Treatment Options</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Initial treatment typically includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Rest and Ice:</strong> Initial inflammation reduction</li>
              <li><strong>Pain Medications:</strong> NSAIDs, muscle relaxants, pain relievers</li>
              <li><strong>Physical Therapy:</strong> Strengthening and stretching exercises</li>
              <li><strong>Chiropractic Care:</strong> Spinal adjustments and manipulation</li>
              <li><strong>Massage Therapy:</strong> Reducing muscle tension</li>
              <li><strong>Epidural Steroid Injections:</strong> Reducing nerve inflammation</li>
              <li><strong>Facet Joint Injections:</strong> Targeting specific joint pain</li>
              <li><strong>Nerve Blocks:</strong> Blocking pain signals</li>
              <li><strong>TENS Units:</strong> Electrical stimulation for pain relief</li>
              <li><strong>Acupuncture:</strong> Alternative pain management</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Surgical Interventions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When conservative treatment fails, surgery may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Microdiscectomy:</strong> Removing herniated disc material ($20,000-$50,000)</li>
              <li><strong>Laminectomy:</strong> Removing bone to relieve pressure ($30,000-$90,000)</li>
              <li><strong>Spinal Fusion:</strong> Joining vertebrae permanently ($80,000-$150,000+)</li>
              <li><strong>Artificial Disc Replacement:</strong> Replacing damaged disc ($100,000-$200,000)</li>
              <li><strong>Foraminotomy:</strong> Enlarging nerve opening</li>
              <li><strong>Vertebroplasty/Kyphoplasty:</strong> Stabilizing compression fractures</li>
              <li><strong>Spinal Cord Stimulator:</strong> Implant for chronic pain management</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Recovery and Rehabilitation</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Back injury recovery requires:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Physical Therapy:</strong> 6-12+ months of rehabilitation</li>
              <li><strong>Work Restrictions:</strong> Limited lifting, bending, prolonged sitting</li>
              <li><strong>Activity Modifications:</strong> Avoiding aggravating movements</li>
              <li><strong>Core Strengthening:</strong> Building supporting muscles</li>
              <li><strong>Ergonomic Changes:</strong> Workplace and home modifications</li>
              <li><strong>Weight Management:</strong> Reducing strain on spine</li>
              <li><strong>Pain Management:</strong> Ongoing medication or injections</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Chronic Back Pain</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many victims develop long-term problems:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Persistent Pain:</strong> Daily pain affecting quality of life</li>
              <li><strong>Mobility Limitations:</strong> Difficulty with basic activities</li>
              <li><strong>Sleep Disruption:</strong> Pain preventing restful sleep</li>
              <li><strong>Depression/Anxiety:</strong> Mental health impacts from chronic pain</li>
              <li><strong>Medication Dependence:</strong> Long-term opioid or pain medication use</li>
              <li><strong>Failed Back Surgery:</strong> Ongoing pain despite surgery</li>
              <li><strong>Progressive Degeneration:</strong> Worsening over time</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Impact on Employment</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Back injuries often affect careers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Job Loss:</strong> Cannot perform physical job duties</li>
              <li><strong>Career Change:</strong> Forced into different, lower-paying field</li>
              <li><strong>Reduced Hours:</strong> Cannot work full-time schedule</li>
              <li><strong>Permanent Restrictions:</strong> Lifting, bending, standing limitations</li>
              <li><strong>Vocational Retraining:</strong> Learning new skills for sedentary work</li>
              <li><strong>Disability Benefits:</strong> Unable to work at all</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Insurance Company Tactics</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Insurers commonly challenge back injury claims:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Pre-Existing Condition Defense:</strong> Blaming prior back problems</li>
              <li><strong>Degenerative Disease Argument:</strong> Claiming age-related wear and tear</li>
              <li><strong>Subjective Complaints:</strong> Dismissing pain as unverifiable</li>
              <li><strong>Treatment Gaps:</strong> Using missed appointments against claimant</li>
              <li><strong>Surveillance:</strong> Following claimants to catch normal activities</li>
              <li><strong>IME Doctors:</strong> Hired examiners minimizing injuries</li>
              <li><strong>Quick Settlement Pressure:</strong> Offering low amounts early</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving Back Injury Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strong cases require:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>MRI Evidence:</strong> Objective proof of disc or nerve damage</li>
              <li><strong>Medical Records:</strong> Comprehensive treatment documentation</li>
              <li><strong>Expert Testimony:</strong> Orthopedic surgeons or neurosurgeons</li>
              <li><strong>Accident Reconstruction:</strong> Proving force sufficient to cause injury</li>
              <li><strong>Vocational Expert:</strong> Testifying about work limitations</li>
              <li><strong>Life Care Plan:</strong> Future medical needs and costs</li>
              <li><strong>Pain Diary:</strong> Daily documentation of symptoms</li>
              <li><strong>Employer Records:</strong> Work restrictions and accommodations</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation for Back Injuries</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Victims may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> All past and future treatment, surgery, therapy</li>
              <li><strong>Lost Wages:</strong> Income lost during recovery</li>
              <li><strong>Lost Earning Capacity:</strong> Reduced ability to work long-term</li>
              <li><strong>Pain and Suffering:</strong> Physical pain and limitations</li>
              <li><strong>Emotional Distress:</strong> Depression, anxiety from chronic pain</li>
              <li><strong>Loss of Enjoyment:</strong> Cannot participate in activities</li>
              <li><strong>Permanent Impairment:</strong> Lasting disability rating</li>
              <li><strong>Future Medical Costs:</strong> Lifetime treatment and pain management</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Settlement Values by Injury Type</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Typical compensation ranges:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Muscle Strain (resolved):</strong> $5,000-$20,000</li>
              <li><strong>Bulging Disc (conservative treatment):</strong> $20,000-$75,000</li>
              <li><strong>Herniated Disc (injections):</strong> $40,000-$150,000</li>
              <li><strong>Herniated Disc (surgery):</strong> $100,000-$350,000</li>
              <li><strong>Multi-Level Fusion:</strong> $200,000-$750,000+</li>
              <li><strong>Failed Back Surgery:</strong> $300,000-$1,000,000+</li>
              <li><strong>Permanent Disability:</strong> $500,000-$2,000,000+</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Factors Affecting Value</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Compensation depends on:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Objective Evidence:</strong> MRI showing clear damage</li>
              <li><strong>Surgery Required:</strong> Significantly increases value</li>
              <li><strong>Permanency:</strong> Lasting impairment and restrictions</li>
              <li><strong>Age and Occupation:</strong> Impact on earning capacity</li>
              <li><strong>Pre-Existing Conditions:</strong> Can reduce compensation</li>
              <li><strong>Treatment Compliance:</strong> Following medical advice</li>
              <li><strong>Lifestyle Impact:</strong> Severity of activity limitations</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experienced Back Injury Representation</h3>
              <p className="text-gray-700 mb-6">
                Back injuries are heavily disputed by insurance companies. Our firm works with top spinal specialists to prove the full extent of your injury and secure maximum compensation for both current and future impacts.
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

export default BackInjuries;
