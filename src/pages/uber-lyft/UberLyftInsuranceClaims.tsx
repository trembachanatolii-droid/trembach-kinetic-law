import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import useScrollRestoration from '@/hooks/useScrollRestoration';

import heroImage from '@/assets/uber-lyft-insurance-claims-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const UberLyftInsuranceClaims: React.FC = () => {
  useScrollRestoration();
  
  const pageData = {
    hero: {
      title: "Uber & Lyft Insurance Claims Navigation",
      subtitle: "Expert Help with Complex Rideshare Insurance Coverage",
      description: "Navigate the complex three-period insurance system with former defense attorney expertise.",
      backgroundImage: heroImage,
      ctaText: "Get Insurance Help Now",
      ctaLink: "/uber-lyft/case-evaluation"
    },
    seo: {
      title: "Uber & Lyft Insurance Claims Help | California Rideshare Coverage Expert",
      description: "Get expert help navigating Uber/Lyft insurance claims. Former defense attorney knows the three-period system. Free consultation for rideshare coverage disputes.",
      canonical: "https://www.trembachlawfirm.com/uber-lyft/insurance-claims"
    },
    mainContent: {
      sections: [
        {
          id: "overview",
          title: "Understanding Rideshare Insurance Coverage",
          content: `
            <p>Uber and Lyft insurance coverage operates on a complex three-period system that can confuse even experienced insurance professionals. As a former defense attorney who worked for insurance companies, I understand exactly how these policies work and how to maximize your coverage.</p>
            
            <h3>The Three-Period Insurance System</h3>
            <p><strong>Period 1: App On, No Passenger Request</strong> - When drivers have the app turned on but haven't accepted a ride, they have minimal coverage through the rideshare company's contingent liability policy. This typically provides $50,000 per person and $100,000 per accident for liability, plus limited uninsured motorist coverage.</p>
            
            <p><strong>Period 2: En Route to Passenger</strong> - Once a driver accepts a ride request and is traveling to pick up the passenger, higher coverage levels activate. This includes $1 million in liability coverage and uninsured/underinsured motorist coverage.</p>
            
            <p><strong>Period 3: Passenger in Vehicle</strong> - During the actual ride, full $1 million coverage applies for liability, uninsured motorist, and comprehensive/collision coverage with a $2,500 deductible.</p>

            <h3>Common Insurance Coverage Disputes</h3>
            <p>Insurance companies often dispute which period was active during an accident, trying to minimize their liability. They may claim the driver was "offline" or that another insurance policy should be primary. These disputes can leave accident victims without coverage while companies point fingers at each other.</p>

            <h3>Gap Coverage Issues</h3>
            <p>Personal auto insurance policies typically exclude coverage for commercial activities like ridesharing. This creates dangerous coverage gaps that can leave drivers and passengers vulnerable. Many drivers don't understand these exclusions until after an accident occurs.</p>

            <h3>Fighting Insurance Denials</h3>
            <p>Insurance companies use sophisticated tactics to deny or minimize rideshare claims. They may argue the driver was using multiple apps, claim pre-existing vehicle damage, or dispute the timing of when the accident occurred relative to app activity. Having an attorney who understands these tactics is crucial for protecting your rights.</p>
          `
        },
        {
          id: "claim-process",
          title: "The Insurance Claim Process",
          content: `
            <h3>Immediate Steps After Your Accident</h3>
            <p>The first 24-48 hours after your rideshare accident are critical for preserving your insurance claim. Insurance companies begin investigating immediately, and evidence can disappear quickly.</p>

            <h3>Documenting Your Claim</h3>
            <p>Proper documentation includes taking photos of all vehicles, injuries, and the accident scene. Screenshot your ride details from the app before they disappear. Get contact information from all parties and witnesses. Request a copy of the police report.</p>

            <h3>Dealing with Insurance Adjusters</h3>
            <p>Insurance adjusters are trained to minimize payouts. They may seem friendly and helpful, but their goal is to settle your claim for as little as possible. Never accept the first offer or sign any documents without legal review.</p>

            <h3>Medical Documentation</h3>
            <p>Seek immediate medical attention even for seemingly minor injuries. Many rideshare accident injuries don't manifest symptoms immediately. Having medical documentation from the start strengthens your claim and ensures proper treatment.</p>

            <h3>Property Damage Claims</h3>
            <p>Property damage claims are often settled quickly, but don't rush to accept the first offer. Make sure all damage is properly assessed, including diminished value if your vehicle was significantly damaged.</p>
          `
        },
        {
          id: "coverage-limits",
          title: "Maximizing Available Coverage",
          content: `
            <h3>Identifying All Available Insurance</h3>
            <p>Multiple insurance policies may apply to your rideshare accident. This includes the rideshare company's commercial policy, the driver's personal insurance, other drivers' insurance, and your own uninsured/underinsured motorist coverage.</p>

            <h3>Stacking Coverage</h3>
            <p>In some cases, you can "stack" multiple insurance policies to increase available coverage. This is particularly important for catastrophic injuries that exceed single policy limits.</p>

            <h3>Umbrella Policies</h3>
            <p>Many rideshare drivers carry umbrella insurance policies that provide additional coverage above their standard auto policy. Identifying these policies can significantly increase available compensation.</p>

            <h3>Commercial Coverage Requirements</h3>
            <p>California requires rideshare companies to maintain commercial insurance coverage. Understanding these requirements helps ensure you receive all coverage you're entitled to under state law.</p>
          `
        }
      ]
    },
    faqData: [
      {
        question: "How do I know which insurance coverage applies to my Uber/Lyft accident?",
        answer: "The applicable coverage depends on the driver's app status at the time of the accident. We investigate app data, driver logs, and witness statements to determine the correct coverage period and fight for maximum benefits."
      },
      {
        question: "What if the insurance company denies my rideshare claim?",
        answer: "Insurance denials are common in rideshare cases. We have extensive experience appealing denials and fighting for proper coverage. Many denials are improper and can be overturned with proper legal representation."
      },
      {
        question: "Can I file claims with multiple insurance companies?",
        answer: "Yes, multiple insurance policies may apply to your accident. We identify all available coverage sources and coordinate claims to maximize your compensation while avoiding double recovery issues."
      },
      {
        question: "How long does the rideshare insurance claim process take?",
        answer: "Simple property damage claims may resolve in weeks, while injury claims can take months or years. Complex cases involving multiple insurance companies and disputed coverage take longer but often result in higher settlements."
      },
      {
        question: "What if I was injured as a passenger in a rideshare vehicle?",
        answer: "Passengers are typically covered under the rideshare company's $1 million policy during rides. However, insurance companies may still try to minimize claims. Having legal representation ensures you receive full compensation."
      }
    ],
    linkedPages: [
      {
        title: "Free Case Evaluation",
        description: "Get your rideshare insurance claim reviewed",
        link: "/uber-lyft/case-evaluation",
        icon: "Scale"
      },
      {
        title: "Compensation Calculator", 
        description: "Estimate your claim value",
        link: "/uber-lyft/compensation-calculator",
        icon: "Calculator"
      },
      {
        title: "Legal Guidance",
        description: "Understand your legal rights",
        link: "/uber-lyft/legal-guidance", 
        icon: "Shield"
      }
    ]
  };

  return (
    <>
      
      <ComprehensivePracticeAreaTemplate {...pageData}>{null}</ComprehensivePracticeAreaTemplate>
    </>
  );
};

export default UberLyftInsuranceClaims;