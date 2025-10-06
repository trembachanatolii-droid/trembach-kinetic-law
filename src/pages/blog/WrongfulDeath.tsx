import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const WrongfulDeath = () => {
  const currentCategory = 'Wrongful Death';
  
  return (
    <>
      <SEO 
        title="Wrongful Death Claims in California: Seeking Justice for Your Loss | Trembach Law"
        description="Understand wrongful death laws in California, who can file, what damages are available, and how to navigate the legal process during this difficult time."
        keywords="wrongful death, wrongful death lawsuit, California wrongful death law, death claim, loss of loved one, survivor benefits, wrongful death attorney"
        canonical="https://www.trembachlawfirm.com/blog/wrongful-death"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80"
            alt="Memorial and remembrance for wrongful death victims"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Wrongful Death Claims in California: Seeking Justice for Your Loss
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                October 27, 2025
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
              Losing a loved one due to someone else's negligence or wrongful act is devastating. While no amount of money can replace your loss, California's wrongful death laws provide a path to seek justice and financial recovery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What Constitutes Wrongful Death?</h2>
            <p className="text-gray-700 mb-6">
              A wrongful death occurs when a person dies due to the negligent, reckless, or intentional conduct of another person or entity. If the deceased could have filed a personal injury claim had they survived, their survivors may pursue a wrongful death claim.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Common Causes of Wrongful Death</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Vehicle accidents:</strong> Car, truck, motorcycle, and pedestrian fatalities</li>
              <li><strong>Medical malpractice:</strong> Surgical errors, misdiagnosis, medication mistakes</li>
              <li><strong>Workplace accidents:</strong> Construction falls, industrial accidents, equipment failures</li>
              <li><strong>Defective products:</strong> Dangerous consumer products, vehicles, medications</li>
              <li><strong>Premises liability:</strong> Fatal slip and falls, inadequate security</li>
              <li><strong>Nursing home abuse:</strong> Neglect leading to death of elderly residents</li>
              <li><strong>Intentional acts:</strong> Assault, battery, or other violent crimes</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who Can File a Wrongful Death Claim?</h2>
            <p className="text-gray-700 mb-6">
              California Code of Civil Procedure Section 377.60 specifies who may file a wrongful death lawsuit:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Primary Claimants</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Surviving spouse or domestic partner:</strong> First priority to file</li>
              <li><strong>Surviving children:</strong> Biological and adopted children</li>
              <li><strong>If no spouse or children:</strong> Other dependents who can prove financial dependency</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Secondary Claimants</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Putative spouse:</strong> Person who believed in good faith they were married</li>
              <li><strong>Stepchildren:</strong> Who were financially dependent on deceased</li>
              <li><strong>Parents:</strong> If no surviving spouse or children</li>
              <li><strong>Siblings:</strong> In limited circumstances</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Personal Representative</h3>
            <p className="text-gray-700 mb-6">
              The personal representative of the deceased's estate can file a survival action for damages the deceased experienced before death, such as pain and suffering, lost wages, and medical expenses.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Damages in Wrongful Death Cases</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Economic Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Loss of financial support:</strong> Income the deceased would have provided</li>
              <li><strong>Loss of benefits:</strong> Health insurance, pension, retirement accounts</li>
              <li><strong>Medical expenses:</strong> Final medical bills before death</li>
              <li><strong>Funeral and burial costs:</strong> Reasonable expenses for services</li>
              <li><strong>Loss of household services:</strong> Value of services deceased provided</li>
              <li><strong>Loss of gifts and inheritance:</strong> Expected future financial support</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Non-Economic Damages</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Loss of companionship:</strong> Emotional support and relationship</li>
              <li><strong>Loss of love and affection:</strong> Intimate relationship with deceased</li>
              <li><strong>Loss of consortium:</strong> Marital relationship and partnership</li>
              <li><strong>Loss of guidance:</strong> Parental guidance for children</li>
              <li><strong>Loss of protection:</strong> Emotional and physical protection</li>
              <li><strong>Mental anguish:</strong> Grief and emotional suffering</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Punitive Damages</h3>
            <p className="text-gray-700 mb-6">
              In cases involving extreme negligence or intentional misconduct, punitive damages may be awarded to punish the defendant and deter similar conduct. These are available in the survival action portion of the claim.
            </p>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Compassionate Wrongful Death Representation</h3>
              <p className="text-gray-700 mb-6">
                We understand that no amount of money can bring back your loved one. However, holding responsible parties accountable and securing financial recovery can help provide for your family's future. Our firm handles wrongful death cases with the compassion and dedication your family deserves.
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

export default WrongfulDeath;
