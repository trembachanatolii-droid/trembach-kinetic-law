import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import premisesLiabilityImg from '@/assets/blog/premises-liability.jpg';

const PremisesLiability = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Premises Liability Claims: Property Owner Responsibilities | Trembach Law Firm"
        description="Complete guide to premises liability claims in California. Learn about slip and falls, inadequate security, property owner duties, and injury compensation."
        keywords="premises liability, slip and fall, property owner liability, California premises law, inadequate security claims"
        canonical="https://www.trembachlawfirm.com/blog/premises-liability"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={premisesLiabilityImg}
            alt="Premises Liability Claims Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premises Liability Claims: Property Owner Responsibilities
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              December 1, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              11 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#007AFF] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Property owners owe visitors legal duties to maintain safe premises and warn of known hazards. When these duties are breached and injuries result, premises liability law provides recourse for compensation. Understanding property owner responsibilities and your rights as an injured visitor is essential for successful claims.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Property Owner Duties of Care</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Property owners must inspect their premises regularly to discover dangerous conditions. This duty requires reasonable efforts to identify hazards that might injure visitors. Simply claiming ignorance of dangerous conditions doesn't excuse liability when reasonable inspections would have revealed hazards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Once dangerous conditions are known or should be known, property owners must either repair them or provide adequate warnings. Temporary warnings like wet floor signs fulfill duties pending permanent repairs. However, warnings alone may not suffice for extremely dangerous conditions that should be eliminated entirely.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The level of care owed depends on visitor status. Invitees—those on premises for business purposes—receive the highest protection. Licensees—social guests—receive less protection. Trespassers generally receive minimal protection, though property owners cannot intentionally harm even trespassers.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Premises Liability Claims</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Slip and fall accidents constitute the most common premises liability claims. Wet floors, uneven surfaces, poor lighting, torn carpeting, and debris create fall hazards. These accidents often cause serious injuries including fractures, head trauma, and spinal damage, particularly among elderly victims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Inadequate security claims arise when foreseeable criminal acts injure visitors on poorly secured properties. Property owners in high-crime areas must provide reasonable security measures including adequate lighting, security personnel, functioning locks, and surveillance systems. Failure to provide reasonable security can establish liability for assaults, robberies, and other criminal acts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Swimming pool accidents frequently result in premises liability claims. California law requires specific safety features for residential pools including barriers, alarms, and safety covers. Pool owners who fail to implement required safety measures face liability for drownings and near-drowning incidents.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Proving Premises Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Establishing premises liability requires proving the property owner knew or should have known about the dangerous condition. Actual knowledge occurs when owners are aware of hazards. Constructive knowledge applies when hazards existed long enough that reasonable inspections would have discovered them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The dangerous condition must pose unreasonable risks of harm. Not every imperfect condition creates liability—only those presenting dangers exceeding what reasonable people would tolerate. Courts consider whether risks outweigh the burden of making conditions safer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Causation must link the dangerous condition directly to your injuries. This requires demonstrating the hazard actually caused your accident, not some other factor. Witness testimony, photographs, and expert opinions help establish this crucial element.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Comparative Fault Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California's comparative fault system reduces damages proportionally when injured parties share responsibility for accidents. Property owners frequently argue victims should have seen and avoided obvious hazards. However, distractions, poor lighting, or misleading conditions can defeat these arguments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Open and obvious danger doctrine previously barred recovery when hazards were readily apparent. However, modern California law merely considers danger obviousness as one factor in comparative fault analysis rather than completely barring recovery. Obvious dangers can still establish liability if creating unreasonable risks.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Documenting Your Claim</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Photograph accident scenes immediately, capturing hazardous conditions from multiple angles. Images of lighting conditions, floor surfaces, warning signs or their absence, and injury-causing hazards provide powerful evidence. Time-stamped photos prove conditions existed at accident times.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Incident reports created by property owners or managers constitute important evidence. Always insist on official incident reports being filed, obtaining copies for your records. These contemporaneous reports often contain admissions regarding dangerous conditions or inadequate maintenance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Witness information proves crucial when property owners deny hazardous conditions existed. Witnesses confirm accident circumstances, hazard existence, and absence of adequate warnings. Obtain contact information from anyone who saw your accident or the dangerous condition.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Available Compensation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medical expenses including emergency treatment, hospitalization, surgery, physical therapy, and future medical care qualify for compensation. Premises liability accidents often cause serious injuries requiring extensive treatment. Document all medical expenses carefully.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lost wages encompass time away from work during recovery. Serious premises liability injuries may cause permanent disability affecting future earning capacity. Economic experts calculate lifetime earning losses for permanent impairment cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pain and suffering compensation addresses physical discomfort and emotional distress from injuries. The sudden, unexpected nature of premises liability accidents often causes significant psychological trauma beyond physical injuries. These non-economic damages frequently exceed economic losses.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Insurance Coverage Issues</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Commercial general liability policies typically cover business premises liability claims. However, insurance companies often dispute coverage or claim policy exclusions apply. Understanding coverage issues and policy language requires experienced legal analysis.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Homeowner's insurance provides premises liability coverage for residential properties. Most policies include substantial liability limits, though minimum policies may prove inadequate for serious injuries. Additional umbrella policies might provide supplemental coverage exceeding homeowner policy limits.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Government Property Claims</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Injuries on government property face special procedural requirements. California Government Claims Act requires filing administrative claims within six months of injury. These strict deadlines and procedural requirements demand immediate legal consultation following government property injuries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Government entities enjoy certain immunities from premises liability. However, dangerous condition immunity exceptions allow claims for hazardous property conditions. These complex claims require attorneys experienced in government liability law.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Legal Representation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Premises liability cases require thorough investigation establishing dangerous conditions, property owner knowledge, and causation. Attorneys can obtain maintenance records, previous incident reports, surveillance footage, and expert opinions that victims cannot access independently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance companies aggressively defend premises liability claims, arguing injured parties should have avoided obvious hazards or that conditions weren't dangerous. Experienced attorneys counter these arguments with evidence and legal precedent supporting liability.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Hold Property Owners Accountable</h3>
            <p className="text-gray-700 mb-6">
              If you've been injured on someone else's property, don't let property owners or insurance companies minimize your claim. Our experienced premises liability attorneys will investigate thoroughly and fight for the compensation you deserve.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold"
            >
              <Link to="/free-consultation">Get Your Free Case Evaluation</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Maximizing Your Injury Compensation
              </Link>
              <Link to="/blog/evidence" className="block text-[#007AFF] hover:underline">
                Gathering Evidence for Your Claim
              </Link>
              <Link to="/blog/insurance-claims" className="block text-[#007AFF] hover:underline">
                Navigating Insurance Claims
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PremisesLiability;
