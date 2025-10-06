import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import evidenceImg from '@/assets/blog/evidence.jpg';

const Evidence = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Gathering Evidence for Personal Injury Claims | Trembach Law Firm"
        description="Expert guide to collecting and preserving evidence for injury claims in California. Learn what evidence you need and how to protect it for maximum compensation."
        keywords="personal injury evidence, accident documentation, claim evidence, California injury proof, preserve evidence"
        canonical="https://www.trembachlawfirm.com/blog/evidence"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={evidenceImg}
            alt="Evidence Collection Guide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Gathering Evidence for Personal Injury Claims
          </h1>
          <div className="flex items-center justify-center gap-6 text-white/90 text-sm">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              December 7, 2025
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
            Strong evidence separates successful personal injury claims from denied ones. Insurance companies challenge every aspect of injury claims, making comprehensive documentation essential. Understanding what evidence to collect, how to preserve it, and when to gather it maximizes your chances of fair compensation.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Photographic Evidence</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Accident scene photographs capture crucial details before conditions change. Take multiple photos from various angles showing overall scene layout, vehicle positions, damage patterns, skid marks, traffic signals, road conditions, weather, lighting, and any visible injuries. Time-stamped smartphone photos provide dated evidence proving conditions at accident times.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Injury documentation through photographs proves valuable for demonstrating injury severity and progression. Photograph injuries immediately after accidents and regularly during treatment, showing bruising development, swelling, scars, and recovery stages. These visual records powerfully communicate injury impacts to insurance adjusters and juries.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Medical Records and Bills</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Comprehensive medical documentation forms the foundation of injury claims. Medical records prove injury existence, treatment necessity, and causation linking injuries to accidents. Obtain complete records from all healthcare providers including emergency rooms, hospitals, physicians, specialists, physical therapists, and mental health professionals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Medical bills document treatment costs and support economic damage claims. Maintain organized files of all medical bills, prescription receipts, medical equipment costs, and travel expenses for medical appointments. These detailed records ensure no compensable expenses are overlooked during settlement negotiations.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Police and Accident Reports</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Police reports create official accident records including officer observations, party statements, witness information, and preliminary fault determinations. Obtain copies of all police reports immediately. These reports often contain information unavailable elsewhere and carry significant weight with insurance companies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Incident reports filed with property owners, employers, or businesses document accidents occurring on their premises or involving their employees. Always insist on official incident reports being filed and obtain copies. These contemporaneous reports often contain admissions or information helpful to your claim.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Witness Statements</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Eyewitness testimony provides independent verification of accident circumstances. Identify witnesses at accident scenes and obtain contact information immediately. Witnesses disappear quickly and memories fade, making prompt documentation essential. Record witness accounts on smartphones or write detailed notes while fresh.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Expert witnesses including accident reconstruction specialists, medical experts, and economic analysts provide professional opinions supporting your claims. Attorneys typically arrange expert witnesses, but identifying potential experts early helps build stronger cases. Expert testimony often proves decisive in disputed liability or damages cases.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Employment and Wage Documentation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Lost wage claims require documentation from employers verifying missed work and income losses. Obtain letters from employers stating your position, wage rate, missed work dates, and total lost earnings. Include pay stubs showing pre-accident earnings and post-accident reductions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Self-employed individuals need tax returns, business records, contracts, and bank statements proving income losses. Document cancelled appointments, lost business opportunities, and reduced productivity. Economic experts can analyze business records to calculate self-employment income losses.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Video Evidence</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Surveillance footage from businesses, traffic cameras, or dash cams captures accident details impossible to obtain otherwise. Act quickly to preserve video evidence as most systems overwrite footage after days or weeks. Attorneys can send preservation letters requiring footage retention pending investigation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Day-in-the-life videos document how injuries impact daily activities, demonstrating limitations that medical records cannot fully convey. These videos show struggles with basic tasks, pain levels, mobility restrictions, and quality of life impacts, creating powerful evidence for non-economic damages.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Personal Journals</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Daily journals documenting pain levels, activity limitations, emotional struggles, and treatment appointments create contemporaneous records proving non-economic damages. Write entries immediately after events while details remain fresh. These authentic records prove more compelling than later recollections.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Include specific details about pain intensity, medications taken, activities missed, emotional effects, and how injuries affect relationships and daily life. The more detailed and honest your entries, the more valuable they become as evidence supporting pain and suffering claims.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Property Damage Evidence</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vehicle damage photographs and repair estimates document accident severity and support injury claims. Extensive vehicle damage suggests severe impacts likely causing injuries. Obtain multiple repair estimates and maintain damaged vehicles until insurance inspections complete.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Personal property damage including clothing, phones, glasses, or other items damaged in accidents should be preserved. These items demonstrate impact forces and provide additional compensation claims. Photograph damaged items before discarding and retain if possible.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Digital Evidence</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cell phone records can prove distracted driving when other parties were using phones during accidents. Attorneys can subpoena phone records showing calls, texts, or data usage at accident times. This evidence powerfully establishes negligence in distracted driving cases.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Event data recorders in modern vehicles capture speed, braking, steering, and other data before crashes. This electronic evidence proves invaluable in disputed accident cases. Attorneys must act quickly to preserve this data before it's overwritten or vehicles are totaled.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Social Media Considerations</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Insurance companies routinely investigate claimants' social media accounts seeking posts contradicting injury claims. Seemingly innocent posts about activities can be twisted to argue injuries weren't serious. Maintain strict social media silence regarding accidents, injuries, and activities during claims.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Never delete existing social media posts after accidents, as this constitutes evidence destruction. Instead, make accounts private and avoid new posts. Attorneys can advise on social media use during claims to avoid jeopardizing cases.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Why Attorney Involvement Helps</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Attorneys know what evidence proves essential for different claim types. They can obtain evidence unavailable to victims including surveillance footage, phone records, employment files, and defendant records. Attorney preservation letters ensure crucial evidence isn't destroyed.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Expert witness coordination falls to attorneys who identify, retain, and work with specialists analyzing evidence and providing professional opinions. These experts transform raw evidence into compelling testimony supporting your claims and countering defense arguments.
          </p>

          <div className="bg-[#f5f5f7] p-8 rounded-2xl my-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Build the Strongest Possible Case</h3>
            <p className="text-gray-700 mb-6">
              Evidence collection requires knowing what to look for and how to preserve it properly. Our experienced attorneys will ensure all crucial evidence is identified, collected, and preserved to maximize your compensation.
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
              <Link to="/blog/accident-response" className="block text-[#007AFF] hover:underline">
                Critical Steps After an Accident
              </Link>
              <Link to="/blog/legal-strategy" className="block text-[#007AFF] hover:underline">
                Legal Strategy for Your Claim
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

export default Evidence;
