import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import productLiabilityImg from '@/assets/blog/product-liability.jpg';

const ProductLiability = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Product Liability Claims: Defective Product Injuries | Trembach Law Firm"
        description="Comprehensive guide to product liability claims in California. Learn about defective products, manufacturer liability, and compensation for product-related injuries."
        keywords="product liability, defective products, California product claims, manufacturer liability, dangerous products"
        canonical="https://www.trembachlawfirm.com/blog/product-liability"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={productLiabilityImg}
            alt="Product Liability Claims Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Product Liability Claims: Defective Product Injuries
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              December 13, 2025
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
            When defective products cause injuries, California law holds manufacturers, distributors, and retailers strictly liable regardless of negligence. Product liability claims provide injured consumers recourse for damages caused by dangerous design defects, manufacturing flaws, or inadequate warnings. Understanding product liability law protects your rights when defective products cause harm.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Types of Product Defects</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Design defects exist when products are inherently dangerous due to flawed design. Even perfectly manufactured products with design defects pose unreasonable risks to consumers. Design defect claims require proving safer alternative designs existed that manufacturers failed to implement without substantially impairing product utility or increasing costs prohibitively.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Manufacturing defects occur when individual products deviate from intended design during production. These defects affect specific items rather than entire product lines. Manufacturing defect examples include contaminated food products, improperly assembled machinery, or products with missing safety components.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Warning defects involve inadequate instructions or failure to warn about known dangers. Manufacturers must provide clear warnings about non-obvious risks and proper usage instructions. Inadequate warnings or instructions that fail to communicate dangers in understandable language establish liability for resulting injuries.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Strict Liability Standard</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            California employs strict liability for product defect cases, meaning injured parties need not prove manufacturer negligence. Establishing that products were defective when leaving manufacturers' control and caused injuries while being used as intended suffices for liability. This plaintiff-friendly standard recognizes manufacturers' superior ability to prevent defects.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The burden shifts to manufacturers to prove products were not defective or that defects did not cause injuries claimed. This evidentiary advantage helps injured consumers overcome manufacturers' superior resources and technical knowledge. However, plaintiffs must still prove causation linking defects to specific injuries.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Defective Products</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pharmaceutical products cause injuries through dangerous side effects, contamination, or inadequate warnings about risks. Drug manufacturers face strict liability when medications cause harm that adequate warnings could have prevented. Medical device defects including hip implants, pacemakers, and surgical tools result in serious complications requiring additional surgeries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Automotive defects including faulty brakes, defective airbags, fuel system problems, and steering failures cause catastrophic accidents. Vehicle manufacturers conducting recalls acknowledge defects, strengthening liability claims. However, recall notices don't necessarily prove defects caused specific accidents—causation requires separate proof.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Consumer products ranging from children's toys to household appliances cause injuries when design flaws, manufacturing defects, or inadequate warnings create unreasonable dangers. Products marketed toward children face heightened scrutiny as manufacturers must anticipate foreseeable misuse.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Identifying Liable Parties</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Product manufacturers bear primary liability for defective products. This includes designers, assemblers, and brand-name companies marketing products. Component part manufacturers face liability when their defective components cause injuries even if final products are assembled by others.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Distributors and retailers in the chain of commerce share strict liability for selling defective products. Even retailers unaware of defects face liability under strict product liability doctrine. This chain-of-commerce liability ensures injured consumers can recover compensation even when manufacturers are bankrupt or foreign.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Proving Product Defects</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Expert testimony proves essential in product liability cases. Engineers, product designers, and industry specialists analyze products, identify defects, and explain how defects caused injuries. Biomechanical experts connect product failures to specific injury mechanisms. These expert opinions counter manufacturer defenses.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Preserving defective products constitutes critical evidence. Plaintiffs must maintain products in post-incident condition for expert examination and testing. Discarding or repairing defective products destroys crucial evidence and can doom claims. Photographs document product condition but cannot replace physical evidence for expert analysis.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Common Defenses</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Product misuse defenses argue that injuries resulted from using products in unintended, unforeseeable ways. However, manufacturers must anticipate reasonably foreseeable misuse. Courts recognize that consumers don't always follow instructions perfectly, and products should be designed accounting for predictable human behavior.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Assumption of risk claims assert that plaintiffs knowingly encountered product dangers. This defense requires proving plaintiffs had actual knowledge of specific risks and voluntarily proceeded despite that knowledge. General awareness that products could be dangerous doesn't establish assumption of risk—plaintiffs must understand the particular danger that caused injury.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comparative fault can reduce damages when plaintiffs contributed to their injuries. California's comparative fault system reduces compensation proportionally when injured parties share responsibility. However, comparative fault doesn't bar recovery entirely as long as defendants share some liability.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Available Damages</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medical expenses include emergency treatment, hospitalization, surgeries, rehabilitation, and future medical care necessitated by product-related injuries. Defective medical devices often require removal surgeries and replacement procedures. Pharmaceutical injuries may cause permanent conditions requiring lifetime treatment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lost wages and diminished earning capacity compensate for income losses and reduced ability to work. Serious product-related injuries often cause permanent disabilities preventing victims from returning to previous employment. Economic experts calculate lifetime earning losses accounting for career trajectory and retirement age.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pain and suffering damages address physical discomfort, emotional distress, and reduced quality of life. Product injuries involving burns, amputations, or permanent disfigurement warrant substantial non-economic damages. The unexpected nature of product failures and resulting betrayal of consumer trust amplifies emotional impacts.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Punitive Damages</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Punitive damages punish manufacturers for egregious conduct and deter similar behavior. Evidence that manufacturers knew about defects but failed to warn consumers or recall products supports punitive damage claims. Internal documents revealing cost-benefit analyses valuing profits over safety particularly motivate punitive awards.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            California limits punitive damages to conduct involving malice, oppression, or fraud. Mere negligence doesn't suffice—plaintiffs must prove manufacturers acted with conscious disregard for consumer safety. Discovery often reveals manufacturer knowledge of dangers, supporting punitive claims.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Class Actions and MDL</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Widespread defective products injuring numerous people often result in class action lawsuits or multidistrict litigation (MDL). These consolidated proceedings efficiently resolve common legal and factual issues affecting many plaintiffs. Participation in class actions or MDL provides access to extensive resources and expert witnesses individual plaintiffs couldn't afford.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            However, class action settlements may provide less compensation than individual lawsuits for seriously injured victims. Attorneys evaluate whether joining class actions or pursuing individual claims better serves specific circumstances. Severe injuries often justify individual litigation despite time and expense involved.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Specialized Representation Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Product liability cases require substantial resources for expert witnesses, product testing, and document discovery. Manufacturers employ teams of engineers, scientists, and attorneys defending against claims. Experienced product liability attorneys access necessary experts and conduct thorough investigations establishing liability.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding complex engineering principles, manufacturing processes, and industry standards proves essential for successful product liability litigation. Attorneys experienced in these cases recognize defects, identify liable parties, and present evidence persuasively to juries unfamiliar with technical concepts.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Hold Manufacturers Accountable</h3>
            <p className="text-gray-700 mb-6">
              If a defective product has injured you or a loved one, manufacturers must be held accountable. Our experienced product liability attorneys have the resources and expertise to take on major corporations and fight for the compensation you deserve.
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
              <Link to="/blog/catastrophic-injuries" className="block text-[#007AFF] hover:underline">
                Catastrophic Injury Claims
              </Link>
              <Link to="/blog/compensation" className="block text-[#007AFF] hover:underline">
                Maximizing Your Compensation
              </Link>
              <Link to="/blog/evidence" className="block text-[#007AFF] hover:underline">
                Gathering Evidence for Your Claim
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProductLiability;
