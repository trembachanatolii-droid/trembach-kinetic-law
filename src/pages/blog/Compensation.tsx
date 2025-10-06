import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import compensationImg from '@/assets/blog/compensation.jpg';

const Compensation = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Maximizing Your Personal Injury Compensation | Trembach Law Firm"
        description="Expert guide to understanding and maximizing personal injury compensation in California. Learn about damages types, valuation methods, and negotiation strategies."
        keywords="personal injury compensation, damages calculation, settlement value, California injury claims, pain and suffering damages"
        canonical="https://www.trembachlawfirm.com/blog/compensation"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={compensationImg}
            alt="Maximizing Injury Compensation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Maximizing Your Personal Injury Compensation
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              November 18, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              14 min read
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
            Understanding how personal injury compensation is calculated empowers accident victims to recognize fair settlement offers and avoid accepting inadequate amounts. California law provides multiple categories of damages designed to make injured parties whole, but insurance companies routinely undervalue claims. This comprehensive guide explains compensation components and strategies for maximizing your recovery.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Types of Compensable Damages</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Economic damages cover quantifiable financial losses directly resulting from your injury. Medical expenses constitute the most straightforward economic damages, including emergency room treatment, hospitalization, surgery, diagnostic tests, prescription medications, medical equipment, physical therapy, and future medical care. California law permits recovery of all reasonable and necessary medical expenses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lost wages encompass income lost during recovery and reduced earning capacity from permanent impairment. This includes missed work time, lost overtime opportunities, diminished promotion prospects, and complete career changes necessitated by injuries. Economic experts often testify regarding lifetime earning losses in serious injury cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Property damage compensation covers vehicle repair or replacement costs, damaged personal belongings, and rental car expenses during repairs. While typically straightforward in auto accidents, property damage can become complex when vehicles are totaled or diminished in value despite repairs.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Non-Economic Damages Explained</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pain and suffering compensation addresses physical discomfort and emotional distress caused by injuries. California employs no specific formula for calculating pain and suffering, though insurance companies often use multipliers based on medical expenses. Severe, permanent, or particularly painful injuries warrant higher multipliers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Loss of enjoyment of life recognizes diminished ability to participate in activities that previously brought pleasure and fulfillment. Whether you can no longer play sports, enjoy hobbies, travel comfortably, or engage in social activities, these losses merit compensation beyond medical bills and lost wages.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Emotional distress damages compensate for psychological impacts including anxiety, depression, PTSD, sleep disturbances, and relationship difficulties stemming from your accident. Mental health treatment records and expert testimony help establish these often-overlooked damages.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Calculating Future Damages</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Future medical expenses require careful evaluation of ongoing treatment needs, including anticipated surgeries, continued therapy, prescription medications, assistive devices, home modifications, and long-term care. Life care planners and medical experts project these costs, which insurance companies often dispute or minimize.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Permanent disability significantly impacts earning capacity and quality of life. Vocational experts evaluate how injuries affect your ability to perform job duties, necessitate career changes, or prevent working entirely. These assessments prove crucial for accurately valuing permanent disability claims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Present value calculations account for receiving future damages as lump sum settlements rather than periodic payments over time. Economic experts discount future costs to present value using appropriate discount rates, ensuring compensation adequately addresses future needs.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Factors Affecting Compensation Value</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Liability clarity directly impacts settlement values. Clear defendant liability with strong evidence supporting your version of events increases compensation potential. Disputed liability or shared fault reduces settlement values proportionally under California's comparative fault system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Injury severity and permanence significantly affect compensation amounts. Catastrophic injuries including brain damage, spinal cord injuries, amputations, and severe burns command substantially higher settlements than soft tissue injuries or fractures that heal completely. Permanent impairment multiplies compensation value.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance policy limits cap available compensation regardless of actual damages. When at-fault parties carry minimum insurance insufficient to cover injuries, identifying additional coverage sources or pursuing personal assets becomes necessary for full compensation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Insurance Company Tactics</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Early settlement offers arrive before injury extent becomes fully apparent. Insurance adjusters know desperate victims facing mounting bills may accept inadequate settlements. These initial offers rarely account for future medical needs, permanent disability, or full pain and suffering damages.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Delay tactics aim to frustrate claimants into accepting lower settlements. Requesting unnecessary documentation, scheduling multiple medical examinations, and dragging out negotiations hope victims will settle cheaply to resolve claims quickly. Patience and experienced representation counter these tactics.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Minimizing injury severity represents standard insurance practice. Adjusters argue injuries weren't serious, resulted from pre-existing conditions, or don't require extensive treatment. Medical documentation, expert opinions, and thorough documentation combat these arguments effectively.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Documenting Your Damages</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comprehensive medical records prove injury extent and treatment necessity. Maintain detailed records of all medical appointments, treatments, prescriptions, and follow-up care. Gaps in treatment allow insurance companies to argue injuries weren't serious or resolved.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Financial documentation establishes economic losses accurately. Collect pay stubs, tax returns, employment verification letters, medical bills, pharmacy receipts, and expense records. Organize these documents chronologically for clear damage presentation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Daily journals documenting pain levels, activity limitations, emotional struggles, and quality of life impacts provide powerful evidence supporting non-economic damages. These contemporaneous records prove more compelling than later recollections.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Special Compensation Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Loss of consortium claims compensate spouses for lost companionship, affection, and sexual relations resulting from serious injuries. While difficult to quantify, these genuine losses merit separate compensation beyond the injured party's damages.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Punitive damages may apply when defendants acted with malicious intent, fraud, or oppression. California limits punitive damages to conduct beyond mere negligence. Drunk driving, assault, or intentional misconduct may support punitive damage claims designed to punish and deter.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Scarring and disfigurement compensation recognizes permanent physical changes affecting appearance and self-esteem. Location, size, and visibility of scars influence compensation amounts. Facial scarring typically commands higher compensation than scars hidden by clothing.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Settlement vs. Trial Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Settlement negotiations offer faster resolution and guaranteed compensation without trial risks. However, settlements typically provide less than potential jury verdicts. Experienced attorneys evaluate whether settlement offers adequately compensate your losses or whether trial presents better options.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Trial verdicts can result in substantially higher compensation when juries sympathize with injured victims and punish negligent defendants. However, trials involve uncertainty, time, stress, and risk of receiving less than settlement offers. Thorough case evaluation guides this critical decision.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Mediation provides middle ground between settlement negotiations and trial. Neutral mediators help parties reach voluntary agreements, often resulting in higher compensation than insurance company offers while avoiding trial costs and risks.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Legal Representation Increases Compensation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Statistics consistently show represented claimants receive substantially higher compensation than unrepresented victims, even accounting for attorney fees. Attorneys understand true claim values, counter insurance tactics effectively, and negotiate from positions of strength backed by trial readiness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Experienced personal injury attorneys access expert witnesses including medical specialists, economists, vocational experts, and life care planners who establish full damage extent. These experts provide testimony insurance companies cannot easily refute, strengthening compensation demands.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Attorney involvement signals claimants won't accept inadequate settlements. Insurance companies know represented clients understand their rights and will pursue litigation if necessary. This knowledge motivates fairer settlement offers avoiding litigation costs.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Get the Compensation You Deserve</h3>
            <p className="text-gray-700 mb-6">
              Don't let insurance companies minimize your claim. Our experienced personal injury attorneys will fight to maximize your compensation and ensure you receive fair settlement for all your damages.
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
              <Link to="/blog/settlement-strategy" className="block text-[#007AFF] hover:underline">
                Settlement Strategy: When to Accept or Negotiate
              </Link>
              <Link to="/blog/legal-strategy" className="block text-[#007AFF] hover:underline">
                Legal Strategy for Maximizing Your Claim
              </Link>
              <Link to="/blog/evidence" className="block text-[#007AFF] hover:underline">
                Gathering Evidence to Support Your Claim
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Compensation;
