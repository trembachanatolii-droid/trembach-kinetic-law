import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/blog/brain-injuries.jpg';

const BrainInjuries: React.FC = () => {
  return (
    <>
      <SEO
        title="Understanding Traumatic Brain Injuries in California 2025 | Trembach Law"
        description="Comprehensive guide to traumatic brain injuries in California. Learn about symptoms, long-term effects, legal rights, and compensation for TBI victims."
        keywords="traumatic brain injury California, TBI lawyer, concussion attorney, brain damage compensation, head injury lawsuit"
        canonical="https://www.trembachlawfirm.com/blog/brain-injuries"
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-end bg-[#1d1d1f] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage}
            alt="Brain Injuries Legal Guide"
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
            <span className="text-sm font-semibold text-[#007AFF]">BRAIN INJURIES</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight tracking-tight">
            Understanding Traumatic Brain Injuries in California
          </h1>
          
          <div className="flex items-center gap-6 text-white/80 text-sm">
            <span>By Anatolii Trembach, Esq.</span>
            <span>•</span>
            <time dateTime="2025-11-02">November 2, 2025</time>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              18 min read
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
              <span><strong>TBI affects 1.5 million Americans annually:</strong> Even mild concussions can have lasting cognitive and emotional impacts</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Immediate medical attention is critical:</strong> Delayed treatment can worsen outcomes and weaken legal claims</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Symptoms can appear days or weeks later:</strong> Monitor for headaches, confusion, mood changes, and sleep disturbances</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Lifetime costs can exceed $3 million:</strong> Compensation must account for future medical care and lost earning capacity</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#007AFF] mr-2">✓</span>
              <span><strong>Expert testimony is essential:</strong> Neurologists, neuropsychologists, and life care planners strengthen TBI claims</span>
            </li>
          </ul>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-[#1d1d1f]/80 leading-relaxed mb-6">
            Traumatic brain injuries represent one of the most serious and life-altering consequences of accidents in California. Every year, thousands of Californians suffer brain injuries that fundamentally change their lives, affecting their ability to work, maintain relationships, and perform basic daily activities. Understanding the complexities of traumatic brain injuries—from immediate symptoms to long-term consequences—becomes essential for victims seeking justice and fair compensation.
          </p>
          
          <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-8">
            As a former defense attorney now fighting for injury victims, I have witnessed firsthand how insurance companies systematically undervalue brain injury claims. They exploit the invisible nature of these injuries, dismissing cognitive deficits and personality changes as exaggeration or pre-existing conditions. This comprehensive guide provides the knowledge necessary to protect your rights and pursue maximum compensation after suffering a traumatic brain injury in California.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-16">
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">1.5M</div>
            <div className="text-sm text-[#86868b]">Annual TBI cases in U.S.</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">$3M+</div>
            <div className="text-sm text-[#86868b]">Lifetime care costs</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">80%</div>
            <div className="text-sm text-[#86868b]">Classified as mild TBI</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#f5f5f7]">
            <div className="text-4xl font-bold text-[#007AFF] mb-2">2 Years</div>
            <div className="text-sm text-[#86868b]">Statute of limitations</div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-12">
          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">What Constitutes a Traumatic Brain Injury?</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              A traumatic brain injury occurs when external force disrupts normal brain function. This definition encompasses a broad spectrum of injuries, from mild concussions causing temporary confusion to severe trauma resulting in permanent disability or death. The brain, despite its protective skull and cerebrospinal fluid cushioning, remains vulnerable to forces generated during vehicle collisions, falls, workplace accidents, and violent incidents.
            </p>
            
            <h3 className="text-3xl font-semibold text-[#1d1d1f] mt-8 mb-4">Classification by Severity</h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Mild TBI (Concussion)</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-3">
                  Constitutes approximately 80% of all cases. Despite being labeled "mild," these injuries can produce lasting cognitive impairments, emotional disturbances, and physical symptoms that persist for months or years.
                </p>
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Brief loss of consciousness (less than 30 minutes)</li>
                  <li>• Confusion or disorientation</li>
                  <li>• Memory problems (amnesia)</li>
                  <li>• Headaches and dizziness</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Moderate TBI</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-3">
                  Involves loss of consciousness exceeding 30 minutes or post-traumatic amnesia lasting between one and 24 hours. These injuries typically require hospitalization and intensive monitoring.
                </p>
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Extended loss of consciousness</li>
                  <li>• Significant confusion and disorientation</li>
                  <li>• Visible injuries on neuroimaging</li>
                  <li>• Persistent cognitive deficits</li>
                </ul>
              </div>

              <div className="border-l-4 border-[#007AFF] bg-[#007AFF]/5 p-6 rounded-r-2xl">
                <h4 className="text-2xl font-semibold text-[#1d1d1f] mb-3">Severe TBI</h4>
                <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-3">
                  Causes prolonged unconsciousness, extensive structural damage visible on neuroimaging, and profound deficits requiring lifelong care and supervision.
                </p>
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Coma lasting days, weeks, or longer</li>
                  <li>• Extensive brain damage on CT/MRI</li>
                  <li>• Permanent physical and cognitive disabilities</li>
                  <li>• Need for 24/7 care and assistance</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Common Causes of TBI in California</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              California's unique combination of congested highways, extensive construction activity, and active outdoor culture creates numerous scenarios where traumatic brain injuries occur.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Motor Vehicle Collisions</h3>
                <p className="text-[#1d1d1f]/70">
                  The leading cause of TBI among adults. Head impact with steering wheels, dashboards, or windows causes direct trauma, while sudden acceleration-deceleration produces diffuse injuries.
                </p>
              </div>
              
              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Falls</h3>
                <p className="text-[#1d1d1f]/70">
                  Particularly dangerous for elderly individuals and construction workers. Slip-and-falls, ladder accidents, and workplace falls account for significant TBI cases.
                </p>
              </div>

              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Sports Injuries</h3>
                <p className="text-[#1d1d1f]/70">
                  Football, soccer, hockey, and other contact sports create concussion risks. Repeated mild TBIs can lead to chronic traumatic encephalopathy (CTE).
                </p>
              </div>

              <div className="border border-[#d2d2d7] rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-3">Assaults</h3>
                <p className="text-[#1d1d1f]/70">
                  Violence causing head trauma through blunt force, gunshot wounds, or shaken baby syndrome creates severe brain injuries with complex legal implications.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Recognizing TBI Symptoms</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              Brain injury symptoms can appear immediately or develop gradually over days or weeks following trauma. This delayed onset often leads victims to dismiss serious injuries, weakening both their recovery and legal claims.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">Warning Signs Requiring Immediate Medical Attention:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Severe headache that worsens</li>
                  <li>• Repeated vomiting or nausea</li>
                  <li>• Seizures or convulsions</li>
                  <li>• Dilated pupils or vision changes</li>
                  <li>• Clear fluid from nose or ears</li>
                </ul>
                <ul className="space-y-2 text-[#1d1d1f]/70">
                  <li>• Slurred speech</li>
                  <li>• Weakness or numbness</li>
                  <li>• Loss of coordination</li>
                  <li>• Increased confusion or agitation</li>
                  <li>• Loss of consciousness</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold text-[#1d1d1f] mb-6">Long-Term Effects and Complications</h2>
            <p className="text-lg text-[#1d1d1f]/70 leading-relaxed mb-6">
              Traumatic brain injuries can produce permanent changes affecting every aspect of a victim's life. Understanding these long-term consequences is essential for calculating appropriate compensation.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Cognitive Impairments</h4>
                <p className="text-[#1d1d1f]/70">
                  Memory loss, difficulty concentrating, impaired judgment, and slower processing speed. These deficits may prevent returning to previous employment or require significant workplace accommodations.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Physical Symptoms</h4>
                <p className="text-[#1d1d1f]/70">
                  Chronic headaches, dizziness, sensitivity to light and noise, fatigue, and sleep disturbances that persist for months or years after initial injury.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 bg-purple-50 p-6 rounded-r-2xl">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2">Emotional and Behavioral Changes</h4>
                <p className="text-[#1d1d1f]/70">
                  Depression, anxiety, mood swings, irritability, and personality changes. These invisible injuries often prove most devastating to family relationships and quality of life.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="my-16 p-12 rounded-3xl bg-gradient-to-br from-[#007AFF] via-[#0051D5] to-[#003DA5] text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Suffered a Brain Injury? We Can Help</h2>
          <p className="text-xl mb-8 opacity-95">
            Expert legal representation for TBI victims. Free consultation—no fees unless we win.
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
            <Link to="/blog/catastrophic-injuries" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Catastrophic Injuries</h4>
                <p className="text-[#86868b]">Understanding life-altering injuries and maximum compensation...</p>
              </div>
            </Link>
            <Link to="/blog/medical-malpractice" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Medical Malpractice</h4>
                <p className="text-[#86868b]">When medical errors cause brain injuries...</p>
              </div>
            </Link>
            <Link to="/blog/compensation" className="group">
              <div className="border border-[#d2d2d7] rounded-2xl p-6 hover:border-[#007AFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-[#007AFF]">Compensation Guide</h4>
                <p className="text-[#86868b]">Calculating fair compensation for serious injuries...</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default BrainInjuries;