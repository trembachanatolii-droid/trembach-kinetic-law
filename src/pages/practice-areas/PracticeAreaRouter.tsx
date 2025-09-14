import React from 'react';
import { useLocation } from 'react-router-dom';
import PracticeAreaTemplate from '@/components/PracticeAreaTemplate';

const PracticeAreaRouter = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || '';

  // Map of practice area slugs to their content
  const practiceAreaData: { [key: string]: any } = {
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
      callToAction: 'Bitten by a Dog?'
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
      callToAction: 'Lost a Loved One Due to Negligence?'
    },
    'product-liability': {
      icon: '⚡',
      title: 'Product Liability Lawyers',
      subtitle: 'Strict liability holds manufacturers responsible for injuries from defective products',
      description: 'When defective products cause injuries, manufacturers can be held strictly liable regardless of negligence. This includes design defects, manufacturing defects, and failure to warn.',
      keyPoints: ['Defective medical devices', 'Dangerous pharmaceuticals', 'Automotive defects', 'Consumer product recalls', 'Industrial equipment failures', 'Toxic product exposure'],
      callToAction: 'Injured by a Defective Product?'
    },
    'construction-accidents': {
      icon: '🏗️',
      title: 'Construction Accident Lawyers',
      subtitle: 'Construction sites present numerous hazards requiring investigation beyond workers\' comp',
      description: 'Construction accidents often involve third-party liability beyond workers\' compensation, including equipment manufacturer defects, contractor negligence, and unsafe site conditions.',
      keyPoints: ['Falls from heights', 'Scaffolding collapses', 'Crane accidents', 'Electrical injuries', 'Equipment malfunctions', 'Trench cave-ins'],
      callToAction: 'Injured in Construction Accident?'
    },
    'brain-injuries': {
      icon: '🧠',
      title: 'Brain Injury Lawyers',
      subtitle: 'Traumatic brain injuries cause devastating cognitive, physical, and emotional impairments',
      description: 'TBI cases require extensive medical documentation and lifetime care planning. These injuries often result in permanent disabilities requiring specialized legal expertise.',
      keyPoints: ['Concussions and mild TBI', 'Severe traumatic brain injury', 'Cognitive impairments', 'Memory and speech disorders', 'Personality changes', 'Lifetime care needs'],
      callToAction: 'Suffered a Brain Injury?'
    },
    'spinal-cord-injuries': {
      icon: '🦴',
      title: 'Spinal Cord Injury Lawyers',
      subtitle: 'Spinal cord damage causing paralysis requires extensive lifetime medical care',
      description: 'Spinal cord injuries often result in permanent paralysis and require millions in lifetime medical care, adaptive equipment, and home modifications.',
      keyPoints: ['Paraplegia and quadriplegia', 'Incomplete spinal injuries', 'Adaptive equipment needs', 'Home modifications', 'Vocational rehabilitation', 'Lifetime care costs'],
      callToAction: 'Suffered Spinal Cord Injury?'
    },
    'burn-injuries': {
      icon: '🔥',
      title: 'Burn Injury Lawyers',
      subtitle: 'Severe burns cause excruciating pain, permanent scarring, and psychological trauma',
      description: 'Serious burn injuries require extensive treatment including skin grafts, reconstructive surgery, and psychological support throughout the recovery process.',
      keyPoints: ['Third and fourth-degree burns', 'Chemical burn injuries', 'Electrical burn accidents', 'Explosion injuries', 'Workplace burn accidents', 'Defective product burns'],
      callToAction: 'Suffered Severe Burns?'
    },
    'amputation': {
      icon: '🦾',
      title: 'Amputation Injury Lawyers',
      subtitle: 'Limb loss causes permanent disability requiring prosthetics and rehabilitation',
      description: 'Amputation injuries require extensive rehabilitation, prosthetic devices, and psychological support throughout life, with significant financial implications.',
      keyPoints: ['Traumatic amputations', 'Surgical amputations due to negligence', 'Prosthetic device needs', 'Rehabilitation services', 'Workplace accommodations', 'Phantom pain treatment'],
      callToAction: 'Suffered Amputation Injury?'
    },
    'workplace-injuries': {
      icon: '⚠️',
      title: 'Workplace Injury Lawyers',
      subtitle: 'Third-party claims yield additional recovery for serious workplace injuries',
      description: 'Beyond workers\' compensation, third-party claims against equipment manufacturers and contractors can provide additional compensation for workplace injuries.',
      keyPoints: ['Equipment manufacturer liability', 'Contractor negligence', 'Toxic exposure claims', 'Industrial accidents', 'Construction site injuries', 'Defective safety equipment'],
      callToAction: 'Injured at Work?'
    },
    'medical-devices': {
      icon: '🏥',
      title: 'Medical Device Lawyers',
      subtitle: 'FDA approval doesn\'t guarantee safety of medical devices',
      description: 'Defective medical devices including hip replacements, surgical mesh, and IVC filters can cause serious complications requiring additional surgeries and treatment.',
      keyPoints: ['Hip replacement failures', 'Surgical mesh complications', 'IVC filter problems', 'Pacemaker defects', 'Breast implant injuries', 'Hernia mesh failures'],
      callToAction: 'Injured by Medical Device?'
    },
    'pharmaceutical': {
      icon: '💊',
      title: 'Pharmaceutical Lawyers',
      subtitle: 'Dangerous drugs cause serious adverse reactions when risks are concealed',
      description: 'When pharmaceutical companies conceal risks or provide inadequate warnings, patients can suffer serious adverse reactions from dangerous medications.',
      keyPoints: ['Prescription drug side effects', 'FDA recall medications', 'Cancer-causing drugs', 'Birth defect medications', 'Heart attack and stroke risks', 'Inadequate warnings'],
      callToAction: 'Harmed by Dangerous Medication?'
    },
    'mass-torts': {
      icon: '⚖️',
      title: 'Mass Tort Lawyers',
      subtitle: 'Widespread harm from defective products requires coordinated litigation',
      description: 'Mass tort cases involve widespread harm from defective products or environmental contamination, requiring coordinated legal action against powerful corporate defendants.',
      keyPoints: ['Multi-district litigation', 'Class action lawsuits', 'Product liability mass torts', 'Environmental contamination', 'Pharmaceutical mass torts', 'Corporate negligence'],
      callToAction: 'Part of Mass Tort Case?'
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