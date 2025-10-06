import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import pedestrianAccidentsImg from '@/assets/blog/pedestrian-accidents.jpg';

const PedestrianAccidents = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Pedestrian Accident Claims: Your Rights and Legal Options | Trembach Law Firm"
        description="Complete guide to pedestrian accident claims in California. Learn about liability, compensation, crosswalk laws, and protecting your legal rights."
        keywords="pedestrian accidents, crosswalk accidents, California pedestrian laws, pedestrian injury claims, hit by car"
        canonical="https://www.trembachlawfirm.com/blog/pedestrian-accidents"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={pedestrianAccidentsImg}
            alt="Pedestrian Accidents Legal Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pedestrian Accident Claims: Your Rights and Legal Options
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              November 8, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              10 min read
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
            Pedestrian accidents often result in severe injuries due to the vulnerability of those on foot compared to occupants of vehicles. California law provides strong protections for pedestrians, but navigating the legal process after being struck by a vehicle requires understanding your rights and the available compensation options.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">California Pedestrian Right-of-Way Laws</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California Vehicle Code Section 21950 grants pedestrians the right-of-way in marked crosswalks and at intersections. Drivers must yield to pedestrians who have entered the crosswalk or are close enough to constitute an immediate hazard. Violations of these laws establish driver negligence in most pedestrian accident cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Even outside designated crosswalks, drivers maintain a duty to exercise due care for pedestrian safety. While pedestrians have specific responsibilities regarding where and when to cross streets, driver negligence often outweighs pedestrian violations in determining fault and liability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Causes of Pedestrian Accidents</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Distracted driving has become the leading cause of pedestrian accidents in California. Drivers texting, talking on phones, eating, or engaging with vehicle entertainment systems fail to notice pedestrians in crosswalks or along roadways. These preventable accidents often result in serious injuries or fatalities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Failure to yield at crosswalks and intersections causes numerous pedestrian strikes annually. Drivers rolling through stop signs, making right turns on red without checking for pedestrians, or rushing through yellow lights strike people lawfully crossing streets. These violations demonstrate clear driver negligence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Poor visibility conditions, including darkness, rain, or fog, contribute to many pedestrian accidents. However, reduced visibility doesn't excuse drivers from their duty of care. Drivers must reduce speed and increase vigilance in low-visibility conditions to prevent striking pedestrians.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Pedestrian Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Traumatic brain injuries frequently occur when pedestrians strike their heads on vehicle hoods, windshields, or pavement. Even seemingly minor head impacts can cause concussions, contusions, or more severe traumatic brain injuries requiring extensive medical treatment and long-term care.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Spinal cord injuries and paralysis result from the severe impact forces in pedestrian accidents. These catastrophic injuries often permanently alter victims' lives, requiring lifetime medical care, home modifications, and assistive devices. Compensation must account for these extensive future needs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Orthopedic injuries including fractures, dislocations, and soft tissue damage commonly affect pedestrians struck by vehicles. Lower extremity injuries occur frequently as vehicles impact legs and hips. Multiple fractures requiring surgeries, hardware implantation, and extensive rehabilitation are typical in serious pedestrian accidents.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Establishing Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Driver negligence forms the basis of most pedestrian accident claims. Proving the driver violated traffic laws, failed to maintain proper lookout, drove distracted, or exceeded safe speeds establishes liability. Police reports, witness statements, and traffic camera footage provide crucial evidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            California's comparative fault system means pedestrian violations don't automatically bar recovery. Even if a pedestrian crossed outside a crosswalk or against a signal, they can still recover damages reduced by their percentage of fault. An experienced attorney can minimize fault attribution to maximize compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Third-party liability may exist beyond the driver. Vehicle owners, employers of drivers operating commercial vehicles, bars that overserved drunk drivers, and municipalities with dangerous road conditions might share liability. Identifying all potential defendants maximizes available compensation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Available Compensation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medical expenses constitute a major component of pedestrian accident damages. Emergency treatment, hospitalization, surgeries, rehabilitation, physical therapy, and ongoing medical care all qualify for compensation. Future medical needs must be carefully calculated and included in settlement demands or trial presentations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lost income and diminished earning capacity significantly impact pedestrian accident victims. Time away from work during recovery, reduced ability to perform job duties, and permanent disability affecting future earnings all merit compensation. Economic experts often testify regarding lifetime earning losses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pain and suffering damages address the physical discomfort and emotional trauma of pedestrian accidents. The fear and helplessness of being struck by a vehicle, ongoing pain from injuries, and psychological effects like PTSD warrant substantial compensation beyond economic losses.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Steps to Take After a Pedestrian Accident</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Seeking immediate medical attention is crucial even if injuries seem minor initially. Some serious injuries including head trauma and internal bleeding may not manifest symptoms immediately. Medical evaluation creates vital documentation linking injuries to the accident.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Reporting the accident to police ensures an official record exists. Police reports document the accident scene, driver information, witness statements, and preliminary fault determinations. This report becomes foundational evidence in your claim.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Preserving evidence at the scene when safely possible helps your case. Photographs of vehicle damage, skid marks, traffic signals, crosswalk markings, and injuries provide valuable documentation. Witness contact information proves invaluable when insurance companies dispute liability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Dealing with Insurance Companies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance adjusters often contact pedestrian accident victims quickly, seeking recorded statements before victims consult attorneys. These statements can be used against you to minimize your claim. Always consult an attorney before providing statements to any insurance company except your own.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Early settlement offers rarely reflect true case value. Insurance companies know pedestrian accidents often involve serious injuries with long-term consequences. Accepting quick settlements before understanding the full extent of injuries and future needs almost always results in inadequate compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your own insurance policy may provide coverage through uninsured/underinsured motorist provisions. If the at-fault driver lacks adequate insurance, your policy might cover your losses. An experienced attorney can navigate these complex coverage issues to maximize your recovery.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Legal Representation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pedestrian accident cases require thorough investigation to establish liability and document damages fully. Attorneys can obtain accident scene evidence, traffic camera footage, driver phone records, and witness statements that victims cannot access independently. This evidence often proves crucial in disputed cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Calculating future damages requires expertise in medical care costs, life care planning, and economic loss analysis. Attorneys work with medical experts, economists, and vocational specialists to accurately project lifetime costs and earning losses, ensuring settlements address all future needs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance companies employ teams of adjusters, investigators, and attorneys to minimize payouts. Having experienced legal representation levels the playing field, ensuring your rights are protected and you receive fair compensation for your injuries and losses.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Get the Legal Help You Deserve</h3>
            <p className="text-gray-700 mb-6">
              If you've been injured in a pedestrian accident, don't navigate the legal process alone. Our experienced attorneys understand California pedestrian laws and will fight to protect your rights and maximize your compensation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold"
            >
              <Link to="/free-consultation">Schedule Your Free Consultation</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/blog/auto-accidents" className="block text-[#007AFF] hover:underline">
                Auto Accident Claims in California
              </Link>
              <Link to="/blog/brain-injuries" className="block text-[#007AFF] hover:underline">
                Understanding Traumatic Brain Injuries
              </Link>
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Maximizing Your Injury Compensation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PedestrianAccidents;
