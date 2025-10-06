import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import wrongfulDeathImg from '@/assets/blog/wrongful-death.jpg';

const WrongfulDeath = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Wrongful Death Claims in California: Rights and Compensation | Trembach Law Firm"
        description="Comprehensive guide to wrongful death claims in California. Learn about eligibility, damages, legal process, and protecting your family's rights after a tragic loss."
        keywords="wrongful death, California wrongful death claims, wrongful death damages, fatal accident lawyer, survivor benefits"
        canonical="https://www.trembachlawfirm.com/blog/wrongful-death"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={wrongfulDeathImg}
            alt="Wrongful Death Claims Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Wrongful Death Claims in California: Rights and Compensation
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              November 28, 2025
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
            Losing a loved one due to someone else's negligence creates devastating emotional and financial hardships. California wrongful death law provides surviving family members legal recourse to hold responsible parties accountable and obtain compensation for their losses. Understanding wrongful death claims helps grieving families protect their rights during impossibly difficult times.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">What Constitutes Wrongful Death</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Wrongful death occurs when a person dies due to another's wrongful act or negligence. This broad definition encompasses motor vehicle accidents, medical malpractice, workplace accidents, defective products, criminal acts, and premises liability incidents. Any death that could have supported a personal injury claim had the victim survived potentially constitutes wrongful death.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Proving wrongful death requires establishing the defendant's negligence or wrongful conduct caused the death. This involves demonstrating duty of care, breach of that duty, causation linking the breach to death, and resulting damages. The burden of proof remains preponderance of evidence—more likely than not—rather than criminal law's beyond reasonable doubt standard.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Who Can File Wrongful Death Claims</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California Code of Civil Procedure Section 377.60 limits wrongful death claim filing to specific surviving family members. The surviving spouse or domestic partner holds primary rights to file claims. If no spouse exists, the decedent's children may file. If neither spouse nor children survive, other heirs including parents and siblings may pursue claims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Putative spouses—those believing in good faith they were validly married—possess wrongful death rights even if the marriage proves invalid. Stepchildren and financially dependent minors living in the household may also qualify as wrongful death claimants under California law.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Damages in Wrongful Death Cases</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Economic damages include funeral and burial expenses, medical bills from final illness or injury, and loss of financial support the deceased would have provided. Calculating lost financial support requires evaluating the deceased's earning capacity, career trajectory, life expectancy, and contributions to family finances. Economic experts typically testify regarding these projections.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Non-economic damages compensate for loss of companionship, love, affection, guidance, and protection. While impossible to quantify precisely, these genuine losses merit substantial compensation. Children losing parents suffer lifelong impacts from lost guidance and support. Spouses lose life partners and companions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Punitive damages may apply when defendants acted with malice, oppression, or fraud. These damages punish egregious conduct and deter similar behavior. Drunk driving deaths, intentional violence, and grossly negligent conduct may support punitive damage claims.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Survival Actions vs. Wrongful Death</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Survival actions differ from wrongful death claims, though both may arise from the same death. Survival actions pursue damages the deceased could have claimed had they survived—pain and suffering before death, medical expenses, and lost earnings between injury and death. The deceased's estate brings survival actions with proceeds distributed according to wills or intestate succession.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Wrongful death claims compensate survivors for their losses—financial support, companionship, guidance. These distinct claims serve different purposes and benefit different parties, though often pursued simultaneously against the same defendants.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">California's Statute of Limitations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California generally provides two years from the death date to file wrongful death lawsuits. Missing this deadline typically bars claims permanently, regardless of case merit. However, certain circumstances can modify deadlines, making early legal consultation essential.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Government entity involvement dramatically shortens filing deadlines. Claims against government entities require administrative claims within six months of death, with lawsuits following if claims are denied. These strict deadlines demand immediate legal action following deaths involving government employees or property.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Wrongful Death Causes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Motor vehicle accidents cause significant wrongful deaths annually. Drunk driving, speeding, distracted driving, and reckless conduct kill thousands on California roads each year. Wrongful death claims hold negligent drivers accountable and compensate surviving families.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medical malpractice kills more Americans than car accidents according to some studies. Surgical errors, medication mistakes, misdiagnoses, and delayed treatment cause preventable deaths. Medical malpractice wrongful death cases require extensive expert testimony and face additional procedural requirements.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Workplace accidents including construction falls, industrial accidents, and occupational diseases cause wrongful deaths. While workers' compensation typically prohibits employer lawsuits, third-party liability claims against equipment manufacturers, property owners, or contractors may provide compensation beyond workers' comp benefits.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Distribution of Settlement or Verdict</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Courts allocate wrongful death recoveries among qualifying family members considering their relationships with the deceased and resulting losses. Spouses typically receive substantial portions reflecting lost companionship and financial support. Children's allocations consider age, dependency level, and lost guidance.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Multiple heirs pursuing claims may disagree regarding settlement decisions or recovery distribution. Courts resolve these disputes ensuring fair allocation while respecting family dynamics. Experienced attorneys help families navigate these sensitive discussions during grief.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Insurance Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance policy limits frequently prove inadequate for wrongful death damages. California's minimum insurance requirements rarely compensate families fully for lost financial support over decades. Identifying all applicable insurance policies—auto, homeowner's, umbrella, professional liability—maximizes available compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Uninsured/underinsured motorist coverage on the deceased's auto policy may provide additional compensation when at-fault parties lack adequate insurance. This coverage protects families from defendants' inadequate insurance, though specific procedures must be followed to access these benefits.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Legal Representation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Wrongful death cases involve complex legal issues, extensive damage calculations, and difficult insurance negotiations during impossibly emotional times. Experienced wrongful death attorneys handle legal complexities while families grieve, ensuring rights are protected and adequate compensation obtained.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Calculating lifetime financial losses requires economic experts, life care planners, and vocational specialists. Attorneys coordinate these experts, presenting comprehensive evidence supporting claimed damages. This expertise proves essential for maximizing compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance companies deploy aggressive tactics minimizing wrongful death claims. Having experienced representation levels the playing field, ensuring families aren't taken advantage of during vulnerability. Attorneys negotiate from strength, backed by trial readiness and comprehensive damage documentation.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Compassionate Wrongful Death Representation</h3>
            <p className="text-gray-700 mb-6">
              During your family's darkest hour, you deserve compassionate legal representation that fights for justice while handling complex legal matters. Our experienced wrongful death attorneys will protect your rights and pursue the compensation your family deserves.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#007AFF] hover:bg-[#0051D5] text-white font-semibold"
            >
              <Link to="/free-consultation">Contact Us for a Free Consultation</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Related Articles</h3>
            <div className="space-y-3">
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Understanding Compensation in Injury Cases
              </Link>
              <Link to="/blog/legal-process" className="block text-[#007AFF] hover:underline">
                The Legal Process Explained
              </Link>
              <Link to="/blog/family-impact" className="block text-[#007AFF] hover:underline">
                Family Impact of Serious Injuries
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WrongfulDeath;
