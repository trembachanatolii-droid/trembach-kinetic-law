import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Scale, Clock, Phone } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface PracticeArea {
  id: string;
  title: string;
}

const practiceAreas: PracticeArea[] = [
  { id: 'mesothelioma-asbestos', title: 'Mesothelioma & Asbestos' },
  { id: 'silicosis-injuries', title: 'Silicosis Injuries' },
  { id: 'talc-baby-powder', title: 'Talc & Baby Powder Cancer' },
  { id: 'car-accidents', title: 'Car Accidents' },
  { id: 'truck-18-wheeler', title: 'Truck & 18-Wheeler' },
  { id: 'motorcycle-accidents', title: 'Motorcycle Accidents' },
  { id: 'pedestrian-accidents', title: 'Pedestrian Accidents' },
  { id: 'bicycle-accidents', title: 'Bicycle Accidents' },
  { id: 'premises-liability', title: 'Premises Liability' },
  { id: 'dog-bites', title: 'Dog Bites & Animal Attacks' },
  { id: 'medical-malpractice', title: 'Medical Malpractice' },
  { id: 'wrongful-death', title: 'Wrongful Death' },
  { id: 'product-liability', title: 'Product Liability' },
  { id: 'construction-accidents', title: 'Construction Accidents' },
  { id: 'brain-injuries', title: 'Brain Injuries' },
  { id: 'spinal-cord-injuries', title: 'Spinal Cord Injuries' },
  { id: 'burn-injuries', title: 'Burn Injuries' },
  { id: 'amputation', title: 'Amputation Injuries' },
  { id: 'workplace-injuries', title: 'Workplace Injuries' },
  { id: 'medical-devices', title: 'Medical Devices' },
  { id: 'pharmaceutical', title: 'Pharmaceutical' },
  { id: 'mass-torts', title: 'Mass Torts' },
  { id: 'class-actions', title: 'Class Actions' },
  { id: 'environmental-toxic', title: 'Environmental Toxic' },
  { id: 'camp-lejeune', title: 'Camp Lejeune' },
  { id: 'pfas-exposure', title: 'PFAS Exposure' },
  { id: 'benzene-exposure', title: 'Benzene Exposure' },
  { id: 'opioid-litigation', title: 'Opioid Litigation' },
  { id: 'sexual-abuse', title: 'Sexual Abuse' },
  { id: 'clergy-abuse', title: 'Clergy Abuse' },
  { id: 'elder-abuse', title: 'Elder Abuse' },
  { id: 'birth-injuries', title: 'Birth Injuries' },
  { id: 'uber-lyft-accidents', title: 'Uber/Lyft Accidents' },
  { id: 'bus-accidents', title: 'Bus Accidents' },
  { id: 'aviation-accidents', title: 'Aviation Accidents' },
  { id: 'maritime-accidents', title: 'Maritime Accidents' },
  { id: 'swimming-pool', title: 'Swimming Pool Accidents' },
  { id: 'amusement-parks', title: 'Amusement Park Accidents' },
  { id: 'electrocution', title: 'Electrocution' },
  { id: 'explosions', title: 'Explosions' },
  { id: 'vision-loss', title: 'Vision Loss' },
  { id: 'hearing-loss', title: 'Hearing Loss' },
  { id: 'paralysis', title: 'Paralysis' },
  { id: 'civil-rights', title: 'Civil Rights' },
  { id: 'retail-accidents', title: 'Retail Accidents' },
  { id: 'scaffolding-falls', title: 'Scaffolding Falls' },
  { id: 'crane-accidents', title: 'Crane Accidents' },
  { id: 'railroad-accidents', title: 'Railroad Accidents' },
  { id: 'defamation', title: 'Defamation' },
  { id: 'general-personal-injury', title: 'General Personal Injury' }
];

const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: '',
    incidentDate: '',
    description: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero parallax with 3D effect
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { 
          opacity: 0, 
          y: 50,
          rotateX: 10,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    // Form animation with 3D transform
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { 
          opacity: 0, 
          y: 100,
          rotateY: -15,
          transformPerspective: 1000
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 70%',
          }
        }
      );
    }

    // Feature cards stagger
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.feature-card');
      gsap.fromTo(
        cards,
        { 
          opacity: 0, 
          y: 80,
          scale: 0.9,
          rotateX: 20
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 75%',
          }
        }
      );
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

  return (
    <>
      <SEO
        title="Free Consultation | California Injury Lawyers | Trembach Law Firm"
        description="Start your free case review today. No fees unless we win. Available 24/7 with multilingual support. Call (213) 908-9708."
        canonical="/free-consultation"
      />

      <div className="min-h-screen bg-white pt-[44px]">
        {/* Apple-style Hero Section with 3D effects */}
        <section 
          ref={heroRef}
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 to-white"
          style={{ perspective: '1500px' }}
        >
          <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight leading-none">
              Get Your Free<br />Case Review
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Expert legal representation with no upfront costs.<br />
              We only get paid when you win.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a 
                href="tel:213-908-9708"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Call (213) 908-9708
              </a>
              <div className="px-6 py-3 bg-white text-gray-900 rounded-full text-base font-medium border border-gray-200">
                Response within 2 hours
              </div>
            </div>
          </div>
        </section>

        {/* Features with 3D cards */}
        <section ref={cardsRef} className="py-16 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="feature-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-600 font-light">
                We're here when you need us. Day or night, our team is ready to help.
              </p>
            </div>

            <div 
              className="feature-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">No Win, No Fee</h3>
              <p className="text-gray-600 font-light">
                You don't pay unless we secure compensation for your case.
              </p>
            </div>

            <div 
              className="feature-card bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center mb-6">
                <Scale className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">$100M+ Recovered</h3>
              <p className="text-gray-600 font-light">
                Proven track record of winning significant compensation for our clients.
              </p>
            </div>
          </div>
        </section>

        {/* Apple-style Form Section with 3D effect */}
        <section className="py-20 px-6 bg-gray-50">
          <div 
            ref={formRef}
            className="max-w-3xl mx-auto"
            style={{ 
              perspective: '1500px',
              transformStyle: 'preserve-3d'
            }}
          >
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
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="(213) 908-9708"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="practiceArea" className="block text-sm font-medium text-gray-900 mb-2">
                    Practice Area *
                  </label>
                  <select
                    id="practiceArea"
                    name="practiceArea"
                    required
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((area) => (
                      <option key={area.id} value={area.id}>
                        {area.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-900 mb-2">
                    Incident Date *
                  </label>
                  <input
                    type="date"
                    id="incidentDate"
                    name="incidentDate"
                    required
                    value={formData.incidentDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                    Case Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={6}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                    placeholder="Please describe what happened..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-full text-base transition-all duration-200 hover:shadow-lg"
                >
                  Submit Case Review
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our terms of service and privacy policy.
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
            <a
              href="tel:213-908-9708"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium text-lg rounded-full transition-all duration-200 hover:bg-gray-800 hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call (213) 908-9708
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default FreeConsultation;
