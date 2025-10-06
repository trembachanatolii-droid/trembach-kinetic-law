import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/blog/medical-malpractice.jpg';

const MedicalMalpractice: React.FC = () => {
  return (
    <>
      <SEO
        title="Medical Malpractice in California: Understanding Your Rights 2025 | Trembach Law"
        description="Comprehensive guide to medical malpractice claims in California. Learn about misdiagnosis, surgical errors, medication mistakes, and your legal rights when healthcare goes wrong."
        keywords="medical malpractice California, misdiagnosis lawsuit, surgical error attorney, medication error claims, MICRA limits, medical negligence"
        canonical="https://www.trembachlawfirm.com/blog/medical-malpractice"
      />
      <Navigation />

      <section className="relative min-h-[60vh] flex items-end bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Medical Malpractice Legal Guide"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-[#1d1d1f]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#007AFF]/20 border border-[#007AFF]/40 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#007AFF]">MEDICAL MALPRACTICE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Medical Malpractice in California: Understanding Your Rights When Healthcare Goes Wrong
          </h1>
          
          <div className="flex items-center gap-6 text-white/80 text-sm">
            <span>By Anatolii Trembach, Esq.</span>
            <span>•</span>
            <time dateTime="2025-10-28">October 28, 2025</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              32 min read
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#007AFF]/5 to-[#007AFF]/10 border border-[#007AFF]/20">
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-[#1d1d1f]/80">
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>250,000+ deaths annually from medical errors:</strong> Third leading cause of death in the United States</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>MICRA caps non-economic damages at $350,000:</strong> California law limits pain and suffering compensation</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>One-year statute of limitations:</strong> Most medical malpractice claims must be filed within one year of discovery</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Expert testimony required:</strong> 95% of cases need medical experts to establish standard of care violations</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Notice requirements before filing:</strong> California requires 90-day notice to healthcare providers before lawsuit</span>
            </li>
          </ul>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#1d1d1f]/80 leading-relaxed mb-6">
            When you seek medical care, you place enormous trust in healthcare providers to diagnose conditions accurately, perform procedures safely, and prescribe appropriate treatments. Unfortunately, medical errors occur with alarming frequency throughout California's healthcare system, causing preventable injuries, prolonged suffering, and devastating losses to patients and families who expected competent care.
          </p>
          
          <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-8">
            Medical malpractice represents one of the most complex areas of personal injury law, involving intricate medical knowledge, extensive documentation requirements, expert witness testimony, and unique legal standards that differ significantly from other negligence claims. Understanding your rights when healthcare providers fail to meet professional standards becomes essential for protecting yourself and your family from the consequences of medical negligence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">250K+</div>
            <div className="text-sm text-[#86868b]">Annual medical error deaths</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">$350K</div>
            <div className="text-sm text-[#86868b]">MICRA damage cap</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">1 Year</div>
            <div className="text-sm text-[#86868b]">Statute of limitations</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">95%</div>
            <div className="text-sm text-[#86868b]">Cases need expert testimony</div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">What Constitutes Medical Malpractice in California</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              Medical malpractice occurs when healthcare providers deviate from accepted standards of medical practice, causing injury to patients under their care. Not every unfortunate medical outcome constitutes malpractice, as medicine involves inherent uncertainties and risks that even competent practitioners cannot always control. Legal malpractice specifically requires proving four essential elements: duty, breach, causation, and damages.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">The Duty Element</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Establishes that a doctor-patient relationship existed, creating professional obligations to provide care meeting accepted medical standards. This relationship typically begins when a healthcare provider agrees to treat a patient, creating legal responsibilities continuing until treatment concludes or proper transfer occurs.
                </p>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Breach of Standard of Care</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Demonstrates that the healthcare provider failed to meet professional standards of care that reasonably competent medical professionals would have followed under similar circumstances. California law defines this standard through expert testimony from qualified medical professionals practicing in the same or similar specialty.
                </p>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Causation</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Links the provider's substandard care directly to the patient's injuries, proving that proper treatment would have prevented or minimized harm. This element often presents the most challenging aspect of malpractice claims, as medical conditions frequently involve multiple contributing factors.
                </p>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Damages</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Encompasses the actual harm suffered due to medical negligence, including physical injuries, emotional trauma, additional medical expenses, lost income, and diminished quality of life. California law requires demonstrating measurable losses beyond mere disappointment with treatment outcomes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Common Types of Medical Malpractice</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Diagnostic Errors</h3>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-4">
                  Represent the most frequent category of medical malpractice, encompassing misdiagnosis, delayed diagnosis, and failure to diagnose serious medical conditions. When physicians misinterpret symptoms, overlook crucial test results, or fail to order appropriate diagnostic procedures, patients suffer worsening conditions that proper diagnosis would have caught earlier.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-[#1d1d1f] mb-3">Common Diagnostic Failures:</h4>
                  <ul className="space-y-2 text-[#1d1d1f]/70">
                    <li>• Cancer misdiagnosis allowing malignancies to advance</li>
                    <li>• Heart attacks misdiagnosed as indigestion</li>
                    <li>• Strokes attributed to migraines</li>
                    <li>• Infections dismissed as viral illnesses</li>
                    <li>• Radiologists missing tumor indicators on imaging</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Surgical Errors</h3>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-4">
                  Encompass a wide range of preventable mistakes occurring during operations, from wrong-site surgery performing procedures on incorrect body parts to leaving surgical instruments inside patients after closing incisions. The consequences range from temporary injuries requiring corrective procedures to permanent disabilities, disfigurement, and death.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-[#d2d2d7] rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-[#1d1d1f] mb-2">Surgical Mistakes</h4>
                    <ul className="space-y-1 text-sm text-[#1d1d1f]/70">
                      <li>• Operating on wrong patient</li>
                      <li>• Wrong-site procedures</li>
                      <li>• Damaging organs/nerves</li>
                      <li>• Leaving instruments inside</li>
                    </ul>
                  </div>
                  <div className="border border-[#d2d2d7] rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-[#1d1d1f] mb-2">Anesthesia Errors</h4>
                    <ul className="space-y-1 text-sm text-[#1d1d1f]/70">
                      <li>• Brain damage from oxygen deprivation</li>
                      <li>• Awareness during surgery</li>
                      <li>• Allergic reactions from poor history review</li>
                      <li>• Dosage miscalculations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Medication Errors</h3>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Kill thousands of patients annually through incorrect prescriptions, wrong dosages, harmful drug interactions, and administration mistakes. Physicians prescribing medications without checking patient allergies, pharmacists dispensing wrong medications, and nurses administering drugs to wrong patients all constitute medication malpractice.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-[#1d1d1f] mb-4">Birth Injuries</h3>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Obstetric malpractice causes devastating harm to newborns and mothers through failures to monitor fetal distress, delayed cesarean sections, improper use of forceps or vacuum extractors, and medication errors during labor. Cerebral palsy, Erb's palsy, brain damage from oxygen deprivation, and maternal hemorrhaging represent common birth injury claims.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">California's MICRA Law: Understanding Damage Caps</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              The Medical Injury Compensation Reform Act (MICRA) enacted in 1975 places a $350,000 cap on non-economic damages in medical malpractice cases. This controversial law significantly impacts compensation for pain and suffering, emotional distress, and loss of companionship, regardless of injury severity.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Important MICRA Limitations:</h3>
              <ul className="space-y-3 text-[#1d1d1f]/70">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">⚠</span>
                  <span><strong>$350,000 cap applies only to non-economic damages</strong> - Economic damages (medical bills, lost wages) have no cap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">⚠</span>
                  <span><strong>Periodic payment requirements</strong> - Damages over $50,000 may be paid over time rather than lump sum</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 text-xl">⚠</span>
                  <span><strong>Attorney fee limitations</strong> - Sliding scale limits attorney contingency fees in malpractice cases</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">The Statute of Limitations in Medical Malpractice Cases</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              California imposes strict time limits for filing medical malpractice lawsuits. Understanding these deadlines is critical, as missing them forever bars your claim regardless of merit.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">One Year from Discovery</h4>
                <p className="text-[#1d1d1f]/70">
                  You must file within one year of discovering (or reasonably should have discovered) the injury and its connection to medical negligence.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Three Years Maximum</h4>
                <p className="text-[#1d1d1f]/70">
                  Even if you don't discover the malpractice immediately, you cannot file more than three years after the incident (with limited exceptions).
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="my-16 p-12 rounded-3xl bg-gradient-to-br from-[#007AFF] via-[#0051D5] to-[#003DA5] text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Victim of Medical Malpractice?</h2>
          <p className="text-xl mb-8 opacity-95">
            Former defense attorney now fighting for medical malpractice victims. Free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#007AFF] hover:bg-white/90 text-lg px-8 h-14 font-semibold rounded-full"
            >
              <Link to="/#contact">Free Case Review</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#007AFF] text-lg px-8 h-14 font-semibold rounded-full"
            >
              <Link to="tel:8181234567">Call (818) 123-4567</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#d2d2d7]">
          <h3 className="text-3xl font-bold text-[#1d1d1f] mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/brain-injuries" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Brain Injuries</h4>
                <p className="text-[#86868b]">Understanding traumatic brain injury claims...</p>
              </div>
            </Link>
            <Link to="/blog/wrongful-death" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Wrongful Death</h4>
                <p className="text-[#86868b]">Rights when medical errors cause death...</p>
              </div>
            </Link>
            <Link to="/blog/compensation" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Compensation Guide</h4>
                <p className="text-[#86868b]">Maximizing damages in medical cases...</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default MedicalMalpractice;