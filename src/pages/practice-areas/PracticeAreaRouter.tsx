import React from 'react';
import { useLocation } from 'react-router-dom';
import PracticeAreaTemplate from '@/components/PracticeAreaTemplate';

const PracticeAreaRouter = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || '';

  // Map of practice area slugs to their content
  const practiceAreaData: { [key: string]: any } = {
    'mesothelioma-asbestos': {
      icon: '🫁',
      title: 'Mesothelioma & Asbestos Lawyers',
      subtitle: 'Aggressive representation for asbestos cancer victims throughout California',
      description: 'We trace exposure histories from military service, shipyards, construction sites, and consumer products. Our experienced team understands the complexities of asbestos exposure cases and fights for maximum compensation.',
      keyPoints: [
        'Military service exposure',
        'Shipyard worker exposure',
        'Construction site exposure',
        'Consumer product exposure',
        'Industrial facility exposure',
        'Secondary exposure claims'
      ],
      additionalInfo: 'Mesothelioma has a long latency period, often developing 20-50 years after initial exposure. Early diagnosis and aggressive legal action are crucial for best outcomes.',
      callToAction: 'Diagnosed with Mesothelioma?'
    },
    'silicosis-injuries': {
      icon: '⚠️',
      title: 'Silicosis Injuries Legal Help',
      subtitle: 'Fighting for stone workers suffering from this preventable yet incurable lung disease',
      description: 'Silicosis is an occupational lung disease caused by inhaling crystalline silica dust. Engineered stone fabricators face epidemic-level silicosis rates due to dangerous working conditions and inadequate safety measures.',
      keyPoints: [
        'Countertop fabrication and installation',
        'Construction and demolition work',
        'Sand blasting operations',
        'Mining and quarrying',
        'Glass manufacturing',
        'Foundry work'
      ],
      additionalInfo: 'Silicosis is entirely preventable with proper safety equipment and procedures, yet many employers prioritize profits over worker safety.',
      callToAction: 'Diagnosed with Silicosis?'
    },
    'talc-baby-powder-cancer': {
      icon: '🍼',
      title: 'Talc & Baby Powder Cancer Lawyers',
      subtitle: 'Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products',
      description: 'For decades, manufacturers knew their talc products contained asbestos but failed to warn consumers. This has led to thousands of cases of ovarian cancer and mesothelioma.',
      keyPoints: [
        'Johnson & Johnson Baby Powder cases',
        'Ovarian cancer from talc use',
        'Mesothelioma from asbestos-contaminated talc',
        'Cosmetic talc products',
        'Personal hygiene products',
        'Industrial talc exposure'
      ],
      additionalInfo: 'Recent court verdicts have awarded millions to victims who developed cancer from using talc-based products.',
      callToAction: 'Developed Cancer from Talc Products?'
    },
    'car-accidents': {
      icon: '🚗',
      title: 'Car Accident Legal Representation',
      subtitle: 'California\'s congested highways see thousands of serious crashes annually',
      description: 'Our former defense experience reveals insurance company tactics used to minimize payouts. We know how to counter these strategies and secure maximum compensation for our clients.',
      keyPoints: [
        'Rear-end collisions',
        'Head-on crashes',
        'Side-impact accidents',
        'Multi-vehicle pile-ups',
        'Hit-and-run incidents',
        'Intersection accidents'
      ],
      additionalInfo: 'Insurance companies often try to minimize payouts by questioning the severity of injuries or shifting blame to victims.',
      callToAction: 'Been in a Car Accident?'
    },
    'truck-18-wheeler': {
      icon: '🚛',
      title: 'Truck & 18-Wheeler Accident Lawyers',
      subtitle: 'Commercial truck crashes cause catastrophic injuries due to size and weight disparities',
      description: 'Federal regulations create complex liability issues in commercial truck accidents. Multiple parties may be responsible including drivers, trucking companies, and maintenance providers.',
      keyPoints: [
        'Federal trucking regulations',
        'Driver fatigue and violations',
        'Improper cargo loading',
        'Maintenance negligence',
        'Equipment failures',
        'Multiple defendant liability'
      ],
      additionalInfo: 'Trucking companies often have teams of lawyers and investigators responding immediately to accident scenes.',
      callToAction: 'Injured in Truck Accident?'
    },
    'motorcycle-accidents': {
      icon: '🏍️',
      title: 'Motorcycle Accident Attorneys',
      subtitle: 'Protecting California riders against bias and securing fair compensation',
      description: 'Despite following traffic laws, motorcyclists face prejudice from insurance companies who try to blame riders for accidents. We fight this bias and secure maximum compensation.',
      keyPoints: [
        'Lane splitting accidents',
        'Left-turn collisions',
        'Road hazard crashes',
        'Hit-and-run incidents',
        'Defective motorcycle parts',
        'Insurance company bias'
      ],
      additionalInfo: 'California law allows lane splitting, but insurance companies often unfairly blame motorcyclists for accidents.',
      callToAction: 'Injured in a Motorcycle Accident?'
    },
    'pedestrian-accidents': {
      icon: '🚶',
      title: 'Pedestrian Accident Lawyers',
      subtitle: 'California law provides strong protections for pedestrians',
      description: 'Pedestrian accidents often result in severe or fatal injuries due to the vulnerability of those on foot. California law strongly protects pedestrians, but securing fair compensation requires experienced legal representation.',
      keyPoints: [
        'Crosswalk accidents',
        'Distracted driving incidents',
        'School zone accidents',
        'Parking lot incidents',
        'Hit-and-run cases',
        'Drunk driving accidents'
      ],
      additionalInfo: 'Pedestrians have the right of way in marked crosswalks and at intersections, even without traffic signals.',
      callToAction: 'Injured as a Pedestrian?'
    },
    'bicycle-accidents': {
      icon: '🚴',
      title: 'Bicycle Accident Attorneys',
      subtitle: 'California\'s bicycle-friendly laws provide extensive protections',
      description: 'California has some of the most comprehensive bicycle safety laws in the nation, but cyclists remain vulnerable to serious injuries when drivers fail to share the road safely.',
      keyPoints: [
        'Bike lane violations',
        'Dooring incidents',
        'Right-hook accidents',
        'Intersection collisions',
        'Distracted driving cases',
        'Road rage incidents'
      ],
      additionalInfo: 'The three-foot passing law requires drivers to maintain safe distances when overtaking cyclists.',
      callToAction: 'Injured While Cycling?'
    },
    'premises-liability': {
      icon: '🏢',
      title: 'Premises Liability Lawyers',
      subtitle: 'Property owners must maintain safe conditions',
      description: 'Property owners have a legal duty to maintain safe conditions for visitors. Slip and falls from wet floors, uneven surfaces, and other hazards can cause serious injuries.',
      keyPoints: [
        'Slip and fall accidents',
        'Inadequate security',
        'Poor lighting conditions',
        'Defective stairs and railings',
        'Swimming pool accidents',
        'Retail store incidents'
      ],
      additionalInfo: 'Property owners must regularly inspect their premises and fix dangerous conditions or provide adequate warnings.',
      callToAction: 'Injured on Someone\'s Property?'
    },
    'dog-bites': {
      icon: '🐕',
      title: 'Dog Bite Lawyers',
      subtitle: 'California\'s strict liability statute holds dog owners responsible',
      description: 'California has strict liability laws for dog bites, meaning owners are responsible for injuries regardless of the animal\'s history or the owner\'s knowledge of aggressive behavior.',
      keyPoints: [
        'Facial injuries and scarring',
        'Infections and medical complications',
        'Psychological trauma',
        'Children\'s injuries',
        'Dangerous breed attacks',
        'Property owner liability'
      ],
      additionalInfo: 'Dog bite victims may be entitled to compensation for medical expenses, lost wages, pain and suffering, and scarring.',
      callToAction: 'Bitten by a Dog?'
    },
    'medical-malpractice': {
      icon: '⚕️',
      title: 'Medical Malpractice Attorneys',
      subtitle: 'Healthcare providers must meet professional standards of care',
      description: 'Medical malpractice cases require proving that healthcare providers failed to meet the standard of care. We work with medical experts to demonstrate how negligence caused preventable harm.',
      keyPoints: [
        'Misdiagnosis or delayed diagnosis',
        'Surgical errors and complications',
        'Medication errors and adverse reactions',
        'Birth injuries and obstetric negligence',
        'Anesthesia errors',
        'Hospital-acquired infections'
      ],
      additionalInfo: 'Medical malpractice cases have strict time limits and require extensive medical expert testimony.',
      callToAction: 'Victim of Medical Negligence?'
    },
    'wrongful-death': {
      icon: '⚰️',
      title: 'Wrongful Death Attorneys',
      subtitle: 'When negligence causes death, families deserve justice',
      description: 'When negligence causes the death of a loved one, surviving family members deserve both justice and financial security during this devastating time.',
      keyPoints: [
        'Medical malpractice deaths',
        'Car accident fatalities',
        'Workplace accident deaths',
        'Product liability deaths',
        'Nursing home neglect',
        'Criminal acts and negligent security'
      ],
      additionalInfo: 'Wrongful death claims can provide compensation for lost income, medical expenses, and the pain and suffering of family members.',
      callToAction: 'Lost a Loved One Due to Negligence?'
    },
    'product-liability': {
      icon: '⚡',
      title: 'Product Liability Lawyers',
      subtitle: 'Strict liability holds manufacturers responsible for injuries from defective products',
      description: 'When defective products cause injuries, manufacturers can be held strictly liable regardless of negligence. This includes design defects, manufacturing defects, and failure to warn.',
      keyPoints: [
        'Defective medical devices',
        'Dangerous pharmaceuticals',
        'Automotive defects',
        'Consumer product recalls',
        'Industrial equipment failures',
        'Toxic product exposure'
      ],
      additionalInfo: 'Product liability cases often involve complex engineering and scientific evidence requiring expert testimony.',
      callToAction: 'Injured by a Defective Product?'
    },
    'construction-accidents': {
      icon: '🏗️',
      title: 'Construction Accident Lawyers',
      subtitle: 'Construction sites present numerous hazards requiring investigation beyond workers\' comp',
      description: 'Construction accidents often involve third-party liability beyond workers\' compensation, including equipment manufacturer defects, contractor negligence, and unsafe site conditions.',
      keyPoints: [
        'Falls from heights',
        'Scaffolding collapses',
        'Crane accidents',
        'Electrical injuries',
        'Equipment malfunctions',
        'Trench cave-ins'
      ],
      additionalInfo: 'Third-party liability claims can provide additional compensation beyond workers\' compensation benefits.',
      callToAction: 'Injured in Construction Accident?'
    },
    'brain-injuries': {
      icon: '🧠',
      title: 'Brain Injury Lawyers',
      subtitle: 'Traumatic brain injuries cause devastating cognitive, physical, and emotional impairments',
      description: 'TBI cases require extensive medical documentation and lifetime care planning. These injuries often result in permanent disabilities requiring specialized legal expertise.',
      keyPoints: [
        'Concussions and mild TBI',
        'Severe traumatic brain injury',
        'Cognitive impairments',
        'Memory and speech disorders',
        'Personality changes',
        'Lifetime care needs'
      ],
      additionalInfo: 'Brain injuries can have delayed symptoms and long-term consequences that may not be immediately apparent.',
      callToAction: 'Suffered a Brain Injury?'
    },
    'spinal-cord-injuries': {
      icon: '🦴',
      title: 'Spinal Cord Injury Lawyers',
      subtitle: 'Spinal cord damage causing paralysis requires extensive lifetime medical care',
      description: 'Spinal cord injuries often result in permanent paralysis and require millions in lifetime medical care, adaptive equipment, and home modifications.',
      keyPoints: [
        'Paraplegia and quadriplegia',
        'Incomplete spinal injuries',
        'Adaptive equipment needs',
        'Home modifications',
        'Vocational rehabilitation',
        'Lifetime care costs'
      ],
      additionalInfo: 'Spinal cord injury cases require detailed life care planning and economic projections for future needs.',
      callToAction: 'Suffered Spinal Cord Injury?'
    },
    'burn-injuries': {
      icon: '🔥',
      title: 'Burn Injury Lawyers',
      subtitle: 'Severe burns cause excruciating pain, permanent scarring, and psychological trauma',
      description: 'Serious burn injuries require extensive treatment including skin grafts, reconstructive surgery, and psychological support throughout the recovery process.',
      keyPoints: [
        'Third and fourth-degree burns',
        'Chemical burn injuries',
        'Electrical burn accidents',
        'Explosion injuries',
        'Workplace burn accidents',
        'Defective product burns'
      ],
      additionalInfo: 'Burn injuries often require multiple surgeries and years of rehabilitation, with significant psychological impact.',
      callToAction: 'Suffered Severe Burns?'
    },
    'amputation': {
      icon: '🦾',
      title: 'Amputation Injury Lawyers',
      subtitle: 'Limb loss causes permanent disability requiring prosthetics and rehabilitation',
      description: 'Amputation injuries require extensive rehabilitation, prosthetic devices, and psychological support throughout life, with significant financial implications.',
      keyPoints: [
        'Traumatic amputations',
        'Surgical amputations due to negligence',
        'Prosthetic device needs',
        'Rehabilitation services',
        'Workplace accommodations',
        'Phantom pain treatment'
      ],
      additionalInfo: 'Amputation cases require comprehensive planning for future prosthetic needs and ongoing medical care.',
      callToAction: 'Suffered Amputation Injury?'
    },
    'workplace-injuries': {
      icon: '⚠️',
      title: 'Workplace Injury Lawyers',
      subtitle: 'Third-party claims yield additional recovery for serious workplace injuries',
      description: 'Beyond workers\' compensation, third-party claims against equipment manufacturers and contractors can provide additional compensation for workplace injuries.',
      keyPoints: [
        'Equipment manufacturer liability',
        'Contractor negligence',
        'Toxic exposure claims',
        'Industrial accidents',
        'Construction site injuries',
        'Defective safety equipment'
      ],
      additionalInfo: 'Workers may be entitled to pursue claims against third parties even while receiving workers\' compensation.',
      callToAction: 'Injured at Work?'
    },
    'medical-devices': {
      icon: '🏥',
      title: 'Medical Device Lawyers',
      subtitle: 'FDA approval doesn\'t guarantee safety of medical devices',
      description: 'Defective medical devices including hip replacements, surgical mesh, and IVC filters can cause serious complications requiring additional surgeries and treatment.',
      keyPoints: [
        'Hip replacement failures',
        'Surgical mesh complications',
        'IVC filter problems',
        'Pacemaker defects',
        'Breast implant injuries',
        'Hernia mesh failures'
      ],
      additionalInfo: 'Medical device manufacturers can be held liable for design defects, manufacturing flaws, and inadequate warnings.',
      callToAction: 'Injured by Medical Device?'
    },
    'pharmaceutical': {
      icon: '💊',
      title: 'Pharmaceutical Lawyers',
      subtitle: 'Dangerous drugs cause serious adverse reactions when risks are concealed',
      description: 'When pharmaceutical companies conceal risks or provide inadequate warnings, patients can suffer serious adverse reactions from dangerous medications.',
      keyPoints: [
        'Prescription drug side effects',
        'FDA recall medications',
        'Cancer-causing drugs',
        'Birth defect medications',
        'Heart attack and stroke risks',
        'Inadequate warnings'
      ],
      additionalInfo: 'Pharmaceutical companies have a duty to properly test drugs and warn of potential side effects and contraindications.',
      callToAction: 'Harmed by Dangerous Medication?'
    },
    'mass-torts': {
      icon: '⚖️',
      title: 'Mass Tort Lawyers',
      subtitle: 'Widespread harm from defective products requires coordinated litigation',
      description: 'Mass tort cases involve widespread harm from defective products or environmental contamination, requiring coordinated legal action against powerful corporate defendants.',
      keyPoints: [
        'Multi-district litigation',
        'Class action lawsuits',
        'Product liability mass torts',
        'Environmental contamination',
        'Pharmaceutical mass torts',
        'Corporate negligence'
      ],
      additionalInfo: 'Mass tort litigation allows individual claims to be coordinated for efficiency while preserving individual recovery rights.',
      callToAction: 'Part of Mass Tort Case?'
    },
    'class-actions': {
      icon: '👥',
      title: 'Class Action Lawyers',
      subtitle: 'Collective legal action provides justice when corporate wrongdoing affects numerous people',
      description: 'Class action lawsuits provide an efficient way to seek justice when many people have been harmed by the same corporate misconduct or defective products.',
      keyPoints: [
        'Consumer protection class actions',
        'Securities fraud cases',
        'Employment law violations',
        'Data breach litigation',
        'Insurance bad faith',
        'Antitrust violations'
      ],
      additionalInfo: 'Class actions allow individuals with smaller claims to band together against large corporations.',
      callToAction: 'Part of Class Action Case?'
    },
    'environmental-toxic': {
      icon: '☢️',
      title: 'Environmental Toxic Exposure Lawyers',
      subtitle: 'Chemical exposures from industrial pollution cause cancer and organ damage',
      description: 'Communities exposed to toxic chemicals from industrial operations may develop cancer, birth defects, and other serious health conditions requiring immediate legal action.',
      keyPoints: [
        'Industrial chemical exposure',
        'Groundwater contamination',
        'Air pollution injuries',
        'Soil contamination',
        'Toxic waste exposure',
        'Environmental cancer clusters'
      ],
      additionalInfo: 'Environmental exposure cases often involve complex scientific evidence and multiple responsible parties.',
      callToAction: 'Exposed to Environmental Toxins?'
    },
    'camp-lejeune': {
      icon: '🎖️',
      title: 'Camp Lejeune Water Contamination Lawyers',
      subtitle: 'Military families exposed to contaminated drinking water now have legal recourse',
      description: 'The Camp Lejeune Justice Act allows veterans and family members who lived at Camp Lejeune between 1953-1987 to seek compensation for illnesses caused by contaminated water.',
      keyPoints: [
        'Leukemia and blood cancers',
        'Kidney cancer',
        'Liver cancer',
        'Non-Hodgkin\'s lymphoma',
        'Bladder cancer',
        'Birth defects and fertility issues'
      ],
      additionalInfo: 'The contaminated water at Camp Lejeune contained dangerous chemicals including TCE, PCE, and benzene.',
      callToAction: 'Stationed at Camp Lejeune?'
    },
    'pfas-exposure': {
      icon: '💧',
      title: 'PFAS Forever Chemicals Lawyers',
      subtitle: 'Forever chemicals contaminating water supplies cause cancer and thyroid disease',
      description: 'PFAS chemicals don\'t break down naturally and accumulate in the body over time, causing cancer, thyroid disease, and other serious health conditions.',
      keyPoints: [
        'Drinking water contamination',
        'Military base exposure',
        'Industrial facility pollution',
        'Firefighting foam exposure',
        'Consumer product exposure',
        'Agricultural contamination'
      ],
      additionalInfo: 'PFAS manufacturers knew about health risks for decades while continuing to pollute the environment.',
      callToAction: 'Exposed to PFAS Chemicals?'
    },
    'benzene-exposure': {
      icon: '🧪',
      title: 'Benzene Exposure Lawyers',
      subtitle: 'Known carcinogen causing leukemia and lymphoma from occupational exposure',
      description: 'Benzene is a proven human carcinogen that causes blood cancers. Workers in oil refineries, chemical plants, and gas stations face the highest exposure risks.',
      keyPoints: [
        'Occupational benzene exposure',
        'Acute myeloid leukemia',
        'Non-Hodgkin\'s lymphoma',
        'Multiple myeloma',
        'Aplastic anemia',
        'Myelodysplastic syndrome'
      ],
      additionalInfo: 'There is no safe level of benzene exposure, and employers must provide proper protective equipment.',
      callToAction: 'Developed Cancer from Benzene?'
    },
    'opioid-litigation': {
      icon: '⚕️',
      title: 'Opioid Crisis Lawyers',
      subtitle: 'The opioid epidemic devastated families while manufacturers misrepresented addiction risks',
      description: 'Pharmaceutical companies aggressively marketed opioids while downplaying addiction risks, leading to widespread dependency and overdose deaths.',
      keyPoints: [
        'OxyContin addiction cases',
        'Prescription opioid dependency',
        'Overdose wrongful death',
        'Neonatal abstinence syndrome',
        'Treatment center fraud',
        'Pharmacy liability'
      ],
      additionalInfo: 'Opioid manufacturers face thousands of lawsuits for their role in creating and perpetuating the addiction crisis.',
      callToAction: 'Harmed by Opioid Crisis?'
    },
    'sexual-abuse': {
      icon: '🛡️',
      title: 'Sexual Abuse Lawyers',
      subtitle: 'Survivors deserve justice from both perpetrators and enabling institutions',
      description: 'Sexual abuse survivors can seek justice not only from perpetrators but also from institutions that failed to protect them through negligent supervision or cover-ups.',
      keyPoints: [
        'Childhood sexual abuse',
        'Institutional abuse cover-ups',
        'Negligent supervision claims',
        'Psychological trauma damages',
        'Statute of limitations extensions',
        'Confidential settlements available'
      ],
      additionalInfo: 'California has extended statutes of limitations for childhood sexual abuse cases, allowing adult survivors to seek justice.',
      callToAction: 'Survivor of Sexual Abuse?'
    },
    'clergy-abuse': {
      icon: '⛪',
      title: 'Clergy Sexual Abuse Lawyers',
      subtitle: 'Religious institutions harboring predators face accountability',
      description: 'Religious organizations that knew about abusive clergy but failed to protect children can be held liable for enabling abuse through negligent supervision and cover-ups.',
      keyPoints: [
        'Catholic Church abuse cases',
        'Protestant church liability',
        'Institutional cover-ups',
        'Survivor support services',
        'Confidential reporting options',
        'Extended statute of limitations'
      ],
      additionalInfo: 'California\'s AB 218 opened a window for survivors to file claims previously barred by statutes of limitations.',
      callToAction: 'Survivor of Clergy Abuse?'
    },
    'elder-abuse': {
      icon: '👴',
      title: 'Elder Abuse Lawyers',
      subtitle: 'Enhanced remedies for abuse, neglect, and financial exploitation of seniors',
      description: 'California provides enhanced remedies for elder abuse, including punitive damages and attorney fees for physical abuse, neglect, and financial exploitation.',
      keyPoints: [
        'Nursing home abuse and neglect',
        'Financial exploitation',
        'Physical and emotional abuse',
        'Medication errors',
        'Bedsores and infections',
        'Wrongful death claims'
      ],
      additionalInfo: 'Elder abuse cases can result in enhanced damages including pain and suffering and punitive damages.',
      callToAction: 'Elder Abuse Victim?'
    },
    'birth-injuries': {
      icon: '👶',
      title: 'Birth Injury Lawyers',
      subtitle: 'Medical negligence during pregnancy and labor causes preventable birth injuries',
      description: 'Birth injuries from medical negligence can result in lifelong disabilities requiring extensive medical care, therapy, and special education services.',
      keyPoints: [
        'Cerebral palsy from oxygen deprivation',
        'Erb\'s palsy and brachial plexus injuries',
        'Shoulder dystocia complications',
        'Failure to monitor fetal distress',
        'Delayed cesarean section',
        'Medication errors during delivery'
      ],
      additionalInfo: 'Birth injury cases require immediate investigation and consultation with obstetric and pediatric experts.',
      callToAction: 'Child Suffered Birth Injury?'
    },
    'uber-lyft-accidents': {
      icon: '🚕',
      title: 'Uber/Lyft Accident Lawyers',
      subtitle: 'Rideshare accidents involve complex insurance coverage issues',
      description: 'Rideshare accidents involve multiple insurance policies depending on whether the driver was logged into the app, en route to pickup, or carrying passengers.',
      keyPoints: [
        'Driver app status complications',
        'Multiple insurance coverage',
        'Passenger injury claims',
        'Third-party vehicle accidents',
        'Uninsured rideshare drivers',
        'Background check failures'
      ],
      additionalInfo: 'Rideshare companies provide different levels of insurance coverage depending on the driver\'s status at the time of accident.',
      callToAction: 'Injured in Rideshare Accident?'
    },
    'bus-accidents': {
      icon: '🚌',
      title: 'Bus Accident Lawyers',
      subtitle: 'Public transportation accidents require specialized legal knowledge',
      description: 'Bus accidents involving municipal transit systems and private carriers require understanding of government liability rules and commercial insurance requirements.',
      keyPoints: [
        'Municipal bus accidents',
        'Charter bus crashes',
        'School bus injuries',
        'Government liability claims',
        'Federal transportation regulations',
        'Commercial driver violations'
      ],
      additionalInfo: 'Claims against government entities have strict notice requirements and shorter statutes of limitations.',
      callToAction: 'Injured in Bus Accident?'
    },
    'train-accidents': {
      icon: '🚂',
      title: 'Train Accident Lawyers',
      subtitle: 'Railroad accidents involve federal regulations and multiple defendants',
      description: 'Train accidents, including railroad crossing collisions and derailments, fall under federal railroad safety regulations and may involve multiple responsible parties.',
      keyPoints: [
        'Railroad crossing accidents',
        'Train derailments',
        'Platform and station injuries',
        'Federal Railroad Administration violations',
        'Signal system failures',
        'Track maintenance negligence'
      ],
      additionalInfo: 'Railroad companies are subject to strict federal safety regulations and can face significant liability for violations.',
      callToAction: 'Injured in Train Accident?'
    },
    'aviation-accidents': {
      icon: '✈️',
      title: 'Aviation Accident Lawyers',
      subtitle: 'Commercial and private aircraft accidents require specialized investigation',
      description: 'Aviation accidents require investigation of pilot error, mechanical failure, air traffic control mistakes, and aircraft maintenance issues under federal aviation regulations.',
      keyPoints: [
        'Commercial airline crashes',
        'Private aircraft accidents',
        'Helicopter crashes',
        'Pilot error and training failures',
        'Mechanical and maintenance issues',
        'Air traffic control errors'
      ],
      additionalInfo: 'Aviation accident investigations involve the FAA, NTSB, and complex federal regulations governing air travel.',
      callToAction: 'Injured in Aviation Accident?'
    },
    'maritime-accidents': {
      icon: '⚓',
      title: 'Maritime Accident Lawyers',
      subtitle: 'Boating accidents and commercial vessel injuries fall under maritime law',
      description: 'Maritime accidents involving recreational boats, commercial vessels, and harbor incidents are governed by federal maritime law and Jones Act provisions.',
      keyPoints: [
        'Recreational boating accidents',
        'Commercial fishing vessel injuries',
        'Harbor and dock accidents',
        'Jones Act seaman claims',
        'Coast Guard violations',
        'Vessel maintenance negligence'
      ],
      additionalInfo: 'Maritime law provides special protections for seamen and passengers injured on navigable waters.',
      callToAction: 'Injured in Maritime Accident?'
    },
    'swimming-pool-accidents': {
      icon: '🏊',
      title: 'Swimming Pool Accident Lawyers',
      subtitle: 'Pool drownings and injuries require premises liability expertise',
      description: 'Swimming pool accidents including drownings, diving injuries, and chemical exposure require understanding of pool safety codes and premises liability law.',
      keyPoints: [
        'Drowning and near-drowning',
        'Diving board injuries',
        'Pool chemical burns',
        'Inadequate supervision',
        'Defective pool equipment',
        'Missing safety barriers'
      ],
      additionalInfo: 'Pool owners must comply with safety regulations including proper fencing, covers, and supervision requirements.',
      callToAction: 'Injured in Pool Accident?'
    },
    'playground-injuries': {
      icon: '🛝',
      title: 'Playground Injury Lawyers',
      subtitle: 'Equipment defects and inadequate supervision cause serious childhood injuries',
      description: 'Playground injuries from defective equipment, inadequate supervision, and maintenance failures can result in serious injuries requiring immediate legal action.',
      keyPoints: [
        'Equipment design defects',
        'Inadequate supervision',
        'Poor maintenance',
        'Unsafe playground surfaces',
        'Age-inappropriate equipment',
        'Municipal liability'
      ],
      additionalInfo: 'Playgrounds must meet federal safety standards and be regularly inspected for hazards and equipment failures.',
      callToAction: 'Child Injured on Playground?'
    },
    'sports-injuries': {
      icon: '⚽',
      title: 'Sports Injury Lawyers',
      subtitle: 'Negligent coaching, equipment failures, and unsafe facilities cause preventable injuries',
      description: 'Sports injuries from negligent coaching, defective equipment, and unsafe facilities may provide grounds for legal action beyond assumed risk.',
      keyPoints: [
        'Negligent coaching and training',
        'Defective sports equipment',
        'Unsafe playing conditions',
        'Inadequate medical care',
        'Concussion protocol failures',
        'Heat illness prevention'
      ],
      additionalInfo: 'While sports involve inherent risks, coaches and facilities must meet safety standards and provide proper equipment.',
      callToAction: 'Injured in Sports Activity?'
    },
    'school-accidents': {
      icon: '🏫',
      title: 'School Accident Lawyers',
      subtitle: 'Educational institutions must provide safe environments for students',
      description: 'Schools have a duty to provide safe environments for students. Negligent supervision, dangerous conditions, and inadequate security can create liability.',
      keyPoints: [
        'Playground accidents',
        'Classroom injuries',
        'Field trip accidents',
        'School bus incidents',
        'Inadequate supervision',
        'Dangerous school conditions'
      ],
      additionalInfo: 'Public schools are government entities with special notice requirements and liability limitations.',
      callToAction: 'Child Injured at School?'
    },
    'nursing-home-abuse': {
      icon: '🏥',
      title: 'Nursing Home Abuse Lawyers',
      subtitle: 'Systematic neglect and abuse in long-term care facilities violate resident rights',
      description: 'Nursing home residents have the right to quality care free from abuse and neglect. Systematic problems require immediate intervention and legal action.',
      keyPoints: [
        'Physical and emotional abuse',
        'Medical neglect',
        'Medication errors',
        'Bedsores and infections',
        'Falls and injuries',
        'Financial exploitation'
      ],
      additionalInfo: 'Nursing homes must meet federal and state care standards and can face significant penalties for violations.',
      callToAction: 'Loved One Abused in Nursing Home?'
    },
    'food-poisoning': {
      icon: '🍽️',
      title: 'Food Poisoning Lawyers',
      subtitle: 'Restaurant negligence and contaminated products require rapid investigation',
      description: 'Foodborne illness outbreaks from restaurant negligence or contaminated products require immediate investigation to preserve evidence and identify sources.',
      keyPoints: [
        'Restaurant food poisoning',
        'Contaminated food products',
        'E. coli and Salmonella outbreaks',
        'Listeria contamination',
        'Hepatitis A exposure',
        'Food handling violations'
      ],
      additionalInfo: 'Food poisoning cases require immediate medical attention and rapid legal action to preserve evidence.',
      callToAction: 'Suffered Food Poisoning?'
    },
    'hotel-accidents': {
      icon: '🏨',
      title: 'Hotel Accident Lawyers',
      subtitle: 'Hospitality venues must maintain safe conditions for guests',
      description: 'Hotels and hospitality venues have a duty to maintain safe conditions for guests, including adequate security, safe facilities, and proper maintenance.',
      keyPoints: [
        'Slip and fall accidents',
        'Swimming pool incidents',
        'Balcony and stairway falls',
        'Inadequate security',
        'Elevator accidents',
        'Fire safety violations'
      ],
      additionalInfo: 'Hotels must meet building codes and safety standards and provide adequate security for guest protection.',
      callToAction: 'Injured at Hotel?'
    },
    'amusement-park-injuries': {
      icon: '🎢',
      title: 'Amusement Park Injury Lawyers',
      subtitle: 'Ride malfunctions and operator negligence cause serious injuries and deaths',
      description: 'Amusement park injuries from ride malfunctions, operator negligence, and inadequate safety inspections can result in catastrophic injuries requiring immediate legal action.',
      keyPoints: [
        'Ride mechanical failures',
        'Operator negligence',
        'Inadequate safety inspections',
        'Height and age restrictions',
        'Restraint system failures',
        'Maintenance negligence'
      ],
      additionalInfo: 'Amusement parks must follow strict safety regulations and conduct regular inspections of rides and equipment.',
      callToAction: 'Injured at Amusement Park?'
    },
    'concert-event-injuries': {
      icon: '🎵',
      title: 'Concert and Event Injury Lawyers',
      subtitle: 'Crowd crushes, stage collapses, and venue negligence at entertainment events',
      description: 'Entertainment venues must provide adequate security, crowd control, and safe facilities. Negligent planning can result in serious injuries and deaths.',
      keyPoints: [
        'Crowd crush injuries',
        'Stage and structure collapses',
        'Inadequate security',
        'Poor crowd control',
        'Alcohol-related incidents',
        'Venue safety violations'
      ],
      additionalInfo: 'Event organizers and venues must meet safety standards and obtain proper permits and insurance coverage.',
      callToAction: 'Injured at Concert or Event?'
    },
    'retail-store-accidents': {
      icon: '🛒',
      title: 'Retail Store Accident Lawyers',
      subtitle: 'Commercial establishments must maintain safe conditions for customers',
      description: 'Retail stores have a duty to maintain safe conditions for customers, including proper lighting, clear aisles, and secure merchandise displays.',
      keyPoints: [
        'Slip and fall accidents',
        'Falling merchandise',
        'Inadequate lighting',
        'Wet floor incidents',
        'Security failures',
        'Parking lot accidents'
      ],
      additionalInfo: 'Retail stores must regularly inspect premises, fix dangerous conditions, and provide adequate warnings to customers.',
      callToAction: 'Injured at Retail Store?'
    },
    'parking-lot-accidents': {
      icon: '🅿️',
      title: 'Parking Lot Accident Lawyers',
      subtitle: 'Vehicle collisions and security failures in parking facilities',
      description: 'Parking lot owners must maintain safe conditions including adequate lighting, security, and proper traffic control to prevent accidents and crimes.',
      keyPoints: [
        'Vehicle collisions',
        'Pedestrian accidents',
        'Inadequate lighting',
        'Security failures',
        'Slip and fall incidents',
        'Criminal attacks'
      ],
      additionalInfo: 'Parking lot owners can be liable for accidents caused by poor design, inadequate maintenance, or insufficient security.',
      callToAction: 'Injured in Parking Lot?'
    },
    'elevator-accidents': {
      icon: '🛗',
      title: 'Elevator Accident Lawyers',
      subtitle: 'Mechanical failures and maintenance negligence in vertical transportation',
      description: 'Elevator accidents from mechanical failures, entrapment, and maintenance negligence can cause serious injuries requiring immediate investigation.',
      keyPoints: [
        'Mechanical failures',
        'Elevator entrapment',
        'Falls down shafts',
        'Door malfunctions',
        'Maintenance negligence',
        'Inspection violations'
      ],
      additionalInfo: 'Elevators must undergo regular inspections and maintenance to meet safety codes and prevent accidents.',
      callToAction: 'Injured in Elevator Accident?'
    },
    'escalator-injuries': {
      icon: '🔄',
      title: 'Escalator Injury Lawyers',
      subtitle: 'Entrapment injuries and mechanical malfunctions require immediate attention',
      description: 'Escalator injuries including entrapment, falls, and mechanical malfunctions require immediate medical attention and investigation of maintenance records.',
      keyPoints: [
        'Entrapment injuries',
        'Fall accidents',
        'Mechanical malfunctions',
        'Step defects',
        'Handrail failures',
        'Maintenance negligence'
      ],
      additionalInfo: 'Escalators must be properly maintained and inspected to prevent entrapment and mechanical failures.',
      callToAction: 'Injured on Escalator?'
    },
    'fire-accidents': {
      icon: '🔥',
      title: 'Fire Accident Lawyers',
      subtitle: 'Building fires and explosions from negligent fire safety maintenance',
      description: 'Fire accidents from electrical failures, gas explosions, and negligent fire safety maintenance can cause devastating injuries and deaths.',
      keyPoints: [
        'Building fires',
        'Electrical failures',
        'Gas explosions',
        'Negligent fire safety',
        'Defective fire equipment',
        'Code violations'
      ],
      additionalInfo: 'Building owners must maintain fire safety systems and comply with fire codes to protect occupants.',
      callToAction: 'Injured in Fire Accident?'
    }
  };

  const practiceArea = practiceAreaData[slug];

  if (!practiceArea) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
          <p className="text-muted-foreground mb-8">
            We're still building content for this practice area. Please contact us directly for assistance.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg">
            Contact Us
          </a>
        </div>
      </div>
    );
  }

  return <PracticeAreaTemplate {...practiceArea} />;
};

export default PracticeAreaRouter;