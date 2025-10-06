import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/blog/motorcycle-accidents.jpg';

const MotorcycleAccidents: React.FC = () => {
  return (
    <>
      <SEO
        title="Motorcycle Accidents in California: Legal Rights & Compensation 2025"
        description="Complete guide to motorcycle accident claims in California. Learn about unique challenges, bias against riders, and maximizing compensation after a crash."
        keywords="California motorcycle accident lawyer, motorcycle crash attorney, biker rights, motorcycle injury compensation"
        canonical="https://www.trembachlawfirm.com/blog/motorcycle-accidents"
      />
      <Navigation />

      <section className="relative min-h-[60vh] flex items-end bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Motorcycle Accidents Legal Guide"
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
            <span className="text-sm font-semibold text-[#007AFF]">MOTORCYCLE ACCIDENTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Motorcycle Accidents in California: Legal Rights & Maximum Compensation
          </h1>
          
          <div className="flex items-center gap-6 text-white/80 text-sm">
            <span>By Anatolii Trembach, Esq.</span>
            <span>•</span>
            <time dateTime="2025-11-05">November 5, 2025</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              22 min read
            </span>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#007AFF]/5 to-[#007AFF]/10 border border-[#007AFF]/20">
          <h3 className="text-2xl font-bold text-[#1d1d1f] mb-4">Key Takeaways</h3>
          <ul className="space-y-3 text-[#1d1d1f]/80">
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Motorcyclists are 28 times more likely to die:</strong> Per vehicle mile traveled compared to car occupants</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Helmet use reduces death risk by 37%:</strong> California law requires all riders wear DOT-approved helmets</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Lane splitting is legal in California:</strong> But riders must exercise due care and caution</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Bias against motorcyclists affects claims:</strong> Insurance companies and juries often unfairly blame riders</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Road rash can require surgery:</strong> Even seemingly minor accidents cause serious skin and tissue damage</span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">28x</div>
            <div className="text-sm text-[#86868b]">Higher fatality risk</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">5,000+</div>
            <div className="text-sm text-[#86868b]">Annual CA motorcycle crashes</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">37%</div>
            <div className="text-sm text-[#86868b]">Death reduction with helmet</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">80%</div>
            <div className="text-sm text-[#86868b]">Result in injury/death</div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">The Unique Vulnerability of Motorcyclists</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              Motorcycle riders face dramatically higher injury and fatality risks than other road users. Without the protective cage, airbags, and crumple zones surrounding automobile occupants, motorcyclists absorb the full force of collisions directly. This vulnerability means crashes that would result in minor vehicle damage often cause catastrophic injuries or death to riders.
            </p>
            
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed">
              Statistics paint a grim picture—motorcyclists represent just 3% of registered vehicles and 0.6% of vehicle miles traveled, yet account for 14% of all traffic fatalities. In California alone, over 5,000 motorcycle accidents occur annually, with approximately 80% resulting in rider injury or death compared to just 20% for automobile accidents.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Common Causes of Motorcycle Accidents</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Left-Turn Collisions</h3>
                <p className="text-lg text-[#1d1d1f]/70">
                  The most dangerous scenario for motorcyclists occurs when vehicles turn left across the rider's path. Drivers fail to see approaching motorcycles or misjudge their speed, cutting directly into the rider's lane. These intersection crashes cause severe injuries as riders have no time to brake or evade.
                </p>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Lane Changes and Merging</h3>
                <p className="text-lg text-[#1d1d1f]/70">
                  Motorcycles easily disappear in vehicle blind spots. Drivers failing to check mirrors and blind spots before changing lanes sideswipe or squeeze motorcyclists. On California highways, sudden lane changes without signaling cause frequent motorcycle accidents.
                </p>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Road Hazards</h3>
                <p className="text-lg text-[#1d1d1f]/70">
                  Potholes, debris, gravel, oil slicks, and uneven pavement that barely affect cars can throw motorcycles out of control. Riders must constantly scan for hazards, yet municipalities often fail to properly maintain roadways, creating dangerous conditions that lead to liability claims.
                </p>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Following Too Closely (Tailgating)</h3>
                <p className="text-lg text-[#1d1d1f]/70">
                  Rear-end collisions prove particularly dangerous for motorcyclists. When cars tailgate motorcycles and fail to maintain safe stopping distances, sudden braking situations result in devastating impacts that throw riders from their bikes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">California's Lane Splitting Laws</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              California stands as the only state where lane splitting (riding between lanes of stopped or slow-moving traffic) is explicitly legal. Assembly Bill 51, effective January 1, 2017, formally legalized lane splitting and directed the California Highway Patrol to develop safety guidelines.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">CHP Lane Splitting Guidelines:</h3>
              <ul className="space-y-3 text-[#1d1d1f]/70">
                <li>• Travel no more than 10 mph faster than surrounding traffic</li>
                <li>• Only lane split when traffic flows at 30 mph or slower</li>
                <li>• Consider the width of lanes and motorcycle</li>
                <li>• Be visible—avoid blind spots</li>
                <li>• Be alert and anticipate vehicle movements</li>
                <li>• Never lane split near large vehicles</li>
              </ul>
            </div>

            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mt-6">
              While legal, lane splitting remains controversial and insurance companies often attempt to blame motorcyclists for accidents occurring during lane splitting, even when drivers acted negligently. Expert accident reconstruction and legal advocacy become essential for protecting rider rights.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Common Motorcycle Accident Injuries</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              The exposed nature of motorcycle riding means even minor crashes cause serious injuries requiring extensive medical treatment and rehabilitation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Head and Brain Injuries</h3>
                <p className="text-[#1d1d1f]/70 mb-3">
                  Despite helmet laws, traumatic brain injuries remain the leading cause of motorcycle fatalities. Concussions, skull fractures, and diffuse axonal injuries can permanently alter cognitive function and personality.
                </p>
              </div>
              
              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Road Rash</h3>
                <p className="text-[#1d1d1f]/70 mb-3">
                  Severe skin abrasions from sliding across pavement remove layers of skin and tissue, often requiring skin grafts and multiple surgeries. Permanent scarring and disfigurement commonly result.
                </p>
              </div>

              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Spinal Cord Injuries</h3>
                <p className="text-[#1d1d1f]/70 mb-3">
                  Back and neck injuries from high-impact crashes can damage the spinal cord, causing partial or complete paralysis. These catastrophic injuries require lifelong medical care and assistance.
                </p>
              </div>

              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Broken Bones and Fractures</h3>
                <p className="text-[#1d1d1f]/70 mb-3">
                  Arms, legs, ribs, and collarbones commonly fracture in motorcycle accidents. Complex fractures may require surgical hardware, extensive rehabilitation, and can leave permanent disabilities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Overcoming Bias Against Motorcyclists</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              Unfortunately, motorcyclists face significant prejudice in personal injury claims. Insurance adjusters, defense attorneys, and even juries often harbor negative stereotypes about riders, assuming they engaged in reckless behavior or somehow deserved their injuries.
            </p>

            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-2xl">
              <h4 className="text-xl font-semibold text-[#1d1d1f] mb-3">Common Unfair Assumptions:</h4>
              <ul className="space-y-2 text-[#1d1d1f]/70">
                <li>• "Motorcyclists are reckless daredevils"</li>
                <li>• "They were probably speeding or showing off"</li>
                <li>• "Riding a motorcycle is inherently dangerous—they assumed the risk"</li>
                <li>• "The rider must have been weaving through traffic"</li>
              </ul>
            </div>

            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mt-6">
              Countering this bias requires thorough investigation, compelling evidence, expert testimony, and skilled legal advocacy. Accident reconstruction showing exactly how the crash occurred, witness statements confirming driver negligence, and emphasis on the motorcyclist's safe riding record help overcome prejudice.
            </p>
          </section>
        </div>

        <div className="my-16 p-12 rounded-3xl bg-gradient-to-br from-[#007AFF] via-[#0051D5] to-[#003DA5] text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Injured in a Motorcycle Accident?</h2>
          <p className="text-xl mb-8 opacity-95">
            Don't let insurance companies minimize your claim. Free consultation—no fees unless we win.
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

        <div className="mt-16 pt-12 border-t border-[#d2d2d7]">
          <h3 className="text-3xl font-bold text-[#1d1d1f] mb-8">Related Articles</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/blog/auto-accidents" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Auto Accidents</h4>
                <p className="text-[#86868b]">Understanding California car accident claims...</p>
              </div>
            </Link>
            <Link to="/blog/catastrophic-injuries" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Catastrophic Injuries</h4>
                <p className="text-[#86868b]">Life-altering injuries and compensation...</p>
              </div>
            </Link>
            <Link to="/blog/insurance-claims" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Insurance Claims</h4>
                <p className="text-[#86868b]">Dealing with insurance companies...</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default MotorcycleAccidents;