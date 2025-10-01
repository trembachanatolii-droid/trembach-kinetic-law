import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Scale, Clock, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
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

        {/* Features with 3D cards */}
        

        {/* Apple-style Form Section with 3D effect */}
        <section className="py-20 px-6 bg-gray-50">
          <div ref={formRef} className="max-w-3xl mx-auto" style={{
          perspective: '1500px',
          transformStyle: 'preserve-3d'
        }}>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                Tell us about your case
              </h2>
              <p className="text-gray-600 mb-8 font-light">
                Fill out the form below and we'll get back to you within 2 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" placeholder="John" />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone *
                    </label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" placeholder="(213) 908-9708" />
                  </div>
                </div>

                <div>
                  <label htmlFor="injuryType" className="block text-sm font-medium text-gray-900 mb-2">
                    Type of Injury *
                  </label>
                  <select id="injuryType" name="injuryType" required value={formData.injuryType} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none cursor-pointer">
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
                  <input type="text" id="incidentDate" name="incidentDate" required value={formData.incidentDate} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" placeholder="mm/dd/yyyy" />
                </div>

                <div>
                  <label htmlFor="cityCounty" className="block text-sm font-medium text-gray-900 mb-2">
                    City/County Where Injury Occurred *
                  </label>
                  <input type="text" id="cityCounty" name="cityCounty" required value={formData.cityCounty} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all" placeholder="e.g., Los Angeles, Orange County, San Francisco" />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                    Case Description *
                  </label>
                  <textarea id="description" name="description" required rows={6} value={formData.description} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none" placeholder="Briefly describe what happened, your injuries/diagnosis, and any medical treatment received. For silicosis cases, include years worked with engineered stone and manufacturer (Caesarstone, Cambria, Silestone, Cosentino, MSI)..." />
                </div>

                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full text-base transition-all duration-200 hover:shadow-lg">
                  Submit Case Review
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center leading-relaxed">
                  I hereby expressly consent to receive communications including calls, texts, emails, and/or automated messages and confirm that the submitted information provided is mine. By submitting this form, I agree to the <a href="https://www.855mikewins.com/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700">Terms</a> & acknowledge the Privacy Policy.
                </p>
              </form>
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