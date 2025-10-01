import React from 'react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Privacy Policy | Trembach Law Firm" 
        description="Privacy Policy for Trembach Law Firm. Learn how we protect your personal information and comply with California law." 
        canonical="/privacy-policy" 
      />
      
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <GoBack />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed mb-8 uppercase tracking-wide">
          THIS PRIVACY POLICY IS FOR TREMBACH LAW FIRM. THIS PRIVACY POLICY EXPLAINS HOW WE COLLECT, USE, DISCLOSE, AND SAFEGUARD YOUR INFORMATION WHEN YOU VISIT OUR WEBSITE OR USE OUR SERVICES, IN COMPLIANCE WITH CALIFORNIA LAW INCLUDING THE CALIFORNIA CONSUMER PRIVACY ACT (CCPA). EFFECTIVE DATE: OCTOBER 1, 2025.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">1. Introduction</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Trembach Law Firm ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in compliance with California law including the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Request a consultation or case evaluation</li>
              <li>Contact us via phone, email, or contact forms</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Engage with our services</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed">
              Information collected may include: name, email address, phone number, date of birth, injury details, case information, and other relevant details you provide.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2">
              <li>Evaluate and respond to your legal inquiries</li>
              <li>Provide legal representation and services</li>
              <li>Communicate with you about your case</li>
              <li>Send follow-up information and review requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">4. Communications and Text Messages</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              By providing your phone number and consenting to receive communications, you agree that we may contact you via text messages (SMS) related to your inquiry, follow-ups, and review requests. You may reply STOP to opt out at any time. For assistance, reply HELP. Standard message and data rates may apply. Message frequency will vary based on your case and our communication needs.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">5. Newsletter and Marketing Communications</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We may offer newsletter subscriptions and other marketing communications to keep you informed about legal updates, case results, and firm news. When you sign up for our newsletter:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Your email address will be used solely for sending newsletters and legal updates</li>
              <li>You can unsubscribe at any time by clicking the unsubscribe link in any email</li>
              <li>We will not share your email address with third parties for marketing purposes</li>
              <li>Newsletter frequency may vary based on legal developments and firm announcements</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed">
              To sign up for our newsletter or manage your subscription preferences, please contact us at info@trembachlaw.com or call (213) 908-9708. We are available 24 hours a day, 7 days a week to assist you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">6. No Fees Unless We Win</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Trembach Law Firm operates on a contingency fee basis for personal injury cases. This means:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>You pay nothing upfront for our legal services</li>
              <li>We only collect attorney fees if we successfully recover compensation for you</li>
              <li>All case evaluations and initial consultations are completely free</li>
              <li>There are no hidden fees or costs unless we win your case</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed">
              This contingency fee structure is designed to make quality legal representation accessible to all injury victims, regardless of their financial situation. For questions about our fee structure, please call us at (213) 908-9708 - we're available 24/7.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">7. Information Sharing and Disclosure</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2">
              <li>Service providers who assist in our operations (with confidentiality agreements)</li>
              <li>Legal and regulatory authorities when required by law</li>
              <li>Other parties with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">8. Your California Privacy Rights (CCPA)</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Under California law, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-base text-muted-foreground leading-relaxed space-y-2 mb-4">
              <li>Know what personal information we collect, use, and disclose</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of the sale of your personal information (we do not sell personal information)</li>
              <li>Non-discrimination for exercising your privacy rights</li>
            </ul>
            <p className="text-base text-muted-foreground leading-relaxed">
              To exercise these rights, please contact us at info@trembachlaw.com or (213) 908-9708.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">9. Data Security</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">10. Third-Party Services</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites or services, including Google's services. This Privacy Policy does not apply to such third-party services. We encourage you to review their privacy policies. Our site is protected by reCAPTCHA, and Google's <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a> and <a href="https://policies.google.com/terms?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Terms of Service</a> apply.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">11. Children's Privacy</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-foreground mb-4">13. Contact Us</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us. We are available 24 hours a day, 7 days a week:
            </p>
            <div className="text-base text-muted-foreground leading-relaxed space-y-1">
              <p className="font-semibold text-lg">Trembach Law Firm</p>
              <p>Phone: <a href="tel:2139089708" className="text-primary underline hover:text-primary/80">(213) 908-9708</a></p>
              <p>Email: <a href="mailto:info@trembachlaw.com" className="text-primary underline hover:text-primary/80">info@trembachlaw.com</a></p>
              <p>Available: 24/7 - Call anytime for a free consultation</p>
              <p>Service Area: All of California</p>
              <p className="mt-4 font-semibold">You Pay Nothing Unless We Win!</p>
            </div>
          </section>

          <section className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Trembach Law Firm. All Rights Reserved. | <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
