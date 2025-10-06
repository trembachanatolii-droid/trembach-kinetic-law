import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import catastrophicInjuriesImg from '@/assets/blog/catastrophic-injuries.jpg';

const CatastrophicInjuries = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Catastrophic Injury Claims: Legal Rights and Recovery | Trembach Law Firm"
        description="Comprehensive guide to catastrophic injury claims in California. Learn about brain injuries, spinal cord damage, burns, amputations, and maximizing compensation."
        keywords="catastrophic injuries, severe injury claims, traumatic brain injury, spinal cord injury, California catastrophic injury lawyer"
        canonical="https://www.trembachlawfirm.com/blog/catastrophic-injuries"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={catastrophicInjuriesImg}
            alt="Catastrophic Injuries Legal Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Catastrophic Injury Claims: Legal Rights and Recovery
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              November 22, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              15 min read
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
            Catastrophic injuries permanently alter lives, causing profound physical, emotional, and financial consequences. These severe injuries—including traumatic brain injuries, spinal cord damage, severe burns, and amputations—require lifetime medical care and dramatically reduce quality of life. Understanding your legal rights and the unique aspects of catastrophic injury claims is essential for securing adequate compensation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Defining Catastrophic Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Catastrophic injuries cause permanent disability preventing victims from working or performing daily activities independently. Unlike injuries that heal with treatment, catastrophic injuries result in permanent impairment requiring ongoing medical care, assistive devices, and often complete lifestyle changes. The American Medical Association defines catastrophic injuries as those resulting in permanent functional impairment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Common catastrophic injuries include traumatic brain injuries causing cognitive impairment, spinal cord injuries resulting in paralysis, severe burn injuries requiring extensive reconstructive surgery, amputations, multiple fractures, organ damage, and blindness or vision loss. Each injury type presents unique medical, legal, and compensation challenges.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Traumatic Brain Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Traumatic brain injuries represent particularly devastating catastrophic injuries due to their invisible nature and profound impacts. Moderate to severe TBIs cause cognitive impairment, personality changes, memory loss, speech difficulties, and physical disabilities. Many victims never return to their previous level of functioning despite extensive rehabilitation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            TBI compensation must account for lifetime medical care including neurology appointments, neuropsychological therapy, medications, assisted living facilities, and home health aides. Vocational rehabilitation proves impossible for many severe TBI victims, necessitating compensation for complete loss of earning capacity rather than reduced earnings.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Spinal Cord Injuries and Paralysis</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Spinal cord injuries causing paralysis rank among the most expensive catastrophic injuries to treat. Paraplegia and quadriplegia require extensive medical care, home modifications, specialized vehicles, wheelchairs, pressure sore prevention, bowel and bladder management programs, and personal care assistants. First-year costs often exceed $1 million, with substantial annual ongoing expenses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond medical expenses, paralysis dramatically impacts quality of life. Loss of independence, inability to work, sexual dysfunction, chronic pain, and depression commonly affect spinal cord injury victims. Comprehensive compensation must address these non-economic damages alongside quantifiable medical and care costs.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Severe Burn Injuries</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Third and fourth-degree burns cause permanent scarring, disfigurement, and functional impairment. Burn victims often require years of painful skin grafts, reconstructive surgeries, occupational therapy, and psychological counseling. Beyond physical pain, burn survivors face social stigma, relationship difficulties, and employment discrimination due to visible scarring.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Burn injury compensation must reflect the unique psychological impacts of disfigurement. Loss of self-esteem, social isolation, and mental health struggles warrant substantial non-economic damages. Expert testimony from psychologists and burn survivors helps juries understand the profound life changes burn injuries cause.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Amputations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Limb loss creates permanent disability requiring prosthetics, ongoing adjustments, physical therapy, and home modifications. Modern prosthetics enable many amputees to return to active lives, but these devices cost tens of thousands of dollars and require replacement every few years. Lifetime prosthetic costs easily exceed hundreds of thousands of dollars.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Amputation impacts extend beyond physical limitations. Phantom limb pain affects most amputees, often requiring pain management for years. Depression, anxiety, and PTSD commonly develop post-amputation. Comprehensive compensation accounts for these psychological impacts alongside medical expenses and lost earning capacity.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Calculating Lifetime Costs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Life care planners evaluate future medical needs, creating detailed cost projections for remaining life expectancy. These plans account for surgeries, medications, therapies, medical equipment, home health care, and facility costs. Insurance companies aggressively dispute life care plans, making qualified experts essential.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Economic experts project lost earning capacity considering pre-injury earnings, career trajectory, retirement age, and inflation. Catastrophic injuries often eliminate earning capacity entirely, justifying compensation for complete career loss. Present value calculations convert future losses to current settlement amounts.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Insurance Coverage Challenges</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Catastrophic injury costs frequently exceed standard insurance policy limits. California's minimum $15,000 bodily injury coverage proves grossly inadequate for injuries costing millions over a lifetime. Identifying all available insurance policies becomes crucial for adequate compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Underinsured motorist coverage on your own auto policy may provide additional compensation when at-fault parties lack sufficient insurance. Umbrella policies, commercial insurance, homeowner's insurance, and other coverage sources might apply depending on accident circumstances. Thorough investigation identifies all potential recovery sources.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Structured Settlements</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Structured settlements provide periodic payments over time rather than lump sums, ensuring funds remain available for future medical needs. Annuities guarantee lifetime income resistant to poor investment decisions or exploitation. Tax advantages make structured settlements attractive for catastrophic injury compensation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, structured settlements lack flexibility for unexpected costs or changed circumstances. Balancing lump sum payments for immediate needs with structured payments for ongoing expenses requires careful planning with financial advisors and settlement experts.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Medicare and Medicaid Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medicare and Medicaid liens require repayment from settlements for benefits paid. Medicare Set Aside accounts reserve settlement portions for future Medicare-covered expenses, protecting Medicare's interests while ensuring treatment funding. Failing to properly address Medicare interests can result in denied coverage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medicaid recovery claims demand careful handling to preserve settlement benefits while satisfying government reimbursement rights. Special needs trusts protect settlement funds from disqualifying catastrophically injured victims from needs-based government benefits.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Specialized Representation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Catastrophic injury cases require attorneys experienced in complex medical issues, life care planning, and maximizing compensation for permanent disabilities. These cases demand substantial resources for expert witnesses, medical evaluations, and comprehensive damage documentation. General practice attorneys lack the specialized knowledge catastrophic injury cases require.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Trial readiness proves essential in catastrophic injury cases where insurance companies offer inadequate settlements hoping victims accept rather than face uncertain jury verdicts. Experienced catastrophic injury attorneys build compelling cases demonstrating full damage extent, motivating fair settlements or achieving substantial jury verdicts.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Get Specialized Help for Your Catastrophic Injury</h3>
            <p className="text-gray-700 mb-6">
              Catastrophic injuries demand experienced legal representation to secure adequate lifetime compensation. Our attorneys understand the complex medical, financial, and legal aspects of these life-altering cases.
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
              <Link to="/blog/brain-injuries" className="block text-[#007AFF] hover:underline">
                Understanding Traumatic Brain Injuries
              </Link>
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Maximizing Your Injury Compensation
              </Link>
              <Link to="/blog/medical-malpractice" className="block text-[#007AFF] hover:underline">
                Medical Malpractice Claims
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CatastrophicInjuries;
