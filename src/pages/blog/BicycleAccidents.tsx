import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import bicycleAccidentsImg from '@/assets/blog/bicycle-accidents.jpg';

const BicycleAccidents = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Bicycle Accident Claims: Protecting Cyclists' Rights in California"
        description="Expert guide to bicycle accident claims. Learn about cyclist rights, common accident causes, liability, and compensation for bike-related injuries."
        keywords="bicycle accidents, cyclist rights, California bike laws, bicycle injury claims, bike vs car accidents"
        canonical="https://www.trembachlawfirm.com/blog/bicycle-accidents"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={bicycleAccidentsImg}
            alt="Bicycle Accidents Legal Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Bicycle Accident Claims: Protecting Cyclists' Rights in California
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              November 12, 2025
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
            California's roads see increasing bicycle traffic as more people embrace cycling for transportation, recreation, and fitness. While state law provides important protections for cyclists, bicycle accidents continue to cause serious injuries and fatalities. Understanding your legal rights as a cyclist is essential for obtaining fair compensation after an accident.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">California Bicycle Laws and Cyclist Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California Vehicle Code Section 21200 establishes that cyclists have the same rights and responsibilities as motor vehicle operators. This means bicycles are entitled to use the roadway and must be afforded the same respect as cars, trucks, and motorcycles. Drivers who fail to recognize cyclist rights often cause preventable accidents.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The "Three Feet for Safety Act" (Vehicle Code Section 21760) requires drivers to maintain at least three feet of distance when passing cyclists. Violations of this law demonstrate driver negligence and establish liability in sideswipe and rear-end bicycle accidents. Many serious injuries result from drivers passing too closely.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cyclists have the right to take the full lane when necessary for safety, including narrow lanes, avoiding hazards, or preparing for turns. The common misconception that cyclists must ride as far right as possible leads to conflicts and accidents. Understanding lane positioning rights helps establish liability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Causes of Bicycle Accidents</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dooring accidents occur when vehicle occupants open car doors into cyclists' paths without checking for approaching bicycles. These preventable accidents often cause serious injuries as cyclists have no time to avoid sudden door openings. California law requires occupants to ensure safe door opening.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Right hook collisions happen when drivers turn right across cyclists' paths at intersections. Drivers failing to check mirrors or blind spots before turning strike cyclists traveling straight through intersections. These accidents frequently occur at bike lanes and intersections.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Left cross accidents involve drivers turning left in front of oncoming cyclists, misjudging distance or failing to see approaching bicycles. These high-speed impacts often cause catastrophic injuries as cyclists have little opportunity to brake or evade.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Typical Bicycle Accident Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Head injuries and traumatic brain injuries represent the most serious bicycle accident consequences. Even helmet-wearing cyclists suffer concussions, skull fractures, and brain damage in severe accidents. These injuries require extensive medical treatment and may cause permanent cognitive impairment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Road rash and soft tissue injuries occur when cyclists are thrown from bikes onto pavement. While sometimes dismissed as minor, severe road rash requires surgical debridement, skin grafts, and plastic surgery. Permanent scarring and disfigurement warrant significant compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Fractures and orthopedic injuries frequently affect arms, wrists, collarbones, and legs in bicycle accidents. Cyclists instinctively extend arms to break falls, often resulting in wrist and collarbone fractures. These injuries may require surgery, hardware implantation, and lengthy rehabilitation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Establishing Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Driver negligence forms the basis of most bicycle accident claims. Proving drivers violated traffic laws, failed to yield right-of-way, drove distracted, or failed to maintain proper lookout establishes liability. Police reports, witness statements, and video evidence prove crucial.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            California's comparative fault system allows recovery even when cyclists share some responsibility. Minor cyclist violations like not using lights at night don't bar recovery but reduce damages proportionally. Experienced attorneys can minimize fault attribution to maximize compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dangerous road conditions may support claims against government entities. Poorly maintained bike lanes, missing signage, hazardous road surfaces, or inadequate lighting can constitute government liability. These claims face strict procedural requirements and shortened deadlines.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Insurance Coverage Issues</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Many bicycle accidents involve drivers with minimum insurance coverage inadequate to compensate serious injuries. California's $15,000 minimum bodily injury coverage rarely covers extensive medical treatment, lost wages, and pain and suffering from severe bicycle accidents. Identifying additional coverage sources becomes critical.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Uninsured/underinsured motorist coverage on your auto policy may provide compensation when at-fault drivers lack adequate insurance. This coverage applies even though you weren't in your car during the accident. Review your auto policy to understand available coverage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hit-and-run bicycle accidents present special challenges. Uninsured motorist coverage typically covers hit-and-run accidents, but strict reporting requirements apply. Immediately reporting accidents to police and your insurance company protects your coverage rights.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Maximizing Your Compensation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Documenting all accident-related expenses proves essential for full compensation. Medical bills, prescription costs, physical therapy, bicycle repair or replacement, and damaged clothing all merit compensation. Maintain detailed records and receipts for all expenses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Calculating lost income includes missed work during recovery and reduced earning capacity from permanent injuries. Self-employed cyclists and those with variable income must carefully document earning losses. Economic experts can project future earning impairment for serious injuries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Non-economic damages addressing pain, suffering, and reduced quality of life often exceed economic damages in serious bicycle accidents. The trauma of being struck by a vehicle, ongoing pain, scarring, and inability to enjoy cycling and other activities warrant substantial compensation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Critical Steps After a Bicycle Accident</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Calling 911 ensures police documentation and emergency medical response. Even if injuries seem minor, adrenaline can mask serious trauma. Police reports establish official accident records crucial for insurance claims and litigation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Gathering evidence at the scene when safely possible strengthens your claim. Photograph vehicle damage, bicycle damage, skid marks, road conditions, and injuries. Obtain driver information, insurance details, and witness contact information. This evidence becomes invaluable when insurance companies dispute liability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Seeking immediate medical evaluation documents injuries and begins necessary treatment. Delayed medical care allows insurance companies to argue injuries weren't serious or weren't caused by the accident. Follow all treatment recommendations and attend all appointments.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why You Need an Attorney</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Bicycle accident cases require understanding complex traffic laws, cyclist rights, and liability principles. Insurance companies often argue cyclists contributed to accidents or exaggerate the role of comparative fault. Experienced attorneys counter these tactics effectively.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Investigating bicycle accidents thoroughly often reveals evidence supporting liability claims. Attorneys can obtain surveillance footage, download vehicle event data recorders, and interview witnesses that victims cannot access independently. This evidence often proves crucial in disputed cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Calculating full damages requires medical expertise, economic analysis, and experience with bicycle accident cases. Attorneys work with specialists to project lifetime medical costs, future lost earnings, and appropriate compensation for pain and suffering, ensuring settlements address all losses.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Protect Your Rights as a Cyclist</h3>
            <p className="text-gray-700 mb-6">
              If you've been injured in a bicycle accident, don't let insurance companies minimize your claim. Our experienced bicycle accident attorneys understand California cycling laws and will fight to protect your rights and secure fair compensation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold"
            >
              <Link to="/free-consultation">Get Your Free Case Review</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/blog/motorcycle-accidents" className="block text-[#007AFF] hover:underline">
                Motorcycle Accident Rights and Claims
              </Link>
              <Link to="/blog/pedestrian-accidents" className="block text-[#007AFF] hover:underline">
                Pedestrian Accident Legal Guide
              </Link>
              <Link to="/blog/brain-injuries" className="block text-[#007AFF] hover:underline">
                Understanding Traumatic Brain Injuries
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BicycleAccidents;
