import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ComprehensivePracticeAreaTemplate from '@/components/ComprehensivePracticeAreaTemplate';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/uber-lyft-driver-screening-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const UberLyftDriverScreening: React.FC = () => {
  const pageData = {
    hero: {
      title: "Uber & Lyft Driver Background Check Failures",
      subtitle: "When Inadequate Screening Leads to Passenger Harm",
      description: "Hold rideshare companies accountable for failing to properly screen dangerous drivers.",
      backgroundImage: heroImage,
      ctaText: "Report Screening Failure",
      ctaLink: "/uber-lyft/case-evaluation"
    },
    seo: {
      title: "Uber & Lyft Driver Background Check Failures | California Rideshare Liability",
      description: "Injured by inadequately screened Uber/Lyft driver? Former defense attorney fights rideshare companies for background check failures. Free consultation.",
      canonical: "https://www.trembachlawfirm.com/uber-lyft/driver-screening"
    },
    mainContent: {
      sections: [
        {
          id: "overview",
          title: "The Problem with Rideshare Background Checks",
          content: `
            <p>Uber and Lyft claim to conduct thorough background checks on their drivers, but the reality is far different. These companies prioritize rapid driver onboarding over passenger safety, leading to dangerous drivers being approved to transport unsuspecting passengers.</p>
            
            <h3>Inadequate Screening Standards</h3>
            <p>Unlike taxi companies that require comprehensive background checks through local authorities, rideshare companies use third-party screening services that often miss critical criminal history. They typically only check the past seven years and may not catch recent arrests or convictions in other jurisdictions.</p>
            
            <h3>Known Red Flags Ignored</h3>
            <p>Uber and Lyft have repeatedly approved drivers with histories of violence, sexual assault, DUI convictions, and other serious crimes. Internal company documents show they knew about these risks but prioritized growth over safety.</p>

            <h3>Lack of Ongoing Monitoring</h3>
            <p>Most rideshare companies only conduct background checks at initial signup. They don't continuously monitor drivers for new arrests or convictions, allowing dangerous individuals to continue driving for months or years after committing crimes.</p>

            <h3>International Driver Issues</h3>
            <p>Many rideshare drivers come from other countries where criminal records may not be accessible through standard U.S. background check systems. This creates significant gaps in screening that companies often ignore.</p>

            <h3>Corporate Liability for Negligent Hiring</h3>
            <p>When rideshare companies fail to properly screen drivers who then harm passengers, they can be held liable for negligent hiring and supervision. Despite claiming drivers are independent contractors, these companies maintain significant control over who can drive on their platforms.</p>
          `
        },
        {
          id: "common-failures",
          title: "Common Background Check Failures",
          content: `
            <h3>Sexual Assault and Harassment</h3>
            <p>Thousands of sexual assaults by rideshare drivers have been reported, many by drivers with prior histories that should have disqualified them. Companies often fail to check sex offender registries or investigate complaints about driver behavior.</p>

            <h3>DUI and Reckless Driving</h3>
            <p>Drivers with multiple DUI convictions or histories of reckless driving are regularly approved. These drivers pose obvious dangers to passengers and other road users, yet continue to be allowed on rideshare platforms.</p>

            <h3>Violence and Assault</h3>
            <p>Drivers with histories of domestic violence, assault, and other violent crimes have been approved to drive. When these drivers harm passengers, rideshare companies claim they couldn't have known about the risk.</p>

            <h3>Identity Fraud</h3>
            <p>Some drivers use false identities or stolen documents to bypass background checks. Inadequate identity verification allows criminals to masquerade as approved drivers.</p>

            <h3>Driving Record Omissions</h3>
            <p>Companies may fail to check driving records in all states where applicants have lived, missing serious traffic violations or license suspensions that should disqualify drivers.</p>
          `
        },
        {
          id: "legal-action",
          title: "Taking Legal Action Against Rideshare Companies",
          content: `
            <h3>Negligent Hiring Claims</h3>
            <p>When companies fail to conduct reasonable background checks and hire dangerous drivers, they can be sued for negligent hiring. This includes failing to check obvious red flags or ignoring warning signs about driver behavior.</p>

            <h3>Negligent Supervision</h3>
            <p>Companies have a duty to monitor driver behavior and respond to safety complaints. Failing to investigate passenger complaints or remove dangerous drivers can create liability for negligent supervision.</p>

            <h3>Negligent Retention</h3>
            <p>When companies learn about driver misconduct but fail to remove them from the platform, they can be liable for negligent retention. This includes ignoring arrest reports, conviction updates, or passenger complaints.</p>

            <h3>Punitive Damages</h3>
            <p>When companies show willful disregard for passenger safety, courts may award punitive damages to punish the misconduct and deter similar behavior. These awards can be substantial in cases involving serious harm.</p>

            <h3>Class Action Potential</h3>
            <p>Systematic failures in background check procedures can affect thousands of passengers. Class action lawsuits can address company-wide policies that put passengers at risk.</p>
          `
        }
      ]
    },
    faqData: [
      {
        question: "How can I find out if my Uber/Lyft driver had a criminal background?",
        answer: "We can investigate your driver's background through legal discovery, including requesting the driver's application materials, background check results, and any complaints filed against them. Court orders can compel rideshare companies to produce this information."
      },
      {
        question: "What if Uber or Lyft claims they did a proper background check?",
        answer: "We examine the actual background check procedures used, not just company claims. Often these checks are inadequate, incomplete, or miss obvious red flags. We compare their procedures to industry standards and legal requirements."
      },
      {
        question: "Can I sue Uber/Lyft if their driver assaulted me?",
        answer: "Yes, if the company failed to properly screen the driver or ignored warning signs about dangerous behavior. You can sue both the driver individually and the company for negligent hiring, supervision, or retention."
      },
      {
        question: "How long do I have to file a lawsuit for inadequate background screening?",
        answer: "California generally provides two years from the date of injury to file suit. However, discovery of screening failures may extend this timeline. It's important to act quickly to preserve evidence and witness testimony."
      },
      {
        question: "What evidence do I need to prove inadequate background screening?",
        answer: "Evidence includes the driver's criminal history, the background check actually performed, company policies and procedures, and any complaints or red flags the company ignored. We use legal discovery to obtain internal company documents."
      }
    ],
    linkedPages: [
      {
        title: "Free Case Evaluation",
        description: "Report rideshare screening failures",
        link: "/uber-lyft/case-evaluation",
        icon: "Scale"
      },
      {
        title: "Legal Guidance",
        description: "Understand your rights after driver assault",
        link: "/uber-lyft/legal-guidance",
        icon: "Shield"
      },
      {
        title: "Insurance Claims Help",
        description: "Navigate complex coverage issues",
        link: "/uber-lyft/insurance-claims",
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

export default UberLyftDriverScreening;