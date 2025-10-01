import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Scale, Clock, Phone, Lock, UserCheck, AlertCircle, CheckCircle, Mail, MessageCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
gsap.registerPlugin(ScrollTrigger);
interface InjuryType {
  id: string;
  title: string;
}
const injuryTypes: InjuryType[] = [
  {
    id: 'car-accident',
    title: 'Car Accident'
  },
  {
    id: 'mesothelioma',
    title: 'Mesothelioma'
  },
  {
    id: 'silicosis',
    title: 'Silicosis'
  },
  {
    id: 'talc-talcum',
    title: 'Talc/Talcum'
  },
  {
    id: 'dog-bite',
    title: 'Dog Bite'
  },
  {
    id: 'product-liability',
    title: 'Product Liability'
  },
  {
    id: 'wrongful-death',
    title: 'Wrongful Death'
  },
  {
    id: 'other',
    title: 'Other'
  }
];
const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    injuryType: '',
    incidentDate: '',
    cityCounty: '',
    description: ''
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Hero parallax with 3D effect
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, {
        opacity: 0,
        y: 50,
        rotateX: 10,
        scale: 0.95
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%'
        }
      });
    }

    // Content cards animation with stagger
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

    // Form animation with 3D transform
    if (formRef.current) {
      gsap.fromTo(formRef.current, {
        opacity: 0,
        y: 100,
        rotateY: -15,
        transformPerspective: 1000
      }, {
        opacity: 1,
        y: 0,
        rotateY: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%'
        }
      });
    }

    // Feature cards stagger
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.feature-card');
      gsap.fromTo(cards, {
        opacity: 0,
        y: 80,
        scale: 0.9,
        rotateX: 20
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%'
        }
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 2 hours.');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <>
      <SEO title="Free Consultation | California Injury Lawyers | Trembach Law Firm" description="Start your free case review today. No fees unless we win. Available 24/7 with multilingual support. Call (213) 908-9708." canonical="/free-consultation" />

      <div className="min-h-screen bg-white pt-[44px]">
        {/* Apple-style Hero Section with 3D effects */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white" style={{
        perspective: '1500px'
      }}>
          <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight leading-none">
              Get Your Free<br />Case Review
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Expert legal representation with no upfront costs.<br />
              We only get paid when you win.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="tel:213-908-9708" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-200">
                <Phone className="h-5 w-5 text-white" />
                <span className="text-white">Call (213) 908-9708</span>
              </a>
              <div className="px-6 py-3 bg-white text-gray-900 rounded-full text-base font-medium border border-gray-200">
                Response within 2 hours
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators with 3D cards */}
        <section className="py-16 px-6 bg-white">
          <div ref={contentRef} className="max-w-7xl mx-auto">
            <div className="content-card mb-16">
              <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
                <Card className="feature-card text-center border-green-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <Lock className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">100% Confidential</h3>
                    <p className="text-gray-600">Your privacy is completely protected by attorney-client privilege</p>
                  </CardContent>
                </Card>
                
                <Card className="feature-card text-center border-blue-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">No Upfront Costs</h3>
                    <p className="text-gray-600">Free consultation. You pay nothing unless we win your case</p>
                  </CardContent>
                </Card>
                
                <Card className="feature-card text-center border-purple-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-8">
                    <UserCheck className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Experienced Team</h3>
                    <p className="text-gray-600">Specialized attorneys with deep experience in personal injury cases</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Apple-style Form Section with 3D effect */}
        <section className="py-20 px-6 bg-gray-50">
          <div ref={formRef} className="max-w-7xl mx-auto">
            <div className="content-card">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Form */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-3xl font-semibold text-gray-900 tracking-tight">
                      Tell us about your case
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600">
                      Fill out the form below and we'll get back to you within 2 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                            First Name *
                          </label>
                          <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="John" />
                        </div>

                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                            Last Name *
                          </label>
                          <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                            Email *
                          </label>
                          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                            Phone *
                          </label>
                          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="(213) 908-9708" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="injuryType" className="block text-sm font-medium text-gray-900 mb-2">
                          Type of Injury *
                        </label>
                        <select id="injuryType" name="injuryType" required value={formData.injuryType} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                          <option value="">Select case type</option>
                          {injuryTypes.map(type => <option key={type.id} value={type.id}>
                              {type.title}
                            </option>)}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-900 mb-2">
                          Date of Injury/Accident/Diagnosis *
                        </label>
                        <input type="text" id="incidentDate" name="incidentDate" required value={formData.incidentDate} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="mm/dd/yyyy" />
                      </div>

                      <div>
                        <label htmlFor="cityCounty" className="block text-sm font-medium text-gray-900 mb-2">
                          City/County Where Injury Occurred *
                        </label>
                        <input type="text" id="cityCounty" name="cityCounty" required value={formData.cityCounty} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="e.g., Los Angeles, Orange County, San Francisco" />
                      </div>

                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                          Case Description *
                        </label>
                        <textarea id="description" name="description" required rows={6} value={formData.description} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" placeholder="Briefly describe what happened, your injuries/diagnosis, and any medical treatment received. For silicosis cases, include years worked with engineered stone and manufacturer (Caesarstone, Cambria, Silestone, Cosentino, MSI)..." />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full text-base transition-all duration-200 hover:shadow-lg">
                        Submit Case Review
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>

                      <p className="text-sm text-gray-500 text-center leading-relaxed">
                        I hereby expressly consent to receive communications including calls, texts, emails, and/or automated messages and confirm that the submitted information provided is mine. By submitting this form, I agree to the <a href="https://www.855mikewins.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700">Terms</a> & acknowledge the Privacy Policy.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                {/* Information Cards */}
                <div className="space-y-6">
                  <Card className="bg-blue-50 border-blue-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
                        <AlertCircle className="w-6 h-6 text-blue-500" />
                        What to Expect
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                          <p className="text-sm text-gray-600">No cost for initial case review and legal advice</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Confidential Discussion</h4>
                          <p className="text-sm text-gray-600">Everything you share is protected by attorney-client privilege</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">Legal Options Review</h4>
                          <p className="text-sm text-gray-600">We'll explain your rights and potential legal remedies</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">No Pressure</h4>
                          <p className="text-sm text-gray-600">You decide if and when you want to proceed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border-green-200 shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2 text-gray-900">
                        <Clock className="w-6 h-6 text-green-500" />
                        Time Limits Apply
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        California has specific deadlines for filing personal injury cases. These deadlines vary depending on:
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li>• The type of accident or injury</li>
                        <li>• When you discovered the injury</li>
                        <li>• The parties involved in your case</li>
                      </ul>
                      <p className="text-sm font-medium text-green-700 mt-4">
                        Don't wait - contact us today to protect your rights.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">Contact Us Directly</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">Call 24/7</p>
                          <a href="tel:213-908-9708" className="text-sm text-blue-600 hover:text-blue-700">(213) 908-9708</a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">Email Us</p>
                          <p className="text-sm text-gray-600">Available within 24 hours</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                        <div>
                          <p className="font-medium text-gray-900">Secure Message</p>
                          <p className="text-sm text-gray-600">Confidential communication</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apple-style CTA Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
              Questions? Call us now.
            </h2>
            <p className="text-xl text-gray-600 mb-8 font-light">
              Our team is standing by to answer your questions.<br />
              Multilingual support available.
            </p>
            <a href="tel:213-908-9708" className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 rounded-full font-medium text-lg transition-all duration-200 hover:bg-gray-800 hover:shadow-lg">
              <Phone className="h-5 w-5 text-white" />
              <span className="text-white">Call (213) 908-9708</span>
            </a>
          </div>
        </section>
      </div>
    </>;
};
export default FreeConsultation;