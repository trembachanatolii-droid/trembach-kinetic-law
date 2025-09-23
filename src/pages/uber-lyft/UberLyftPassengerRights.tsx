import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/uber-lyft-passenger-rights-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const UberLyftPassengerRights: React.FC = () => {
  useScrollRestoration();
  
  const pageData = {
    hero: {
      title: "Your Rights as an Uber & Lyft Passenger",
      subtitle: "Know Your Legal Protections and Entitlements",
      description: "Understanding your rights helps protect you and strengthens your legal claims.",
      backgroundImage: heroImage,
      ctaText: "Learn Your Rights",
      ctaLink: "/uber-lyft/case-evaluation"
    },
    seo: {
      title: "Uber & Lyft Passenger Rights | California Rideshare Legal Protection",
      description: "Know your rights as Uber/Lyft passenger in California. Former defense attorney explains legal protections, safety rights, and compensation entitlements. Free consultation.",
      canonical: "https://www.trembachlawfirm.com/uber-lyft/passenger-rights"
    },
    mainContent: {
      sections: [
        {
          id: "overview",
          title: "Fundamental Passenger Rights",
          content: `
            <p>As an Uber or Lyft passenger, you have significant legal rights that extend beyond what the companies' terms of service suggest. Understanding these rights is crucial for protecting yourself and ensuring proper compensation if something goes wrong.</p>
            
            <h3>Right to Safe Transportation</h3>
            <p>You have the fundamental right to safe transportation. This includes properly maintained vehicles, sober and qualified drivers, and functioning safety equipment. Rideshare companies cannot waive their duty to provide reasonably safe transportation through terms of service agreements.</p>
            
            <h3>Right to Properly Screened Drivers</h3>
            <p>You're entitled to expect that your driver has undergone proper background checks and is qualified to operate a vehicle safely. Companies that fail to adequately screen drivers can be held liable for resulting harm.</p>

            <h3>Right to Accurate Information</h3>
            <p>You have the right to accurate information about your driver, vehicle, and route. False or misleading information about driver identity, vehicle details, or estimated arrival times can create legal liability when harm results.</p>

            <h3>Right to Emergency Assistance</h3>
            <p>Rideshare companies must provide functioning emergency assistance features. When these systems fail during critical moments, companies can be held responsible for the resulting harm.</p>

            <h3>Right to Non-Discrimination</h3>
            <p>You have the right to equal service regardless of race, gender, disability, or other protected characteristics. Discriminatory treatment by drivers or through app algorithms violates California civil rights laws.</p>
          `
        },
        {
          id: "safety-rights",
          title: "Your Safety Rights During Rides",
          content: `
            <h3>Right to Refuse Unsafe Rides</h3>
            <p>You can refuse to ride with drivers who appear intoxicated, in unsafe vehicles, or who make you feel uncomfortable. Companies cannot penalize you for prioritizing your safety.</p>

            <h3>Right to Exit at Any Time</h3>
            <p>You have the right to exit a rideshare vehicle at any time if you feel unsafe. Drivers cannot refuse reasonable requests to stop in safe locations or threaten to strand you.</p>

            <h3>Right to Record for Safety</h3>
            <p>You can record conversations and interactions with drivers for your safety. While laws vary by state, California allows recording when there's a reasonable expectation that it may be needed for safety.</p>

            <h3>Right to Report Safety Concerns</h3>
            <p>You have the right to report safety concerns without retaliation. Companies must investigate legitimate safety complaints and take appropriate action to protect passengers.</p>

            <h3>Right to Emergency Contact</h3>
            <p>You're entitled to functioning emergency contact features and the ability to share ride details with trusted contacts. These safety features must work when needed most.</p>
          `
        },
        {
          id: "compensation-rights",
          title: "Your Rights to Compensation",
          content: `
            <h3>Right to Full Insurance Coverage</h3>
            <p>You're entitled to the full insurance coverage advertised by rideshare companies. This includes up to $1 million in coverage during rides, which companies cannot arbitrarily deny or reduce.</p>

            <h3>Right to Compensation for All Damages</h3>
            <p>Beyond medical bills, you can seek compensation for lost wages, pain and suffering, emotional distress, and other damages resulting from rideshare accidents or incidents.</p>

            <h3>Right to Legal Representation</h3>
            <p>You have the right to hire an attorney to represent your interests. Companies cannot prevent you from seeking legal counsel or require you to handle claims without representation.</p>

            <h3>Right to Fair Settlement</h3>
            <p>You're entitled to fair settlement offers based on the actual value of your claim. Companies cannot pressure you into accepting inadequate settlements through deceptive tactics.</p>

            <h3>Right to Trial by Jury</h3>
            <p>Despite arbitration clauses in terms of service, you may still have the right to trial by jury for certain types of claims, particularly those involving personal injury or civil rights violations.</p>
          `
        }
      ]
    },
    faqData: [
      {
        question: "Can Uber or Lyft force me to accept an unsafe ride?",
        answer: "No, you have the absolute right to refuse any ride that feels unsafe. This includes intoxicated drivers, unsafe vehicles, or situations that make you uncomfortable. Companies cannot penalize you for prioritizing your safety."
      },
      {
        question: "What should I do if a driver discriminates against me?",
        answer: "Document the discrimination by saving messages, taking screenshots, and noting details. Report it to both the company and California civil rights authorities. You may have claims under state and federal anti-discrimination laws."
      },
      {
        question: "Can I record my rideshare driver for safety?",
        answer: "In California, you can record conversations when you reasonably believe it may be necessary for safety. However, it's best to inform the driver you're recording to avoid confrontation."
      },
      {
        question: "What if the rideshare company tries to blame me for an accident?",
        answer: "Companies often try to shift blame to passengers to avoid liability. As a passenger, you're rarely at fault unless you physically interfered with driving. We fight these blame-shifting tactics aggressively."
      },
      {
        question: "Do the terms of service waive all my rights as a passenger?",
        answer: "No, terms of service cannot waive your fundamental rights to safety and fair treatment. Many provisions in these agreements are unenforceable, particularly those related to personal injury claims and civil rights violations."
      }
    ],
    linkedPages: [
      {
        title: "Free Case Evaluation",
        description: "Get your passenger rights case reviewed",
        link: "/uber-lyft/case-evaluation",
        icon: "Scale"
      },
      {
        title: "App Safety Issues",
        description: "Problems with safety features",
        link: "/uber-lyft/app-safety",
        icon: "Shield"
      },
      {
        title: "Legal Guidance",
        description: "Understand your legal options",
        link: "/uber-lyft/legal-guidance",
        icon: "FileText"
      }
    ]
  };

  return (
    <>
      <GoBack />
      <ComprehensivePracticeAreaTemplate {...pageData}>{null}</ComprehensivePracticeAreaTemplate>
    </>
  );
};

export default UberLyftPassengerRights;