import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import practice area images
import mesotheliomaAsbestosImg from '@/assets/practice-areas/mesothelioma-asbestos.jpg';
import silicosisInjuriesImg from '@/assets/practice-areas/silicosis-injuries.jpg';
import talcBabyPowderImg from '@/assets/practice-areas/talc-baby-powder.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents.jpg';
import truckAccidentsImg from '@/assets/practice-areas/truck-18-wheeler.jpg';
import motorcycleAccidentsImg from '@/assets/practice-areas/motorcycle-accidents.jpg';
import pedestrianAccidentsImg from '@/assets/practice-areas/pedestrian-accidents.jpg';
import bicycleAccidentsImg from '@/assets/practice-areas/bicycle-accidents.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability.jpg';
import dogBitesImg from '@/assets/practice-areas/dog-bites.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice.jpg';
import wrongfulDeathImg from '@/assets/practice-areas/wrongful-death.jpg';
import productLiabilityImg from '@/assets/practice-areas/product-liability.jpg';
import constructionAccidentsImg from '@/assets/practice-areas/construction-accidents.jpg';
import brainInjuriesImg from '@/assets/practice-areas/brain-injuries.jpg';
import spinalCordInjuriesImg from '@/assets/practice-areas/spinal-cord-injuries.jpg';
import burnInjuriesImg from '@/assets/practice-areas/burn-injuries.jpg';
import amputationImg from '@/assets/practice-areas/amputation.jpg';
import workplaceInjuriesImg from '@/assets/practice-areas/workplace-injuries.jpg';
import medicalDevicesImg from '@/assets/practice-areas/medical-devices.jpg';
import pharmaceuticalImg from '@/assets/practice-areas/pharmaceutical.jpg';
import massTortsImg from '@/assets/practice-areas/mass-torts.jpg';
import classActionsImg from '@/assets/practice-areas/class-actions.jpg';
import environmentalToxicImg from '@/assets/practice-areas/environmental-toxic.jpg';
import campLejeuneImg from '@/assets/practice-areas/camp-lejeune.jpg';
import pfasExposureImg from '@/assets/practice-areas/pfas-exposure.jpg';
import benzeneExposureImg from '@/assets/practice-areas/benzene-exposure.jpg';
import opioidLitigationImg from '@/assets/practice-areas/opioid-litigation.jpg';
import sexualAbuseImg from '@/assets/practice-areas/sexual-abuse.jpg';
import clergyAbuseImg from '@/assets/practice-areas/clergy-abuse.jpg';
import elderAbuseImg from '@/assets/practice-areas/elder-abuse.jpg';
import birthInjuriesImg from '@/assets/practice-areas/birth-injuries.jpg';
import uberLyftAccidentsImg from '@/assets/practice-areas/uber-lyft-accidents.jpg';
import busAccidentsImg from '@/assets/practice-areas/bus-accidents.jpg';
import aviationAccidentsImg from '@/assets/practice-areas/aviation-accidents.jpg';
import maritimeAccidentsImg from '@/assets/practice-areas/maritime-accidents.jpg';
import swimmingPoolImg from '@/assets/practice-areas/swimming-pool.jpg';
import amusementParksImg from '@/assets/practice-areas/amusement-parks.jpg';
import electrocutionImg from '@/assets/practice-areas/electrocution.jpg';
import explosionsImg from '@/assets/practice-areas/explosions.jpg';
import visionLossImg from '@/assets/practice-areas/vision-loss.jpg';
import hearingLossImg from '@/assets/practice-areas/hearing-loss.jpg';
import paralysisImg from '@/assets/practice-areas/paralysis.jpg';
import civilRightsImg from '@/assets/practice-areas/civil-rights.jpg';
import retailAccidentsImg from '@/assets/practice-areas/retail-accidents.jpg';
import scaffoldingFallsImg from '@/assets/practice-areas/scaffolding-falls.jpg';
import craneAccidentsImg from '@/assets/practice-areas/crane-accidents.jpg';
import railroadAccidentsImg from '@/assets/practice-areas/railroad-accidents.jpg';
import defamationImg from '@/assets/practice-areas/defamation.jpg';
import generalPersonalInjuryImg from '@/assets/practice-areas/general-personal-injury.jpg';

import heroFallback from '@/assets/hero-background.png';

