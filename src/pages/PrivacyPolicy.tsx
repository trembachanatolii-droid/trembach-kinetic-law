import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const PrivacyPolicy = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setEmailError('This is a required field.');
      return;
    }
    setEmailError('');
    // Handle subscription logic here
    console.log('Subscribe:', email);
  };

  return <div className="min-h-screen bg-background">
      <SEO title="Privacy Policy | Trembach Law Firm" description="Privacy Policy for Trembach Law Firm. Learn how we protect your personal information and comply with California law." canonical="/privacy-policy" />
      
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="mb-8">
          <GoBack />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>

        

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

        </div>
      </div>

      {/* Red Banner Section */}
      <section className="bg-[#DC143C] py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left - Call Info */}
            <div className="text-white text-center md:text-left">
              <p className="text-xl md:text-2xl mb-2">Call</p>
              <a href="tel:2139089708" className="text-4xl md:text-5xl lg:text-6xl font-bold hover:opacity-90 transition-opacity block">
                (213) 908-9708
              </a>
              <p className="text-lg md:text-xl mt-2">24 hours a day, 7 days a week</p>
            </div>

            {/* Center - Phone Icon */}
            <div className="relative">
              <div className="relative w-48 h-48 md:w-64 md:h-64">
                <Phone className="w-full h-full text-[#DC143C] fill-white/20 stroke-white/40" strokeWidth={1.5} />
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10 animate-pulse"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5 animate-pulse delay-75"></div>
              </div>
            </div>

            {/* Right - Tagline */}
            <div className="text-white text-center md:text-right">
              <p className="text-2xl md:text-3xl lg:text-4xl mb-2">You Pay Nothing</p>
              <p className="text-3xl md:text-4xl lg:text-6xl font-bold">
                Unless We <span className="italic">WIN!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#1a1a1a] text-white py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Newsletter Sign Up */}
            <div>
              <div className="mb-6">
                <span className="text-white text-2xl">trembach</span>
                <span className="text-[#DC143C] text-2xl">law</span>
                <span className="text-white text-2xl">firm</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Newsletter Sign Up</h3>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="example@subscribe.com *"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError('');
                    }}
                    className="bg-white text-black placeholder:text-gray-500 border-none h-12"
                  />
                  {emailError && (
                    <p className="text-[#DC143C] text-sm mt-1">{emailError}</p>
                  )}
                </div>
                <Button 
                  type="submit"
                  className="bg-[#DC143C] hover:bg-[#B91230] text-white font-bold px-8 h-12 w-full md:w-auto"
                >
                  SUBSCRIBE
                </Button>
              </form>

              {/* Social Media Icons */}
              <div className="flex gap-4 mt-8">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Practice Areas</h3>
              <ul className="space-y-3 text-white/90">
                <li><Link to="/practice-areas/motor-vehicle-accidents" className="hover:text-[#DC143C] transition-colors">Car Accident Lawyers</Link></li>
                <li><Link to="/practice-areas/dog-bites" className="hover:text-[#DC143C] transition-colors">Dog Bite Lawyers</Link></li>
                <li><Link to="/practice-areas/bicycle-accidents" className="hover:text-[#DC143C] transition-colors">Bicycle Accident Lawyers</Link></li>
                <li><Link to="/practice-areas/disability" className="hover:text-[#DC143C] transition-colors">Social Security Disability Lawyers</Link></li>
                <li><Link to="/practice-areas/motorcycle-accidents" className="hover:text-[#DC143C] transition-colors">Motorcycle Accident Lawyers</Link></li>
                <li><Link to="/practice-areas/pedestrian-accidents" className="hover:text-[#DC143C] transition-colors">Pedestrian Accident Lawyers</Link></li>
                <li><Link to="/practice-areas/truck-accidents" className="hover:text-[#DC143C] transition-colors">Truck Accident Lawyers</Link></li>
                <li><Link to="/practice-areas/brain-injury" className="hover:text-[#DC143C] transition-colors">Brain Injury Lawyer</Link></li>
                <li><Link to="/practice-areas/wrongful-death" className="hover:text-[#DC143C] transition-colors">Wrongful Death Lawyers</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4 mb-8">
                <p>
                  Phone: <a href="tel:2139089708" className="hover:text-[#DC143C] transition-colors">(213) 908-9708</a>
                </p>
                <p className="text-white/90">24 hours a day, 7 days a week</p>
              </div>

              <div className="space-y-4">
                <Link to="/practice-areas" className="flex items-center gap-2 hover:text-[#DC143C] transition-colors group">
                  <span className="text-lg">Cases We Handle</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/about" className="flex items-center gap-2 hover:text-[#DC143C] transition-colors group">
                  <span className="text-lg">Meet Your Team</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/case-results" className="flex items-center gap-2 hover:text-[#DC143C] transition-colors group">
                  <span className="text-lg">Case Results</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
              <p>© {new Date().getFullYear()} Trembach Law Firm. All Rights Reserved.</p>
              <div className="flex gap-4">
                <Link to="/sitemap" className="hover:text-[#DC143C] transition-colors">Sitemap</Link>
                <span>|</span>
                <Link to="/privacy-policy" className="hover:text-[#DC143C] transition-colors">Privacy Policy</Link>
                <span>|</span>
                <Link to="/terms-of-service" className="hover:text-[#DC143C] transition-colors">Terms Of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default PrivacyPolicy;