import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/blog/auto-accidents.jpg';

const AutoAccidents: React.FC = () => {
  return (
    <>
      <SEO
        title="Auto Accidents in California: Complete Legal Guide 2025 | Trembach Law"
        description="Comprehensive guide to California auto accident claims. Learn what to do after a crash, proving fault, maximizing compensation, and avoiding insurance company tricks."
        keywords="California auto accident lawyer, car accident attorney, car crash compensation, insurance claim help, personal injury attorney California"
        canonical="https://www.trembachlawfirm.com/blog/auto-accidents"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Auto Accidents Legal Guide"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-[#1d1d1f]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16">
          <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
          
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#007AFF]/20 border border-[#007AFF]/40 backdrop-blur-sm">
            <span className="text-sm font-semibold text-[#007AFF]">AUTO ACCIDENTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Auto Accidents in California: Complete Legal Guide 2025
          </h1>
          
          <div className="flex items-center gap-6 text-white/80 text-sm">
            <span>By Anatolii Trembach, Esq.</span>
            <span>•</span>
            <time dateTime="2025-10-24">October 24, 2025</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              26 min read
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        {/* Key Takeaways */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#007AFF]/5 to-[#007AFF]/10 border border-[#007AFF]/20">
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-[#1d1d1f]/80">
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>California has pure comparative negligence:</strong> You can recover even if partially at fault, though damages reduce proportionally</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Document everything immediately:</strong> Photos, witness information, and medical records are crucial for maximum compensation</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Never admit fault at the scene:</strong> Anything you say can reduce your recovery under comparative negligence rules</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Two-year statute of limitations:</strong> You must file lawsuits within two years of the accident date</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Insurance companies minimize payouts:</strong> Adjusters use tactics to undervalue claims</span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#1d1d1f]/80 leading-relaxed mb-6">
            California's congested highways and streets see over 200,000 injury-causing collisions annually, leaving victims facing medical bills, lost wages, vehicle damage, and life-altering injuries. Whether you were rear-ended on the 101, t-boned at a Calabasas intersection, or struck by a distracted driver, this comprehensive guide explains your legal rights, how to maximize compensation, and the critical mistakes that could destroy your claim's value.
          </p>
          
          <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-8">
            As a former defense attorney who once represented insurance companies, I know exactly how they minimize payouts and deny valid claims. This insider knowledge now helps my clients secure significantly higher settlements and verdicts. Understanding the legal process, common insurance tactics, and strategic approaches to building strong cases means the difference between fair compensation and being financially devastated by someone else's negligence.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">200K+</div>
            <div className="text-sm text-[#86868b]">Injury crashes annually</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">3,500+</div>
            <div className="text-sm text-[#86868b]">Fatal crashes each year</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">$15K</div>
            <div className="text-sm text-[#86868b]">Minimum liability insurance</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">2 Years</div>
            <div className="text-sm text-[#86868b]">Statute of limitations</div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">The Scope of California's Auto Accident Crisis</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              California leads the nation in traffic collisions, with thousands of serious crashes occurring daily across the state. Understanding the scale and nature of this crisis reveals why experienced legal representation is essential for protecting your rights.
            </p>
            
            <h3 className="text-3xl font-semibold text-[#1d1d1f] mt-8 mb-4">Common Causes of California Accidents</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Distracted Driving</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  The leading cause of California accidents involves drivers dividing attention between the road and distractions. Texting, phone conversations, eating, adjusting navigation systems, and interacting with passengers create dangerous inattention. California law prohibits handheld device use while driving, and violations establish negligence per se.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Speeding and Aggressive Driving</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Excessive speed reduces reaction time, increases stopping distances, and magnifies crash severity. California's congested urban highways see aggressive drivers weaving through traffic, tailgating, and racing. Black box data from vehicles records speed before impact, and accident reconstruction experts calculate speeds from skid marks and crush damage.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Impaired Driving</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
                  Driving under influence of alcohol, marijuana, prescription medications, or illegal drugs causes thousands of California crashes. Legal limits include blood alcohol content of 0.08 percent for adults and 0.04 percent for commercial drivers. DUI convictions establish negligence in civil cases.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">What to Do Immediately After an Accident</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              The moments following a collision are critical for both your health and your legal claim. Taking the right steps immediately can make the difference between a successful claim and a denied one.
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Critical First Steps:</h3>
              <ol className="space-y-3 list-decimal list-inside text-lg text-[#1d1d1f]/70">
                <li>Check for injuries and call 911 immediately if anyone is hurt</li>
                <li>Move to safety if possible, but don't leave the scene</li>
                <li>Exchange information with all parties (names, insurance, contact details)</li>
                <li>Take photos of all vehicles, damage, road conditions, and injuries</li>
                <li>Get contact information from witnesses</li>
                <li>File a police report, even for minor accidents</li>
                <li>Seek medical attention within 24 hours, even if you feel fine</li>
                <li>Contact an experienced attorney before speaking to insurance companies</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Understanding California's Comparative Negligence Law</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              California follows a "pure comparative negligence" system, which allows you to recover damages even if you're partially at fault for an accident. However, your compensation will be reduced by your percentage of fault.
            </p>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-2xl p-8 mb-6">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Example:</h3>
              <p className="text-lg text-[#1d1d1f]/70">
                If you're found 30% at fault for an accident and your total damages are $100,000, you can still recover $70,000 (70% of the total). This is why it's crucial never to admit fault at the scene—anything you say can be used to increase your percentage of liability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Types of Compensation Available</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              Auto accident victims in California may be entitled to several types of damages:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Economic Damages</h3>
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Medical expenses (past and future)</li>
                  <li>• Lost wages and earning capacity</li>
                  <li>• Property damage</li>
                  <li>• Rehabilitation costs</li>
                  <li>• Home modifications</li>
                </ul>
              </div>
              
              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Non-Economic Damages</h3>
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Pain and suffering</li>
                  <li>• Emotional distress</li>
                  <li>• Loss of enjoyment of life</li>
                  <li>• Disfigurement and scarring</li>
                  <li>• Loss of consortium</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Common Insurance Company Tactics</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              As a former defense attorney, I've seen firsthand how insurance companies work to minimize payouts. Here are the most common tactics they use:
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Quick Settlement Offers</h4>
                <p className="text-[#1d1d1f]/70">
                  Insurance adjusters often make lowball offers within days of an accident, before you know the full extent of your injuries. Once you accept, you can't seek additional compensation.
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Recorded Statements</h4>
                <p className="text-[#1d1d1f]/70">
                  Adjusters will ask for recorded statements designed to get you to say things that can be used against you. You have no legal obligation to provide one.
                </p>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Delayed Medical Treatment Arguments</h4>
                <p className="text-[#1d1d1f]/70">
                  If you wait too long to see a doctor, insurance companies will argue your injuries weren't serious or weren't caused by the accident.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="my-16 p-12 rounded-3xl bg-gradient-to-br from-[#007AFF] via-[#0051D5] to-[#003DA5] text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Face Insurance Companies Alone</h2>
          <p className="text-xl mb-8 opacity-95">
            Former defense attorney now fighting for injury victims. Free consultation—no fees unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#007AFF] hover:bg-white/90 text-lg px-8 h-14 font-semibold rounded-full"
            >
              <Link to="/#contact">Free Case Review</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#007AFF] text-lg px-8 h-14 font-semibold rounded-full"
            >
              <Link to="tel:8181234567">Call (818) 123-4567</Link>
            </Button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-[#d2d2d7]">
          <h3 className="text-3xl font-bold text-[#1d1d1f] mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/motorcycle-accidents" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Motorcycle Accidents</h4>
                <p className="text-[#86868b]">Understanding unique challenges in motorcycle crash claims...</p>
              </div>
            </Link>
            <Link to="/blog/truck-accidents" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Truck Accidents</h4>
                <p className="text-[#86868b]">Complex liability in commercial vehicle collisions...</p>
              </div>
            </Link>
            <Link to="/blog/pedestrian-accidents" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Pedestrian Accidents</h4>
                <p className="text-[#86868b]">Rights and compensation for pedestrian injury victims...</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default AutoAccidents;