gsap.registerPlugin(ScrollTrigger);

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'mesothelioma-asbestos',
    title: 'Mesothelioma & Asbestos',
    description: 'Aggressive representation for asbestos cancer victims throughout California. We trace exposure histories from military service, shipyards, construction sites, and consumer products. Our team understands the devastating impact of this aggressive cancer that develops decades after exposure. California\'s favorable laws allow recovery for exposures dating back many years, with multiple compensation sources available including trust funds, settlements, and verdicts. We work with medical specialists to document your diagnosis and treatment needs while pursuing maximum compensation from all responsible parties. Time is critical with mesothelioma cases - we expedite proceedings to secure compensation quickly for you and your family.',
    image: mesotheliomaAsbestosImg,
    slug: 'mesothelioma-asbestos'
  },
  {
    id: 'silicosis-injuries',
    title: 'Silicosis Injuries',
    description: 'Fighting for stone workers suffering from this preventable yet incurable lung disease. Engineered stone fabricators face epidemic-level silicosis rates from cutting quartz countertops without proper protection. This devastating disease causes progressive scarring of lung tissue, leading to difficulty breathing, fatigue, and eventual respiratory failure. We pursue claims against manufacturers who failed to warn about dangers and employers who violated safety standards. California leads the nation in recognizing this occupational hazard and protecting workers\' rights. Our advocacy includes securing compensation for medical treatment, lost wages, and pain and suffering while pushing for industry-wide safety reforms. Young workers deserve justice for this entirely preventable disease that robs them of their health and livelihood.',
    image: silicosisInjuriesImg,
    slug: 'silicosis-injuries'
  },
  {
    id: 'talc-baby-powder',
    title: 'Talc & Baby Powder Cancer',
    description: 'Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products. For decades, manufacturers knew their talc contained asbestos but continued marketing these products for intimate use and infant care. Internal documents reveal deliberate concealment of contamination risks while aggressively promoting powder use. California courts have awarded substantial verdicts recognizing the link between talc use and cancer development. We pursue compensation for medical expenses, pain and suffering, and punitive damages against corporations that prioritized profits over consumer safety. Women who used these products for feminine hygiene and families who trusted baby powder deserve accountability. Our team works with oncologists and epidemiologists to establish causation and secure maximum recovery for this betrayal of consumer trust.',
    image: talcBabyPowderImg,
    slug: 'talc-baby-powder-cancer'
  },
  {
    id: 'car-accidents',
    title: 'Car Accidents',
    description: 'California\'s congested highways and streets see thousands of serious crashes annually, causing life-altering injuries and devastating losses. Our former defense experience reveals insurance company tactics used to minimize payouts and deny valid claims. We handle all collision types including rear-end impacts, intersection crashes, head-on collisions, and multi-vehicle pileups. Using accident reconstruction, black box data, surveillance footage, and witness testimony, we prove liability and document damages comprehensively. California\'s pure comparative negligence system allows recovery even when partially at fault, though compensation reduces proportionally. We pursue all available coverage including underinsured motorist benefits to maximize recovery for medical bills, lost income, property damage, and pain and suffering. Don\'t let insurance adjusters undervalue your claim - we fight for full compensation.',
    image: carAccidentsImg,
    slug: 'car-accidents'
  },
  {
    id: 'truck-18-wheeler',
    title: 'Truck & 18-Wheeler',
    description: 'Commercial truck crashes cause catastrophic injuries due to size and weight disparities with passenger vehicles. Federal regulations and state laws create complex liability issues involving drivers, trucking companies, maintenance providers, and cargo loaders. We investigate hours-of-service violations, equipment failures, improper loading, and substance abuse that contribute to devastating crashes. Electronic logging devices, maintenance records, and driver qualification files provide crucial evidence often destroyed without prompt legal action. Multiple insurance policies and higher coverage limits mean greater compensation potential, but trucking companies deploy aggressive defense teams immediately. Our experience combating these tactics ensures evidence preservation and maximum recovery for traumatic brain injuries, spinal damage, amputations, and wrongful death. California\'s ports and distribution centers make truck accident expertise essential for protecting victims\' rights.',
    image: truckAccidentsImg,
    slug: 'truck-18-wheeler'
  },
  {
    id: 'motorcycle-accidents',
    title: 'Motorcycle Accidents',
    description: 'Protecting California riders against bias and securing fair compensation for devastating injuries. Despite following traffic laws and wearing protective gear, motorcyclists face prejudice from insurance companies and juries who wrongly assume fault. California\'s lane-splitting laws create unique liability questions requiring experienced legal representation. We counter stereotypes with compelling evidence including helmet camera footage, accident reconstruction, and witness testimony proving driver negligence. Common causes include left-turn crashes, dooring incidents, road hazards, and distracted driving that drivers claim they "didn\'t see" the motorcycle. Injuries often involve road rash, fractures, spinal damage, and traumatic brain injuries requiring extensive medical treatment and rehabilitation. We pursue compensation for custom bike damage, protective gear replacement, medical expenses, lost wages, and significant pain and suffering riders endure.',
    image: motorcycleAccidentsImg,
    slug: 'motorcycle-accidents'
  },
  {
    id: 'pedestrian-accidents',
    title: 'Pedestrian Accidents',
    description: 'California law provides strong protections for pedestrians, but injuries from vehicle strikes are often severe or fatal. Crosswalk accidents, sidewalk collisions, parking lot incidents, and hit-and-run crashes devastate families physically and financially. We investigate distracted driving, speeding, failure to yield, and impaired driving that endangers vulnerable pedestrians. Surveillance cameras, cell phone records, and vehicle computer data reveal driver negligence. Children and elderly victims suffer disproportionate harm requiring lifetime care for traumatic brain injuries, spinal damage, and multiple fractures. Beyond immediate medical needs, we pursue compensation for rehabilitation, home modifications, lost earning capacity, and profound lifestyle changes. Hit-and-run cases require exploring uninsured motorist coverage and crime victim compensation funds. Our advocacy ensures pedestrian victims receive resources needed for maximum recovery while holding negligent drivers accountable.',
    image: pedestrianAccidentsImg,
    slug: 'pedestrian-accidents'
  },
  {
    id: 'bicycle-accidents',
    title: 'Bicycle Accidents',
    description: 'California\'s bicycle-friendly laws provide extensive protections, but cyclists remain vulnerable to serious injuries from vehicle collisions. We combat anti-cyclist bias while pursuing compensation for dooring incidents, unsafe passing, right-hook turns, and road hazard crashes. Protected bike lanes don\'t prevent all accidents - distracted and aggressive drivers still endanger cyclists daily. We document violations of three-foot passing laws, failure to check blind spots, and deliberate harassment that causes crashes. Injuries include fractures, head trauma despite helmets, spinal injuries, and severe road rash requiring skin grafts. Beyond medical expenses, cyclists face bike replacement costs, lost wages during recovery, and psychological trauma from near-death experiences. Multiple insurance sources including auto, homeowner\'s, and umbrella policies provide coverage options. Our thorough approach maximizes recovery while advocating for safer streets protecting all cyclists.',
    image: bicycleAccidentsImg,
    slug: 'bicycle-accidents'
  },
  {
    id: 'premises-liability',
    title: 'Premises Liability',
    description: 'Property owners must maintain safe conditions for visitors, with liability arising from negligent maintenance, inadequate security, and dangerous conditions. Slip and falls from wet floors, uneven surfaces, poor lighting, and obstacles cause serious injuries including hip fractures, head trauma, and back injuries requiring surgery. Inadequate security leading to assaults, negligent maintenance causing accidents, and dangerous conditions like broken stairs create liability. We prove notice through maintenance records, prior complaints, surveillance footage, and inspection reports showing owners knew or should have known about hazards. California law distinguishes between invitees, licensees, and trespassers, affecting duty of care owed. Retail stores, apartments, offices, and public spaces must regularly inspect and promptly address dangers. Compensation covers medical treatment, lost income, pain and suffering, and permanent disabilities from preventable property hazards.',
    image: premisesLiabilityImg,
    slug: 'premises-liability'
  },
  {
    id: 'dog-bites',
    title: 'Dog Bites',
    description: 'California\'s strict liability statute holds dog owners responsible for bite injuries regardless of the animal\'s history or owner\'s knowledge of aggression. This protection especially benefits children who comprise the majority of serious bite victims. We pursue homeowner\'s and renter\'s insurance claims for medical expenses, reconstructive surgery, scarring, nerve damage, infection treatment, and psychological counseling for trauma. Facial injuries causing disfigurement require plastic surgery and ongoing treatment affecting victims\' self-esteem and social interactions. Beyond bites, we handle injuries from dogs knocking people down, causing falls, or attacking other pets. Dangerous breeds and repeat offenders may warrant punitive damages. Post-traumatic stress, especially in children, requires therapeutic intervention covered in settlements. Our compassionate approach balances aggressive advocacy with sensitivity to both human and animal welfare concerns.',
    image: dogBitesImg,
    slug: 'dog-bites-animal-attacks'
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    description: 'Healthcare providers must meet professional standards of care, with deviation causing patient harm creating liability for compensation. Misdiagnosis delays treatment allowing conditions to worsen, while surgical errors cause permanent damage requiring corrective procedures. Medication errors, birth injuries, anesthesia mistakes, and failure to obtain informed consent violate patient trust and safety. California\'s MICRA limits on non-economic damages require strategic approaches maximizing economic damage recovery through life care plans and vocational assessments. We work with medical experts establishing standard of care breaches and causation linking negligence to injuries. Hospital infections, emergency room errors, and nursing negligence create institutional liability beyond individual providers. One-year statute of limitations demands prompt action preserving claims. Despite damage caps, substantial compensation remains available for medical expenses, lost earnings, and permanent disabilities from preventable medical errors.',
    image: medicalMalpracticeImg,
    slug: 'medical-malpractice'
  },
  {
    id: 'wrongful-death',
    title: 'Wrongful Death',
    description: 'When negligence causes death, surviving family members deserve justice and financial security during devastating loss. California\'s wrongful death statute allows spouses, children, and dependents to recover funeral expenses, lost financial support, loss of companionship, and household services value. We handle deaths from vehicle accidents, medical malpractice, dangerous products, workplace incidents, and criminal acts with compassion and determination. Two-year statute of limitations requires prompt action while families grieve. Economic losses include deceased\'s lost earnings, benefits, retirement contributions calculated through retirement age. Non-economic damages compensate for loss of love, companionship, comfort, affection, society, and moral support. Punitive damages apply when death results from malicious or extremely reckless conduct. Our respectful approach honors your loved one\'s memory while aggressively pursuing accountability and maximum compensation supporting surviving family members.',
    image: wrongfulDeathImg,
    slug: 'wrongful-death'
  },
  {
    id: 'product-liability',
    title: 'Product Liability',
    description: 'Strict liability holds manufacturers, distributors, and retailers responsible for injuries caused by defective products regardless of negligence. Design defects creating unreasonable dangers, manufacturing flaws deviating from specifications, and inadequate warnings about risks create liability. We handle cases involving defective vehicles, dangerous drugs, faulty medical devices, toxic substances, dangerous toys, and household products causing serious injuries. California law allows recovery without proving fault, only that products were defective and caused harm when used as intended. Expert testimony establishes defects through testing, alternative design analysis, and failure analysis. Corporate defendants often destroy evidence, making prompt investigation critical. Mass production means defects affect thousands, warranting punitive damages deterring future misconduct. Compensation covers medical expenses, lost wages, pain and suffering, and permanent injuries from products that should have been safe.',
    image: productLiabilityImg,
    slug: 'product-liability'
  },
  {
    id: 'construction-accidents',
    title: 'Construction Accidents',
    description: 'Construction sites present numerous hazards causing serious injuries and deaths despite safety regulations. Falls from heights, scaffolding collapses, crane accidents, electrocutions, and equipment strikes require investigation beyond workers\' compensation limits. Third-party claims against general contractors, subcontractors, property owners, and equipment manufacturers provide additional recovery. OSHA violations strengthen liability claims while Cal/OSHA standards establish safety requirements. We investigate inadequate fall protection, defective equipment, improper training, and rushed schedules prioritizing profits over worker safety. Traumatic brain injuries from falls, crush injuries from collapses, burns from electrical accidents, and amputations from machinery require extensive medical treatment and often prevent return to construction work. Undocumented workers deserve equal protection regardless of immigration status. Our bilingual team ensures all injured workers understand their rights and receive maximum compensation.',
    image: constructionAccidentsImg,
    slug: 'construction-accidents'
  },
  {
    id: 'brain-injuries',
    title: 'Brain Injuries',
    description: 'Traumatic brain injuries cause devastating cognitive, physical, and emotional impairments requiring lifetime care and support. Even "mild" concussions can result in persistent symptoms affecting memory, concentration, mood, and executive function. We document subtle deficits through neuropsychological testing, functional capacity evaluations, and daily life impact assessments that insurance companies try to minimize. Moderate to severe TBI causes personality changes, seizures, paralysis, and permanent disability requiring 24/7 care. Life care plans calculate millions in future medical expenses, rehabilitation, medications, assistive technology, and home modifications. Lost earning capacity extends beyond current wages to promotional opportunities and career advancement. Family members become caregivers, suffering their own losses requiring compensation. Our comprehensive approach addresses immediate needs while securing resources for decades of care maximizing quality of life after catastrophic brain injuries.',
    image: brainInjuriesImg,
    slug: 'brain-injuries'
  },
  {
    id: 'spinal-cord-injuries',
    title: 'Spinal Cord Injuries',
    description: 'Spinal cord damage causing paralysis requires extensive lifetime medical care, equipment, and support services costing millions. Quadriplegia affects all four limbs while paraplegia impacts lower body, both demanding comprehensive compensation for profound life changes. Beyond initial hospitalization and surgery, ongoing needs include respiratory support, pressure sore prevention, urological management, pain control, and psychological counseling. Wheelchair accessible vehicles, home modifications with ramps and lifts, specialized beds, and daily attendant care create enormous expenses. Lost wages extend to household services value and reduced life expectancy calculations. Sexual dysfunction, fertility issues, and relationship impacts require sensitive handling. Adaptive technology enabling independence and vocational rehabilitation promoting employment provide hope but require funding. Our life care planning experts calculate comprehensive future needs ensuring financial security while you focus on medical recovery and adjustment.',
    image: spinalCordInjuriesImg,
    slug: 'spinal-cord-injuries'
  },
  {
    id: 'burn-injuries',
    title: 'Burn Injuries',
    description: 'Severe burns cause excruciating pain, permanent scarring, and psychological trauma requiring extensive medical treatment over years. Multiple surgeries including debridement, skin grafts, and reconstruction attempt restoring function and appearance. Infection risks, contractures limiting movement, and nerve damage causing chronic pain complicate recovery. Third and fourth-degree burns destroy tissue requiring amputations. Facial burns causing disfigurement profoundly impact self-esteem, relationships, and employment opportunities. Inhalation injuries damaging airways create respiratory complications. We pursue compensation from apartment fires with inadequate smoke detectors, workplace explosions from safety violations, defective products causing fires, and vehicle crashes with fuel tank ruptures. Psychological counseling addresses PTSD, depression, and social anxiety from disfigurement. Compensation covers extensive medical treatment, lost wages, pain and suffering, and cosmetic procedures improving appearance and confidence after devastating burn injuries.',
    image: burnInjuriesImg,
    slug: 'burn-injuries'
  },
  {
    id: 'amputation',
    title: 'Amputation',
    description: 'Limb loss causes permanent disability requiring prosthetics, rehabilitation, and psychological support throughout life. Initial prosthetics cost tens of thousands with replacements needed every few years as technology advances and components wear. Upper extremity amputations affecting dominant hands devastate earning capacity while lower limb loss impacts mobility and independence. Phantom pain, residual limb complications, and secondary conditions like back problems from altered gait require ongoing treatment. Vocational rehabilitation helps career transitions but income often decreases substantially. Home and vehicle modifications, adaptive equipment, and personal care assistance create continuing expenses. Depression, anxiety, and body image issues require psychological support. We maximize compensation through life care plans calculating decades of prosthetic costs, medical care, therapy, and assistance needs. Multiple amputations exponentially increase challenges and compensation requirements for maintaining quality of life.',
    image: amputationImg,
    slug: 'amputation'
  },
  {
    id: 'workplace-injuries',
    title: 'Workplace Injuries',
    description: 'While workers\' compensation provides basic benefits, third-party claims against equipment manufacturers, contractors, and property owners yield additional recovery for serious workplace injuries. Defective machinery, inadequate safety equipment, toxic exposures, and dangerous premises create liability beyond employer immunity. We identify all potential defendants maximizing compensation beyond limited workers\' comp benefits. Construction accidents, industrial incidents, repetitive stress injuries, and occupational diseases warrant thorough investigation. Temporary workers, independent contractors, and multi-employer worksites present complex coverage issues requiring experienced navigation. Retaliation for reporting injuries or safety violations creates additional claims. Permanent disabilities preventing return to previous occupation require vocational rehabilitation and retraining compensation. Our coordination with workers\' comp attorneys ensures maximum recovery from all sources while protecting benefit eligibility and avoiding liens reducing settlements.',
    image: workplaceInjuriesImg,
    slug: 'workplace-injuries'
  },
  {
    id: 'medical-devices',
    title: 'Medical Devices',
    description: 'FDA approval doesn\'t guarantee safety as numerous recalled devices demonstrate, causing serious injuries requiring revision surgeries and ongoing complications. Hip replacements releasing metal particles cause tissue death and systemic toxicity. Surgical mesh erodes causing organ perforation, chronic pain, and infection. IVC filters migrate, fracture, and perforate vessels. Breast implants rupture or cause rare cancers. We investigate device design flaws, manufacturing defects, and inadequate warnings while companies claim FDA clearance shields them from liability. Preemption defenses fail when fraud on FDA is proven through hidden adverse event data. Clinical trial manipulation, post-market surveillance failures, and delayed recalls show corporate prioritization of profits over patient safety. Revision surgeries, ongoing monitoring, and permanent complications require substantial compensation. Mass device failures affecting thousands strengthen individual claims through shared discovery and expert testimony.',
    image: medicalDevicesImg,
    slug: 'medical-devices'
  },
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical',
    description: 'Dangerous drugs cause serious adverse reactions, organ damage, and death when manufacturers conceal risks or provide inadequate warnings. Off-label promotion, clinical trial manipulation, and ghostwritten studies mislead doctors and patients about safety. We pursue claims for heart attacks, strokes, kidney failure, liver damage, birth defects, and cancer linked to prescription medications. Drug interactions, dosing errors, and contamination during manufacturing create additional liability. Pharmaceutical companies\' massive profits fund aggressive defenses requiring equally determined advocacy. FDA black box warnings added after injuries demonstrate knowledge of risks. Sales representative training documents reveal deliberate minimization of dangers. Mass tort litigation consolidates similar claims while preserving individual circumstances. Compensation covers medical expenses, lost wages, pain and suffering, and punitive damages deterring future misconduct protecting public health.',
    image: pharmaceuticalImg,
    slug: 'pharmaceutical'
  },
  {
    id: 'mass-torts',
    title: 'Mass Torts',
    description: 'Widespread harm from defective products or toxic exposures affecting numerous victims requires coordinated litigation against powerful corporate defendants. Unlike class actions, mass torts preserve individual claims while benefiting from shared discovery, expert witnesses, and legal strategies. We provide personal attention to your unique injuries while leveraging collective resources challenging billion-dollar corporations. Common mass torts involve dangerous drugs, defective medical devices, toxic exposures, and consumer products causing cancer or organ damage. Multidistrict litigation consolidates federal cases for pretrial proceedings while maintaining individual trial rights. Bellwether trials establish settlement values benefiting all plaintiffs. Scientific evidence linking products to injuries strengthens through epidemiological studies and expert testimony. Corporate documents revealed through discovery expose knowledge of dangers and cover-ups. Our participation in national litigation provides resources and expertise maximizing your recovery.',
    image: massTortsImg,
    slug: 'mass-torts'
  },
  {
    id: 'class-actions',
    title: 'Class Actions',
    description: 'Collective legal action provides justice when corporate wrongdoing affects numerous people similarly, making individual lawsuits impractical. Consumer fraud, defective products, employment violations, and privacy breaches warrant class treatment achieving efficiency and consistency. We identify systematic misconduct, recruit class representatives, and pursue certification demonstrating common issues predominate. Notice to class members ensures opportunity to participate or opt out preserving individual claims. Settlement negotiations balance global resolution with adequate individual compensation. Court approval requirements protect absent class members\' interests. Consumer protection statutes providing attorneys\' fees incentivize private enforcement of regulations. Data breaches exposing personal information, unauthorized charges, false advertising, and warranty breaches affect thousands identically. Employment cases address unpaid wages, discrimination, and misclassification. Our class action experience ensures fair representation maximizing recovery for all affected individuals.',
    image: classActionsImg,
    slug: 'class-actions'
  },
  {
    id: 'environmental-toxic',
    title: 'Environmental Toxic',
    description: 'Chemical exposures from industrial pollution cause cancer, organ damage, and developmental disabilities in surrounding communities. Groundwater contamination, air pollution, and soil toxicity from decades of improper disposal affect property values and health. We investigate cancer clusters, document exposure pathways, and link diseases to specific contaminants through environmental testing and medical monitoring. Benzene, TCE, PCBs, heavy metals, and pesticides cause leukemia, kidney disease, neurological damage, and birth defects. Corporate knowledge of contamination through internal testing while concealing dangers from residents demonstrates malice warranting punitive damages. Property devaluation, medical monitoring, treatment costs, and quality of life impacts require comprehensive compensation. Community-wide exposure strengthens individual claims through shared expert testimony and evidence. Environmental justice ensures all communities regardless of economic status receive protection from industrial poisoning.',
    image: environmentalToxicImg,
    slug: 'environmental-toxic'
  },
  {
    id: 'camp-lejeune',
    title: 'Camp Lejeune',
    description: 'Military families and veterans exposed to contaminated drinking water at Camp Lejeune between 1953-1987 now have legal recourse through the Camp Lejeune Justice Act. Toxic chemicals including TCE, PCE, benzene, and vinyl chloride caused numerous cancers, birth defects, and organ diseases. Previously barred by government immunity, victims can now pursue compensation for bladder cancer, kidney cancer, leukemia, lymphoma, multiple myeloma, Parkinson\'s disease, and other conditions linked to water contamination. Decades of exposure during military service, family residence, or in utero development created widespread harm. Medical records, service documentation, and base housing assignments establish exposure proof. VA disability benefits don\'t preclude additional compensation through federal tort claims. Our team helps veterans and families navigate complex filing requirements, gather supporting documentation, and maximize recovery for decades of suffering from preventable toxic exposure.',
    image: campLejeuneImg,
    slug: 'camp-lejeune'
  },
  {
    id: 'pfas-exposure',
    title: 'PFAS Exposure',
    description: 'Forever chemicals contaminating water supplies cause cancer, thyroid disease, and developmental problems with manufacturers concealing known risks for decades. PFAS compounds used in firefighting foam, non-stick cookware, food packaging, and industrial processes persist indefinitely in environment and human bodies. We pursue accountability from chemical manufacturers and companies using PFAS despite knowledge of health hazards. Testicular cancer, kidney cancer, thyroid disease, ulcerative colitis, and pregnancy complications link to PFAS exposure. Blood testing reveals accumulation levels while epidemiological studies establish causation. Military bases, airports, and industrial facilities created contamination plumes affecting surrounding communities\' drinking water. Property devaluation, water filtration systems, medical monitoring, and treatment costs require compensation. Corporate documents reveal decades of knowledge about persistence, bioaccumulation, and toxicity while lobbying against regulations.',
    image: pfasExposureImg,
    slug: 'pfas-exposure'
  },
  {
    id: 'benzene-exposure',
    title: 'Benzene Exposure',
    description: 'Known carcinogen causing leukemia, lymphoma, and other blood cancers from occupational and consumer product exposure requires aggressive legal action. Petroleum workers, painters, printers, and laboratory technicians face occupational risks while contaminated consumer products expose general public. Sunscreens, deodorants, hand sanitizers, and other products containing benzene caused unnecessary exposure when safer alternatives existed. Acute myeloid leukemia, myelodysplastic syndrome, and aplastic anemia develop years after exposure making causation challenging without experienced representation. We document exposure sources, benzene metabolism markers, and medical literature supporting causal links. OSHA permissible exposure limits prove knowledge of dangers. Product testing revealing contamination demonstrates quality control failures. Compensation covers chemotherapy, stem cell transplants, lost wages, and wrongful death for preventable cancers from benzene exposure that companies could have eliminated.',
    image: benzeneExposureImg,
    slug: 'benzene-exposure'
  },
  {
    id: 'opioid-litigation',
    title: 'Opioid Litigation',
    description: 'The opioid epidemic devastated families through addiction, overdoses, and deaths while manufacturers misrepresented addiction risks and distributors ignored suspicious orders. Aggressive marketing to doctors, misleading safety claims, and failure to monitor distribution created public health crisis. We pursue claims for families losing loved ones to overdoses, individuals suffering addiction, and babies born with neonatal abstinence syndrome. Medical expenses, rehabilitation costs, lost productivity, and wrongful death damages seek accountability. Government entities recover costs of emergency responses, treatment programs, and foster care for affected children. Pharmaceutical companies\' internal documents reveal knowledge of addiction risks while funding "pain advocacy" groups promoting increased prescribing. Distribution data shows pharmacies receiving suspicious quantities ignored red flags. Settlement funds establish treatment programs while individual claims provide family compensation for preventable tragedies.',
    image: opioidLitigationImg,
    slug: 'opioid-litigation'
  },
  {
    id: 'sexual-abuse',
    title: 'Sexual Abuse',
    description: 'Survivors deserve justice from both perpetrators and institutions that enabled abuse through negligent supervision, hiring, or deliberate concealment. California\'s extended statutes of limitations recognize delayed disclosure common with trauma. We handle cases with utmost sensitivity, maintaining confidentiality while aggressively pursuing accountability. Schools, youth organizations, religious institutions, and employers failing to protect victims face liability for preventable abuse. Background check failures, ignoring complaints, and cover-ups demonstrate institutional negligence. Therapy costs, lost earnings from psychological impact, and pain and suffering require substantial compensation. Criminal convictions strengthen civil cases but aren\'t required for recovery. Childhood sexual abuse causes lifelong trauma affecting relationships, career advancement, and mental health. Our trauma-informed approach prioritizes survivor wellbeing while securing resources for healing and justice after profound violations of trust and safety.',
    image: sexualAbuseImg,
    slug: 'sexual-abuse'
  },
  {
    id: 'clergy-abuse',
    title: 'Clergy Abuse',
    description: 'Religious institutions harboring predators and concealing abuse face accountability as California reopened time-barred claims recognizing unique dynamics of clergy abuse. Spiritual authority exploitation, grooming within religious contexts, and institutional protection of abusers created environments enabling widespread harm. We respectfully pursue justice while honoring survivors\' faith journeys, understanding the complex trauma of abuse by trusted religious figures. Diocese bankruptcies don\'t eliminate claims as insurance coverage and asset recovery provide compensation sources. Confidential settlements protect privacy while securing resources for therapy and healing. Institutional knowledge through confession, complaints, or transfers demonstrates deliberate indifference to child safety. Psychological evaluation costs, lost faith community support, and spiritual trauma require comprehensive compensation. Our approach balances aggressive litigation with sensitivity to religious beliefs and community connections important to survivors.',
    image: clergyAbuseImg,
    slug: 'clergy-abuse'
  },
  {
    id: 'elder-abuse',
    title: 'Elder Abuse',
    description: 'California\'s Elder Abuse and Dependent Adult Civil Protection Act provides enhanced remedies including attorney fees and punitive damages for physical abuse, neglect, financial exploitation, and abandonment. Nursing homes, assisted living facilities, and home care providers failing to meet care standards face liability for preventable injuries. Bedsores, malnutrition, dehydration, medication errors, and falls indicate systemic neglect. Financial exploitation through undue influence, theft, or fraudulent transfers devastates retirement security. We investigate staffing levels, training deficiencies, and corporate profit prioritization causing substandard care. Cognitive impairment doesn\'t diminish abuse claims as facilities assume protective responsibilities. Family members often discover abuse through unexpected injuries, rapid decline, or financial irregularities. Enhanced remedies incentivize private enforcement protecting vulnerable seniors. Recovery includes medical expenses, pain and suffering, and return of stolen assets ensuring dignity and safety in final years.',
    image: elderAbuseImg,
    slug: 'elder-abuse'
  },
  {
    id: 'birth-injuries',
    title: 'Birth Injuries',
    description: 'Medical negligence during pregnancy, labor, and delivery causes preventable birth injuries resulting in lifelong disabilities requiring extensive care. Cerebral palsy from oxygen deprivation, brachial plexus injuries from excessive force, and brain damage from delayed C-sections devastate families emotionally and financially. Failure to monitor fetal distress, mismanagement of complications, and medication errors violate standards of care. California\'s extended statute for minors preserves claims while families focus on immediate medical needs. Life care plans calculate decades of therapy, special education, medical equipment, and caregiving costs often exceeding millions. Lost earning capacity for severely disabled children requires economic analysis. Parents\' emotional distress and lifestyle changes caring for disabled children warrant additional compensation. Our birth injury team includes medical experts, life care planners, and economists ensuring comprehensive recovery supporting children\'s maximum potential despite preventable injuries.',
    image: birthInjuriesImg,
    slug: 'birth-injuries'
  },
  {
    id: 'uber-lyft-accidents',
    title: 'Uber/Lyft Accidents',
    description: 'Rideshare accidents involve complex insurance coverage varying by driver status when crashes occur. Million-dollar policies apply during rides and approaching riders, while personal insurance governs between rides. We navigate coverage disputes maximizing recovery whether you\'re a passenger, other driver, pedestrian, or the rideshare driver. Companies classify drivers as independent contractors avoiding liability while controlling work through apps. Background check failures, inadequate insurance verification, and algorithmic pressure causing unsafe driving create corporate liability. Passenger injuries from sudden stops, rollover accidents, or driver assaults require thorough investigation. Third-party claims against negligent drivers supplement rideshare coverage. Sexual assaults, kidnapping, and violent crimes enabled by inadequate safety measures warrant punitive damages. Our technology-savvy approach obtains app data, trip records, and driver histories building strong cases against billion-dollar companies prioritizing growth over safety.',
    image: uberLyftAccidentsImg,
    slug: 'uber-lyft-accidents'
  },
  {
    id: 'bus-accidents',
    title: 'Bus Accidents',
    description: 'Common carriers including public transit, school buses, and tour companies owe passengers the highest duty of care with accidents causing serious injuries to multiple victims. Standing passengers, lack of seatbelts, and size disparities with other vehicles increase injury severity. Municipal buses invoke government claim requirements with shorter deadlines demanding immediate action. Driver fatigue, inadequate training, poor maintenance, and distracted driving cause preventable crashes. We investigate driver records, maintenance logs, surveillance footage, and black box data establishing negligence. School bus accidents injuring children require sensitive handling while aggressively pursuing accountability. Tour bus crashes often involve out-of-state companies requiring interstate litigation expertise. Multiple injured passengers strengthen liability findings through consistent witness testimony. Compensation covers medical treatment, lost wages, and significant pain and suffering from crashes violating public trust in mass transportation safety.',
    image: busAccidentsImg,
    slug: 'bus-accidents'
  },
  {
    id: 'aviation-accidents',
    title: 'Aviation Accidents',
    description: 'Airplane and helicopter crashes require specialized expertise navigating federal regulations, NTSB investigations, and complex technical evidence. Pilot error, mechanical failure, weather conditions, and air traffic control mistakes contribute to aviation disasters. We investigate maintenance records, pilot training, equipment inspections, and operational decisions causing crashes. Product liability claims against aircraft manufacturers for design defects supplement negligence claims. International flights invoke treaty limitations requiring strategic approaches maximizing recovery. Small plane and helicopter crashes often lack flight recorders, making witness testimony and wreckage analysis critical. Tour operators, flight schools, and charter companies cutting corners on safety face liability. Survival actions for pre-impact terror and wrongful death claims seek comprehensive compensation. Our aviation accident team includes former pilots, mechanics, and investigators understanding technical complexities while compassionately supporting families after traumatic losses.',
    image: aviationAccidentsImg,
    slug: 'aviation-accidents'
  },
  {
    id: 'maritime-accidents',
    title: 'Maritime Accidents',
    description: 'Maritime law governs injuries on navigable waters with specialized procedures and remedies differing from land-based claims. Jones Act protects seamen injured from employer negligence or unseaworthy vessels. Longshore and Harbor Workers\' Compensation Act covers dock workers and ship repairers. General maritime law provides remedies for passengers and recreational boaters. We navigate jurisdictional complexities, maintenance and cure obligations, and limitation of liability proceedings. Commercial fishing accidents, cruise ship injuries, ferry crashes, and recreational boating collisions require maritime expertise. Unseaworthy conditions, inadequate crew training, and equipment failures create liability. California\'s extensive coastline, ports, and waterways see numerous maritime accidents annually. International waters and foreign-flagged vessels complicate jurisdiction requiring strategic forum selection. Recovery includes lost wages, medical expenses, pain and suffering, and loss of society for fatal accidents on dangerous waters.',
    image: maritimeAccidentsImg,
    slug: 'maritime-accidents'
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description: 'Drowning remains a leading cause of death for children with survivors often suffering permanent brain damage from oxygen deprivation. Property owners must maintain barriers, locks, alarms, and covers preventing unauthorized access especially protecting children. California\'s Swimming Pool Safety Act mandates specific safety features for residential pools. Apartment complexes, hotels, and public pools failing to provide lifeguards, maintain equipment, or ensure water quality face liability. Diving accidents causing paralysis from unmarked shallow areas or inadequate warnings devastate young victims. Drain entrapment, electrical hazards, and slip-and-fall injuries around pools require investigation. Near-drowning victims suffering hypoxic brain injuries need lifetime care for cognitive and physical disabilities. We pursue homeowner\'s insurance, commercial liability coverage, and premises liability claims maximizing recovery. Compensation addresses medical expenses, rehabilitation, special education, and profound family impact from preventable pool tragedies.',
    image: swimmingPoolImg,
    slug: 'swimming-pool'
  },
  {
    id: 'amusement-parks',
    title: 'Amusement Parks',
    description: 'Theme parks must ensure ride safety through regular inspections, proper maintenance, adequate operator training, and clear safety instructions protecting guests. Mechanical failures, operator errors, design defects, and inadequate warnings cause serious injuries including head trauma, spinal injuries, and wrongful death. California strictly regulates permanent amusement parks with traveling carnivals subject to different oversight creating varying safety standards. We investigate maintenance records, prior incidents, inspection reports, and operator training establishing negligence. Roller coaster accidents, water slide injuries, and mechanical ride failures terrorize victims beyond physical injuries. Young children suffering injuries at "happiest places" endure particular trauma. Premises liability for slip-and-falls, food poisoning, and crowd control failures supplement ride injury claims. International corporations operating California parks deploy aggressive legal teams requiring equally sophisticated representation. Recovery addresses medical costs, trauma therapy, and lost enjoyment from recreational activities turned tragic.',
    image: amusementParksImg,
    slug: 'amusement-parks'
  },
  {
    id: 'electrocution',
    title: 'Electrocution',
    description: 'Electrical injuries cause severe burns, cardiac arrest, neurological damage, and death with construction sites and defective products creating most hazards. Contact with power lines, faulty wiring, inadequate grounding, and missing ground-fault circuit interrupters violate safety standards. OSHA regulations and electrical codes establish duty of care standards strengthening liability claims. We investigate lockout/tagout procedures, safety equipment provision, and warning system failures. Utility companies failing to maintain lines or respond to hazard reports face liability. Arc flash injuries causing severe burns require extensive treatment including skin grafts. Neurological damage affects memory, concentration, and motor function requiring ongoing therapy. Cardiac complications including arrhythmias may manifest later requiring medical monitoring. Construction workers, electricians, and utility workers face highest risks but residential electrocutions from defective appliances affect consumers. Recovery includes medical expenses, lost wages, and significant pain and suffering from preventable electrical hazards.',
    image: electrocutionImg,
    slug: 'electrocution'
  },
  {
    id: 'explosions',
    title: 'Explosions',
    description: 'Gas explosions, industrial blasts, and residential explosions cause catastrophic injuries including severe burns, traumatic brain injuries, and wrongful death. Pipeline ruptures, refinery accidents, and chemical plant explosions devastate communities. We investigate gas leaks, safety violations, inadequate maintenance, and regulatory compliance failures. Utility companies, property owners, contractors, and manufacturers face liability for preventable explosions. Blast injuries include primary injuries from pressure waves, secondary injuries from flying debris, tertiary injuries from body displacement, and quaternary injuries from burns and inhalation. Multiple victims strengthen liability findings through consistent causation evidence. Mass casualty events require coordinated litigation preserving individual claims while sharing resources. Property damage, business interruption, and environmental contamination supplement personal injury claims. Punitive damages apply when companies ignore known dangers prioritizing profits over community safety. Recovery addresses immediate medical needs and long-term consequences of traumatic blast exposure.',
    image: explosionsImg,
    slug: 'explosions'
  },
  {
    id: 'vision-loss',
    title: 'Vision Loss',
    description: 'Eye injuries causing partial or complete vision loss dramatically impact employment, independence, and quality of life requiring comprehensive compensation. Workplace accidents from chemical exposures, flying debris, and laser injuries violate safety standards when protective equipment isn\'t provided. Medical malpractice during eye surgery, delayed diagnosis of conditions, and medication errors cause preventable vision loss. Defective products including tools, toys, and fireworks causing eye injuries create strict liability. We document visual field defects, acuity loss, and functional limitations through ophthalmologic testing. Vocational experts calculate reduced earning capacity especially for careers requiring visual precision. Orientation and mobility training, assistive technology, guide dogs, and home modifications address independence needs. Psychological impact including depression, anxiety, and social isolation requires therapeutic support. California\'s strong disability protections don\'t replace need for compensation addressing profound lifestyle changes from vision loss that proper precautions would have prevented.',
    image: visionLossImg,
    slug: 'vision-loss'
  },
  {
    id: 'hearing-loss',
    title: 'Hearing Loss',
    description: 'Occupational noise exposure causing permanent hearing loss affects construction workers, factory employees, musicians, and military personnel when employers fail providing protection. OSHA requires hearing conservation programs including monitoring, protection, and testing that many employers ignore. Acoustic trauma from explosions, machinery, and equipment causes immediate or progressive hearing damage. We document pre-employment baselines, noise dosimetry readings, and audiometric testing establishing work-related hearing loss. Hearing aids costing thousands require periodic replacement as technology advances. Cochlear implants for profound deafness involve surgery and extensive rehabilitation. Tinnitus causing constant ringing significantly impacts sleep, concentration, and mental health. Communication difficulties affect relationships and employment opportunities requiring vocational rehabilitation. Workers\' compensation provides limited benefits making third-party claims against equipment manufacturers critical. Recovery addresses medical devices, lost wages, and diminished quality of life from preventable industrial deafness.',
    image: hearingLossImg,
    slug: 'hearing-loss'
  },
  {
    id: 'paralysis',
    title: 'Paralysis',
    description: 'Spinal cord injuries causing quadriplegia or paraplegia require lifetime medical care, equipment, and support services costing millions over decades. Vehicle accidents, falls, medical malpractice, and violence cause most paralysis cases requiring immediate specialized treatment. We coordinate with spinal cord injury centers documenting neurological deficits, functional limitations, and equipment needs. Power wheelchairs, standing frames, and communication devices provide independence but require significant investment. Accessible vehicles, home modifications including ramps, lifts, and bathroom renovations enable community participation. Twenty-four hour attendant care for high-level injuries, intermittent catheterization, pressure sore prevention, and respiratory support create ongoing expenses. Sexual dysfunction counseling, fertility treatment, and relationship support address intimate impacts. Vocational rehabilitation, assistive technology, and workplace accommodations may enable limited employment. Life care plans ensure financial security while families adjust to profound changes from catastrophic paralysis injuries.',
    image: paralysisImg,
    slug: 'paralysis'
  },
  {
    id: 'civil-rights',
    title: 'Civil Rights',
    description: 'Constitutional violations by government officials including police brutality, false arrest, malicious prosecution, and wrongful conviction demand accountability through civil rights litigation. Section 1983 claims provide federal remedies for state constitutional violations while Bivens actions address federal violations. Qualified immunity shields officers unless clearly established rights were violated requiring experienced navigation. We investigate body camera footage, witness testimony, police reports, and department policies establishing misconduct. Excessive force causing injury or death, racial profiling, illegal searches, and fabricated evidence violate fundamental rights. Municipal liability for inadequate training, supervision, or unconstitutional policies extends accountability beyond individual officers. First Amendment retaliation, due process violations, and equal protection claims address systematic injustices. Prison abuse, jail medical neglect, and custody deaths require special expertise. Recovery includes compensatory damages, punitive damages deterring future violations, and injunctive relief preventing continued misconduct.',
    image: civilRightsImg,
    slug: 'civil-rights'
  },
  {
    id: 'retail-accidents',
    title: 'Retail Accidents',
    description: 'Stores must maintain safe shopping conditions with slip-and-falls, falling merchandise, and parking lot accidents causing thousands of injuries annually. Wet floors without warning signs, cluttered aisles, inadequate lighting, and broken fixtures create hazards violating duty of care. Large retailers employ aggressive defense tactics including immediate incident response teams and surveillance video manipulation requiring equally sophisticated representation. We investigate cleaning logs, inspection records, prior incidents, and corporate policies establishing notice of dangerous conditions. Black Friday stampedes, inadequate security leading to assaults, and automatic door malfunctions cause serious injuries. Loading dock accidents, shopping cart injuries, and escalator entrapment require investigation. California premises liability law requires reasonable inspections and prompt hazard remediation that profit-focused corporations often neglect. Recovery addresses medical expenses, lost wages, and pain and suffering from preventable retail accidents affecting thousands of California shoppers daily.',
    image: retailAccidentsImg,
    slug: 'retail-accidents'
  },
  {
    id: 'scaffolding-falls',
    title: 'Scaffolding Falls',
    description: 'Height-related falls from scaffolding cause severe injuries including traumatic brain injuries, spinal cord damage, multiple fractures, and death. OSHA requires proper assembly, guardrails, planking, and fall protection that contractors frequently violate prioritizing speed over safety. We investigate scaffold design, installation procedures, inspection records, and safety equipment provision. General contractors bear responsibility for subcontractor safety violations under multi-employer worksite doctrine. Scaffold collapse from overloading, inadequate bracing, or defective components affects multiple workers simultaneously. Weather conditions, struck-by hazards from falling objects, and electrical hazards compound scaffold dangers. Beyond workers\' compensation, third-party claims against property owners, general contractors, and equipment suppliers provide additional recovery. Permanent disabilities preventing return to construction work require vocational rehabilitation and lifetime wage loss calculations. Our construction accident team understands scaffold standards, safety regulations, and liability theories maximizing recovery for preventable fall injuries.',
    image: scaffoldingFallsImg,
    slug: 'scaffolding-falls'
  },
  {
    id: 'crane-accidents',
    title: 'Crane Accidents',
    description: 'Crane collapses, dropped loads, and contact with power lines cause catastrophic injuries at construction sites requiring specialized investigation. Operator error, mechanical failure, improper rigging, and wind conditions contribute to crane accidents affecting workers and bystanders. We examine operator certification, equipment inspection records, load charts, and safety protocols. Mobile cranes, tower cranes, and overhead cranes present unique hazards requiring specific expertise. Multiple contractors sharing crane operations create complex liability requiring careful analysis. OSHA crane standards and ANSI guidelines establish safety requirements frequently violated. Critical lifts requiring additional planning and supervision often proceed without proper precautions. Beyond construction workers, pedestrians and neighboring properties suffer crane accident injuries. Crane rental companies, operators, riggers, and signalpersons share potential liability. Catastrophic injuries including paralysis, amputation, and wrongful death require maximum compensation from all responsible parties through coordinated litigation strategy.',
    image: craneAccidentsImg,
    slug: 'crane-accidents'
  },
  {
    id: 'railroad-accidents',
    title: 'Railroad Accidents',
    description: 'Train collisions, crossing accidents, and derailments cause severe injuries with Federal Employers Liability Act protecting railroad workers differently than standard workers\' compensation. FELA requires proving railroad negligence but provides fuller recovery including pain and suffering. We investigate signal failures, track maintenance, crew fatigue, and equipment defects causing accidents. Grade crossing accidents from inadequate warnings, malfunctioning gates, and vegetation obstruction devastate families. Pedestrian trespasser injuries still warrant investigation for attractive nuisance or inadequate fencing. Hazardous material transportation creating toxic exposure risks surrounding communities during derailments. Federal Railroad Administration regulations establish safety standards frequently violated for operational efficiency. Railroad workers suffering repetitive stress injuries from ballast work, coupling operations, and vibration exposure develop cumulative trauma. California\'s extensive freight and passenger rail systems including light rail create numerous accident risks requiring specialized legal expertise protecting victims\' rights.',
    image: railroadAccidentsImg,
    slug: 'railroad-accidents'
  },
  {
    id: 'defamation',
    title: 'Defamation',
    description: 'False statements damaging reputation, career prospects, and business relationships require careful navigation between free speech protections and accountability for malicious lies. California\'s anti-SLAPP statute creates procedural hurdles requiring strategic approaches proving probability of success early. We distinguish between factual assertions and protected opinion, public and private figures, and matters of public concern affecting legal standards. Libel through written publications including social media posts creates lasting damage searchable forever online. Slander through spoken statements to third parties destroys professional relationships and community standing. Actual malice standards for public figures require proving knowledge of falsity or reckless disregard for truth. Private figures need only prove negligence for actual damage recovery. Special damages including lost employment, business opportunities, and quantifiable financial losses strengthen claims. Presumed damages for particularly heinous false accusations may apply. Retraction demands, correction requests, and mitigation efforts affect damage calculations while preserving claims.',
    image: defamationImg,
    slug: 'defamation'
  },
  {
    id: 'general-personal-injury',
    title: 'General Personal Injury',
    description: 'Every injury caused by another\'s negligence deserves skilled representation regardless of how unusual or complex the circumstances. Unique accidents, rare incidents, and unusual fact patterns still warrant compensation when negligence causes harm. We investigate all potential liability theories, insurance coverage sources, and damage categories maximizing recovery. California\'s pure comparative negligence allows recovery even when partially at fault, reducing damages proportionally. Statute of limitations generally provides two years but exceptions for discovery, minority, and disability may extend deadlines. Government claims require six-month notice with different procedures than private defendants. Intentional torts including assault, battery, and false imprisonment invoke different legal standards than negligence. Strict liability for abnormally dangerous activities and wild animals removes fault requirements. Emotional distress, loss of consortium, and punitive damages supplement economic losses. No case is too complex, unusual, or challenging when negligence causes preventable injuries requiring compensation.',
    image: generalPersonalInjuryImg,
    slug: 'general-personal-injury'
  }
];

