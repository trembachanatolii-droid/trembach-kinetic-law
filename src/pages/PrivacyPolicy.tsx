import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Privacy Policy | Trembach Law Firm" 
        description="Privacy Policy for Trembach Law Firm. Learn how we protect your personal information and comply with California law." 
        canonical="/privacy-policy" 
      />
      
      {/* Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Trembach Law Firm - Effective Date: October 1, 2025
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <GoBack />

        <Card className="mt-8 shadow-xl">
          <CardContent className="prose prose-lg max-w-none pt-6">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Trembach Law Firm ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services, in compliance with California law including the California Consumer Privacy Act (CCPA).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Request a consultation or case evaluation</li>
                <li>Contact us via phone, email, or contact forms</li>
                <li>Subscribe to our newsletter or updates</li>
                <li>Engage with our services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Information collected may include: name, email address, phone number, date of birth, injury details, case information, and other relevant details you provide.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Evaluate and respond to your legal inquiries</li>
                <li>Provide legal representation and services</li>
                <li>Communicate with you about your case</li>
                <li>Send follow-up information and review requests</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Communications and Text Messages</h2>
              <p className="text-muted-foreground leading-relaxed">
                By providing your phone number and consenting to receive communications, you agree that we may contact you via text messages (SMS) related to your inquiry, follow-ups, and review requests. You may reply STOP to opt out at any time. For assistance, reply HELP. Standard message and data rates may apply. Message frequency will vary based on your case and our communication needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Service providers who assist in our operations (with confidentiality agreements)</li>
                <li>Legal and regulatory authorities when required by law</li>
                <li>Other parties with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your California Privacy Rights (CCPA)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under California law, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Know what personal information we collect, use, and disclose</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of your personal information (we do not sell personal information)</li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact us at contact@trembachlaw.com or (213) 908-9708.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites or services, including Google's services. This Privacy Policy does not apply to such third-party services. We encourage you to review their privacy policies. Our site is protected by reCAPTCHA, and Google's <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a> and <a href="https://policies.google.com/terms?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Terms of Service</a> apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p><strong>Trembach Law Firm</strong></p>
                <p>Email: contact@trembachlaw.com</p>
                <p>Phone: (213) 908-9708</p>
                <p>Serving All of California</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
