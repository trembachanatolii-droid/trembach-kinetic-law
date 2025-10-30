import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Shield, 
  Clock, 
  Lock,
  UserCheck,
  AlertCircle,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/sexual-abuse-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

const SexualAbuseCaseEvaluation: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const cards = contentRef.current.querySelectorAll('.content-card');
      
      gsap.fromTo(cards, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const seo = {
    title: "Free Sexual Abuse Case Evaluation | California Legal Help",
    description: "Get a free, confidential evaluation of your sexual abuse case in California. Experienced attorneys ready to help you understand your rights and options."
  };

  const hero = {
    backgroundImage: heroImage,
    title: "Free Sexual Abuse Case Evaluation",
    subtitle: "Confidential Consultation with Experienced Attorneys"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a secure endpoint
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    
    // Simulate form submission success
    alert('Thank you for your submission. A member of our team will contact you within 24 hours to discuss your case confidentially.');
    console.log('Form submitted with data:', data);
  };

  return (
    <>
      <SEO 
        title={seo.title}
        description={seo.description}
      />
      
      <Navigation />
      <GoBack fallbackPath="/practice-areas/sexual-abuse" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div ref={contentRef} className="container mx-auto px-4 py-16">
          
          {/* Trust Indicators */}
          <div className="content-card mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-green-200">
                <CardContent className="p-6">
                  <Lock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">100% Confidential</h3>
                  <p className="text-muted-foreground">Your privacy is completely protected by attorney-client privilege</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-blue-200">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Upfront Costs</h3>
                  <p className="text-muted-foreground">Free consultation. You pay nothing unless we win your case</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-purple-200">
                <CardContent className="p-6">
                  <UserCheck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                  <p className="text-muted-foreground">Specialized attorneys with deep experience in sexual abuse cases</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Evaluation Form */}
          <div className="content-card mb-16">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get Your Free Case Evaluation</CardTitle>
                  <CardDescription className="text-lg">
                    All information is strictly confidential and protected by attorney-client privilege
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name *</label>
                        <Input name="firstName" placeholder="Your first name" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name *</label>
                        <Input name="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Phone Number *</label>
                        <Input name="phone" type="tel" placeholder="(555) 123-4567" required />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email Address *</label>
                        <Input name="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">When did the abuse occur?</label>
                      <Select name="timeframe">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recent">Within the last year</SelectItem>
                          <SelectItem value="1-5">1-5 years ago</SelectItem>
                          <SelectItem value="5-10">5-10 years ago</SelectItem>
                          <SelectItem value="10-20">10-20 years ago</SelectItem>
                          <SelectItem value="childhood">During childhood</SelectItem>
                          <SelectItem value="ongoing">Ongoing situation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Where did the abuse occur?</label>
                      <Select name="location">
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="school">School/Educational institution</SelectItem>
                          <SelectItem value="workplace">Workplace</SelectItem>
                          <SelectItem value="healthcare">Healthcare facility</SelectItem>
                          <SelectItem value="religious">Religious institution</SelectItem>
                          <SelectItem value="home">Home/Residential</SelectItem>
                          <SelectItem value="sports">Sports/Athletic program</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Please describe your situation (optional)</label>
                      <Textarea 
                        name="description"
                        placeholder="Share only what you're comfortable with. This helps us understand how we can best help you."
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Preferred contact method</label>
                      <Select name="contactMethod">
                        <SelectTrigger>
                          <SelectValue placeholder="How would you like us to contact you?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox name="consent" id="consent" required />
                      <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                        By submitting this form, I consent to being contacted by this law firm about my potential case. 
                        I understand that this communication is confidential and protected by attorney-client privilege.
                      </label>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Get My Free Case Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Information */}
              <div className="space-y-6">
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-blue-500" />
                      What to Expect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Free Consultation</h4>
                        <p className="text-sm text-muted-foreground">No cost for initial case review and legal advice</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Confidential Discussion</h4>
                        <p className="text-sm text-muted-foreground">Everything you share is protected by attorney-client privilege</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Legal Options Review</h4>
                        <p className="text-sm text-muted-foreground">We'll explain your rights and potential legal remedies</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">No Pressure</h4>
                        <p className="text-sm text-muted-foreground">You decide if and when you want to proceed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Clock className="w-6 h-6 text-green-500" />
                      Time Limits Apply
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      California has specific deadlines for filing sexual abuse cases. These deadlines vary depending on:
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Your age when the abuse occurred</li>
                      <li>• When you discovered the abuse caused your injuries</li>
                      <li>• The type of institution involved</li>
                    </ul>
                    <p className="text-sm font-medium text-green-700 mt-4">
                      Don't wait - contact us today to protect your rights.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Contact Us Directly</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Call 24/7</p>
                        <p className="text-sm text-muted-foreground">(818) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-muted-foreground">Available within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium">Secure Message</p>
                        <p className="text-sm text-muted-foreground">Confidential communication</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default SexualAbuseCaseEvaluation;