const PracticeAreasReference: React.FC = () => {
  // Find Mesothelioma & Asbestos as default active area
  const defaultArea = practiceAreas.find(area => area.id === "mesothelioma-asbestos") || practiceAreas[0];
  const [activeArea, setActiveArea] = useState<PracticeArea>(defaultArea);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [lockedArea, setLockedArea] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Sidebar animation
      gsap.fromTo(sidebarRef.current,
        { 
          opacity: 0, 
          x: -100,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: 'top 85%',
          }
        }
      );

      // Practice area cards staggered animation
      gsap.fromTo(gridRef.current?.children || [],
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
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleAreaHover = (areaId: string | null) => {
    setHoveredArea(areaId);
    if (areaId) {
      const area = practiceAreas.find(p => p.id === areaId);
      if (area) setActiveArea(area);
      
      // Add visual effects to cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardArea = practiceAreas[index];
          if (cardArea?.id === areaId) {
            // Activate the hovered card with subtle glow
            gsap.to(card, { 
              scale: 1.02, 
              opacity: 1,
              filter: 'brightness(1.1) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))',
              duration: 0.3, 
              ease: 'power2.out' 
            });
          } else {
            // Fade out other cards
            gsap.to(card, { 
              scale: 0.95, 
              opacity: 0.4,
              filter: 'brightness(0.8)',
              duration: 0.3, 
              ease: 'power2.out' 
            });
          }
        }
      });
    } else {
      // Reset all cards to normal state
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, { 
            scale: 1, 
            opacity: 1,
            filter: 'brightness(1) drop-shadow(0 0 0px transparent)',
            duration: 0.3, 
            ease: 'power2.out' 
          });
        }
      });
      
      // On hover leave, revert to locked area
      const lockedAreaData = practiceAreas.find(p => p.id === lockedArea);
      if (lockedAreaData) setActiveArea(lockedAreaData);
    }
  };

  const handleAreaClick = (areaId: string) => {
    setLockedArea(areaId);
    const area = practiceAreas.find(p => p.id === areaId);
    if (area) {
      setActiveArea(area);
      // Navigate to the practice area page
      if (area.slug) {
        window.location.href = `/practice-areas/${area.slug}`;
      }
    }
  };

  const getItemState = (areaId: string) => {
    if (hoveredArea === areaId) return 'hovered';
    if (lockedArea === areaId) return 'active';
    return 'default';
  };

  // Get practice area categories for tags
  const getPracticeAreaTags = (title: string): string[] => {
    const tagMap: Record<string, string[]> = {
      'Mesothelioma & Asbestos': ['Mass Tort', 'Toxic Exposure', 'Cancer'],
      'Silicosis Injuries': ['Occupational', 'Toxic Exposure', 'Lung Disease'],
      'Talc & Baby Powder Cancer': ['Mass Tort', 'Product Liability', 'Cancer'],
      'Car Accidents': ['Motor Vehicle', 'Personal Injury', 'Insurance'],
      'Truck & 18-Wheeler': ['Motor Vehicle', 'Commercial', 'Catastrophic'],
      'Motorcycle Accidents': ['Motor Vehicle', 'Personal Injury', 'Bias Defense'],
      'Pedestrian Accidents': ['Motor Vehicle', 'Vulnerable Road User', 'Serious Injury'],
      'Bicycle Accidents': ['Motor Vehicle', 'Vulnerable Road User', 'California Law'],
      'Premises Liability': ['Property Law', 'Negligence', 'Slip & Fall'],
      'Dog Bites': ['Strict Liability', 'Animal Law', 'California Statute'],
      'Medical Malpractice': ['Healthcare', 'Professional Negligence', 'MICRA'],
      'Wrongful Death': ['Catastrophic', 'Family Law', 'Survival Action'],
      'Product Liability': ['Defective Products', 'Strict Liability', 'Consumer Safety'],
      'Construction Accidents': ['Workplace', 'OSHA', 'Catastrophic'],
      'Brain Injuries': ['Catastrophic', 'Neurological', 'Life Care'],
      'Spinal Cord Injuries': ['Catastrophic', 'Paralysis', 'Life Care'],
      'Burn Injuries': ['Catastrophic', 'Plastic Surgery', 'Pain & Suffering'],
      'Amputation': ['Catastrophic', 'Prosthetics', 'Life Alteration'],
      'Workplace Injuries': ['Workers Comp', 'Third Party', 'Labor Law'],
      'Medical Devices': ['FDA', 'Defective Product', 'Healthcare'],
      'Pharmaceutical': ['FDA', 'Drug Safety', 'Side Effects'],
      'Mass Torts': ['Class Action', 'Multiple Plaintiffs', 'Corporate Liability'],
      'Class Actions': ['Group Litigation', 'Consumer Rights', 'Corporate Misconduct'],
      'Environmental & Toxic': ['Toxic Exposure', 'Environmental Law', 'Public Health'],
      'Camp Lejeune': ['Military', 'Toxic Water', 'Government Liability'],
      'PFAS Exposure': ['Forever Chemicals', 'Environmental', 'Water Contamination'],
      'Benzene Exposure': ['Chemical Exposure', 'Cancer', 'Occupational'],
      'Opioid Litigation': ['Pharmaceutical', 'Addiction', 'Public Health'],
      'Sexual Abuse': ['Civil Rights', 'Institutional Liability', 'Trauma'],
      'Clergy Abuse': ['Institutional Liability', 'Religious Organizations', 'Civil Rights'],
      'Elder Abuse': ['Vulnerable Adults', 'Nursing Home', 'Civil Rights'],
      'Birth Injuries': ['Medical Malpractice', 'Pediatric', 'Life Care'],
      'Uber & Lyft Accidents': ['Rideshare', 'Commercial Insurance', 'Gig Economy'],
      'Bus Accidents': ['Public Transit', 'Government Liability', 'Commercial'],
      'Aviation Accidents': ['Federal Aviation', 'Commercial Aviation', 'Catastrophic'],
      'Maritime Accidents': ['Admiralty Law', 'Jones Act', 'Offshore'],
      'Swimming Pool': ['Premises Liability', 'Drowning', 'Supervision'],
      'Amusement Parks': ['Premises Liability', 'Safety Regulations', 'Entertainment'],
      'Electrocution': ['Electrical Safety', 'Utility Companies', 'Construction'],
      'Explosions': ['Industrial Accidents', 'Property Damage', 'Catastrophic'],
      'Vision Loss': ['Catastrophic', 'Disability', 'Life Alteration'],
      'Hearing Loss': ['Occupational', 'Disability', 'OSHA'],
      'Paralysis': ['Catastrophic', 'Spinal Injury', 'Life Care'],
      'Civil Rights': ['Constitutional Law', 'Government Liability', 'Civil Liberty'],
      'Retail Accidents': ['Premises Liability', 'Customer Safety', 'Negligence'],
      'Scaffolding Falls': ['Construction', 'OSHA', 'Height Safety'],
      'Crane Accidents': ['Construction', 'Heavy Equipment', 'Workplace Safety'],
      'Railroad Accidents': ['Federal Railroad', 'FELA', 'Transportation'],
      'Defamation': ['Reputation', 'First Amendment', 'Media Law'],
      'General Personal Injury': ['All Areas', 'Comprehensive', 'Expert Representation']
    };
    return tagMap[title] || ['Personal Injury', 'Legal Services', 'Compensation'];
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/4 w-72 h-72 orb animate-float opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 orb-secondary animate-float-delayed opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Practice Areas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal representation across all areas of personal injury law. 
            Our experienced attorneys fight for maximum compensation in every case.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-8">
          {/* Left Sidebar - Practice Area Links */}
          <div ref={sidebarRef} className="w-72 glass-card h-fit relative">
            
            {/* Header with gradient background */}
            <div className="bg-gradient-primary px-8 py-6 rounded-t-2xl">
              <h3 className="text-xl font-bold text-primary-foreground">
                Our Practice Areas
              </h3>
            </div>
            
            {/* Navigation Links */}
            <div className="px-6 py-4">
              <nav className="space-y-0.5 max-h-[580px]">
                {practiceAreas.map((area) => {
                  const state = getItemState(area.id);
                  return (
                    <button
                      key={area.id}
                      onClick={() => handleAreaClick(area.id)}
                      onMouseEnter={() => handleAreaHover(area.id)}
                      onMouseLeave={() => handleAreaHover(null)}
                      className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 glass-button border-0 magnetic hover:scale-[1.02] ${
                        state === 'active'
                          ? 'bg-primary/20 text-primary border border-primary/30 shadow-md' 
                          : state === 'hovered'
                          ? 'bg-primary/15 text-primary scale-[1.02] shadow-sm'
                          : 'text-foreground hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {area.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Right Content Area - Practice Cards Grid */}
          <div className="flex-1 relative">
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => {
                const state = getItemState(area.id);
                const tags = getPracticeAreaTags(area.title);
                
                return (
                  <div
                    key={area.id}
                    ref={el => { if (el) cardsRef.current[index] = el; }}
                    className="glass-card group hover-glow-primary cursor-pointer overflow-hidden"
                    onMouseEnter={() => handleAreaHover(area.id)}
                    onMouseLeave={() => handleAreaHover(null)}
                    onClick={() => handleAreaClick(area.id)}
                  >
                    {/* Practice Area Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={area.image}
                        alt={`${area.title} legal services`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroFallback; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay Buttons */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          to={area.title === 'Mesothelioma & Asbestos' ? '/practice-areas/mesothelioma-asbestos' : '/practice-areas/coming-soon'}
                          className="glass-button"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V108.11C53.29,118.77,73.32,127.48,96,127.48c22.68,0,42.71-8.71,72-19.37V124c0,13.22-30.79,28-72,28S24,137.22,24,124Zm168,48c0,13.22-30.79,28-72,28s-72-14.78-72-28V156.11C77.29,166.77,97.32,175.48,120,175.48c22.68,0,42.71-8.71,72-19.37Z"></path>
                          </svg>
                          Learn More
                        </Link>
                        <button className="hero-button">
                          <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v52h24A8,8,0,0,1,168,148Z"></path>
                          </svg>
                          Consult
                        </button>
                      </div>
                    </div>

                    {/* Practice Info */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {area.description}
                      </p>
                      
                      {/* Practice Area Tags */}
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="pt-2">
                        <Link
                          to={area.title === 'Mesothelioma & Asbestos' ? '/practice-areas/mesothelioma-asbestos' : '/practice-areas/coming-soon'}
                          className="ghost-button group/btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="transition-transform group-hover/btn:translate-x-1">
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Practice Area Navigation */}
          <div className="glass-card mb-8">
            <div className="bg-gradient-primary px-6 py-4 rounded-t-2xl">
              <h3 className="text-lg font-semibold text-primary-foreground">
                Select Practice Area
              </h3>
            </div>
            <div className="p-6">
              <nav className="space-y-2">
                {practiceAreas.map((area) => {
                  const state = getItemState(area.id);
                  return (
                    <button
                      key={area.id}
                      onClick={() => handleAreaClick(area.id)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 glass-button border-0 ${
                        state === 'active'
                          ? 'bg-primary/20 text-primary border border-primary/30' 
                          : 'text-foreground hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {area.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Mobile Practice Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practiceAreas.map((area, index) => {
              const state = getItemState(area.id);
              const tags = getPracticeAreaTags(area.title);
              
              return (
                <div
                  key={area.id}
                  className="glass-card group hover-glow-primary cursor-pointer overflow-hidden"
                  onClick={() => handleAreaClick(area.id)}
                >
                  {/* Practice Area Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img 
                      src={area.image}
                      alt={`${area.title} legal services`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroFallback; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-primary-glow transition-colors">
                        {area.title}
                      </h3>
                    </div>
                  </div>

                  {/* Practice Info */}
                  <div className="p-4 space-y-3">                    
                    {/* Practice Area Tags */}
                    <div className="flex flex-wrap gap-1">
                      {tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Link
                      to={area.title === 'Mesothelioma & Asbestos' ? '/practice-areas/mesothelioma-asbestos' : '/practice-areas/coming-soon'}
                      className="ghost-button w-full justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="hero-button text-lg px-8 py-4">
            Free Case Evaluation
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            No fees unless we win your case
          </p>
        </div>
      </div>

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite">
        Currently showing {activeArea.title} practice area information. {practiceAreas.length} practice areas available.
      </div>
    </section>
  );
};

export default PracticeAreasReference;