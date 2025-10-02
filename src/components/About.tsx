import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/profile.jpg';
import { 
  Shield, 
  Scale,
  TrendingUp,
  Users,
  Award,
  FileText,
  Phone,
  ArrowRight,
  CheckCircle2,
  Star,
  DollarSign,
  Clock,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Smooth fade-in animations
      gsap.fromTo(
        '.fade-in-element',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.fade-in-element',
            start: 'top 85%',
          }
        }
      );

      // Scale animation for cards
      gsap.fromTo(
        '.scale-in-card',
        { opacity: 0, scale: 0.95 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.scale-in-card',
            start: 'top 85%',
          }
        }
      );

    }, section);

    return () => ctx.revert();
  }, []);

  const metrics = [
    { value: '$50M+', label: 'Recovered for Clients', icon: DollarSign },
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Cases Handled', icon: Scale },
    { value: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  const practiceAreas = [
    { name: 'Uber & Lyft Accidents', path: '/practice-areas/uber-lyft-accidents', icon: Users },
    { name: 'Silicosis Cases', path: '/practice-areas/silicosis', icon: Shield },
    { name: 'Mesothelioma', path: '/practice-areas/mesothelioma', icon: FileText }
  ];

  const credentials = [
    {
      icon: BookOpen,
      title: 'Elite Education',
      items: [
        'USC Gould School of Law Graduate',
        'Dean\'s List Recognition',
        'Advanced Trial Advocacy Training',
        'Insurance Law Specialization'
      ]
    },
    {
      icon: Shield,
      title: 'Insider Experience',
      items: [
        'Former Insurance Defense Attorney',
        'Defended Fortune 500 Companies',
        'Complex Litigation Expert',
        'Superior Court Trial Experience'
      ]
    },
    {
      icon: Award,
      title: 'Specialized Focus',
      items: [
        'Silicosis & Occupational Disease',
        'Mesothelioma & Asbestos Cases',
        'Catastrophic Personal Injury',
        'Wrongful Death Claims'
      ]
    },
    {
      icon: Users,
      title: 'Client-First Service',
      items: [
        'Available 24/7 for Emergencies',
        'Free Initial Consultations',
        'No Recovery, No Attorney Fee',
        'Direct Attorney Access'
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-white">
      {/* Hero Section - Dark Background (Apple style) */}
      <div className="relative bg-black text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center py-20">
          <div className="fade-in-element">
            <p className="text-blue-400 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: '#60A5FA' }}>
              The Inside Advantage
            </p>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8" style={{ color: '#FFFFFF' }}>
              From Defense Attorney
              <br />
              <span style={{ color: '#60A5FA' }}>To Your Defender</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed font-light" style={{ color: '#D1D5DB' }}>
              Led by former insurance defense attorney <strong className="font-semibold" style={{ color: '#FFFFFF' }}>Anatolii Trembach, Esq.</strong>,
              we know exactly how insurance companies think—because we used to work for them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-10 py-7 text-lg rounded-full shadow-xl border-0 transition-all duration-300"
                style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
              >
                <a href="#consultation">
                  Get Free Case Evaluation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-xl border-white/30 px-10 py-7 text-lg rounded-full transition-all duration-300"
                style={{ color: '#FFFFFF', borderColor: 'rgba(255, 255, 255, 0.3)' }}
              >
                <a href="tel:+18181234567">
                  <Phone className="mr-2 h-5 w-5" />
                  (818) 123-4567
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: '#9CA3AF' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: '#60A5FA' }} />
                <span>No Fees Unless We Win</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: '#60A5FA' }} />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: '#60A5FA' }} />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - Light Background */}
      <div className="relative bg-gray-50 py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="scale-in-card text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <Icon className="h-12 w-12 mx-auto mb-4" style={{ color: '#2563EB' }} />
                  <div className="text-4xl sm:text-5xl font-bold mb-2" style={{ color: '#000000' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: '#6B7280' }}>{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story Section - White Background */}
      <div className="relative bg-white py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-element text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
              The <span style={{ color: '#2563EB' }}>Turning Point</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#374151' }}>
              Every case changed when I realized I was on the wrong side.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* BEFORE */}
            <div className="scale-in-card p-10 bg-red-50 border-2 border-red-200 rounded-3xl">
              <div className="inline-block px-6 py-2 bg-red-600 rounded-full text-sm font-bold mb-6" style={{ color: '#FFFFFF' }}>
                BEFORE
              </div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>As Defense Attorney</h3>
              <ul className="space-y-4">
                {[
                  'Defended insurance companies',
                  'Witnessed claim denials',
                  'Learned their strategies',
                  'Saw the inequality'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                    <span className="text-lg" style={{ color: '#1F2937' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div className="scale-in-card p-10 bg-blue-50 border-2 border-blue-200 rounded-3xl">
              <div className="inline-block px-6 py-2 bg-blue-600 rounded-full text-sm font-bold mb-6" style={{ color: '#FFFFFF' }}>
                NOW
              </div>
              <h3 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>Now For Victims</h3>
              <ul className="space-y-4">
                {[
                  'Fighting for injured people',
                  'Maximizing settlements',
                  'Using insider knowledge',
                  'Leveling the playing field'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0" style={{ color: '#2563EB' }} />
                    <span className="text-lg" style={{ color: '#1F2937' }}>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="fade-in-element p-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100">
            <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed mb-6" style={{ color: '#1F2937' }}>
              "After years of defending insurance companies, I saw how they systematically minimize legitimate claims. 
              Every denied claim was someone's family struggling. I couldn't be part of that anymore. Now, when insurance 
              lawyers see me on the other side, they know I understand their playbook better than they do."
            </blockquote>
            <cite className="text-lg font-semibold" style={{ color: '#2563EB' }}>
              — Anatolii Trembach, Esq., USC Law Graduate & Founding Attorney
            </cite>
          </div>
        </div>
      </div>

      {/* Profile Section - Light Gray Background */}
      <div className="relative bg-gray-50 py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 mb-24">
            {/* Profile Image */}
            <div className="lg:col-span-2">
              <div className="fade-in-element relative group">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img 
                    src={profileImage} 
                    alt="Anatolii Trembach, Esq. - Former Insurance Defense Attorney"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold mb-2" style={{ color: '#FFFFFF' }}>Anatolii Trembach, Esq.</h3>
                    <p className="text-lg" style={{ color: '#60A5FA' }}>Former Insurance Defense Attorney</p>
                    <p className="text-sm mt-2" style={{ color: '#D1D5DB' }}>California State Bar #349304</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="fade-in-element">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
                  Your <span style={{ color: '#2563EB' }}>Unfair Advantage</span>
                </h2>
                <p className="text-xl leading-relaxed mb-8" style={{ color: '#374151' }}>
                  With extensive experience defending major insurance companies and Fortune 500 corporations, 
                  Attorney Trembach brings insider knowledge that few plaintiff attorneys possess. This unique 
                  background provides our clients throughout California with a significant strategic advantage.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    'Knows insurance company tactics',
                    'Understands defense strategies',
                    'Predicts their next moves',
                    'Maximizes settlement values'
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                      <TrendingUp className="h-5 w-5 flex-shrink-0" style={{ color: '#2563EB' }} />
                      <span style={{ color: '#1F2937' }}>{advantage}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-full shadow-xl"
                  style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
                >
                  <a href="#consultation">
                    Schedule Your Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section - White Background */}
      <div className="relative bg-white py-32 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-element text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Elite Credentials & <span style={{ color: '#2563EB' }}>Experience</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <div
                  key={index}
                  className="scale-in-card p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  <Icon className="h-12 w-12 mb-6" style={{ color: '#2563EB' }} />
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>{credential.title}</h3>
                  <ul className="space-y-3">
                    {credential.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#2563EB' }} />
                        <span style={{ color: '#4B5563' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Practice Areas Section - Light Gray */}
      <div className="relative bg-gray-50 py-24 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="fade-in-element text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
              Our <span style={{ color: '#2563EB' }}>Practice Areas</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Specialized representation in complex personal injury cases
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Link
                  key={index}
                  to={area.path}
                  className="scale-in-card group block"
                >
                  <div className="p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <Icon className="h-10 w-10 mb-4 group-hover:scale-110 transition-transform duration-300" style={{ color: '#2563EB' }} />
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{ color: '#000000' }}>
                      {area.name}
                    </h3>
                    <div className="flex items-center text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300" style={{ color: '#2563EB' }}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA Section - Dark Background */}
      <div className="relative bg-black text-white py-32 px-6 sm:px-8" id="consultation">
        <div className="max-w-5xl mx-auto text-center">
          <div className="fade-in-element">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
              Ready to Level the <span style={{ color: '#60A5FA' }}>Playing Field?</span>
            </h2>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{ color: '#D1D5DB' }}>
              Get a free case evaluation from an attorney who knows exactly how insurance companies operate.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                asChild
                size="lg"
                className="px-12 py-8 text-xl rounded-full shadow-2xl font-bold border-0"
                style={{ backgroundColor: '#FFFFFF', color: '#2563EB' }}
              >
                <a href="#consultation-form">
                  Get Your Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </a>
              </Button>
              
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 px-12 py-8 text-xl rounded-full font-bold"
                style={{ color: '#FFFFFF', borderColor: '#FFFFFF', backgroundColor: 'transparent' }}
              >
                <a href="tel:+18181234567">
                  <Phone className="mr-3 h-6 w-6" />
                  Call 24/7: (818) 123-4567
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm" style={{ color: '#9CA3AF' }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: '#60A5FA' }} />
                <span>No Fees Unless We Win</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: '#60A5FA' }} />
                <span>Free Initial Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" style={{ color: '#60A5FA' }} />
                <span>Available 24/7/365</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;