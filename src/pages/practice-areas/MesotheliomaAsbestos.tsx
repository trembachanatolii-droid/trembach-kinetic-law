import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Users, Shield, Award, Clock, Heart, Star, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import heroImage from '@/assets/mesothelioma-hero.jpg';
import medicalImage from '@/assets/mesothelioma-medical-facility.jpg';
import exposureImage from '@/assets/mesothelioma-industrial-site.jpg';
import legalImage from '@/assets/mesothelioma-legal-consultation.jpg';
import californiaImage from '@/assets/california-legal-system.jpg';

gsap.registerPlugin(ScrollTrigger);

const MesotheliomaAsbestos: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content cards with staggered entrance
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );

      // Animate FAQ cards
      gsap.fromTo(faqsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "What Can a California Mesothelioma Lawyer Do for Me?",
      answer: "A mesothelioma lawyer provides comprehensive legal representation to maximize your compensation from all available sources. This includes filing claims with asbestos bankruptcy trust funds (accessing over $30 billion set aside for victims), pursuing lawsuits against liable companies still in business, coordinating with VA benefits for veterans, and managing workers' compensation claims when applicable. We investigate your entire exposure history, identify all responsible parties, gather medical and employment records, work with medical experts to establish causation, and handle all negotiations with companies and corporate defendants. Our role extends beyond legal work - we connect you with mesothelioma specialists, help navigate treatment options, and provide support throughout your journey. Having formerly defended companies, Attorney Trembach understands their tactics and uses this knowledge to counter their strategies, ensuring you receive full and fair compensation rather than accepting lowball settlements."
    },
    {
      question: "How Much Does It Cost to Hire a Mesothelioma Attorney?",
      answer: "At Trembach Law Firm, we work on a contingency fee basis, meaning you pay absolutely nothing unless we win your case. There are no upfront costs, no hourly fees, no consultation charges, and no out-of-pocket expenses. We advance all case costs including filing fees, expert witnesses, medical record retrieval, depositions, and travel expenses. Our fee is only collected as a percentage of your recovery after we successfully obtain compensation for you. This arrangement ensures that every mesothelioma victim can afford quality legal representation regardless of their financial situation. We believe that those suffering from this terrible disease shouldn't have to worry about legal fees while fighting for their lives. Our contingency fee structure aligns our interests with yours - we only succeed when you receive the compensation you deserve."
    },
    {
      question: "What Should I Do After a Mesothelioma Diagnosis?",
      answer: "First, focus on getting the best medical treatment available - we can help connect you with mesothelioma specialists and treatment centers throughout California. Second, contact an experienced mesothelioma attorney immediately to protect your legal rights, as time limitations apply. Begin gathering any employment records, union documents, military service records, or other documentation that might help establish your asbestos exposure history. Document your symptoms, treatments, and how the disease affects your daily life. Inform family members who may have been exposed to asbestos through your work clothes (secondary exposure claims). Avoid signing any documents from companies or former employers without legal review. Do not post about your diagnosis on social media, as this can be used against you. Most importantly, don't delay - mesothelioma cases require urgent action to preserve evidence, secure witness testimony, and expedite compensation while you can still benefit from it."
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
      answer: "Mesothelioma settlements and verdicts vary significantly based on individual circumstances, but often range from hundreds of thousands to several million dollars. Factors affecting value include: age at diagnosis (younger victims typically receive higher compensation), type and stage of mesothelioma, occupation and exposure history, number of liable defendants identified, available coverage, economic losses (lost wages, medical expenses), non-economic damages (pain and suffering), whether you're a veteran (additional VA benefits available), and family situation (spouse and dependents). While we cannot guarantee specific amounts as a new firm without past verdicts to reference, we can promise aggressive representation to maximize your recovery from all available sources. Our founder's experience as a defense attorney provides unique insights into how companies value these cases, helping us push for maximum compensation rather than accepting initial offers."
    },
    {
      question: "Should I Accept a Settlement or Go to Trial?",
      answer: "Most mesothelioma cases (approximately 95%) settle before trial, providing faster compensation and guaranteed recovery without the uncertainty of a jury verdict. Settlements offer several advantages: quicker resolution (critical given the aggressive nature of mesothelioma), guaranteed compensation without appeal risks, privacy (trial records are public), less stress on you and your family, and the ability to resolve multiple claims simultaneously. However, trials may be appropriate when defendants make unreasonably low offers, when we believe a jury would award significantly more, or when you want public accountability for corporate wrongdoing. As your attorneys, we provide honest assessments of settlement offers versus trial prospects, explaining the risks and benefits of each option. Our goal is maximizing your compensation while considering your health, family needs, and personal preferences. Having defended companies, Attorney Trembach knows when they're holding back and when they've reached their limit, helping you make informed decisions."
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
      answer: "Mesothelioma cases are unique in several critical ways. The 20-50 year latency period means exposures occurred decades ago, requiring historical investigation techniques and expertise in industrial history. Multiple defendants are typically involved, as victims often encountered various asbestos products throughout their careers. The fatal nature of mesothelioma creates urgency - courts expedite these cases and defendants know delay tactics are ineffective. Causation is clearer than most toxic tort cases since asbestos is the only known cause of mesothelioma. Bankruptcy trusts provide additional compensation sources unavailable in typical injury cases. The defendant pool includes many companies that have faced thousands of asbestos claims, creating established settlement values and procedures. Specialized medical experts are required who understand mesothelioma's unique characteristics. These differences require attorneys with specific asbestos litigation experience who understand the complex interplay of multiple defendants, trust funds, and coverage."
    },
    {
      question: "What Makes Trembach Law Firm Different?",
      answer: "Despite being newly established, Trembach Law Firm offers unique advantages that set us apart from large national firms and career plaintiff attorneys. Attorney Trembach's former experience defending companies and their representatives provides insights unavailable to attorneys who've never seen how companies evaluate cases internally. While large firms handle hundreds of cases simultaneously, often delegating work to junior associates, you work directly with Attorney Trembach throughout your case. We limit our caseload to ensure personalized attention, returning calls promptly and meeting regularly to discuss developments. Our aggressive approach means filing comprehensive claims immediately rather than waiting to see what defendants offer. We prepare every case for trial, ensuring defendants know we won't accept lowball settlements. Most importantly, we understand you're facing the fight of your life, and we're honored to fight alongside you for justice and the compensation your family deserves."
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="hero-content glass-morphism">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-foreground leading-tight">
                  California Mesothelioma & Asbestos Attorneys
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl">
                  No fees. No risk. You only pay when we win. Former defense attorney now fighting for your rights throughout California.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="px-4 py-2 text-sm">No Fees Unless We Win</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">Former Defense Attorney</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-sm">Maximum Compensation</Badge>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 855-TREMBACH-WINS
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  Free Case Evaluation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Comprehensive Mesothelioma Legal Support</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert guidance through every aspect of your mesothelioma case, from medical support to maximum compensation recovery
            </p>
          </div>

        {/* Main Content Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-2 gap-8">
          
          {/* What to Do After Diagnosis */}
          <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={medicalImage} 
                alt="Medical consultation for mesothelioma patients"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button variant="secondary" size="sm" className="w-full">
                  Get Medical Guidance <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-destructive" />
                <Badge variant="outline">Medical Priority</Badge>
              </div>
              <CardTitle className="text-2xl">What to Do After a Mesothelioma Diagnosis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  A mesothelioma diagnosis fundamentally changes your life trajectory and demands immediate, coordinated action across multiple fronts. Time becomes your most precious resource, as this aggressive cancer progresses rapidly and treatment options often depend on early intervention. The decisions you make in the first weeks following diagnosis can significantly impact both your survival prospects and your family's financial security. Understanding what steps to prioritize helps ensure you maximize both medical and legal opportunities while managing the emotional toll of this devastating news.
                </p>
                
                <p className="leading-relaxed mb-4">
                  <strong>Securing specialized medical treatment must be your absolute first priority.</strong> Mesothelioma is an extremely rare cancer that most oncologists see only occasionally, if ever. General cancer centers may lack the specific expertise needed to provide optimal care for this unique disease. California hosts several world-renowned mesothelioma treatment centers, including specialized programs at UCLA, UCSF, Stanford, and City of Hope. These centers offer access to cutting-edge treatments, clinical trials, and multidisciplinary teams trained specifically in mesothelioma care. We maintain relationships with these institutions and can help facilitate rapid appointments, ensuring you access the best available treatment options without delay.
                </p>

                <p className="leading-relaxed mb-4">
                  Simultaneously, you must immediately contact experienced mesothelioma legal representation to protect your rights. California's statute of limitations provides only one year from diagnosis to file personal injury claims, and crucial evidence begins disappearing as soon as you delay. Employment records get destroyed, witnesses' memories fade, and companies go out of business or file bankruptcy. Early legal intervention allows us to preserve evidence, secure witness testimony while it's still available, and begin the comprehensive investigation required to identify all exposure sources and liable parties.
                </p>

                <p className="leading-relaxed mb-4">
                  <strong>Documentation becomes critical for both medical and legal purposes.</strong> Begin gathering every piece of employment documentation you can locate, including union records, Social Security earnings statements, military service records, and any photographs from job sites. Document your symptoms, treatments, and how the disease affects your daily activities. This information helps medical providers understand your disease progression and assists legal teams in quantifying damages for pain and suffering claims. Inform family members about potential secondary exposure through work clothes or household contact, as they may also have claims if they develop related diseases.
                </p>

                <p className="leading-relaxed mb-4">
                  Avoid certain actions that could harm your case. Never sign documents from former employers or their attorneys without legal review. Don't provide recorded statements to investigators or adjusters. Avoid posting about your diagnosis on social media, as these posts can be discovered and used against you. Don't delay seeking both medical and legal help due to emotional overwhelm - every day matters in mesothelioma cases. Don't attempt to investigate your exposure history alone, as this complex process requires specialized knowledge and resources.
                </p>

                <p className="leading-relaxed">
                  Most importantly, remember that while mesothelioma is a terminal diagnosis, new treatments are extending survival for many patients. Some people live years beyond initial prognoses, especially when they receive aggressive treatment at specialized centers. Simultaneously pursuing maximum compensation ensures your family's financial security regardless of treatment outcomes. Our coordinated approach addresses both immediate medical needs and long-term financial protection, allowing you to focus on fighting this disease while we fight for your rights.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Schedule Consultation
              </Button>
            </CardContent>
          </Card>

          {/* Important to Know About Claims */}
          <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={legalImage} 
                alt="Legal documentation and claim process"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button variant="secondary" size="sm" className="w-full">
                  Learn About Claims <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <Badge variant="outline">Legal Protection</Badge>
              </div>
              <CardTitle className="text-2xl">Important to Know About Mesothelioma Claims</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  <strong>Mesothelioma is a devastating cancer caused exclusively by asbestos exposure</strong>, often developing 20-50 years after initial contact with asbestos fibers. This aggressive cancer affects the protective lining of the lungs (pleural mesothelioma, accounting for 75% of cases), abdomen (peritoneal mesothelioma, 20% of cases), heart (pericardial mesothelioma, 1% of cases), or testicles (testicular mesothelioma, less than 1% of cases). The prognosis remains grim, with most patients facing 12-21 months after diagnosis, though new treatments are extending survival for some patients.
                </p>

                <p className="leading-relaxed mb-4">
                  The long latency period—typically 20-50 years but sometimes as long as 70 years—means many victims are now being diagnosed from exposures that occurred in the 1960s, 1970s, and 1980s when asbestos use peaked in American industry. These exposures happened in shipyards where asbestos insulation covered every pipe and boiler, construction sites where workers cut asbestos cement and installed fireproofing, military service where sailors lived surrounded by asbestos aboard ships, refineries and chemical plants where asbestos protected equipment from extreme heat, power plants where turbines and generators contained asbestos components, and automotive repair shops where mechanics ground asbestos brake linings.
                </p>

                <p className="leading-relaxed mb-4">
                  <strong>California's legal framework provides exceptional advantages for mesothelioma victims</strong> compared to other states. Our state follows the doctrine of strict liability for asbestos cases, meaning victims don't need to prove negligence—only that exposure to a defendant's asbestos-containing product was a substantial factor in causing the disease. California's statute of limitations provides one year from diagnosis for personal injury claims and one year from death for wrongful death claims, with the discovery rule potentially extending these deadlines if the connection to asbestos wasn't immediately apparent.
                </p>

                <p className="leading-relaxed mb-4">
                  Unlike states that have enacted tort reform limiting damages, California allows unlimited non-economic damages for pain and suffering, often the largest component of mesothelioma settlements. Our state permits joint and several liability, meaning any defendant found liable can be required to pay the entire judgment, protecting victims when some defendants are bankrupt or defunct. California courts have established favorable precedents through landmark cases that recognize alternative exposure theories, minimal exposure standards, and broad definitions of product defects.
                </p>

                <p className="leading-relaxed">
                  <strong>The asbestos bankruptcy trust system represents a parallel compensation pathway</strong> that many victims don't fully understand. When asbestos companies faced overwhelming liability, many filed for bankruptcy protection, establishing trusts to compensate current and future victims. Today, over 60 trusts hold more than $30 billion in assets specifically earmarked for mesothelioma victims. Each trust operates independently with unique claim requirements, payment percentages, and evidence standards. Strategic sequencing of trust claims can maximize total recovery, and many victims qualify for 10-20 different trust funds based on various exposures throughout their careers.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Evaluate Your Claim
              </Button>
            </CardContent>
          </Card>

          {/* Common Damages */}
          <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={exposureImage} 
                alt="Industrial exposure sources and compensation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button variant="secondary" size="sm" className="w-full">
                  Calculate Damages <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-warning" />
                <Badge variant="outline">Compensation</Badge>
              </div>
              <CardTitle className="text-2xl">Common Damages from Mesothelioma</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  <strong>Mesothelioma settlements and verdicts vary significantly based on individual circumstances</strong>, but often range from hundreds of thousands to several million dollars. Understanding the factors that influence compensation helps set realistic expectations and ensures you pursue all available sources of recovery. The total amount depends on numerous variables including your age at diagnosis, occupation and exposure history, the number of liable defendants identified, available coverage, economic losses, and the strength of evidence linking your disease to specific asbestos products.
                </p>

                <p className="leading-relaxed mb-4">
                  <strong>Medical expenses form a substantial component of mesothelioma damages.</strong> Treatment costs can exceed $400,000 annually, including surgery, chemotherapy, radiation, and supportive care. Specialized procedures like extrapleural pneumonectomy or heated intraoperative chemotherapy can cost over $100,000 each. Clinical trial participation may require travel to distant treatment centers, adding accommodation and transportation expenses. Home care, medical equipment, and prescription medications create ongoing costs. Future medical expenses must be projected based on prognosis and potential treatments, often requiring expert economic testimony to properly value these claims.
                </p>

                <p className="leading-relaxed mb-4">
                  Lost wages and reduced earning capacity represent another major damage category. Many mesothelioma victims are forced to retire early or reduce working hours due to symptoms and treatment demands. Calculating these losses requires analyzing your employment history, career trajectory, and remaining work-life expectancy. Benefits lost due to early retirement, including health coverage and pension contributions, add to economic damages. Spouses may also lose income when they become caregivers, creating additional family economic impact that can be recovered in some cases.
                </p>

                <p className="leading-relaxed mb-4">
                  <strong>Pain and suffering damages often represent the largest component of mesothelioma settlements.</strong> California places no caps on non-economic damages, allowing full compensation for the physical pain, emotional distress, and diminished quality of life caused by this terrible disease. These damages account for the fear and anxiety of a terminal diagnosis, the pain from aggressive treatments, the loss of life pleasures, and the emotional impact on family relationships. Evidence supporting these claims includes medical records documenting symptoms, testimony about daily life limitations, and expert psychological evaluation of emotional trauma.
                </p>

                <p className="leading-relaxed mb-4">
                  Family members may recover loss of consortium damages for the impact on spousal relationships and family dynamics. Children can claim loss of parental guidance and support. These damages recognize that mesothelioma affects entire families, not just the diagnosed patient. Some cases also involve punitive damages when defendants' conduct was particularly egregious, such as concealing known asbestos dangers from workers and the public.
                </p>

                <p className="leading-relaxed">
                  <strong>Multiple compensation sources can provide additional recovery beyond traditional lawsuits.</strong> Asbestos bankruptcy trust funds operate independently and can pay benefits while litigation proceeds. Veterans may receive VA disability benefits and healthcare. Workers' compensation may apply for occupational exposures. Social Security disability provides income support for those unable to work. Each source has different requirements and doesn't reduce others, potentially providing substantial total compensation for mesothelioma victims and their families.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Estimate Compensation
              </Button>
            </CardContent>
          </Card>

          {/* California Exposure Sites */}
          <Card className="glass-card group hover:scale-[1.02] transition-all duration-300">
            <div className="relative overflow-hidden rounded-t-lg">
              <img 
                src={californiaImage} 
                alt="California asbestos exposure locations"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button variant="secondary" size="sm" className="w-full">
                  Find Exposure Sites <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <Badge variant="outline">California Focus</Badge>
              </div>
              <CardTitle className="text-2xl">California Asbestos Exposure Sites</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-sm text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  <strong>California's industrial history created widespread asbestos exposure opportunities</strong> across diverse industries and geographic regions throughout the state. From the massive naval shipyards of World War II through the oil refineries, power plants, and construction boom of the post-war era, millions of California workers encountered dangerous asbestos products daily. Understanding these exposure sources helps identify liable parties and builds stronger compensation claims for victims now suffering from mesothelioma decades after their initial contact with asbestos.
                </p>

                <p className="leading-relaxed mb-4">
                  <strong>Naval shipyards represent some of California's most concentrated asbestos exposure sites.</strong> The Long Beach Naval Shipyard, Mare Island Naval Shipyard near San Francisco, Hunters Point Naval Shipyard, and San Pedro naval facilities employed thousands of workers who lived surrounded by asbestos insulation, gaskets, and fireproofing materials. Ships built during World War II and the Korean War contained asbestos in virtually every compartment - boiler rooms, engine rooms, pipe insulation, electrical systems, and even sleeping quarters. Workers breathed dangerous levels of asbestos fibers daily while installing, maintaining, and removing these materials.
                </p>

                <p className="leading-relaxed mb-4">
                  California's oil refining industry created another major exposure source through facilities operated by Chevron, Shell, ExxonMobil, Valero, and other petroleum companies. Refineries in Richmond, El Segundo, Carson, Torrance, and Martinez used massive amounts of asbestos insulation on pipelines, boilers, pumps, and processing equipment exposed to extreme temperatures. Maintenance workers, pipe fitters, insulators, and electricians regularly disturbed deteriorating asbestos materials during routine repairs and overhauls, releasing dangerous fibers into the workplace atmosphere.
                </p>

                <p className="leading-relaxed mb-4">
                  <strong>Power generation facilities throughout California exposed workers to asbestos in steam turbines, boilers, electrical equipment, and cooling systems.</strong> Major utilities including Pacific Gas & Electric, Southern California Edison, and San Diego Gas & Electric operated power plants containing extensive asbestos components. Workers at facilities like Diablo Canyon, San Onofre, Alamitos, and El Segundo power plants encountered asbestos during construction, maintenance, and demolition activities spanning several decades.
                </p>

                <p className="leading-relaxed mb-4">
                  Construction and industrial sites across California used asbestos in building materials, insulation, flooring, roofing, and fireproofing products. Major construction projects including airports, hospitals, schools, and commercial buildings incorporated asbestos cement, floor tiles, ceiling materials, and spray-applied fireproofing. Automotive manufacturing and repair facilities exposed workers to asbestos brake linings, clutch facings, and gaskets. Steel mills, chemical plants, and manufacturing facilities used asbestos in high-temperature applications throughout their operations.
                </p>

                <p className="leading-relaxed">
                  <strong>Secondary exposure also occurred when workers brought asbestos fibers home on their clothing</strong>, exposing family members to dangerous levels of contamination. Wives who washed work clothes, children who hugged parents after work, and family members who lived in homes where work clothes were stored all faced potential exposure. These secondary exposure cases can result in substantial compensation when companies failed to provide adequate warnings or safety measures to protect workers' families from take-home contamination.
                </p>
              </div>
              <Button variant="outline" className="w-full mt-4">
                Identify Your Exposure
              </Button>
            </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert answers to common questions about mesothelioma claims and legal representation
            </p>
          </div>

          <div ref={faqsRef} className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-left">{faq.question}</CardTitle>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                </CardHeader>
                {expandedFaq === index && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold text-primary-foreground">
              Don't Wait - Time Is Critical for Mesothelioma Claims
            </h2>
            <p className="text-xl text-primary-foreground/90">
              California law provides only one year from diagnosis to file your claim. Contact us immediately for your free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="group">
                <Phone className="w-5 h-5 mr-2" />
                Call 855-TREMBACH-WINS
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Free Case Evaluation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MesotheliomaAsbestos;