import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Users, Shield, Award, Clock, Heart, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import heroImage from '@/assets/mesothelioma-hero.jpg';

const MesotheliomaAsbestos: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What Can a California Mesothelioma Lawyer Do for Me?",
      answer: "A mesothelioma lawyer provides comprehensive legal representation to maximize your compensation from all available sources. This includes filing claims with asbestos bankruptcy trust funds (accessing over $30 billion set aside for victims), pursuing lawsuits against liable companies still in business, coordinating with VA benefits for veterans, and managing workers' compensation claims when applicable. We investigate your entire exposure history, identify all responsible parties, gather medical and employment records, work with medical experts to establish causation, and handle all negotiations with insurance companies and corporate defendants. Our role extends beyond legal work - we connect you with mesothelioma specialists, help navigate treatment options, and provide support throughout your journey. Having formerly defended insurance companies, Attorney Trembach understands their tactics and uses this knowledge to counter their strategies, ensuring you receive full and fair compensation rather than accepting lowball settlements."
    },
    {
      question: "How Much Does It Cost to Hire a Mesothelioma Attorney?",
      answer: "At Trembach Law Firm, we work on a contingency fee basis, meaning you pay absolutely nothing unless we win your case. There are no upfront costs, no hourly fees, no consultation charges, and no out-of-pocket expenses. We advance all case costs including filing fees, expert witnesses, medical record retrieval, depositions, and travel expenses. Our fee is only collected as a percentage of your recovery after we successfully obtain compensation for you. This arrangement ensures that every mesothelioma victim can afford quality legal representation regardless of their financial situation. We believe that those suffering from this terrible disease shouldn't have to worry about legal fees while fighting for their lives. Our contingency fee structure aligns our interests with yours - we only succeed when you receive the compensation you deserve."
    },
    {
      question: "What Should I Do After a Mesothelioma Diagnosis?",
      answer: "First, focus on getting the best medical treatment available - we can help connect you with mesothelioma specialists and treatment centers throughout California. Second, contact an experienced mesothelioma attorney immediately to protect your legal rights, as time limitations apply. Begin gathering any employment records, union documents, military service records, or other documentation that might help establish your asbestos exposure history. Document your symptoms, treatments, and how the disease affects your daily life. Inform family members who may have been exposed to asbestos through your work clothes (secondary exposure claims). Avoid signing any documents from insurance companies or former employers without legal review. Do not post about your diagnosis on social media, as this can be used against you. Most importantly, don't delay - mesothelioma cases require urgent action to preserve evidence, secure witness testimony, and expedite compensation while you can still benefit from it."
    },
    {
      question: "How Long Do I Have to File a Mesothelioma Claim in California?",
      answer: "California law provides specific time limits for filing mesothelioma claims. For personal injury claims, you have one year from the date of diagnosis to file a lawsuit. For wrongful death claims, family members have one year from the date of death. However, these deadlines can be complex - discovery rules may extend the deadline if the asbestos exposure source wasn't immediately known, and different deadlines apply for claims against government entities (six months) or bankruptcy trusts (varying by trust). Maritime workers may have different deadlines under federal law. Veterans may have different timelines for VA benefits. Additionally, some defendants may try to argue that the statute of limitations has expired based on when you should have known about the exposure. Given these complexities and the aggressive nature of mesothelioma, we recommend contacting us immediately after diagnosis. Early action allows us to preserve crucial evidence, secure witness testimony while memories are fresh, and begin the compensation process quickly."
    },
    {
      question: "How Long Does a Mesothelioma Case Take to Resolve?",
      answer: "Mesothelioma cases often resolve much faster than typical personal injury lawsuits due to the urgent nature of the disease. Many cases settle within 3-6 months, though complex cases involving multiple defendants may take longer. Factors affecting timeline include: the strength of evidence linking your exposure to specific defendants, the number of exposure sources and responsible parties, whether defendants are solvent companies or bankruptcy trusts, the jurisdiction where cases are filed, and the defendant's willingness to negotiate fairly. California courts often grant preference to mesothelioma cases, expediting them through the legal system. Asbestos bankruptcy trust claims can provide compensation within 90 days of filing if properly documented. We understand that time is precious for mesothelioma patients, which is why we prioritize these cases and work aggressively to secure compensation as quickly as possible while still maximizing your recovery."
    },
    {
      question: "How Much Is My Mesothelioma Case Worth?",
      answer: "Mesothelioma settlements and verdicts vary significantly based on individual circumstances, but often range from hundreds of thousands to several million dollars. Factors affecting value include: age at diagnosis (younger victims typically receive higher compensation), type and stage of mesothelioma, occupation and exposure history, number of liable defendants identified, available insurance coverage, economic losses (lost wages, medical expenses), non-economic damages (pain and suffering), whether you're a veteran (additional VA benefits available), and family situation (spouse and dependents). While we cannot guarantee specific amounts as a new firm without past verdicts to reference, we can promise aggressive representation to maximize your recovery from all available sources. Our founder's experience as a defense attorney provides unique insights into how insurance companies value these cases, helping us push for maximum compensation rather than accepting initial offers."
    },
    {
      question: "Should I Accept a Settlement or Go to Trial?",
      answer: "Most mesothelioma cases (approximately 95%) settle before trial, providing faster compensation and guaranteed recovery without the uncertainty of a jury verdict. Settlements offer several advantages: quicker resolution (critical given the aggressive nature of mesothelioma), guaranteed compensation without appeal risks, privacy (trial records are public), less stress on you and your family, and the ability to resolve multiple claims simultaneously. However, trials may be appropriate when defendants make unreasonably low offers, when we believe a jury would award significantly more, or when you want public accountability for corporate wrongdoing. As your attorneys, we provide honest assessments of settlement offers versus trial prospects, explaining the risks and benefits of each option. Our goal is maximizing your compensation while considering your health, family needs, and personal preferences. Having defended insurance companies, Attorney Trembach knows when they're holding back and when they've reached their limit, helping you make informed decisions."
    },
    {
      question: "Can Family Members File Claims for Secondary Exposure?",
      answer: "Yes, California law recognizes \"take-home\" or secondary exposure claims for family members who developed mesothelioma from asbestos brought home on work clothes. Wives who washed their husband's contaminated work clothes, children who hugged their parent after work, and family members who lived in homes where work clothes were shaken out or stored can all potentially file claims. These cases require proving that the worker's employer knew or should have known about asbestos dangers and failed to implement safety measures like workplace showers, changing facilities, or proper decontamination procedures. We investigate whether employers provided warnings about take-home exposure risks, whether they required workers to wear contaminated clothing home, and what safety measures were available but not implemented. Secondary exposure cases can be complex but often result in significant compensation, as families were completely unaware of the danger they faced from this indirect exposure."
    },
    {
      question: "What If I Don't Remember Where I Was Exposed to Asbestos?",
      answer: "Many mesothelioma victims don't initially remember specific asbestos exposures, as contact often occurred decades ago and asbestos was present in thousands of common products. We conduct comprehensive exposure investigations including: detailed work history interviews covering every job you've held, research into employers, job sites, and products you encountered, union records and employment documents, co-worker testimony about shared exposures, ship logs and military records for veterans, product identification databases showing which materials contained asbestos, and historical documents about asbestos use at specific facilities. Our investigation often uncovers exposures clients didn't realize were significant - brake work, home renovations, proximity to others using asbestos products. We've successfully identified exposure sources for clients who initially couldn't recall any asbestos contact. Don't let uncertainty about exposure sources prevent you from seeking compensation - our job is to uncover and prove your exposure history."
    },
    {
      question: "Are Veterans Eligible for Additional Compensation?",
      answer: "Veterans have multiple avenues for mesothelioma compensation beyond standard legal claims. The VA recognizes mesothelioma as a service-connected disability, providing monthly disability compensation, healthcare through VA medical centers, and dependency benefits for spouses and children. Navy veterans have particularly high mesothelioma rates due to extensive shipboard asbestos use. We help veterans pursue both VA benefits AND civil lawsuits against asbestos manufacturers and contractors who supplied dangerous products to the military. These aren't mutually exclusive - you can receive VA benefits while pursuing legal claims. We assist with VA claims documentation, coordinate with Veterans Service Organizations, and ensure you receive all entitled benefits. Many veterans are also eligible for aid and attendance benefits, special monthly compensation, and retroactive benefits. Our comprehensive approach ensures veterans access every available compensation source while honoring their service and sacrifice."
    },
    {
      question: "What Types of Mesothelioma Compensation Are Available?",
      answer: "Multiple compensation sources exist for mesothelioma victims: Asbestos bankruptcy trust funds (over $30 billion available) provide compensation from companies that filed bankruptcy due to asbestos liabilities. Personal injury lawsuits against solvent companies still in business can yield substantial settlements or verdicts. Workers' compensation benefits may apply if exposure occurred at work. VA benefits for veterans exposed during military service. Social Security disability benefits for those unable to work. Wrongful death claims for families who've lost loved ones. Each source has different requirements, deadlines, and payment structures. We pursue all applicable sources simultaneously to maximize total recovery. Trust funds may pay within months while lawsuits proceed. Some victims qualify for multiple trust funds based on various exposures. Our comprehensive approach ensures no compensation source is overlooked, providing maximum financial support during your treatment and securing your family's future."
    },
    {
      question: "Can I File a Claim If My Loved One Already Passed Away?",
      answer: "Yes, California law allows specific family members to file wrongful death claims within one year of death from mesothelioma. Eligible parties include surviving spouses, children, grandchildren (if children are deceased), and anyone financially dependent on the deceased. Wrongful death claims seek compensation for: funeral and burial expenses, medical bills from final illness, lost financial support the deceased would have provided, loss of companionship and consortium, and pain and suffering the deceased experienced before death. Even if your loved one never filed a claim or wasn't diagnosed until autopsy, you may still have valid claims. We investigate exposure history posthumously through employment records, co-worker testimony, and family recollections. These cases require sensitivity and compassion, which we provide while aggressively pursuing accountability from those responsible for your loss."
    },
    {
      question: "What Evidence Do I Need for a Mesothelioma Claim?",
      answer: "Strong mesothelioma claims require medical and exposure evidence. Medical evidence includes: pathology reports confirming mesothelioma diagnosis, imaging studies (CT scans, X-rays, PET scans), treatment records and physician statements, and expert testimony linking asbestos to your specific cancer. Exposure evidence includes: employment records showing where you worked, union records documenting job sites, military service records for veterans, co-worker affidavits about asbestos products used, product identification showing asbestos content, photographs of work sites or products, Social Security records, and deposition testimony. Don't worry if you lack documents - we obtain records from numerous sources including employers, unions, Social Security Administration, military archives, and court records from similar cases. Our investigation uncovers evidence you may not know exists. We also work with industrial hygienists and experts who reconstruct historical asbestos exposures, strengthening your claim even without perfect documentation."
    },
    {
      question: "Will I Have to Go to Court?",
      answer: "Most mesothelioma victims never appear in court. The vast majority of cases settle through negotiations without requiring your courtroom presence. If testimony is needed, we typically conduct video depositions at your convenience - often from your home or a nearby location. This preserves your testimony while avoiding travel stress. California's preference laws for mesothelioma cases mean courts accommodate victims' health limitations. If a trial becomes necessary (rare but sometimes required for maximum compensation), we handle most proceedings without you, only requiring your presence if absolutely necessary and health permits. We structure litigation to minimize demands on you, understanding that your energy should focus on treatment and family. Our goal is securing maximum compensation with minimum stress on you. Throughout the process, you remain in control - we proceed only with your approval and comfort level."
    },
    {
      question: "How Are Mesothelioma Cases Different From Other Injury Cases?",
      answer: "Mesothelioma cases are unique in several critical ways. The 20-50 year latency period means exposures occurred decades ago, requiring historical investigation techniques and expertise in industrial history. Multiple defendants are typically involved, as victims often encountered various asbestos products throughout their careers. The fatal nature of mesothelioma creates urgency - courts expedite these cases and defendants know delay tactics are ineffective. Causation is clearer than most toxic tort cases since asbestos is the only known cause of mesothelioma. Bankruptcy trusts provide additional compensation sources unavailable in typical injury cases. The defendant pool includes many companies that have faced thousands of asbestos claims, creating established settlement values and procedures. Specialized medical experts are required who understand mesothelioma's unique characteristics. These differences require attorneys with specific asbestos litigation experience who understand the complex interplay of multiple defendants, trust funds, and insurance coverage."
    },
    {
      question: "What Makes Trembach Law Firm Different?",
      answer: "Attorney Anatolii Trembach's unique background as a former insurance defense attorney sets us apart. Having defended corporations and insurance companies in personal injury cases, he understands exactly how they evaluate claims, minimize payouts, and develop defense strategies. This insider knowledge becomes your advantage - we anticipate their tactics, counter their arguments, and know when they're bluffing versus making their best offer. As a new firm, we provide personalized attention that larger firms can't match. You work directly with Attorney Trembach, not passed between associates. We combine boutique firm personal service with sophisticated legal strategies learned from defending major corporations. Our commitment to California's asbestos victims is demonstrated through aggressive advocacy, 24/7 availability, and treating each client like family. We're building our reputation on your success, giving us extra motivation to achieve exceptional results. Choose experience, dedication, and a fighter who knows the enemy's playbook."
    }
  ];

  const relatedCases = [
    {
      title: "Asbestos Exposure",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Lung Cancer Claims", 
      image: "/api/placeholder/300/200"
    },
    {
      title: "Occupational Disease",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Wrongful Death",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-gradient-to-br from-slate-900 to-slate-700 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(51, 65, 85, 0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              California Mesothelioma & Asbestos Attorneys
            </h1>
            <p className="text-xl mb-4 leading-relaxed">
              Aggressive representation for asbestos cancer victims throughout California. Former defense attorney now fighting for your rights. We trace exposure histories, work with medical specialists, and pursue maximum compensation from all responsible parties.
            </p>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="ml-3 text-xl">Inside Knowledge of Secret Defense Strategies and Software</span>
            </div>
            <p className="text-2xl font-semibold mb-8 text-yellow-300">
              No fees. No risk.<br />You only pay when we win
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-6 mb-8 font-bold"
            >
              GET YOUR FREE CONSULTATION
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap gap-8 text-sm uppercase tracking-wider">
            <a href="#important" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">IMPORTANT TO KNOW</a>
            <a href="#steps" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">STEPS TO TAKE</a>
            <a href="#faq" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">FAQ</a>
            <a href="#damages" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">DAMAGES</a>
            <a href="#exposure-sites" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">CA EXPOSURE SITES</a>
            <a href="#contact" className="hover:text-red-300 transition-colors border-b border-transparent hover:border-red-300">CONTACT</a>
          </nav>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - 2 Columns */}
            <div className="lg:col-span-2">
              {/* Important to Know Section */}
              <div id="important" className="mb-16">
                <Card className="glass-card p-8">
                  <h2 className="text-4xl font-bold text-primary mb-8">Important to Know About Mesothelioma Claims</h2>
                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
                    <p>
                      <strong>Mesothelioma is a devastating cancer caused exclusively by asbestos exposure</strong>, often developing 20-50 years after initial contact with asbestos fibers. This aggressive cancer affects the protective lining of the lungs, heart, or abdomen, with most patients facing a prognosis of 12-21 months after diagnosis. The long latency period means many victims are now being diagnosed from exposures that occurred decades ago in shipyards, construction sites, military service, refineries, power plants, and even from household products containing asbestos.
                    </p>
                    <p>
                      <strong>California has some of the most favorable laws in the nation for asbestos victims</strong>, with extended statutes of limitations and strong legal precedents supporting compensation claims. Unlike many states, California allows victims to pursue claims against multiple defendants simultaneously, accessing various compensation sources including asbestos bankruptcy trust funds (over $30 billion available nationwide), personal injury lawsuits against solvent companies, workers' compensation benefits, and VA benefits for veterans.
                    </p>
                    <p>
                      <strong>Time is critical in mesothelioma cases</strong> - not just legally, but practically. California law provides a one-year statute of limitations from diagnosis for personal injury claims and one year from death for wrongful death claims. However, the aggressive nature of mesothelioma means we must act swiftly to preserve testimony, gather evidence, and secure compensation while you can still benefit from it.
                    </p>
                    <p>
                      <strong>As a former insurance defense attorney, Anatolii Trembach brings unique insights</strong> to fighting for mesothelioma victims. Having seen firsthand how insurance companies and corporate defendants minimize claims and deny responsibility, he now uses that knowledge to anticipate and counter their tactics. This insider perspective allows us to build stronger cases, identify hidden insurance coverage, and maximize compensation by understanding exactly how the defense will try to limit your recovery.
                    </p>
                    <p>
                      <strong>Multiple exposure sources often mean multiple avenues for compensation</strong>. Many mesothelioma victims were exposed to asbestos from various sources throughout their careers - different job sites, multiple employers, various asbestos-containing products. Each exposure source represents a potential claim for compensation. We thoroughly investigate your entire work and exposure history, identifying every company that may bear responsibility.
                    </p>
                    <p>
                      <strong>Your choice of legal representation can dramatically impact your compensation</strong>. While many law firms handle mesothelioma cases, not all have the resources, knowledge, and determination to maximize your recovery. You need attorneys who understand the complex medical evidence, have relationships with leading mesothelioma specialists, know how to navigate the asbestos trust fund system, and are prepared to take cases to trial when necessary.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Steps to Take Section */}
              <div id="steps" className="mb-16">
                <h2 className="text-4xl font-bold text-primary mb-8">What to Do After a Mesothelioma Diagnosis</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="glass-card overflow-hidden">
                    <div className="relative h-48 bg-gradient-primary flex items-center justify-center">
                      <div className="text-primary-foreground text-center">
                        <div className="text-lg font-bold mb-2">Step 1</div>
                        <div className="text-2xl font-bold">Contact</div>
                        <div className="text-2xl font-bold">Mesothelioma</div>
                        <div className="text-2xl font-bold">Lawyers</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="glass-card overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold mb-2">Step 2</div>
                        <div className="text-2xl font-bold">Let Us Get</div>
                        <div className="text-2xl font-bold">to Work</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="glass-card overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold mb-2">Step 3</div>
                        <div className="text-2xl font-bold">Rest, Recover,</div>
                        <div className="text-2xl font-bold">Receive Updates</div>
                      </div>
                    </div>
                  </Card>
                  <Card className="glass-card overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-lg font-bold mb-2">Step 4</div>
                        <div className="text-2xl font-bold">Healing, Compensation,</div>
                        <div className="text-2xl font-bold">Peace of Mind</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="mb-16">
                <h2 className="text-4xl font-bold text-primary mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="glass-card overflow-hidden">
                      <button
                        className="w-full text-left p-6 font-semibold text-lg flex justify-between items-center hover:bg-muted/30 transition-colors"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <span>{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-6 h-6 text-primary" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-primary" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed animate-accordion-down">
                          {faq.answer}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              {/* Damages Section */}
              <div id="damages" className="mb-16">
                <Card className="glass-card p-8">
                  <h2 className="text-4xl font-bold text-primary mb-8">What Are Common Damages from Mesothelioma?</h2>
                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
                    <p>
                      <strong>Extensive Medical Expenses:</strong> Mesothelioma treatment costs are staggering, often exceeding $400,000 in the first year alone. These expenses include specialized oncology consultations, surgery (including complex procedures like pleurectomy or extrapleural pneumonectomy), chemotherapy with drugs like Alimta and cisplatin, radiation therapy, immunotherapy treatments, hospital stays, home health care, hospice services, and experimental treatments or clinical trials. Many patients require multiple rounds of treatment as the disease progresses.
                    </p>
                    <p>
                      <strong>Lost Income and Earning Capacity:</strong> Mesothelioma's devastating impact on physical capability means most patients cannot continue working after diagnosis. We calculate comprehensive economic losses including current lost wages, future income you would have earned until retirement, lost benefits (health insurance, retirement contributions, pension), reduced earning capacity if you can return to limited work, and loss of household services value.
                    </p>
                    <p>
                      <strong>Physical Pain and Suffering:</strong> Mesothelioma causes severe physical suffering that deserves significant compensation. The cancer causes chest pain, difficulty breathing, chronic coughing, fatigue, and eventually organ failure. Treatment side effects including nausea, weakness, and surgical recovery add to physical suffering. California law recognizes that physical pain and suffering often represents the largest component of damages in mesothelioma cases.
                    </p>
                    <p>
                      <strong>Emotional and Psychological Distress:</strong> Beyond physical pain, mesothelioma inflicts profound emotional suffering on victims and families. The psychological impact includes anxiety about the future, depression from lost independence, fear of leaving family behind, anger at preventable exposure, and grief over shortened life expectancy. Many patients require psychological counseling or psychiatric medication.
                    </p>
                    <p>
                      <strong>Family Impact and Loss of Consortium:</strong> Mesothelioma doesn't just affect the patient - entire families suffer. Spouses lose companionship, children lose parental guidance, and grandchildren lose relationships with grandparents. California law allows spouses to recover for loss of consortium - the loss of love, companionship, comfort, care, assistance, protection, affection, society, and moral support.
                    </p>
                  </div>
                </Card>
              </div>

              {/* California Exposure Sites Section */}
              <div id="exposure-sites" className="mb-16">
                <Card className="glass-card p-8">
                  <h2 className="text-4xl font-bold text-primary mb-8">California Asbestos Exposure Sites & Information</h2>
                  <div className="prose prose-lg max-w-none text-foreground leading-relaxed space-y-6">
                    <p>
                      <strong>California's extensive industrial history has created widespread asbestos exposure risks</strong> throughout the state. Major exposure sites include:
                    </p>
                    <p>
                      <strong>Shipyards and Naval Facilities:</strong> Mare Island Naval Shipyard (Vallejo), Long Beach Naval Shipyard, San Francisco Naval Shipyard at Hunters Point, San Diego Naval Base, and numerous private shipyards exposed thousands of workers to asbestos in ship construction, repair, and maintenance. Naval vessels were floating asbestos repositories with insulation, gaskets, valves, and equipment containing deadly fibers.
                    </p>
                    <p>
                      <strong>Oil Refineries and Chemical Plants:</strong> California's massive petroleum industry created extensive exposure at facilities including Chevron (Richmond, El Segundo), Shell (Martinez, Wilmington), ExxonMobil (Torrance), Phillips 66 (multiple locations), and ARCO facilities. Refinery workers, pipefitters, and maintenance personnel encountered asbestos in pipe insulation, gaskets, valves, and heat-resistant equipment throughout these facilities.
                    </p>
                    <p>
                      <strong>Power Plants and Utilities:</strong> Pacific Gas & Electric, Southern California Edison, and municipal power plants throughout California used asbestos extensively in boilers, turbines, generators, and insulation. Power plant workers, including those at Moss Landing, Huntington Beach, and San Onofre, faced daily exposure to asbestos dust during maintenance and operations.
                    </p>
                    <p>
                      <strong>Construction and Building Trades:</strong> California's construction boom from the 1940s through 1980s meant widespread asbestos use in schools, hospitals, office buildings, and homes. Major projects like downtown Los Angeles high-rises, San Francisco's financial district, Silicon Valley tech campuses, and residential developments throughout Southern California all used asbestos-containing materials extensively.
                    </p>
                    <p>
                      <strong>Aerospace and Defense Industries:</strong> Boeing, Lockheed Martin, Northrop Grumman, and other aerospace companies exposed workers at facilities throughout Southern California. Aircraft manufacturing used asbestos in brakes, heat shields, and insulation, creating exposure for thousands of aerospace workers who built California's defense industry.
                    </p>
                    <p>
                      <strong>Transportation and Automotive:</strong> Railroad workers at Southern Pacific, Union Pacific, and Santa Fe facilities encountered asbestos in locomotives, brake shoes, and rail yard buildings. Automotive workers at General Motors (Fremont), Ford (Pico Rivera), and numerous repair facilities faced exposure from brake and clutch work.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Contact Section */}
              <div id="contact" className="mb-16">
                <Card className="glass-card p-8 bg-gradient-primary text-primary-foreground">
                  <h2 className="text-4xl font-bold mb-6">Contact California's Aggressive Mesothelioma Advocates</h2>
                  <p className="text-xl mb-4">Former defense attorney now fighting for victims' rights. We know their tactics. We know how to win.</p>
                  <div className="text-4xl font-bold mb-4">855-TREMBACH-WINS</div>
                  <p className="text-lg mb-6">Free Consultation • No Fees Unless We Win • Available 24/7</p>
                  <div className="mb-6">
                    <p>Trembach Law Firm, APC</p>
                    <p>27001 Agoura Road, Suite 350</p>
                    <p>Calabasas, CA 91301</p>
                    <p>Email: info@trembachlawfirm.com</p>
                  </div>
                  <Button size="lg" variant="secondary" className="font-bold text-lg">
                    CALL NOW FOR FREE CONSULTATION
                  </Button>
                </Card>
              </div>
            </div>

            {/* Sidebar - Contact Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="glass-card p-6 text-center">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary mb-4">
                      <Phone className="w-8 h-8 mx-auto mb-2 text-accent" />
                      Free Case Review
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <Button size="lg" className="w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (855) 873-6222
                      </Button>
                      
                      <Button variant="outline" size="lg" className="w-full">
                        <Heart className="w-5 h-5 mr-2" />
                        Email Consultation
                      </Button>
                      
                      <Button variant="outline" size="lg" className="w-full">
                        <Award className="w-5 h-5 mr-2" />
                        Settlement Calculator
                      </Button>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="text-center space-y-2">
                      <Badge variant="secondary" className="text-sm">
                        <Shield className="w-4 h-4 mr-1" />
                        No Fees, No Risk
                      </Badge>
                      <p className="text-sm text-muted-foreground">
                        We only get paid when you win your case
                      </p>
                    </div>
                    
                    <div className="flex justify-center items-center space-x-4 pt-4">
                      <div className="text-center">
                        <Clock className="w-6 h-6 text-accent mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">24/7 Available</p>
                      </div>
                      <div className="text-center">
                        <Users className="w-6 h-6 text-accent mx-auto mb-1" />
                        <p className="text-xs text-muted-foreground">Expert Team</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MesotheliomaAsbestos;