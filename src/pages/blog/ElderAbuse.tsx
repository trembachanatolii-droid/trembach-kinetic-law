import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const ElderAbuse = () => {
  const currentCategory = 'Nursing Home Abuse';
  
  return (
    <>
      <SEO 
        title="Elder Abuse & Nursing Home Neglect in California: Legal Rights | Trembach Law"
        description="Protecting seniors from abuse and neglect in nursing homes and care facilities. Learn about warning signs, legal rights, and how to hold facilities accountable for elder abuse."
        keywords="elder abuse attorney, nursing home neglect, senior abuse lawyer, California elder law, assisted living abuse, long-term care abuse"
        canonical="https://www.trembachlawfirm.com/blog/elder-abuse"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
            alt="Elder care and nursing home safety"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Elder Abuse & Nursing Home Neglect: Protecting Our Seniors
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
              Our elderly loved ones deserve dignity, respect, and proper care. When nursing homes and care facilities fail to provide adequate protection, families have legal recourse to hold them accountable.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Elder Abuse</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Elder abuse in California takes many forms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Physical Abuse:</strong> Hitting, pushing, restraining, rough handling, over-medication</li>
              <li><strong>Emotional/Psychological Abuse:</strong> Verbal assaults, threats, humiliation, isolation</li>
              <li><strong>Sexual Abuse:</strong> Non-consensual contact or exploitation</li>
              <li><strong>Financial Exploitation:</strong> Theft of money or property, unauthorized use of funds</li>
              <li><strong>Neglect:</strong> Failure to provide basic needs like food, water, hygiene, or medical care</li>
              <li><strong>Abandonment:</strong> Desertion by caregivers responsible for their care</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Warning Signs of Nursing Home Abuse</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Recognize these red flags:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Physical Signs:</strong> Unexplained bruises, cuts, burns, bedsores, broken bones, weight loss</li>
              <li><strong>Behavioral Changes:</strong> Withdrawal, depression, anxiety, fear of caregivers, changes in personality</li>
              <li><strong>Poor Hygiene:</strong> Dirty clothes, unchanged bedding, body odor, unkempt appearance</li>
              <li><strong>Environmental Issues:</strong> Unsanitary conditions, safety hazards, inadequate staffing</li>
              <li><strong>Medical Neglect:</strong> Missed medications, untreated conditions, worsening health</li>
              <li><strong>Financial Red Flags:</strong> Unexplained withdrawals, missing valuables, changed wills or powers of attorney</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Forms of Nursing Home Neglect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Neglect often results from understaffing and cost-cutting:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Pressure Ulcers (Bedsores):</strong> Preventable wounds from prolonged pressure, indicating inadequate turning and positioning</li>
              <li><strong>Falls:</strong> Due to insufficient supervision, lack of assistive devices, or unsafe environment</li>
              <li><strong>Dehydration/Malnutrition:</strong> Failure to provide adequate food and fluids</li>
              <li><strong>Medication Errors:</strong> Wrong dosages, missed medications, harmful drug interactions</li>
              <li><strong>Infections:</strong> UTIs, pneumonia, sepsis from poor hygiene and medical care</li>
              <li><strong>Wandering/Elopement:</strong> Residents with dementia leaving facilities unsupervised</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">California's Elder Abuse Laws</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California provides strong legal protections:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Elder Abuse and Dependent Adult Civil Protection Act:</strong> Allows victims to sue for damages beyond standard negligence claims</li>
              <li><strong>Enhanced Damages:</strong> Courts can award pain and suffering damages, attorney's fees, and punitive damages</li>
              <li><strong>Recklessness Standard:</strong> Lower burden of proof than willful misconduct for enhanced remedies</li>
              <li><strong>Mandatory Reporting:</strong> Healthcare workers and caregivers must report suspected abuse</li>
              <li><strong>Criminal Penalties:</strong> Elder abuse can result in criminal charges and imprisonment</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Facilities' Legal Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nursing homes and care facilities must:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Adequate Staffing:</strong> Maintain sufficient trained staff to meet residents' needs</li>
              <li><strong>Proper Training:</strong> Ensure staff are qualified and trained in elder care</li>
              <li><strong>Care Plans:</strong> Develop and follow individualized care plans</li>
              <li><strong>Safety Measures:</strong> Prevent falls, provide supervision, maintain safe environment</li>
              <li><strong>Medical Care:</strong> Provide or arrange necessary medical treatment</li>
              <li><strong>Background Checks:</strong> Screen employees for criminal history and abuse records</li>
              <li><strong>Reporting:</strong> Report incidents to authorities and family members</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who Can File an Elder Abuse Claim?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Claims can be brought by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>The Elder Victim:</strong> If they have capacity to understand and consent</li>
              <li><strong>Conservator:</strong> Legal guardian appointed by the court</li>
              <li><strong>Family Members:</strong> After the elder's death, for wrongful death claims</li>
              <li><strong>Estate Representative:</strong> For survival actions and damages</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Compensation in Elder Abuse Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Victims may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Expenses:</strong> Past and future treatment, rehabilitation, therapy</li>
              <li><strong>Pain and Suffering:</strong> Physical pain and emotional distress</li>
              <li><strong>Enhanced Remedies:</strong> Additional damages under the Elder Abuse Act</li>
              <li><strong>Punitive Damages:</strong> Punishment for egregious conduct by facilities</li>
              <li><strong>Attorney's Fees:</strong> Recovery of legal costs</li>
              <li><strong>Wrongful Death:</strong> If abuse or neglect resulted in death</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Investigation and Evidence</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Building a strong case requires:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Medical Records:</strong> Complete documentation of injuries and treatment</li>
              <li><strong>Facility Records:</strong> Care plans, incident reports, staffing logs</li>
              <li><strong>Photographs:</strong> Visual documentation of injuries and conditions</li>
              <li><strong>Witness Statements:</strong> From staff, other residents, visitors</li>
              <li><strong>Expert Testimony:</strong> Medical professionals and elder care experts</li>
              <li><strong>State Inspections:</strong> Licensing agency reports and violations</li>
              <li><strong>Financial Records:</strong> For financial exploitation cases</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Reporting Elder Abuse in California</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you suspect abuse:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Adult Protective Services:</strong> Call 1-833-401-0832 for immediate investigation</li>
              <li><strong>Long-Term Care Ombudsman:</strong> Report to state advocates for residents</li>
              <li><strong>Local Police:</strong> For emergency situations or criminal conduct</li>
              <li><strong>State Licensing Agency:</strong> File complaints with California Department of Social Services</li>
              <li><strong>Document Everything:</strong> Keep detailed records of concerns and incidents</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Time Limits for Filing Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California statutes of limitations:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Elder Abuse Claims:</strong> Two years from discovery of abuse</li>
              <li><strong>Wrongful Death:</strong> Two years from date of death</li>
              <li><strong>Professional Negligence:</strong> One year for medical malpractice claims</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Legal Representation Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Elder abuse cases require attorneys who:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Understand complex regulations governing nursing homes</li>
              <li>Have relationships with medical experts specializing in geriatric care</li>
              <li>Can navigate the Elder Abuse Act's enhanced remedies</li>
              <li>Know how to hold corporate nursing home chains accountable</li>
              <li>Handle sensitive family situations with compassion</li>
              <li>Maximize compensation for elderly victims and families</li>
            </ul>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Elder Abuse Representation</h3>
              <p className="text-gray-700 mb-6">
                Our firm is dedicated to protecting seniors from abuse and neglect. We thoroughly investigate nursing home facilities and fight to hold them accountable when they fail our most vulnerable population.
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

export default ElderAbuse;
