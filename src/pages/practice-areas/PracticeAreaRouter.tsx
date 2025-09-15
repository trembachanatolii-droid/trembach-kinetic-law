import React from 'react';
import { useLocation } from 'react-router-dom';
import PracticeAreaTemplate from '@/components/PracticeAreaTemplate';

const PracticeAreaRouter = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || '';

  // Map of practice area slugs to their content
  const practiceAreaData: { [key: string]: any } = {
    'mesothelioma-asbestos': {
      icon: '🏭',
      title: 'Mesothelioma & Asbestos',
      subtitle: 'Comprehensive legal support for asbestos exposure victims',
      description: 'We provide comprehensive legal representation for individuals diagnosed with mesothelioma, lung cancer, and other asbestos-related diseases. Our team understands the complex medical, industrial, and legal aspects of asbestos exposure cases with specialized expertise in evidence development, expert testimony, and settlement strategy.',
      keyPoints: [
        'Workplace asbestos exposure claims',
        'Secondary exposure cases for family members',
        'Product liability against manufacturers',
        'Wrongful death claims for families',
        'Asbestos trust fund claims',
        'Veterans asbestos exposure cases'
      ],
      additionalInfo: 'Asbestos exposure cases require immediate attention due to statute of limitations. Our experienced attorneys handle all aspects from evidence development to expert testimony, ensuring maximum compensation for medical expenses, lost wages, and pain and suffering. We maintain deadline redundancy for statutes and provide secure storage with least-privilege access patterns.',
      callToAction: 'Get Expert Legal Help for Your Asbestos Case'
    },
    'silicosis-injuries': {
      icon: '⛏️',
      title: 'Silicosis Injuries',
      subtitle: 'Legal advocacy for silica dust exposure victims',
      description: 'Silicosis is a serious lung disease caused by inhaling crystalline silica dust. We represent workers in construction, mining, and manufacturing who have developed this preventable occupational disease with comprehensive workflow management and quality controls.',
      keyPoints: [
        'Construction worker silica exposure',
        'Mining industry silicosis cases',
        'Foundry and manufacturing exposure',
        'Progressive massive fibrosis claims',
        'Workplace safety violations',
        'Compensation for medical treatment'
      ],
      additionalInfo: 'Silicosis can develop years after exposure and is often progressive. Early legal intervention is crucial to preserve evidence and protect your rights against employers and equipment manufacturers who failed to provide adequate protection. We provide measurable checkpoints to ensure consistent delivery and defensible documentation.',
      callToAction: 'Protect Your Rights in Silicosis Cases'
    },
    'talc-baby-powder-cancer': {
      icon: '🍼',
      title: 'Talc & Baby Powder Cancer',
      subtitle: 'Holding manufacturers accountable for cancer-causing products',
      description: 'We represent individuals who developed ovarian cancer, mesothelioma, or other cancers from regular use of talc-based products. These cases involve product liability claims against major manufacturers with extensive evidence development and expert testimony requirements.',
      keyPoints: [
        'Ovarian cancer from talc use',
        'Mesothelioma from asbestos-contaminated talc',
        'Failure to warn consumers',
        'Defective product design claims',
        'Corporate cover-up evidence',
        'Mass tort litigation participation'
      ],
      additionalInfo: 'Scientific evidence links talc use to serious cancers. Manufacturers knew of these risks but failed to warn consumers. We pursue compensation for medical expenses, lost income, and the devastating impact of preventable cancers through comprehensive liability theory and damages modeling.',
      callToAction: 'Seek Justice for Talc-Related Cancer'
    },
    'car-accidents': {
      icon: '🚗',
      title: 'Car Accidents',
      subtitle: 'Comprehensive representation for motor vehicle collisions',
      description: 'Our car accident attorneys handle all types of motor vehicle collisions, from minor fender-benders to catastrophic crashes. We fight to ensure you receive full compensation for your injuries and damages with systematic evidence development and negotiation strategy.',
      keyPoints: [
        'Rear-end collision cases',
        'Intersection accidents',
        'Head-on collision claims',
        'Multi-vehicle accidents',
        'Uninsured motorist claims',
        'Hit-and-run accidents'
      ],
      additionalInfo: 'California follows pure comparative negligence laws, meaning you can recover damages even if partially at fault. We handle all aspects including evidence gathering, medical documentation, insurance negotiations, and trial representation with documented workflow and performance metrics.',
      callToAction: 'Get Expert Help for Your Car Accident Case'
    },
    'truck-18-wheeler': {
      icon: '🚛',
      title: 'Truck & 18-Wheeler Accidents',
      subtitle: 'Specialized representation for commercial vehicle crashes',
      description: 'Truck accidents involve complex federal regulations, multiple potentially liable parties, and catastrophic injuries. Our specialized team has the expertise to handle these challenging cases with comprehensive evidence standards and expert domain knowledge.',
      keyPoints: [
        'Federal trucking regulation violations',
        'Driver fatigue and hours of service violations',
        'Improper loading and cargo securement',
        'Trucking company negligence',
        'Vehicle maintenance failures',
        'Catastrophic injury claims'
      ],
      additionalInfo: 'Truck accident cases require immediate action to preserve electronic logging data, maintenance records, and other crucial evidence. We investigate all aspects including driver qualifications, company policies, and vehicle conditions with systematic workflow management and quality controls.',
      callToAction: 'Get Specialized Help for Truck Accident Cases'
    },
    'motorcycle-accidents': {
      icon: '🏍️',
      title: 'Motorcycle Accidents',
      subtitle: 'Protecting the rights of injured motorcyclists',
      description: 'Motorcycle accidents often result in severe injuries due to the lack of protection. We fight against bias and ensure motorcyclists receive fair compensation for their injuries with specialized expertise in reconstruction and human factors analysis.',
      keyPoints: [
        'Visibility and awareness accidents',
        'Lane splitting incidents',
        'Road hazard cases',
        'Defective motorcycle parts',
        'Insurance bias against motorcyclists',
        'Severe injury and trauma cases'
      ],
      additionalInfo: 'Motorcyclists face unique challenges in personal injury claims, including bias from insurance companies and juries. We work with accident reconstruction experts and medical professionals to build compelling cases with comprehensive evidence development and expert testimony.',
      callToAction: 'Defend Your Rights as an Injured Motorcyclist'
    },
    'pedestrian-accidents': {
      icon: '🚶',
      title: 'Pedestrian Accidents',
      subtitle: 'Justice for vulnerable road users',
      description: 'Pedestrians have the right to safe passage. We represent pedestrians injured in crosswalks, on sidewalks, and in parking lots, holding negligent drivers and property owners accountable with systematic liability theory development.',
      keyPoints: [
        'Crosswalk accident cases',
        'Sidewalk and parking lot incidents',
        'Distracted driving accidents',
        'Poor visibility conditions',
        'Municipal liability for unsafe conditions',
        'Catastrophic injury representation'
      ],
      additionalInfo: 'Pedestrian accidents often involve severe injuries due to the vulnerability of those on foot. We investigate all factors including driver behavior, road conditions, lighting, and municipal responsibility for safe infrastructure with comprehensive evidence documentation standards.',
      callToAction: 'Protect Pedestrian Rights and Safety'
    },
    'bicycle-accidents': {
      icon: '🚲',
      title: 'Bicycle Accidents',
      subtitle: 'Advocating for cyclist safety and rights',
      description: 'Cyclists deserve safe roads and fair treatment. We represent bicyclists injured by negligent drivers, dangerous road conditions, or defective bicycle equipment with specialized knowledge of cycling infrastructure and traffic laws.',
      keyPoints: [
        'Vehicle vs. bicycle collisions',
        'Bike lane and path accidents',
        'Door zone incidents',
        'Road design defects',
        'Bicycle equipment failures',
        'Serious injury and trauma cases'
      ],
      additionalInfo: 'Bicycle accident cases require understanding of traffic laws, cycling infrastructure, and the unique vulnerabilities cyclists face. We work to overcome bias and secure fair compensation for injured cyclists through comprehensive case team coordination and expert testimony.',
      callToAction: 'Stand Up for Cyclist Rights and Safety'
    },
    'premises-liability': {
      icon: '🏢',
      title: 'Premises Liability',
      subtitle: 'Holding property owners accountable for unsafe conditions',
      description: 'Property owners have a duty to maintain safe conditions for visitors. We represent individuals injured due to dangerous property conditions, inadequate security, or negligent maintenance with systematic investigation protocols.',
      keyPoints: [
        'Slip and fall accidents',
        'Inadequate lighting cases',
        'Security negligence claims',
        'Swimming pool accidents',
        'Structural defects and failures',
        'Toxic exposure on property'
      ],
      additionalInfo: 'Premises liability cases require proving the property owner knew or should have known about the dangerous condition. We investigate maintenance records, prior incidents, and safety protocols to build strong cases with comprehensive evidence development and documentation standards.',
      callToAction: 'Hold Property Owners Accountable'
    },
    'dog-bites': {
      icon: '🐕',
      title: 'Dog Bites',
      subtitle: 'Protecting victims of animal attacks',
      description: 'California has strict liability laws for dog bites. We represent victims of dog attacks, pursuing compensation for medical treatment, scarring, trauma, and other damages with specialized understanding of liability frameworks.',
      keyPoints: [
        'Strict liability dog bite claims',
        'Scarring and disfigurement',
        'Psychological trauma cases',
        'Children\'s safety and protection',
        'Homeowner and renter insurance claims',
        'Dangerous dog designation proceedings'
      ],
      additionalInfo: 'Dog bite cases involve both immediate medical needs and long-term consequences including scarring, infections, and psychological trauma. We ensure comprehensive compensation for all aspects of recovery with systematic damages modeling and expert testimony.',
      callToAction: 'Get Help for Dog Bite Injuries'
    },
    'medical-malpractice': {
      icon: '⚕️',
      title: 'Medical Malpractice',
      subtitle: 'Holding healthcare providers accountable',
      description: 'When medical professionals fail to meet the standard of care, patients suffer. We represent victims of medical negligence, surgical errors, misdiagnosis, and other forms of malpractice with specialized expertise in healthcare standards.',
      keyPoints: [
        'Surgical errors and complications',
        'Misdiagnosis and delayed diagnosis',
        'Medication errors',
        'Birth injury cases',
        'Hospital negligence',
        'Wrongful death from malpractice'
      ],
      additionalInfo: 'Medical malpractice cases require extensive medical review and expert testimony. California has specific procedural requirements and damage caps that our experienced team navigates effectively with comprehensive workflow management and compliance protocols.',
      callToAction: 'Seek Justice for Medical Negligence'
    },
    'wrongful-death': {
      icon: '💔',
      title: 'Wrongful Death',
      subtitle: 'Compassionate representation for grieving families',
      description: 'When negligence causes the death of a loved one, surviving family members may have legal rights. We provide compassionate representation to help families seek justice and financial security with sensitive case management.',
      keyPoints: [
        'Accident-related wrongful death',
        'Medical malpractice fatalities',
        'Workplace death claims',
        'Product liability fatalities',
        'Surviving family member rights',
        'Estate and probate coordination'
      ],
      additionalInfo: 'Wrongful death cases involve complex legal and emotional challenges. We handle all legal aspects while providing compassionate support, ensuring families can focus on healing while we pursue justice through comprehensive evidence development and expert testimony.',
      callToAction: 'Compassionate Legal Support for Families'
    },
    'product-liability': {
      icon: '📦',
      title: 'Product Liability',
      subtitle: 'Holding manufacturers accountable for defective products',
      description: 'Consumers have the right to safe products. We represent individuals injured by defective products, pursuing claims against manufacturers, designers, and distributors with specialized knowledge of safety standards and regulatory compliance.',
      keyPoints: [
        'Defective product design',
        'Manufacturing defects',
        'Failure to warn consumers',
        'Automotive defects',
        'Medical device failures',
        'Consumer product safety'
      ],
      additionalInfo: 'Product liability cases often involve complex technical issues and corporate responsibility. We work with engineers, safety experts, and industry professionals to prove defects and negligence through comprehensive evidence development and expert testimony.',
      callToAction: 'Hold Manufacturers Accountable'
    },
    'construction-accidents': {
      icon: '🚧',
      title: 'Construction Accidents',
      subtitle: 'Protecting construction workers and their families',
      description: 'Construction sites present numerous hazards. We represent injured workers and their families, pursuing claims for workplace accidents, safety violations, and third-party negligence with specialized knowledge of OSHA regulations.',
      keyPoints: [
        'Fall protection violations',
        'Equipment and machinery accidents',
        'Electrocution incidents',
        'Scaffolding collapses',
        'Third-party liability claims',
        'Catastrophic injury cases'
      ],
      additionalInfo: 'Construction accidents often involve workers\' compensation claims and third-party liability. We coordinate all aspects to maximize compensation while protecting workers\' rights and benefits through comprehensive case team coordination and expert testimony.',
      callToAction: 'Protect Construction Worker Rights'
    },
    'brain-injuries': {
      icon: '🧠',
      title: 'Brain Injuries',
      subtitle: 'Comprehensive advocacy for traumatic brain injury victims',
      description: 'Traumatic brain injuries can have lifelong consequences. We represent TBI victims and their families, ensuring comprehensive compensation for medical care, rehabilitation, and life changes with specialized medical expertise.',
      keyPoints: [
        'Traumatic brain injury cases',
        'Concussion and mild TBI',
        'Cognitive and behavioral changes',
        'Long-term care needs',
        'Life care planning',
        'Family impact and support'
      ],
      additionalInfo: 'Brain injury cases require specialized medical and legal expertise. We work with neurologists, neuropsychologists, and life care planners to document all current and future needs through comprehensive damages modeling and expert testimony.',
      callToAction: 'Get Specialized Help for Brain Injuries'
    },
    'spinal-cord-injuries': {
      icon: '🦴',
      title: 'Spinal Cord Injuries',
      subtitle: 'Supporting those with life-changing spinal injuries',
      description: 'Spinal cord injuries profoundly impact victims and families. We provide comprehensive legal representation to secure the resources needed for medical care, equipment, and lifetime support with specialized life care planning.',
      keyPoints: [
        'Complete and incomplete spinal injuries',
        'Paralysis and mobility impairment',
        'Medical equipment and modifications',
        'Long-term care coordination',
        'Vocational rehabilitation',
        'Family support and adaptation'
      ],
      additionalInfo: 'Spinal cord injury cases involve substantial medical costs and life-long care needs. We fight for maximum compensation to provide security and the best possible quality of life through comprehensive damages modeling and expert testimony.',
      callToAction: 'Secure Your Future After Spinal Injury'
    },
    'burn-injuries': {
      icon: '🔥',
      title: 'Burn Injuries',
      subtitle: 'Comprehensive support for burn injury victims',
      description: 'Burn injuries cause both physical and emotional trauma. We represent burn victims, pursuing compensation for medical treatment, reconstruction, scarring, and pain and suffering with specialized medical expertise.',
      keyPoints: [
        'Severe burn injury cases',
        'Chemical and electrical burns',
        'Scarring and disfigurement',
        'Reconstruction surgery needs',
        'Psychological trauma',
        'Long-term medical care'
      ],
      additionalInfo: 'Burn injury cases require immediate action and ongoing medical expertise. We coordinate with burn specialists and plastic surgeons to ensure comprehensive treatment and fair compensation through systematic evidence development and expert testimony.',
      callToAction: 'Get Expert Help for Burn Injuries'
    },
    'amputation': {
      icon: '🦿',
      title: 'Amputation',
      subtitle: 'Supporting amputees and their families',
      description: 'Traumatic amputations change lives forever. We represent amputees, securing compensation for prosthetics, rehabilitation, life modifications, and the profound impact on daily living with specialized life care planning.',
      keyPoints: [
        'Traumatic amputation cases',
        'Prosthetic device needs',
        'Mobility and accessibility modifications',
        'Vocational rehabilitation',
        'Psychological support and counseling',
        'Lifetime medical care'
      ],
      additionalInfo: 'Amputation cases involve immediate and long-term medical needs, including prosthetics, physical therapy, and home modifications. We ensure comprehensive compensation for all aspects of recovery through systematic damages modeling and expert testimony.',
      callToAction: 'Comprehensive Support for Amputees'
    },
    'workplace-injuries': {
      icon: '🏭',
      title: 'Workplace Injuries',
      subtitle: 'Protecting injured workers and their rights',
      description: 'Workplace injuries can occur in any industry. We represent injured workers, navigating workers\' compensation claims and pursuing third-party liability when applicable with comprehensive understanding of occupational safety regulations.',
      keyPoints: [
        'Workers\' compensation claims',
        'Third-party liability cases',
        'Repetitive stress injuries',
        'Chemical exposure incidents',
        'Industrial accidents',
        'Return-to-work issues'
      ],
      additionalInfo: 'Workplace injury cases often involve both workers\' compensation benefits and potential third-party claims. We ensure workers receive all available compensation and benefits through comprehensive case team coordination and expert testimony.',
      callToAction: 'Protect Your Workplace Rights'
    },
    'medical-devices': {
      icon: '🩻',
      title: 'Medical Devices',
      subtitle: 'Holding device manufacturers accountable',
      description: 'Defective medical devices can cause serious harm. We represent patients injured by faulty implants, devices, and medical equipment, pursuing claims against manufacturers with specialized understanding of FDA regulations.',
      keyPoints: [
        'Defective implant cases',
        'Device malfunction injuries',
        'Inadequate testing and approval',
        'Failure to warn patients',
        'Mass tort device litigation',
        'FDA recall cases'
      ],
      additionalInfo: 'Medical device cases often involve complex regulatory and scientific issues. We work with medical experts and engineers to prove device defects and manufacturer liability through comprehensive evidence development and expert testimony.',
      callToAction: 'Hold Device Manufacturers Accountable'
    },
    'pharmaceutical': {
      icon: '💊',
      title: 'Pharmaceutical Litigation',
      subtitle: 'Justice for dangerous drug victims',
      description: 'Dangerous and defective drugs harm patients who trusted pharmaceutical companies. We represent victims of drug side effects, pursuing accountability and compensation with specialized knowledge of FDA regulations and drug safety.',
      keyPoints: [
        'Dangerous drug side effects',
        'Inadequate testing and warnings',
        'FDA approval violations',
        'Off-label marketing issues',
        'Class action drug litigation',
        'Pharmaceutical company negligence'
      ],
      additionalInfo: 'Pharmaceutical cases involve complex regulatory, scientific, and corporate accountability issues. We fight against well-funded companies to protect patient rights and safety through comprehensive evidence development and expert testimony.',
      callToAction: 'Seek Justice for Dangerous Drug Injuries'
    },
    'mass-torts': {
      icon: '⚖️',
      title: 'Mass Torts',
      subtitle: 'Unified representation for widespread harm',
      description: 'When products or actions harm many people, mass tort litigation provides a path to justice. We represent individuals in large-scale litigation against corporations with specialized expertise in multi-district litigation.',
      keyPoints: [
        'Multi-district litigation participation',
        'Corporate accountability cases',
        'Environmental contamination',
        'Consumer product defects',
        'Pharmaceutical mass torts',
        'Individual case advocacy'
      ],
      additionalInfo: 'Mass tort cases allow individual victims to benefit from shared resources and coordinated litigation while maintaining their individual claims and compensation rights through comprehensive case team coordination and expert testimony.',
      callToAction: 'Join Forces for Corporate Accountability'
    },
    'class-actions': {
      icon: '👥',
      title: 'Class Actions',
      subtitle: 'Collective action for common injuries',
      description: 'Class action lawsuits allow groups of similarly injured people to seek justice together. We represent classes of plaintiffs against corporations and institutions with specialized expertise in class certification and management.',
      keyPoints: [
        'Consumer protection cases',
        'Securities fraud litigation',
        'Employment class actions',
        'Environmental damage claims',
        'Civil rights violations',
        'Corporate misconduct cases'
      ],
      additionalInfo: 'Class action litigation provides efficient resolution for cases where many people suffered similar harm. We ensure fair representation and maximum recovery for all class members through comprehensive case team coordination and expert testimony.',
      callToAction: 'Unite for Collective Justice'
    },
    'environmental-toxic': {
      icon: '🌍',
      title: 'Environmental & Toxic Exposure',
      subtitle: 'Protecting communities from environmental harm',
      description: 'Environmental contamination and toxic exposure threaten health and communities. We represent individuals and groups harmed by pollution, chemical exposure, and environmental negligence with specialized expertise in environmental science.',
      keyPoints: [
        'Chemical contamination cases',
        'Groundwater pollution',
        'Air quality violations',
        'Industrial waste exposure',
        'Community health impacts',
        'Environmental justice advocacy'
      ],
      additionalInfo: 'Environmental cases require extensive scientific expertise and community coordination. We work with environmental scientists and health experts to prove causation and seek remediation through comprehensive evidence development and expert testimony.',
      callToAction: 'Fight for Environmental Justice'
    },
    'camp-lejeune': {
      icon: '🏛️',
      title: 'Camp Lejeune Water Contamination',
      subtitle: 'Justice for military families affected by toxic water',
      description: 'Camp Lejeune\'s contaminated water harmed thousands of military personnel and families. We represent victims seeking compensation under the Camp Lejeune Justice Act with specialized knowledge of military exposure cases.',
      keyPoints: [
        'Military personnel exposure claims',
        'Family member contamination',
        'Multiple cancer types',
        'Birth defects and disorders',
        'Federal compensation claims',
        'Veterans Administration coordination'
      ],
      additionalInfo: 'The Camp Lejeune Justice Act provides new opportunities for compensation. We help veterans and families navigate federal claims while coordinating with VA benefits through comprehensive case team coordination and expert testimony.',
      callToAction: 'Get Help for Camp Lejeune Exposure'
    },
    'pfas-exposure': {
      icon: '🧪',
      title: 'PFAS Exposure',
      subtitle: 'Fighting forever chemicals contamination',
      description: 'PFAS chemicals contaminate water supplies and cause serious health problems. We represent communities and individuals harmed by these "forever chemicals" with specialized expertise in environmental contamination.',
      keyPoints: [
        'Water contamination cases',
        'Industrial PFAS exposure',
        'Cancer and health effects',
        'Community-wide contamination',
        'Corporate liability claims',
        'Environmental remediation'
      ],
      additionalInfo: 'PFAS cases involve cutting-edge science and corporate accountability. We work with leading experts to prove exposure, causation, and seek both compensation and environmental cleanup through comprehensive evidence development and expert testimony.',
      callToAction: 'Take Action Against PFAS Contamination'
    },
    'benzene-exposure': {
      icon: '⛽',
      title: 'Benzene Exposure',
      subtitle: 'Accountability for carcinogenic chemical exposure',
      description: 'Benzene exposure causes leukemia and other blood cancers. We represent workers and community members exposed to this known carcinogen through industrial activities with specialized expertise in occupational health.',
      keyPoints: [
        'Occupational benzene exposure',
        'Petroleum industry cases',
        'Refinery worker claims',
        'Leukemia and blood cancers',
        'Environmental contamination',
        'Workplace safety violations'
      ],
      additionalInfo: 'Benzene exposure cases require proving the source of exposure and linking it to blood cancers. We work with industrial hygienists and oncologists to build strong scientific cases through comprehensive evidence development and expert testimony.',
      callToAction: 'Seek Justice for Benzene-Related Cancers'
    },
    'opioid-litigation': {
      icon: '💉',
      title: 'Opioid Litigation',
      subtitle: 'Accountability for the opioid epidemic',
      description: 'The opioid epidemic devastated communities through pharmaceutical company deception. We represent individuals, families, and communities seeking accountability and resources for recovery with specialized understanding of pharmaceutical liability.',
      keyPoints: [
        'Addiction and dependency cases',
        'Pharmaceutical company fraud',
        'Doctor and pharmacy liability',
        'Community impact claims',
        'Treatment and recovery costs',
        'Family devastation and loss'
      ],
      additionalInfo: 'Opioid cases involve complex corporate conduct, medical evidence, and community impacts. We fight for both individual compensation and community resources for addiction treatment through comprehensive evidence development and expert testimony.',
      callToAction: 'Hold Opioid Companies Accountable'
    },
    'sexual-abuse': {
      icon: '🛡️',
      title: 'Sexual Abuse',
      subtitle: 'Compassionate advocacy for survivors',
      description: 'Sexual abuse survivors deserve justice and healing. We provide sensitive, confidential representation to help survivors hold perpetrators and institutions accountable with trauma-informed legal practices.',
      keyPoints: [
        'Childhood sexual abuse cases',
        'Institutional abuse claims',
        'Workplace sexual assault',
        'Therapy and counseling costs',
        'Confidential proceedings',
        'Survivor advocacy and support'
      ],
      additionalInfo: 'Sexual abuse cases require sensitivity, confidentiality, and specialized expertise. We provide compassionate representation while aggressively pursuing justice and accountability through comprehensive case team coordination and expert testimony.',
      callToAction: 'Confidential Support for Survivors'
    },
    'clergy-abuse': {
      icon: '⛪',
      title: 'Clergy Abuse',
      subtitle: 'Justice for religious institution abuse survivors',
      description: 'Religious institutions must be held accountable for abuse. We represent survivors of clergy abuse, pursuing justice against both perpetrators and enabling institutions with specialized understanding of institutional liability.',
      keyPoints: [
        'Catholic Church abuse cases',
        'Protestant denomination claims',
        'Institutional cover-up liability',
        'Survivor compensation funds',
        'Confidential case handling',
        'Trauma-informed representation'
      ],
      additionalInfo: 'Clergy abuse cases involve both individual perpetrators and institutional responsibility. We navigate complex religious organization structures to ensure accountability through comprehensive evidence development and expert testimony.',
      callToAction: 'Seek Justice Against Religious Institutions'
    },
    'elder-abuse': {
      icon: '👴',
      title: 'Elder Abuse',
      subtitle: 'Protecting vulnerable seniors from harm',
      description: 'Elder abuse in nursing homes and care facilities is unacceptable. We represent elderly victims and their families, pursuing justice and improved care standards with specialized knowledge of elder care regulations.',
      keyPoints: [
        'Nursing home neglect',
        'Physical and emotional abuse',
        'Financial exploitation',
        'Medication errors',
        'Inadequate staffing cases',
        'Dignity and quality of life'
      ],
      additionalInfo: 'Elder abuse cases require immediate intervention and specialized knowledge of care standards. We fight for accountability and improved conditions for vulnerable seniors through comprehensive evidence development and expert testimony.',
      callToAction: 'Protect Elderly Loved Ones'
    },
    'birth-injuries': {
      icon: '👶',
      title: 'Birth Injuries',
      subtitle: 'Advocacy for birth trauma and medical negligence',
      description: 'Birth injuries devastate families. We represent children and families affected by preventable birth trauma, seeking compensation for lifelong care and support with specialized medical expertise.',
      keyPoints: [
        'Cerebral palsy cases',
        'Oxygen deprivation injuries',
        'Delivery complications',
        'Prenatal care negligence',
        'Lifetime care planning',
        'Family support needs'
      ],
      additionalInfo: 'Birth injury cases require extensive medical expertise and life care planning. We ensure families receive resources for specialized medical care, therapy, and educational support through comprehensive damages modeling and expert testimony.',
      callToAction: 'Support for Birth Injury Families'
    },
    'uber-lyft-accidents': {
      icon: '🚕',
      title: 'Uber/Lyft Accidents',
      subtitle: 'Navigation rideshare accident complexities',
      description: 'Rideshare accidents involve complex insurance and liability issues. We represent passengers, drivers, and other parties injured in Uber, Lyft, and similar service accidents with specialized knowledge of commercial transportation law.',
      keyPoints: [
        'Passenger injury claims',
        'Driver liability issues',
        'Insurance coverage gaps',
        'App status determinations',
        'Third-party vehicle accidents',
        'Commercial vehicle regulations'
      ],
      additionalInfo: 'Rideshare accident cases involve multiple insurance policies and coverage issues depending on the driver\'s app status. We navigate these complexities to ensure proper compensation through comprehensive evidence development and expert testimony.',
      callToAction: 'Navigate Rideshare Accident Claims'
    },
    'bus-accidents': {
      icon: '🚌',
      title: 'Bus Accidents',
      subtitle: 'Representing public transit accident victims',
      description: 'Bus accidents can cause serious injuries to passengers and other road users. We represent victims of city bus, school bus, and private charter bus accidents with specialized knowledge of public transportation regulations.',
      keyPoints: [
        'Public transit accidents',
        'School bus safety cases',
        'Charter bus incidents',
        'Municipal liability claims',
        'Passenger safety violations',
        'Commercial vehicle standards'
      ],
      additionalInfo: 'Bus accident cases may involve government entities, requiring compliance with special claim procedures and notice requirements. We handle all procedural complexities through comprehensive case team coordination and expert testimony.',
      callToAction: 'Get Help for Bus Accident Cases'
    },
    'aviation-accidents': {
      icon: '✈️',
      title: 'Aviation Accidents',
      subtitle: 'Specialized representation for aircraft incidents',
      description: 'Aviation accidents require specialized legal and technical expertise. We represent victims and families in commercial and private aircraft accidents with comprehensive understanding of federal aviation regulations.',
      keyPoints: [
        'Commercial airline accidents',
        'Private aircraft crashes',
        'Pilot error cases',
        'Aircraft maintenance failures',
        'Federal aviation regulations',
        'International aviation law'
      ],
      additionalInfo: 'Aviation cases involve federal regulations, international treaties, and complex technical issues. We work with aviation experts and investigators to determine causation and liability through comprehensive evidence development and expert testimony.',
      callToAction: 'Specialized Aviation Accident Representation'
    },
    'maritime-accidents': {
      icon: '⚓',
      title: 'Maritime Accidents',
      subtitle: 'Admiralty and maritime injury law',
      description: 'Maritime accidents fall under specialized admiralty law. We represent seamen, passengers, and maritime workers injured in vessel accidents and offshore incidents with comprehensive knowledge of maritime regulations.',
      keyPoints: [
        'Jones Act seaman claims',
        'Longshore worker injuries',
        'Passenger vessel accidents',
        'Offshore drilling incidents',
        'Harbor and port accidents',
        'Commercial fishing injuries'
      ],
      additionalInfo: 'Maritime law provides unique protections and remedies for injured seamen and maritime workers. We navigate federal admiralty law to maximize recovery under applicable statutes through comprehensive evidence development and expert testimony.',
      callToAction: 'Maritime Legal Expertise'
    },
    'swimming-pool': {
      icon: '🏊',
      title: 'Swimming Pool Accidents',
      subtitle: 'Pool safety and drowning prevention advocacy',
      description: 'Swimming pool accidents can cause drowning, near-drowning, and serious injuries. We represent victims and families, holding property owners accountable for pool safety with specialized knowledge of safety regulations.',
      keyPoints: [
        'Drowning and near-drowning cases',
        'Pool safety barrier violations',
        'Supervision negligence',
        'Equipment malfunction injuries',
        'Chemical exposure incidents',
        'Diving accident injuries'
      ],
      additionalInfo: 'Pool accident cases involve premises liability, safety regulations, and supervision standards. We investigate all factors including barriers, equipment, maintenance, and supervision through comprehensive evidence development and expert testimony.',
      callToAction: 'Pool Safety and Drowning Prevention'
    },
    'amusement-parks': {
      icon: '🎢',
      title: 'Amusement Park Accidents',
      subtitle: 'Theme park safety and injury representation',
      description: 'Amusement parks must maintain safe rides and premises. We represent visitors injured on rides, attractions, or park premises due to negligence or equipment failures with specialized knowledge of safety regulations.',
      keyPoints: [
        'Ride malfunction injuries',
        'Mechanical failure accidents',
        'Operator negligence cases',
        'Premises liability claims',
        'Safety inspection violations',
        'Catastrophic injury representation'
      ],
      additionalInfo: 'Amusement park cases involve state safety regulations, inspection records, and equipment maintenance standards. We investigate all aspects of ride safety and operation through comprehensive evidence development and expert testimony.',
      callToAction: 'Theme Park Injury Representation'
    },
    'electrocution': {
      icon: '⚡',
      title: 'Electrocution Injuries',
      subtitle: 'Electrical accident and shock injury cases',
      description: 'Electrical accidents cause severe burns, cardiac issues, and neurological damage. We represent victims of electrocution from defective products, workplace hazards, and utility negligence with specialized expertise in electrical safety.',
      keyPoints: [
        'High-voltage electrical injuries',
        'Workplace electrocution cases',
        'Defective electrical product liability',
        'Utility company negligence',
        'Construction site electrical hazards',
        'Neurological and cardiac damage'
      ],
      additionalInfo: 'Electrocution cases require understanding of electrical systems, safety standards, and complex medical consequences. We work with electrical engineers and medical experts through comprehensive evidence development and expert testimony.',
      callToAction: 'Electrical Injury Legal Support'
    },
    'explosions': {
      icon: '💥',
      title: 'Explosion Injuries',
      subtitle: 'Blast injury and explosion accident representation',
      description: 'Explosions cause devastating injuries and property damage. We represent victims of industrial explosions, gas leaks, chemical explosions, and other blast incidents with specialized expertise in explosion causation.',
      keyPoints: [
        'Industrial explosion cases',
        'Gas explosion incidents',
        'Chemical plant accidents',
        'Fireworks and pyrotechnic injuries',
        'Pipeline explosion claims',
        'Catastrophic burn and trauma injuries'
      ],
      additionalInfo: 'Explosion cases involve complex causation analysis, safety regulations, and catastrophic injuries. We investigate all potential sources of liability and pursue maximum compensation through comprehensive evidence development and expert testimony.',
      callToAction: 'Explosion Injury Legal Help'
    },
    'vision-loss': {
      icon: '👁️',
      title: 'Vision Loss',
      subtitle: 'Advocacy for blindness and visual impairment',
      description: 'Vision loss profoundly impacts daily life and independence. We represent individuals who lost vision due to accidents, medical malpractice, or defective products with specialized understanding of adaptive needs.',
      keyPoints: [
        'Traumatic eye injury cases',
        'Medical malpractice blindness',
        'Chemical exposure vision loss',
        'Defective product eye injuries',
        'Workplace safety violations',
        'Adaptive equipment and training needs'
      ],
      additionalInfo: 'Vision loss cases require proving causation and documenting life-long impacts on independence, employment, and quality of life. We ensure comprehensive compensation for adaptation needs through systematic damages modeling and expert testimony.',
      callToAction: 'Vision Loss Legal Support'
    },
    'hearing-loss': {
      icon: '👂',
      title: 'Hearing Loss',
      subtitle: 'Representation for hearing impairment and deafness',
      description: 'Hearing loss from noise exposure, accidents, or medical negligence affects communication and quality of life. We represent individuals seeking compensation for hearing damage with specialized audiological expertise.',
      keyPoints: [
        'Occupational noise exposure',
        'Traumatic hearing loss',
        'Medical malpractice deafness',
        'Product liability hearing damage',
        'Tinnitus and hearing disorders',
        'Communication assistance needs'
      ],
      additionalInfo: 'Hearing loss cases require audiological evidence and proof of causation. We work with hearing specialists to document the extent of impairment and necessary accommodations through comprehensive evidence development and expert testimony.',
      callToAction: 'Hearing Loss Legal Advocacy'
    },
    'paralysis': {
      icon: '♿',
      title: 'Paralysis',
      subtitle: 'Comprehensive support for paralysis victims',
      description: 'Paralysis from accidents or medical negligence requires lifetime care and adaptation. We fight for maximum compensation to provide security and independence with specialized life care planning expertise.',
      keyPoints: [
        'Spinal cord paralysis cases',
        'Quadriplegia and paraplegia',
        'Medical equipment needs',
        'Home and vehicle modifications',
        'Caregiver and attendant care',
        'Vocational rehabilitation'
      ],
      additionalInfo: 'Paralysis cases involve substantial medical costs and life-care planning. We ensure compensation covers all current and future needs for medical care, equipment, and independence through comprehensive damages modeling and expert testimony.',
      callToAction: 'Paralysis Legal Support and Advocacy'
    },
    'civil-rights': {
      icon: '⚖️',
      title: 'Civil Rights Violations',
      subtitle: 'Protecting constitutional rights and equality',
      description: 'Civil rights violations undermine fundamental freedoms. We represent individuals whose rights were violated by government entities, employers, or institutions with specialized expertise in constitutional law.',
      keyPoints: [
        'Police misconduct cases',
        'Discrimination and harassment',
        'First Amendment violations',
        'Due process violations',
        'Equal protection claims',
        'Institutional civil rights violations'
      ],
      additionalInfo: 'Civil rights cases involve constitutional law, federal statutes, and complex procedural requirements. We fight to vindicate rights and seek both compensation and systemic change through comprehensive evidence development and expert testimony.',
      callToAction: 'Defend Your Constitutional Rights'
    },
    'retail-accidents': {
      icon: '🏪',
      title: 'Retail Store Accidents',
      subtitle: 'Customer safety in commercial establishments',
      description: 'Retail stores must maintain safe conditions for customers. We represent shoppers injured in stores due to hazardous conditions, negligent security, or unsafe practices with specialized premises liability expertise.',
      keyPoints: [
        'Slip and fall in stores',
        'Falling merchandise injuries',
        'Inadequate store security',
        'Parking lot accidents',
        'Shopping cart incidents',
        'Store design defects'
      ],
      additionalInfo: 'Retail accident cases require proving the store\'s knowledge of dangerous conditions and failure to remedy them. We investigate incident reports, surveillance footage, and safety policies through comprehensive evidence development and expert testimony.',
      callToAction: 'Retail Store Injury Claims'
    },
    'scaffolding-falls': {
      icon: '🏗️',
      title: 'Scaffolding Falls',
      subtitle: 'Construction fall protection and safety',
      description: 'Scaffolding falls cause serious injuries and deaths in construction. We represent workers injured in scaffolding collapses, falls, and safety violations with specialized knowledge of OSHA regulations and fall protection.',
      keyPoints: [
        'Scaffolding collapse accidents',
        'Fall protection violations',
        'Improper scaffolding construction',
        'Safety equipment failures',
        'OSHA violation cases',
        'Third-party contractor liability'
      ],
      additionalInfo: 'Scaffolding cases involve OSHA regulations, industry safety standards, and complex liability among multiple contractors. We investigate all potentially responsible parties through comprehensive evidence development and expert testimony.',
      callToAction: 'Scaffolding Fall Legal Help'
    },
    'crane-accidents': {
      icon: '🏗️',
      title: 'Crane Accidents',
      subtitle: 'Heavy equipment and crane operation safety',
      description: 'Crane accidents cause catastrophic injuries and deaths. We represent workers and bystanders injured by crane collapses, load drops, and operator negligence with specialized expertise in heavy equipment operations.',
      keyPoints: [
        'Crane collapse incidents',
        'Load drop accidents',
        'Operator certification violations',
        'Equipment maintenance failures',
        'Site safety planning defects',
        'Third-party liability claims'
      ],
      additionalInfo: 'Crane accident cases involve complex federal and state regulations, certification requirements, and multiple potentially liable parties including operators, owners, and contractors through comprehensive evidence development and expert testimony.',
      callToAction: 'Crane Accident Legal Representation'
    },
    'railroad-accidents': {
      icon: '🚂',
      title: 'Railroad Accidents',
      subtitle: 'Federal railroad safety and injury law',
      description: 'Railroad accidents involve federal law and complex liability issues. We represent railroad workers under FELA and crossing accident victims under standard negligence law with specialized knowledge of railroad regulations.',
      keyPoints: [
        'FELA railroad worker claims',
        'Railroad crossing accidents',
        'Train derailment incidents',
        'Equipment failure cases',
        'Railroad safety violations',
        'Pedestrian and vehicle collisions'
      ],
      additionalInfo: 'Railroad cases are governed by federal law including FELA for workers and federal crossing regulations. We have expertise in both railroad worker protection and crossing safety through comprehensive evidence development and expert testimony.',
      callToAction: 'Railroad Accident Legal Expertise'
    },
    'defamation': {
      icon: '📢',
      title: 'Defamation',
      subtitle: 'Protecting reputation from false statements',
      description: 'False statements can damage reputation and livelihood. We represent individuals harmed by defamatory statements, pursuing accountability and reputation restoration with specialized expertise in media law.',
      keyPoints: [
        'Libel and slander cases',
        'Online defamation claims',
        'Professional reputation damage',
        'Business defamation losses',
        'Public figure standards',
        'Retraction and correction demands'
      ],
      additionalInfo: 'Defamation cases require proving false statements, publication, and resulting harm to reputation. We work to restore reputations while seeking appropriate compensation through comprehensive evidence development and expert testimony.',
      callToAction: 'Protect Your Reputation'
    },
    'general-personal-injury': {
      icon: '🏥',
      title: 'General Personal Injury',
      subtitle: 'Comprehensive injury representation',
      description: 'We handle all types of personal injury cases with experienced representation. From minor injuries to catastrophic accidents, we fight for fair compensation with comprehensive legal expertise across all practice areas.',
      keyPoints: [
        'All types of accident cases',
        'Insurance claim advocacy',
        'Medical documentation',
        'Negotiation and settlement',
        'Trial representation',
        'Comprehensive case management'
      ],
      additionalInfo: 'Personal injury law covers a broad range of accidents and injuries. We provide experienced representation regardless of the specific circumstances of your case through comprehensive evidence development, expert testimony, and systematic workflow management.',
      callToAction: 'Complete Personal Injury Representation'
    }
  };

  const practiceArea = practiceAreaData[slug];

  if (!practiceArea) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The practice area you're looking for doesn't exist or has been moved.
          </p>
          <a href="/practice-areas" className="text-primary hover:underline">
            Return to Practice Areas
          </a>
        </div>
      </div>
    );
  }

  return (
    <PracticeAreaTemplate
      icon={practiceArea.icon}
      title={practiceArea.title}
      subtitle={practiceArea.subtitle}
      description={practiceArea.description}
      keyPoints={practiceArea.keyPoints}
      additionalInfo={practiceArea.additionalInfo}
      callToAction={practiceArea.callToAction}
    />
  );
};

export default PracticeAreaRouter;