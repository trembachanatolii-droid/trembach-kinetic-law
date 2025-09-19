import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const getPracticeAreaLink = (title: string): string => {
  switch (title) {
    case "Construction Accidents":
      return "/practice-areas/construction-accidents";
    case "Amputation":
      return "/practice-areas/amputation-injuries";
    case "Burn Injuries":
      return "/practice-areas/burn-injuries";
    default:
      return "/case-evaluation";
  }
};

const PracticeAreaCard: React.FC<PracticeAreaProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-card border border-border rounded-xl p-10 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-xl hover:border-primary min-h-[320px] flex flex-col"
    >
      <div className="text-5xl mb-5 block">
        {icon}
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed flex-grow">
        {description}
      </p>

      <a 
        href={getPracticeAreaLink(title)} 
        className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary-glow transition-colors"
      >
        Get Help →
      </a>
    </div>
  );
};

const PracticeAreas = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const practiceAreas = [
    {
      title: "Mesothelioma & Asbestos",
      description: "Aggressive representation for asbestos cancer victims throughout California. We trace exposure histories from military service, shipyards, construction sites, and consumer products. Our team understands the devastating impact of this aggressive cancer that develops decades after exposure. California's favorable laws allow recovery for exposures dating back many years, with multiple compensation sources available including trust funds, settlements, and verdicts.",
      icon: "🫁"
    },
    {
      title: "Silicosis Injuries",
      description: "Fighting for stone workers suffering from this preventable yet incurable lung disease. Engineered stone fabricators face epidemic-level silicosis rates from cutting quartz countertops without proper protection. This devastating disease causes progressive scarring of lung tissue, leading to difficulty breathing, fatigue, and eventual respiratory failure.",
      icon: "⚠️"
    },
    {
      title: "Talc & Baby Powder Cancer",
      description: "Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products. For decades, manufacturers knew their talc contained asbestos but continued marketing these products for intimate use and infant care. Internal documents reveal deliberate concealment of contamination risks while aggressively promoting powder use.",
      icon: "🍼"
    },
    {
      title: "Car Accidents",
      description: "California's congested highways and streets see thousands of serious crashes annually, causing life-altering injuries and devastating losses. Our former defense experience reveals insurance company tactics used to minimize payouts and deny valid claims. We handle all collision types including rear-end impacts, intersection crashes, head-on collisions, and multi-vehicle pileups.",
      icon: "🚗"
    },
    {
      title: "Truck & 18-Wheeler",
      description: "Commercial truck crashes cause catastrophic injuries due to size and weight disparities with passenger vehicles. Federal regulations and state laws create complex liability issues involving drivers, trucking companies, maintenance providers, and cargo loaders. We investigate hours-of-service violations, equipment failures, improper loading, and substance abuse that contribute to devastating crashes.",
      icon: "🚛"
    },
    {
      title: "Motorcycle Accidents",
      description: "Protecting California riders against bias and securing fair compensation for devastating injuries. Despite following traffic laws and wearing protective gear, motorcyclists face prejudice from insurance companies and juries who wrongly assume fault. California's lane-splitting laws create unique liability questions requiring experienced legal representation.",
      icon: "🏍️"
    },
    {
      title: "Pedestrian Accidents",
      description: "California law provides strong protections for pedestrians, but injuries from vehicle strikes are often severe or fatal. Crosswalk accidents, sidewalk collisions, parking lot incidents, and hit-and-run crashes devastate families physically and financially. We investigate distracted driving, speeding, failure to yield, and impaired driving that endangers vulnerable pedestrians.",
      icon: "🚶"
    },
    {
      title: "Bicycle Accidents",
      description: "California's bicycle-friendly laws provide extensive protections, but cyclists remain vulnerable to serious injuries from vehicle collisions. We combat anti-cyclist bias while pursuing compensation for dooring incidents, unsafe passing, right-hook turns, and road hazard crashes. Protected bike lanes don't prevent all accidents - distracted and aggressive drivers still endanger cyclists daily.",
      icon: "🚴"
    },
    {
      title: "Premises Liability",
      description: "Property owners must maintain safe conditions for visitors, with liability arising from negligent maintenance, inadequate security, and dangerous conditions. Slip and falls from wet floors, uneven surfaces, poor lighting, and obstacles cause serious injuries including hip fractures, head trauma, and back injuries requiring surgery.",
      icon: "🏢"
    },
    {
      title: "Dog Bites",
      description: "California's strict liability statute holds dog owners responsible for bite injuries regardless of the animal's history or owner's knowledge of aggression. This protection especially benefits children who comprise the majority of serious bite victims. We pursue homeowner's and renter's insurance claims for medical expenses, reconstructive surgery, scarring, nerve damage, infection treatment, and psychological counseling for trauma.",
      icon: "🐕"
    },
    {
      title: "Medical Malpractice",
      description: "Healthcare providers must meet professional standards of care, with deviation causing patient harm creating liability for compensation. Misdiagnosis delays treatment allowing conditions to worsen, while surgical errors cause permanent damage requiring corrective procedures. Medication errors, birth injuries, anesthesia mistakes, and failure to obtain informed consent violate patient trust and safety.",
      icon: "⚕️"
    },
    {
      title: "Wrongful Death",
      description: "When negligence causes death, surviving family members deserve justice and financial security during devastating loss. California's wrongful death statute allows spouses, children, and dependents to recover funeral expenses, lost financial support, loss of companionship, and household services value. We handle deaths from vehicle accidents, medical malpractice, dangerous products, workplace incidents, and criminal acts with compassion and determination.",
      icon: "⚰️"
    },
    {
      title: "Product Liability",
      description: "Strict liability holds manufacturers, distributors, and retailers responsible for injuries caused by defective products regardless of negligence. Design defects creating unreasonable dangers, manufacturing flaws deviating from specifications, and inadequate warnings about risks create liability. We handle cases involving defective vehicles, dangerous drugs, faulty medical devices, toxic substances, dangerous toys, and household products causing serious injuries.",
      icon: "⚡"
    },
    {
      title: "Construction Accidents",
      description: "Construction sites present numerous hazards causing serious injuries and deaths despite safety regulations. Falls from heights, scaffolding collapses, crane accidents, electrocutions, and equipment strikes require investigation beyond workers' compensation limits. Third-party claims against general contractors, subcontractors, property owners, and equipment manufacturers provide additional recovery.",
      icon: "🏗️"
    },
    {
      title: "Brain Injuries",
      description: "Traumatic brain injuries cause devastating cognitive, physical, and emotional impairments requiring lifetime care and support. Even 'mild' concussions can result in persistent symptoms affecting memory, concentration, mood, and executive function. We document subtle deficits through neuropsychological testing, functional capacity evaluations, and daily life impact assessments that insurance companies try to minimize.",
      icon: "🧠"
    },
    {
      title: "Spinal Cord Injuries",
      description: "Spinal cord damage causing paralysis requires extensive lifetime medical care, equipment, and support services costing millions. Quadriplegia affects all four limbs while paraplegia impacts lower body, both demanding comprehensive compensation for profound life changes. Beyond initial hospitalization and surgery, ongoing needs include respiratory support, pressure sore prevention, urological management, pain control, and psychological counseling.",
      icon: "🦴"
    },
    {
      title: "Burn Injuries",
      description: "Severe burns cause excruciating pain, permanent scarring, and psychological trauma requiring extensive medical treatment over years. Multiple surgeries including debridement, skin grafts, and reconstruction attempt restoring function and appearance. Infection risks, contractures limiting movement, and nerve damage causing chronic pain complicate recovery.",
      icon: "🔥"
    },
    {
      title: "Amputation",
      description: "Limb loss causes permanent disability requiring prosthetics, rehabilitation, and psychological support throughout life. Initial prosthetics cost tens of thousands with replacements needed every few years as technology advances and components wear. Upper extremity amputations affecting dominant hands devastate earning capacity while lower limb loss impacts mobility and independence.",
      icon: "🦾"
    },
    {
      title: "Workplace Injuries",
      description: "While workers' compensation provides basic benefits, third-party claims against equipment manufacturers, contractors, and property owners yield additional recovery for serious workplace injuries. Defective machinery, inadequate safety equipment, toxic exposures, and dangerous premises create liability beyond employer immunity. We identify all potential defendants maximizing compensation beyond limited workers' comp benefits.",
      icon: "⚠️"
    },
    {
      title: "Medical Devices",
      description: "FDA approval doesn't guarantee safety as numerous recalled devices demonstrate, causing serious injuries requiring revision surgeries and ongoing complications. Hip replacements releasing metal particles cause tissue death and systemic toxicity. Surgical mesh erodes causing organ perforation, chronic pain, and infection. IVC filters migrate, fracture, and perforate vessels. Breast implants rupture or cause rare cancers.",
      icon: "🏥"
    },
    {
      title: "Pharmaceutical",
      description: "Dangerous drugs cause serious adverse reactions, organ damage, and death when manufacturers conceal risks or provide inadequate warnings. Off-label promotion, clinical trial manipulation, and ghostwritten studies mislead doctors and patients about safety. We pursue claims for heart attacks, strokes, kidney failure, liver damage, birth defects, and cancer linked to prescription medications.",
      icon: "💊"
    },
    {
      title: "Mass Torts",
      description: "Widespread harm from defective products or toxic exposures affecting numerous victims requires coordinated litigation against powerful corporate defendants. Unlike class actions, mass torts preserve individual claims while benefiting from shared discovery, expert witnesses, and legal strategies. We provide personal attention to your unique injuries while leveraging collective resources challenging billion-dollar corporations.",
      icon: "⚖️"
    },
    {
      title: "Class Actions",
      description: "Collective legal action provides justice when corporate wrongdoing affects numerous people similarly, making individual lawsuits impractical. Consumer fraud, defective products, employment violations, and privacy breaches warrant class treatment achieving efficiency and consistency. We identify systematic misconduct, recruit class representatives, and pursue certification demonstrating common issues predominate.",
      icon: "👥"
    },
    {
      title: "Environmental Toxic",
      description: "Chemical exposures from industrial pollution cause cancer, organ damage, and developmental disabilities in surrounding communities. Groundwater contamination, air pollution, and soil toxicity from decades of improper disposal affect property values and health. We investigate cancer clusters, document exposure pathways, and link diseases to specific contaminants through environmental testing and medical monitoring.",
      icon: "☢️"
    },
    {
      title: "Camp Lejeune",
      description: "Military families and veterans exposed to contaminated drinking water at Camp Lejeune between 1953-1987 now have legal recourse through the Camp Lejeune Justice Act. Toxic chemicals including TCE, PCE, benzene, and vinyl chloride caused numerous cancers, birth defects, and organ diseases. Previously barred by government immunity, victims can now pursue compensation for bladder cancer, kidney cancer, leukemia, lymphoma, multiple myeloma, Parkinson's disease, and other conditions linked to water contamination.",
      icon: "🎖️"
    },
    {
      title: "PFAS Exposure",
      description: "Forever chemicals contaminating water supplies cause cancer, thyroid disease, and developmental problems with manufacturers concealing known risks for decades. PFAS compounds used in firefighting foam, non-stick cookware, food packaging, and industrial processes persist indefinitely in environment and human bodies. We pursue accountability from chemical manufacturers and companies using PFAS despite knowledge of health hazards.",
      icon: "💧"
    },
    {
      title: "Benzene Exposure",
      description: "Known carcinogen causing leukemia, lymphoma, and other blood cancers from occupational and consumer product exposure requires aggressive legal action. Petroleum workers, painters, printers, and laboratory technicians face occupational risks while contaminated consumer products expose general public. Sunscreens, deodorants, hand sanitizers, and other products containing benzene caused unnecessary exposure when safer alternatives existed.",
      icon: "🧪"
    },
    {
      title: "Opioid Litigation",
      description: "The opioid epidemic devastated families through addiction, overdoses, and deaths while manufacturers misrepresented addiction risks and distributors ignored suspicious orders. Aggressive marketing to doctors, misleading safety claims, and failure to monitor distribution created public health crisis. We pursue claims for families losing loved ones to overdoses, individuals suffering addiction, and babies born with neonatal abstinence syndrome.",
      icon: "⚕️"
    },
    {
      title: "Sexual Abuse",
      description: "Survivors deserve justice from both perpetrators and institutions that enabled abuse through negligent supervision, hiring, or deliberate concealment. California's extended statutes of limitations recognize delayed disclosure common with trauma. We handle cases with utmost sensitivity, maintaining confidentiality while aggressively pursuing accountability. Schools, youth organizations, religious institutions, and employers failing to protect victims face liability for preventable abuse.",
      icon: "🛡️"
    },
    {
      title: "Clergy Abuse",
      description: "Religious institutions harboring predators and concealing abuse face accountability as California reopened time-barred claims recognizing unique dynamics of clergy abuse. Spiritual authority exploitation, grooming within religious contexts, and institutional protection of abusers created environments enabling widespread harm. We respectfully pursue justice while honoring survivors' faith journeys, understanding the complex trauma of abuse by trusted religious figures.",
      icon: "⛪"
    },
    {
      title: "Elder Abuse",
      description: "California's Elder Abuse and Dependent Adult Civil Protection Act provides enhanced remedies including attorney fees and punitive damages for physical abuse, neglect, financial exploitation, and abandonment. Nursing homes, assisted living facilities, and home care providers failing to meet care standards face liability for preventable injuries. Bedsores, malnutrition, dehydration, medication errors, and falls indicate systemic neglect.",
      icon: "👴"
    },
    {
      title: "Birth Injuries",
      description: "Medical negligence during pregnancy, labor, and delivery causes preventable birth injuries resulting in lifelong disabilities requiring extensive care. Cerebral palsy from oxygen deprivation, brachial plexus injuries from excessive force, and brain damage from delayed C-sections devastate families emotionally and financially. Failure to monitor fetal distress, mismanagement of complications, and medication errors violate standards of care.",
      icon: "👶"
    },
    {
      title: "Uber/Lyft Accidents",
      description: "Rideshare accidents involve complex insurance coverage varying by driver status when crashes occur. Million-dollar policies apply during rides and approaching riders, while personal insurance governs between rides. We navigate coverage disputes maximizing recovery whether you're a passenger, other driver, pedestrian, or the rideshare driver. Companies classify drivers as independent contractors avoiding liability while controlling work through apps.",
      icon: "🚕"
    },
    {
      title: "Bus Accidents",
      description: "Common carriers including public transit, school buses, and tour companies owe passengers the highest duty of care with accidents causing serious injuries to multiple victims. Standing passengers, lack of seatbelts, and size disparities with other vehicles increase injury severity. Municipal buses invoke government claim requirements with shorter deadlines demanding immediate action.",
      icon: "🚌"
    },
    {
      title: "Aviation Accidents",
      description: "Airplane and helicopter crashes require specialized expertise navigating federal regulations, NTSB investigations, and complex technical evidence. Pilot error, mechanical failure, weather conditions, and air traffic control mistakes contribute to aviation disasters. We investigate maintenance records, pilot training, equipment inspections, and operational decisions causing crashes.",
      icon: "✈️"
    },
    {
      title: "Maritime Accidents",
      description: "Maritime law governs injuries on navigable waters with specialized procedures and remedies differing from land-based claims. Jones Act protects seamen injured from employer negligence or unseaworthy vessels. Longshore and Harbor Workers' Compensation Act covers dock workers and ship repairers. General maritime law provides remedies for passengers and recreational boaters.",
      icon: "⚓"
    },
    {
      title: "Swimming Pool",
      description: "Drowning remains a leading cause of death for children with survivors often suffering permanent brain damage from oxygen deprivation. Property owners must maintain barriers, locks, alarms, and covers preventing unauthorized access especially protecting children. California's Swimming Pool Safety Act mandates specific safety features for residential pools. Apartment complexes, hotels, and public pools failing to provide lifeguards, maintain equipment, or ensure water quality face liability.",
      icon: "🏊"
    },
    {
      title: "Amusement Parks",
      description: "Theme parks must ensure ride safety through regular inspections, proper maintenance, adequate operator training, and clear safety instructions protecting guests. Mechanical failures, operator errors, design defects, and inadequate warnings cause serious injuries including head trauma, spinal injuries, and wrongful death. California strictly regulates permanent amusement parks with traveling carnivals subject to different oversight creating varying safety standards.",
      icon: "🎢"
    },
    {
      title: "Electrocution",
      description: "Electrical injuries cause severe burns, cardiac arrest, neurological damage, and death with construction sites and defective products creating most hazards. Contact with power lines, faulty wiring, inadequate grounding, and missing ground-fault circuit interrupters violate safety standards. OSHA regulations and electrical codes establish duty of care standards strengthening liability claims.",
      icon: "⚡"
    },
    {
      title: "Explosions",
      description: "Gas explosions, industrial blasts, and residential explosions cause catastrophic injuries including severe burns, traumatic brain injuries, and wrongful death. Pipeline ruptures, refinery accidents, and chemical plant explosions devastate communities. We investigate gas leaks, safety violations, inadequate maintenance, and regulatory compliance failures. Utility companies, property owners, contractors, and manufacturers face liability for preventable explosions.",
      icon: "💥"
    },
    {
      title: "Vision Loss",
      description: "Eye injuries causing partial or complete vision loss dramatically impact employment, independence, and quality of life requiring comprehensive compensation. Workplace accidents from chemical exposures, flying debris, and laser injuries violate safety standards when protective equipment isn't provided. Medical malpractice during eye surgery, delayed diagnosis of conditions, and medication errors cause preventable vision loss.",
      icon: "👁️"
    },
    {
      title: "Hearing Loss",
      description: "Occupational noise exposure causing permanent hearing loss affects construction workers, factory employees, musicians, and military personnel when employers fail providing protection. OSHA requires hearing conservation programs including monitoring, protection, and testing that many employers ignore. Acoustic trauma from explosions, machinery, and equipment causes immediate or progressive hearing damage.",
      icon: "👂"
    },
    {
      title: "Paralysis",
      description: "Spinal cord injuries causing quadriplegia or paraplegia require lifetime medical care, equipment, and support services costing millions over decades. Vehicle accidents, falls, medical malpractice, and violence cause most paralysis cases requiring immediate specialized treatment. We coordinate with spinal cord injury centers documenting neurological deficits, functional limitations, and equipment needs.",
      icon: "♿"
    },
    {
      title: "Civil Rights",
      description: "Constitutional violations by government officials including police brutality, false arrest, malicious prosecution, and wrongful conviction demand accountability through civil rights litigation. Section 1983 claims provide federal remedies for state constitutional violations while Bivens actions address federal violations. Qualified immunity shields officers unless clearly established rights were violated requiring experienced navigation.",
      icon: "⚖️"
    },
    {
      title: "Retail Accidents",
      description: "Stores must maintain safe shopping conditions with slip-and-falls, falling merchandise, and parking lot accidents causing thousands of injuries annually. Wet floors without warning signs, cluttered aisles, inadequate lighting, and broken fixtures create hazards violating duty of care. Large retailers employ aggressive defense tactics including immediate incident response teams and surveillance video manipulation requiring equally sophisticated representation.",
      icon: "🏪"
    },
    {
      title: "Scaffolding Falls",
      description: "Height-related falls from scaffolding cause severe injuries including traumatic brain injuries, spinal cord damage, multiple fractures, and death. OSHA requires proper assembly, guardrails, planking, and fall protection that contractors frequently violate prioritizing speed over safety. We investigate scaffold design, installation procedures, inspection records, and safety equipment provision.",
      icon: "🏗️"
    },
    {
      title: "Crane Accidents",
      description: "Crane collapses, dropped loads, and contact with power lines cause catastrophic injuries at construction sites requiring specialized investigation. Operator error, mechanical failure, improper rigging, and wind conditions contribute to crane accidents affecting workers and bystanders. We examine operator certification, equipment inspection records, load charts, and safety protocols.",
      icon: "🏗️"
    },
    {
      title: "Railroad Accidents",
      description: "Train collisions, crossing accidents, and derailments cause severe injuries with Federal Employers Liability Act protecting railroad workers differently than standard workers' compensation. FELA requires proving railroad negligence but provides fuller recovery including pain and suffering. We investigate signal failures, track maintenance, crew fatigue, and equipment defects causing accidents.",
      icon: "🚂"
    },
    {
      title: "Defamation",
      description: "False statements damaging reputation, career prospects, and business relationships require careful navigation between free speech protections and accountability for malicious lies. California's anti-SLAPP statute creates procedural hurdles requiring strategic approaches proving probability of success early. We distinguish between factual assertions and protected opinion, public and private figures, and matters of public concern affecting legal standards.",
      icon: "📰"
    },
    {
      title: "General Personal Injury",
      description: "Every injury caused by another's negligence deserves skilled representation regardless of how unusual or complex the circumstances. Unique accidents, rare incidents, and unusual fact patterns still warrant compensation when negligence causes harm. We investigate all potential liability theories, insurance coverage sources, and damage categories maximizing recovery. California's pure comparative negligence allows recovery even when partially at fault, reducing damages proportionally.",
      icon: "⚕️"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".practice-header",
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="practice-areas" className="relative py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="practice-header text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
            50+ Practice Areas
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Comprehensive representation for all California personal injury cases
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;