import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { blogPosts } from '@/data/blogPosts';

const DefectiveProducts = () => {
  const currentCategory = 'Product Liability';
  
  return (
    <>
      <SEO 
        title="Defective Product Claims in California: Liability & Consumer Rights | Trembach Law"
        description="Understanding product defects, manufacturer liability, and how to pursue compensation for injuries from dangerous products. Expert product liability representation from Trembach Law Firm."
        keywords="defective product lawyer, California product liability, dangerous products, manufacturer negligence, consumer protection, product recall attorney"
        canonical="https://www.trembachlawfirm.com/blog/defective-products"
      />
      
      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/90 to-[#0051D5]/90 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1586864387634-70e1d0b2e5e5?auto=format&fit=crop&q=80"
            alt="Product safety and consumer protection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Defective Product Claims: Holding Manufacturers Accountable
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                January 15, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                12 min read
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
              When defective products cause injuries, California law provides strong protections for consumers. Understanding product liability law is essential for holding manufacturers accountable and obtaining compensation for your injuries.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Product Defects</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Product liability claims involve three main types of defects:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Design Defects:</strong> Flaws in the product's design that make it inherently dangerous, even when manufactured correctly. The entire product line is defective (e.g., vehicles prone to rollovers, tools without safety guards)</li>
              <li><strong>Manufacturing Defects:</strong> Errors during production that make specific products dangerous, though the design is safe. Only some products are defective (e.g., contaminated medication, improperly assembled machinery)</li>
              <li><strong>Marketing Defects (Failure to Warn):</strong> Inadequate instructions, warnings, or labels about product risks. The product may be safe if used correctly, but lacks proper guidance (e.g., missing side effect warnings, inadequate safety instructions)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Defective Products</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Dangerous products frequently causing injuries include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Vehicles:</strong> Defective airbags, brake failures, accelerator problems, tire blowouts</li>
              <li><strong>Medical Devices:</strong> Hip implants, pacemakers, surgical mesh, IVC filters</li>
              <li><strong>Pharmaceuticals:</strong> Dangerous medications, contaminated drugs, inadequate warnings</li>
              <li><strong>Consumer Products:</strong> Toys with choking hazards, cribs with entrapment risks, exploding electronics</li>
              <li><strong>Power Tools:</strong> Saws without blade guards, grinders causing kickback, nail guns misfiring</li>
              <li><strong>Household Appliances:</strong> Washing machines catching fire, dryers igniting, space heaters overheating</li>
              <li><strong>Children's Products:</strong> Car seats, strollers, high chairs with structural failures</li>
              <li><strong>Recreational Equipment:</strong> ATVs prone to rollover, defective helmets, faulty climbing gear</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Strict Liability in California</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California applies strict liability to product defect cases. This means you don't need to prove the manufacturer was negligent—only that:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>The product had a defect when it left the manufacturer</li>
              <li>The defect made the product unreasonably dangerous</li>
              <li>You were injured while using the product in a reasonably foreseeable manner</li>
              <li>The defect was a substantial factor in causing your injury</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              This legal standard makes it easier for injured consumers to recover damages compared to traditional negligence claims.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who Can Be Held Liable?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Multiple parties in the distribution chain may be responsible:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Manufacturers:</strong> Companies that designed and produced the product</li>
              <li><strong>Component Part Manufacturers:</strong> Makers of defective parts used in the final product</li>
              <li><strong>Wholesalers:</strong> Companies that distribute products to retailers</li>
              <li><strong>Retailers:</strong> Stores that sold the defective product to consumers</li>
              <li><strong>Importers:</strong> Companies bringing foreign-made products into the U.S.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can pursue claims against multiple defendants to maximize your chances of recovery.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Proving a Product Liability Claim</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Strong cases require comprehensive evidence:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>The Product:</strong> Preserve the defective item in its post-accident condition</li>
              <li><strong>Packaging and Instructions:</strong> Keep all original materials, warnings, and manuals</li>
              <li><strong>Purchase Records:</strong> Receipts showing when and where you bought the product</li>
              <li><strong>Medical Records:</strong> Documentation of injuries and treatment</li>
              <li><strong>Expert Analysis:</strong> Engineers or specialists who can identify the defect</li>
              <li><strong>Similar Incidents:</strong> Reports of other injuries from the same product</li>
              <li><strong>Photos and Videos:</strong> Visual evidence of the defect and accident scene</li>
              <li><strong>Witness Statements:</strong> Testimony about how the accident occurred</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Product Recalls and Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If a product is recalled:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>The recall strengthens your liability claim by proving the manufacturer knew of the defect</li>
              <li>You may still file a lawsuit even if you ignored the recall</li>
              <li>Injuries occurring before the recall announcement are especially strong cases</li>
              <li>The recall notice can serve as evidence of the defect</li>
              <li>Post-recall injuries may still be compensable if warnings were inadequate</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Damages in Product Liability Cases</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Victims may recover:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Economic Damages:</strong> Medical bills, lost wages, future treatment costs, diminished earning capacity</li>
              <li><strong>Non-Economic Damages:</strong> Pain and suffering, emotional distress, loss of enjoyment of life, disfigurement</li>
              <li><strong>Punitive Damages:</strong> In cases of willful misconduct or fraud, additional damages to punish the manufacturer</li>
              <li><strong>Wrongful Death Damages:</strong> Funeral costs, loss of financial support, loss of companionship for surviving family</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Defenses Manufacturers May Use</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Common defenses include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Product Alteration:</strong> Claiming you modified the product after purchase</li>
              <li><strong>Misuse:</strong> Arguing you used the product in an unforeseeable way</li>
              <li><strong>Assumption of Risk:</strong> Asserting you knowingly used a dangerous product</li>
              <li><strong>Comparative Fault:</strong> Claiming you were partially responsible for your injuries</li>
              <li><strong>Statute of Limitations:</strong> Arguing your claim was filed too late</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Class Actions vs. Individual Claims</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When many people are injured by the same defective product:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li><strong>Class Action Lawsuits:</strong> Group all similar claims together, efficient for widespread harm with similar injuries, but typically lower individual recovery</li>
              <li><strong>Individual Lawsuits:</strong> Pursue your own case, better for severe or unique injuries, allows for maximum compensation based on your specific damages</li>
              <li><strong>Mass Tort Litigation:</strong> Coordinates similar cases while maintaining individual claims, combines efficiency with personalized recovery</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Consumer Product Safety Commission (CPSC)</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The CPSC oversees consumer product safety:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Issues recalls of dangerous products</li>
              <li>Maintains database of consumer complaints and injuries</li>
              <li>Conducts safety testing and investigations</li>
              <li>Reports can be used as evidence in liability cases</li>
              <li>You can report dangerous products at SaferProducts.gov</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Steps to Take After a Product Injury</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Protect your claim by:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-3">
              <li>Seeking immediate medical attention</li>
              <li>Preserving the product exactly as it was after the accident</li>
              <li>Keeping all packaging, instructions, and receipts</li>
              <li>Documenting the scene with photos and videos</li>
              <li>Reporting the incident to the CPSC</li>
              <li>Not returning the product to the manufacturer</li>
              <li>Gathering contact information from witnesses</li>
              <li>Consulting an attorney before speaking with manufacturers or insurers</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Statute of Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              California generally allows two years from the date of injury to file a product liability lawsuit. However, there's also a "discovery rule" that may extend this deadline if the defect or injury wasn't immediately apparent. For wrongful death claims, the time limit is two years from the date of death.
            </p>

            <div className="bg-[#007AFF]/5 border-l-4 border-[#007AFF] p-8 my-12 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Product Liability Representation</h3>
              <p className="text-gray-700 mb-6">
                Product liability cases require extensive resources to investigate defects, retain expert witnesses, and take on large corporations. Our firm has successfully represented clients injured by dangerous products and secured significant compensation.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-[#007AFF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0051D5] transition-all shadow-lg hover:shadow-xl"
              >
                Free Case Review
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

export default DefectiveProducts;