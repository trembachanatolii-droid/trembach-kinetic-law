import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Phone, Users, Shield, Award, Clock, Heart, Star, ArrowRight, ChevronDown, ChevronUp, Car, AlertTriangle, Scale, FileText } from 'lucide-react';
import heroImage from '@/assets/practice-areas/car-accident-scene.jpg';
import medicalImage from '@/assets/practice-areas/car-accident-medical.jpg';
import legalImage from '@/assets/practice-areas/car-accident-legal-consultation.jpg';
import compensationImage from '@/assets/practice-areas/car-accident-compensation.jpg';
import trafficImage from '@/assets/practice-areas/california-traffic-system.jpg';
import calculatorImage from '@/assets/mesothelioma-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

const CarAccidents: React.FC = () => {
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
      question: "What Should I Do Immediately After a Car Accident?",
      answer: "Your immediate actions after a car accident can significantly impact your ability to recover compensation. First, ensure safety - move to a safe location if possible and call 911 immediately. Even if injuries seem minor, seek medical attention as adrenaline can mask serious injuries. Document everything: take photos of vehicle damage, road conditions, traffic signals, and visible injuries. Exchange information with all drivers including names, insurance companies, policy numbers, driver's license numbers, and contact information. Get witness contact information and their account of what happened. Do not admit fault or apologize, as these statements can be used against you later. Contact the police and insist on a written report. Notify your insurance company but be careful about giving recorded statements without legal counsel. Keep all medical records and receipts related to your injuries and treatment. Contact an experienced car accident attorney as soon as possible to protect your rights and preserve crucial evidence."
    },
    {
      question: "How Much Is My Car Accident Case Worth?",
      answer: "The value of car accident cases varies significantly based on multiple factors, but understanding the components helps estimate potential compensation. Economic damages include medical expenses (current and future), lost wages and earning capacity, property damage, and out-of-pocket costs. Non-economic damages cover pain and suffering, emotional distress, loss of enjoyment of life, and permanent disability or disfigurement. In California, there are no caps on damages for most car accident cases. Factors affecting value include severity and permanence of injuries, fault determination, insurance policy limits, your age and earning capacity, impact on daily life and relationships, and quality of medical documentation. Minor injury cases might settle for $15,000-$45,000, moderate injuries often result in $50,000-$200,000 settlements, while severe injuries can yield settlements exceeding $1 million. As a new firm, we cannot reference past results, but our founder's experience as a defense attorney provides unique insights into how insurance companies value claims, helping us maximize your recovery rather than accepting initial lowball offers."
    },
    {
      question: "How Long Do I Have to File a Car Accident Claim in California?",
      answer: "California's statute of limitations provides specific deadlines that must be strictly followed. For personal injury claims, you have two years from the date of the accident to file a lawsuit. For property damage claims, you have three years from the accident date. However, these deadlines can be complex: if injuries aren't immediately apparent, the clock may start from the 'discovery date' when you knew or should have known about the injury. Claims against government entities have much shorter deadlines - typically six months to file a claim. If a hit-and-run driver is later identified, new deadlines may apply. Wrongful death cases have two years from the date of death, which may differ from the accident date. Insurance claims have different deadlines specified in your policy, often 30 days to report and one year to file suit. Some insurance policies require immediate notification. Missing these deadlines can permanently bar your right to compensation, regardless of case merit. Early action also preserves crucial evidence, secures witness testimony while memories are fresh, and demonstrates seriousness to insurance companies, often resulting in better settlement offers."
    },
    {
      question: "What If the Other Driver Doesn't Have Insurance?",
      answer: "Uninsured drivers present significant challenges, but several compensation options exist. First, check your own auto insurance policy for uninsured/underinsured motorist (UM/UIM) coverage, which is required in California unless specifically waived in writing. This coverage protects you when hit by drivers with no insurance or insufficient coverage. California requires minimum liability limits of $15,000 per person and $30,000 per accident, but serious injuries often exceed these limits, making UIM coverage crucial. If you lack UM/UIM coverage, you can still pursue the uninsured driver personally through lawsuits and asset recovery, though collection can be challenging. Other potential sources include: your collision coverage for vehicle damage, your medical payments coverage for immediate medical expenses, health insurance for medical treatment (though they may seek reimbursement), and workers' compensation if the accident occurred during work activities. We investigate all available coverage sources including umbrella policies, business insurance if the driver was working, and property owner liability if the accident occurred on someone's property. Even with limited recovery options, documentation remains crucial for potential future asset discovery or insurance coverage identification."
    },
    {
      question: "Should I Accept the Insurance Company's First Settlement Offer?",
      answer: "Never accept an insurance company's first settlement offer without legal consultation, as initial offers are typically 20-50% below fair value. Insurance companies hope you'll accept quick, low settlements before understanding your full injuries and rights. Their adjusters are trained negotiators whose job is minimizing payouts, not ensuring fair compensation. Early settlement attempts often occur before you fully understand injury severity, complete medical treatment, or calculate total losses. Soft tissue injuries may not manifest fully for days or weeks, traumatic brain injuries can have delayed symptoms, and psychological trauma may require ongoing treatment. Additionally, accepting any settlement typically releases all future claims, even if complications develop later. Before considering any offer, ensure you've reached maximum medical improvement, understand all current and future medical needs, calculated all economic losses including future earning capacity, and consulted with an experienced attorney who understands true case value. We review settlement offers against comparable case values and negotiate aggressively to secure maximum compensation. Insurance companies respect represented parties more than unrepresented victims, often leading to settlement increases of 200-300% over initial offers."
    },
    {
      question: "What If I Was Partially at Fault for the Accident?",
      answer: "California's pure comparative negligence law provides significant advantages for accident victims, even those partially at fault. Unlike states that bar recovery if you're 50% or more at fault, California allows recovery regardless of fault percentage - your damages are simply reduced proportionally. For example, if you're 20% at fault in a $100,000 case, you'd recover $80,000. This law means even complex scenarios with shared fault can still result in substantial recovery. Insurance companies exploit victims' misunderstanding of this law, using aggressive tactics to exaggerate your fault percentage and minimize their liability. They'll claim you were speeding, could have been more defensive, or violated minor traffic rules. Common fault arguments include: failure to maintain proper following distance, exceeding speed limits by any amount, not being fully attentive, making unsafe lane changes, or not yielding right-of-way. We counter these tactics with accident reconstruction experts, traffic engineers, and human factors specialists who demonstrate that even if you made minor errors, the other driver's negligence was the primary cause. Understanding California's comparative negligence system allows us to position cases advantageously, often securing significant compensation in cases insurance companies initially valued near zero."
    },
    {
      question: "How Long Does a Car Accident Case Take to Resolve?",
      answer: "Car accident case timelines vary significantly based on injury severity, liability clarity, and insurance company cooperation. Simple cases with clear liability and minor injuries may settle within 3-6 months, while complex cases involving severe injuries or disputed liability can take 12-24 months or longer. Key timeline factors include: medical treatment duration (you shouldn't settle until reaching maximum medical improvement), insurance company responsiveness and negotiation willingness, need for expert witnesses or accident reconstruction, litigation requirements if fair settlement isn't reached, and court scheduling for trials. The process typically follows these phases: immediate investigation and evidence preservation (30-60 days), medical treatment completion (varies widely), demand package preparation and submission (30 days), initial negotiations (60-90 days), litigation if necessary (6-18 months), and trial or final settlement. We expedite cases by immediate evidence preservation, prompt medical referrals to respected providers, thorough demand packages that demonstrate case value, and aggressive negotiation that shows willingness to try cases. While we work efficiently to resolve cases quickly, we never rush settlements at the expense of fair compensation. Our goal is maximizing your recovery in the shortest reasonable timeframe."
    },
    {
      question: "What Types of Damages Can I Recover in a Car Accident Case?",
      answer: "Car accident victims can recover both economic and non-economic damages to compensate for all losses. Economic damages include: medical expenses (emergency room, surgery, hospitalization, physical therapy, medications, medical equipment), lost wages and earning capacity (past and future), property damage (vehicle repair/replacement, personal property), transportation costs (rental cars, rideshares for medical appointments), and household services you can no longer perform. Non-economic damages compensate for: pain and suffering (physical discomfort and emotional distress), loss of enjoyment of life (inability to participate in previously enjoyed activities), permanent disability or disfigurement, loss of consortium (impact on spousal relationships), and emotional distress including PTSD, anxiety, and depression. California doesn't cap damages in most car accident cases, unlike medical malpractice claims. Punitive damages may be available if the other driver's conduct was particularly egregious (drunk driving, extreme recklessness). Future damages are crucial in severe injury cases: ongoing medical care, life care planning, vocational rehabilitation, home modifications for disabilities, and reduced earning capacity over your lifetime. We work with medical experts, economists, and life care planners to document all current and future damages, ensuring comprehensive compensation rather than just immediate expenses."
    },
    {
      question: "Do I Need to Go to Court for My Car Accident Case?",
      answer: "The vast majority of car accident cases (approximately 95%) settle without requiring court appearances or trials. Most legal work occurs through negotiations, document exchange, and settlement discussions handled by your attorney. When court appearances are necessary, they're typically for routine procedural matters that your attorney handles on your behalf. However, being prepared for litigation strengthens negotiation positions - insurance companies offer better settlements when they know you're serious about pursuing full compensation. Situations that might require litigation include: insurance companies making unreasonably low offers, disputed liability requiring expert testimony, complex multi-party accidents, insurance companies denying valid claims in bad faith, or when trial verdicts historically exceed settlement offers for similar injuries. Even when lawsuits are filed, most still settle before trial through mediation or continued negotiations. If trial becomes necessary, we thoroughly prepare you for testimony and handle all legal procedures. California's preference system may expedite your case if you have life-threatening injuries. Our litigation experience as both plaintiff and defense attorneys provides strategic advantages in both settlement negotiations and courtroom advocacy, ensuring optimal outcomes whether through settlement or trial."
    },
    {
      question: "What Should I Know About Dealing with Insurance Companies?",
      answer: "Insurance companies are for-profit businesses whose interests often conflict with fair compensation for accident victims. Understanding their tactics protects you from manipulation and ensures better outcomes. Common insurance company strategies include: immediate contact after accidents to secure recorded statements before you understand your rights, requesting unnecessary medical records to find pre-existing conditions they can blame, sending you to their preferred doctors who minimize injuries, surveillance to document any physical activity they can misinterpret, and lowball settlement offers hoping you'll accept quick, inadequate compensation. Protect yourself by: never giving recorded statements without legal counsel, limiting medical record releases to accident-related injuries, seeking treatment from your chosen physicians rather than insurance company doctors, being aware of potential surveillance and social media monitoring, and consulting an attorney before accepting any settlement offers. Insurance adjusters may seem helpful and concerned, but remember they work for the insurance company, not you. They're trained to appear sympathetic while gathering information to deny or minimize your claim. Having an attorney levels the playing field - insurance companies treat represented claimants more seriously and offer higher settlements, knowing experienced lawyers understand true case values and won't accept inadequate offers."
    },
    {
      question: "What If I Have Pre-existing Medical Conditions?",
      answer: "Pre-existing medical conditions don't prevent car accident injury claims, but they require careful legal and medical management. California law recognizes the 'eggshell plaintiff' doctrine - defendants must take victims as they find them, meaning they're liable for aggravating pre-existing conditions. The key is distinguishing between your baseline condition and new injuries or worsening caused by the accident. Insurance companies aggressively exploit pre-existing conditions, arguing all symptoms relate to prior problems rather than the accident. They'll request extensive medical records searching for any similar complaints or conditions. Combat these tactics by: obtaining thorough medical evaluations that distinguish accident-related changes from baseline conditions, working with doctors who clearly document causal relationships between the accident and symptom changes, maintaining detailed records of how the accident specifically worsened your condition, and being honest about pre-existing conditions while emphasizing new limitations. Many successful cases involve pre-existing conditions because accidents often worsen degenerative conditions, arthritis, prior injuries, or chronic pain. Medical experts can demonstrate through imaging, examination findings, and clinical correlation how the accident caused measurable deterioration beyond your baseline condition. Proper medical documentation and expert testimony transform potential weaknesses into compensable injuries."
    },
    {
      question: "How Do You Calculate Pain and Suffering Damages?",
      answer: "Pain and suffering damages compensate for physical discomfort, emotional distress, and reduced quality of life following car accidents. Unlike economic damages with specific dollar amounts, pain and suffering requires complex evaluation of subjective experiences. California doesn't cap pain and suffering damages in most car accident cases, unlike some other types of claims. Several methods evaluate pain and suffering: the multiplier method (multiplying economic damages by 1.5-5+ based on severity), per diem method (assigning daily values for pain and suffering periods), and comparable case analysis (reviewing similar injuries and circumstances). Factors affecting pain and suffering value include: injury severity and permanence, treatment duration and invasiveness, impact on daily activities and relationships, age and life expectancy, pre-accident activity level, credibility of symptom complaints, and quality of medical documentation. Document pain and suffering through: detailed pain journals describing daily symptoms and limitations, photographs of injuries and their progression, witness statements about activity changes, medical records documenting pain complaints and treatment responses, and mental health treatment records if applicable. We present compelling pain and suffering cases through comprehensive documentation, medical expert testimony, day-in-the-life videos, and compelling narratives that help insurance companies and juries understand your experience beyond mere medical records."
    }
  ];

  const stats = [
    { icon: AlertTriangle, label: "Car Accidents Every 8 Seconds", value: "California Roads" },
    { icon: Car, label: "485,000+ Collisions", value: "In 2023 Alone" },
    { icon: Users, label: "277,000 Injuries", value: "Annual Rate" },
    { icon: Heart, label: "4,285 Fatalities", value: "Lives Lost" },
  ];

  const keyFeatures = [
    {
      icon: Shield,
      title: "Former Defense Attorney Advantage",
      description: "Insider knowledge of insurance company tactics and claim evaluation systems"
    },
    {
      icon: Scale,
      title: "California Comparative Negligence Expert",
      description: "Maximizing recovery even when you bear partial fault for the accident"
    },
    {
      icon: Award,
      title: "Comprehensive Damage Recovery",
      description: "Fighting for full compensation including hidden costs and future damages"
    },
    {
      icon: Clock,
      title: "Immediate Action Protocol",
      description: "Preserving crucial evidence and protecting your rights from day one"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <Logo size="sm" />
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/practice-areas" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Practice Areas
            </Link>
            <Button size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="outline" className="w-fit">
                  <Car className="h-4 w-4 mr-2" />
                  California Car Accident Attorneys
                </Badge>
                <h1 className="text-display font-display font-bold leading-tight">
                  California Car Accident Attorneys
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  California's congested highways see thousands of serious crashes annually. Former defense attorney now fighting insurance companies for maximum compensation. We know their tactics, we know their limits, and we know how to win.
                </p>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    No fees. No risk.
                  </p>
                  <p className="text-foreground">
                    You only pay when we win
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2 text-lg px-8 py-6" asChild>
                  <Link to="/schedule-consultation">
                    <Phone className="h-5 w-5" />
                    Get Your Free Consultation
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2 text-lg px-8 py-6" asChild>
                  <Link to="/case-evaluation">
                    <FileText className="h-5 w-5" />
                    Case Evaluation
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-card border border-border rounded-lg">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-primary" />
                    <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="California car accident scene with emergency responders"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Car Accident Attorneys</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our unique background and aggressive approach sets us apart from other personal injury firms
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <feature.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Cards */}
      <section className="py-16 px-8">
        <div className="container mx-auto">
          <div ref={cardsRef} className="grid gap-12 max-w-6xl mx-auto">
            
            {/* Critical Information Card */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <Badge variant="outline" className="w-fit mb-4">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Critical Information
                    </Badge>
                    <CardTitle className="text-2xl">Important to Know About Car Accident Claims</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong>Every eight seconds, a car accident occurs on California roads</strong>, making vehicle collisions the leading cause of personal injury claims in our state. With over 39 million registered vehicles and 396 billion vehicle miles traveled annually, California's roads are among the most dangerous in the nation.
                    </p>
                    <p className="leading-relaxed">
                      In 2023 alone, California recorded over 485,000 reported traffic collisions, resulting in 4,285 fatalities and 277,000 injuries. These statistics represent real people whose lives are forever changed in an instant.
                    </p>
                    <p className="leading-relaxed">
                      What makes these tragedies even more devastating is that 94% of serious crashes result from human error—distracted driving, speeding, drunk driving, aggressive driving, and fatigue.
                    </p>
                  </CardContent>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={trafficImage} 
                    alt="California highway system showing congested traffic"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Insurance Company Tactics */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 relative h-64 lg:h-auto">
                  <img 
                    src={legalImage} 
                    alt="Insurance adjusters examining car accident documentation"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <Badge variant="outline" className="w-fit mb-4">
                      <Shield className="h-4 w-4 mr-2" />
                      Insider Knowledge
                    </Badge>
                    <CardTitle className="text-2xl">Former Defense Attorney Advantage</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong>As a former insurance defense attorney, Anatolii Trembach possesses insider knowledge</strong> that fundamentally transforms how we approach your car accident case. Having spent years defending insurance companies, he knows exactly how adjusters are trained to minimize payouts.
                    </p>
                    <p className="leading-relaxed">
                      Insurance companies use sophisticated software like Colossus and ClaimIQ that reduces your injuries to data points and algorithms, systematically undervaluing pain and suffering.
                    </p>
                    <p className="leading-relaxed">
                      This insider perspective allows us to anticipate every move, counter every strategy, and maximize your recovery by understanding exactly how insurance companies evaluate and defend claims.
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Medical Documentation */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <Badge variant="outline" className="w-fit mb-4">
                      <Heart className="h-4 w-4 mr-2" />
                      Medical Strategy
                    </Badge>
                    <CardTitle className="text-2xl">Comprehensive Injury Documentation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong>Medical documentation strategies can dramatically impact your settlement value</strong>, yet most victims unknowingly sabotage their cases through poor medical decision-making. Insurance companies exploit gaps in treatment, using any delay or inconsistency to argue injuries aren't serious.
                    </p>
                    <p className="leading-relaxed">
                      Seeking immediate medical attention is crucial even if you feel fine—adrenaline masks pain, and many serious injuries have delayed symptoms. Traumatic brain injuries may not manifest for days or weeks.
                    </p>
                    <p className="leading-relaxed">
                      We guide you through proper medical documentation that ensures your injuries are properly valued rather than dismissed by insurance companies.
                    </p>
                  </CardContent>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={medicalImage} 
                    alt="Medical examination and documentation of car accident injuries"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>

            {/* Compensation Calculator */}
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 relative h-64 lg:h-auto">
                  <img 
                    src={compensationImage} 
                    alt="Car accident compensation calculation and settlement analysis"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2 p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <Badge variant="outline" className="w-fit mb-4">
                      <Scale className="h-4 w-4 mr-2" />
                      Full Compensation
                    </Badge>
                    <CardTitle className="text-2xl">True Cost of Car Accidents</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong>The true cost of car accidents extends far beyond initial medical bills and vehicle damage</strong>, encompassing hidden expenses and long-term impacts that insurance companies deliberately ignore.
                    </p>
                    <p className="leading-relaxed">
                      Medical costs include emergency room visits averaging $3,300, surgery ranging from $15,000 to $200,000, and ongoing therapy often requiring 50+ sessions at $200-$400 each.
                    </p>
                    <p className="leading-relaxed">
                      We ensure comprehensive compensation for all current and future damages, not just immediate expenses that insurance companies prefer to pay.
                    </p>
                  </CardContent>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about car accident claims in California
            </p>
          </div>
          
          <div ref={faqsRef} className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="font-semibold pr-4">{faq.question}</h3>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <Separator className="mb-4" />
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-8 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Been in a Car Accident?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let insurance companies take advantage of you. Get experienced legal representation with insider knowledge of their tactics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 text-lg px-8 py-6" asChild>
              <Link to="/case-evaluation">
                <Phone className="h-5 w-5" />
                Free Case Review
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/schedule-consultation">
                <ArrowRight className="h-5 w-5" />
                Call (555) 123-4567
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarAccidents;