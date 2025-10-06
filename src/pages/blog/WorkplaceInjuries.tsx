import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import workplaceInjuriesImg from '@/assets/blog/workplace-injuries.jpg';

const WorkplaceInjuries = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Workplace Injury Claims: Workers' Comp and Beyond | Trembach Law Firm"
        description="Complete guide to workplace injury claims in California. Learn about workers' compensation, third-party claims, and your rights after on-the-job injuries."
        keywords="workplace injuries, workers compensation, California work injury claims, on-the-job accidents, third-party liability"
        canonical="https://www.trembachlawfirm.com/blog/workplace-injuries"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={workplaceInjuriesImg}
            alt="Workplace Injuries Legal Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Workplace Injury Claims: Workers' Comp and Beyond
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              November 15, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              13 min read
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
            Workplace injuries affect thousands of California workers annually, ranging from minor strains to catastrophic accidents. Understanding your rights under workers' compensation law and identifying potential third-party claims ensures you receive full compensation for your injuries, lost wages, and medical expenses.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Understanding California Workers' Compensation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workers' compensation provides a no-fault insurance system covering employees injured on the job. This means you don't need to prove employer negligence to receive benefits. In exchange, workers' comp generally prohibits suing employers for workplace injuries, with limited exceptions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Benefits include medical treatment coverage, temporary disability payments during recovery, permanent disability compensation for lasting impairment, and vocational rehabilitation if you cannot return to your previous work. Understanding these benefits helps ensure you receive everything you're entitled to receive.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Employers must carry workers' compensation insurance for all employees. Failure to maintain coverage constitutes a serious violation allowing injured workers to sue employers directly in civil court, potentially recovering damages unavailable through workers' comp.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Workplace Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Repetitive strain injuries develop over time from repeated motions, poor ergonomics, or sustained awkward positions. Carpal tunnel syndrome, tendinitis, and back injuries frequently affect office workers, warehouse employees, and manufacturing personnel. These injuries often worsen gradually before requiring medical intervention.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Falls from heights represent a leading cause of serious workplace injuries in construction, warehousing, and maintenance work. Inadequate fall protection, unstable scaffolding, or unsafe ladder use causes catastrophic injuries including spinal cord damage, traumatic brain injuries, and multiple fractures.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Machinery accidents occur when safety guards are removed, equipment malfunctions, or workers receive inadequate training. Amputations, crush injuries, and severe lacerations from industrial equipment often result in permanent disability and significant medical expenses.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Reporting Requirements and Deadlines</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California law requires reporting work injuries to employers within 30 days of the accident or discovering a work-related condition. Delayed reporting can jeopardize your benefits, so notify your employer immediately even for seemingly minor injuries that might worsen.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Employers must provide claim forms (DWC Form 1) within one business day of receiving injury reports. You have one year from the injury date to file a workers' compensation claim with the Division of Workers' Compensation. Missing this deadline typically bars benefits permanently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Document your injury report in writing, keeping copies for your records. If employers fail to report your injury to their insurance carrier, notify the California Division of Workers' Compensation directly. Employer retaliation for filing workers' comp claims is illegal.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Third-Party Liability Claims</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            While workers' comp prohibits suing employers, you can pursue personal injury claims against third parties whose negligence caused your workplace injury. These claims can provide compensation for pain and suffering, full lost wages, and other damages unavailable through workers' comp.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Common third-party defendants include equipment manufacturers, property owners, contractors, subcontractors, and delivery drivers. Construction sites particularly involve multiple parties whose negligence might cause injuries beyond your direct employer.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Defective equipment or machinery can support product liability claims against manufacturers. If faulty design, manufacturing defects, or inadequate warnings contributed to your injury, the manufacturer faces potential liability separate from workers' compensation benefits.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Employer Retaliation and Discrimination</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California Labor Code Section 132a prohibits employers from retaliating against workers for filing workers' compensation claims. Retaliation includes termination, demotion, reduced hours, harassment, or any adverse employment action motivated by your injury claim.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Proving retaliation requires showing your workers' comp claim was a substantial motivating factor in the adverse employment action. Timing between claim filing and employer action, inconsistent reasons for termination, and deviation from normal procedures all support retaliation claims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Successful retaliation claims can result in reinstatement, back pay, compensation for emotional distress, and attorney's fees. These claims proceed separately from workers' compensation proceedings and require consultation with employment law attorneys.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Calculating Workers' Compensation Benefits</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Temporary disability payments compensate for lost wages during recovery. California law generally provides two-thirds of your average weekly wages, subject to minimum and maximum limits that adjust annually. These payments continue until you reach maximum medical improvement or return to work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Permanent disability benefits compensate for lasting impairment affecting your ability to work. Doctors assign permanent disability ratings considering injury severity, occupation, and age. Higher ratings result in greater compensation, making accurate medical evaluations crucial.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vocational rehabilitation provides retraining assistance when injuries prevent returning to previous work. While California eliminated formal vocational rehabilitation benefits in 2012, permanent disability awards include supplemental job displacement benefits for retraining.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Dealing with Insurance Company Tactics</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workers' comp insurers often deploy claims adjusters to minimize benefits through various tactics. Delaying medical treatment authorization, disputing injury causation, conducting surveillance, and offering inadequate settlements all aim to reduce costs at your expense.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance companies frequently send injured workers to their chosen doctors for independent medical examinations (IMEs). These examinations rarely prove "independent," with doctors often minimizing injury severity. You have rights to obtain second opinions and challenge biased medical reports.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Early settlement offers rarely reflect true claim value, particularly for serious injuries with long-term consequences. Accepting settlements releases all claims against the employer and insurer, making consultation with experienced workers' comp attorneys essential before settling.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Occupational Diseases and Cumulative Trauma</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Occupational diseases develop from workplace exposure to harmful substances or conditions over time. Respiratory diseases from chemical exposure, hearing loss from workplace noise, and certain cancers from toxic materials all qualify for workers' compensation benefits.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cumulative trauma injuries result from repetitive activities or sustained exposure rather than single accidents. Carpal tunnel syndrome, chronic back injuries, and joint problems from repetitive motion qualify for benefits even without a specific injury date.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Proving causation for occupational diseases requires medical evidence linking conditions to workplace exposure. Occupational medicine specialists can provide crucial testimony establishing work-relatedness when insurance companies dispute claims.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Legal Representation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Navigating California's workers' compensation system proves complex without legal guidance. Insurance companies employ teams of adjusters and attorneys to minimize benefits. Having experienced representation levels the playing field and typically results in significantly higher benefits.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Attorneys can identify third-party liability claims unavailable through workers' comp alone. These separate personal injury claims can provide compensation for pain and suffering, full wage replacement, and other damages that workers' comp doesn't cover.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Appealing denied claims or inadequate permanent disability ratings requires understanding complex administrative procedures. The Workers' Compensation Appeals Board handles disputes, and representation significantly improves success rates in contested cases.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Protect Your Workers' Rights</h3>
            <p className="text-gray-700 mb-6">
              If you've been injured at work, don't navigate the workers' compensation system alone. Our experienced workplace injury attorneys will fight to maximize your benefits and identify all available compensation sources.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold"
            >
              <Link to="/free-consultation">Get Your Free Consultation</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/blog/catastrophic-injuries" className="block text-[#007AFF] hover:underline">
                Catastrophic Injury Claims
              </Link>
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Maximizing Your Injury Compensation
              </Link>
              <Link to="/blog/legal-strategy" className="block text-[#007AFF] hover:underline">
                Legal Strategy for Injury Claims
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WorkplaceInjuries;
