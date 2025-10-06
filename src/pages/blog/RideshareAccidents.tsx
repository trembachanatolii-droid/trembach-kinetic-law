import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import rideshareAccidentsImg from '@/assets/blog/rideshare-accidents.jpg';

const RideshareAccidents = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Rideshare Accident Claims: Uber and Lyft Injuries | Trembach Law Firm"
        description="Complete guide to rideshare accident claims in California. Learn about Uber and Lyft insurance, driver liability, and passenger rights after accidents."
        keywords="rideshare accidents, Uber accidents, Lyft accidents, California rideshare law, rideshare insurance claims"
        canonical="https://www.trembachlawfirm.com/blog/rideshare-accidents"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={rideshareAccidentsImg}
            alt="Rideshare Accidents Legal Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rideshare Accident Claims: Uber and Lyft Injuries
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              December 16, 2025
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
            Rideshare services like Uber and Lyft revolutionized transportation but created complex insurance and liability issues when accidents occur. Understanding rideshare company insurance policies, driver status, and your rights as a passenger or other motorist proves essential for obtaining fair compensation after rideshare-related accidents.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Rideshare Insurance Coverage Phases</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Phase 0 occurs when drivers are offline with rideshare apps closed. During this phase, only the driver's personal auto insurance applies. Rideshare companies provide no coverage. Many personal policies exclude rideshare activity, creating potential coverage gaps even during offline periods if drivers use vehicles for ridesharing.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Phase 1 begins when drivers activate rideshare apps and await ride requests. Rideshare companies provide limited liability coverage (typically $50,000 per person, $100,000 per accident, $25,000 property damage) during this waiting period. This coverage applies only if drivers' personal insurance doesn't cover accidents occurring while available for hire.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Phase 2 starts when drivers accept ride requests and continues through passenger pickup. Phase 3 covers the period passengers are in vehicles until dropoff. During Phases 2 and 3, rideshare companies provide $1 million liability policies covering passenger injuries and third-party claims. Uninsured/underinsured motorist coverage also applies at $1 million limits.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Passenger Injury Claims</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rideshare passengers injured due to driver negligence can claim against the rideshare company's $1 million policy. This substantial coverage typically provides adequate compensation for most injuries. However, catastrophic injuries may exceed even these limits, requiring additional recovery sources.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Accidents caused by other drivers create claims against at-fault parties' insurance plus potential uninsured/underinsured motorist claims against rideshare policies. When multiple insurance sources exist, coordination of benefits determines which policies pay primary and excess coverage. Attorneys navigate these complex coverage issues maximizing available compensation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Third-Party Motorist Claims</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Other drivers, pedestrians, and cyclists injured by negligent rideshare drivers can pursue claims against rideshare company policies during Phases 2 and 3. The $1 million coverage provides substantial protection for third-party injury victims. However, determining which phase applied at accident times proves crucial for coverage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Phase 1 accidents create coverage disputes as limited liability policies may prove inadequate for serious injuries. Establishing whether drivers had accepted rides or were merely waiting for requests determines available coverage. App records and driver statements provide evidence of active phase during accidents.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Driver Classification Issues</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rideshare companies classify drivers as independent contractors rather than employees. This classification affects liability and workers' compensation eligibility. Independent contractor status generally shields rideshare companies from vicarious liability for driver negligence, though the $1 million policies provide coverage regardless.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            California's AB5 law created new worker classification tests potentially affecting rideshare driver status. However, Proposition 22 exempted rideshare drivers from AB5, maintaining independent contractor classification. These legal battles continue affecting driver rights and company liability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Rideshare Accident Causes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Distracted driving from GPS navigation, app interaction, and passenger communication causes numerous rideshare accidents. Drivers checking apps for new ride requests, following navigation directions, and communicating with passengers divide attention from driving tasks. These distractions increase accident risks substantially.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Driver fatigue affects rideshare operators who work long hours maximizing earnings. Unlike traditional taxi services with shift limits, rideshare drivers set their own hours. Some drive excessive hours when fatigued, creating serious accident risks. Proving driver fatigue requires investigating work records and driving logs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Inadequate driver screening and training by rideshare companies contributes to accidents. While companies conduct background checks and require insurance, driver training remains minimal. Inexperienced drivers unfamiliar with areas navigate while transporting passengers, increasing accident likelihood.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Investigating Rideshare Accidents</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rideshare app data provides crucial evidence establishing driver status, route information, and accident circumstances. Attorneys can subpoena app records showing whether drivers had active rides, passengers aboard, or were waiting for requests. GPS data establishes speeds, locations, and driving patterns before crashes.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Driver background records may reveal previous violations, accidents, or safety concerns. While companies claim to screen drivers, investigations sometimes uncover drivers with poor safety records. Negligent hiring claims arise when companies hire drivers with disqualifying violations.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Special Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Assault and battery by rideshare drivers creates claims beyond typical accident cases. Rideshare companies may face liability for negligent hiring or retention when drivers with violent histories assault passengers. These cases require immediate police reporting and criminal proceedings alongside civil claims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Uninsured rideshare drivers operating without proper insurance create coverage problems. While companies require drivers maintain insurance, some drivers let policies lapse. Accidents during these lapses may leave only rideshare company policies available, creating potential coverage disputes.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Dealing with Rideshare Companies</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rideshare companies employ sophisticated claims departments handling thousands of accidents. These adjusters use similar tactics as traditional insurance companies—minimizing liability, disputing damages, and making low settlement offers. Don't assume rideshare companies will treat you fairly without legal representation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mandatory arbitration clauses in rideshare user agreements may require resolving disputes through arbitration rather than court litigation. However, California law limits arbitration enforceability in certain circumstances. Attorneys evaluate whether arbitration clauses apply to specific claims and whether they can be challenged.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Legal Representation Helps</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rideshare accident cases involve complex insurance coverage issues, multiple potential defendants, and substantial corporate resources defending claims. Experienced attorneys understand rideshare insurance structures, investigate thoroughly establishing liability, and negotiate effectively with company claims departments.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Obtaining evidence from rideshare companies requires legal processes including subpoenas and formal discovery. Companies don't voluntarily provide app data, driver records, or internal documents helpful to claims. Attorneys force disclosure of crucial evidence supporting liability and damages.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Expert Help with Your Rideshare Claim</h3>
            <p className="text-gray-700 mb-6">
              Rideshare accidents involve unique legal complexities requiring experienced representation. Our attorneys understand rideshare insurance, company policies, and effective strategies for maximizing your compensation.
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
                Auto Accident Claims Guide
              </Link>
              <Link to="/blog/insurance-claims" className="block text-[#007AFF] hover:underline">
                Navigating Insurance Claims
              </Link>
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Maximizing Your Compensation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RideshareAccidents;
