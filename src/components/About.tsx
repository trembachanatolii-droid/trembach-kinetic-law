import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import profileImage from '@/assets/profile.jpg';
import { 
  Shield, 
  Scale,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  BookOpen
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;

    if (!hero || !content) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(hero.querySelector('.hero-content'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          ease: "power3.out"
        }
      );

      // Fade in sections on scroll
      gsap.utils.toArray<HTMLElement>('.fade-in-section').forEach((section) => {
        gsap.fromTo(section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 60%",
              toggleActions: "play none none none"
            }
          }
        );
      });

      // Stats subtle fade and scale animation
      gsap.utils.toArray<HTMLElement>('.stat-card').forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const practiceAreas = [
    { title: 'Silicosis & Occupational Disease', url: '/practice-areas/silicosis' },
    { title: 'Mesothelioma & Asbestos', url: '/practice-areas/mesothelioma' },
    { title: 'Catastrophic Injury', url: '/practice-areas/catastrophic-injury' },
    { title: 'Wrongful Death', url: '/practice-areas/wrongful-death' }
  ];

  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Defense Experience',
      description: 'Former insurance defense attorney who knows exactly how they think and operate.'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Trial Ready',
      description: 'Extensive courtroom experience defending major corporations - now fighting for you.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Maximum Compensation',
      description: 'We know their tactics and exactly how to counter them for optimal results.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'USC Law Graduate',
      description: 'Top-tier education from USC Gould School of Law with specialized training.'
    }
  ];

  const credentials = [
    'USC Gould School of Law Graduate',
    'Former Insurance Defense Attorney',
    'California State Bar #349304',
    'Trial Experience in Superior Courts',
    'Defended Fortune 500 Companies',
    'Bilingual: English & Russian',
    'Available 24/7',
    'No Fees Unless We Win'
  ];

  return (
    <article className="relative" itemScope itemType="https://schema.org/Attorney">
      {/* Hidden SEO metadata */}
      <meta itemProp="name" content="Anatolii Trembach, Esq." />
      <meta itemProp="jobTitle" content="Founding Attorney" />
      <meta itemProp="description" content="Former insurance defense attorney now representing personal injury victims in California" />
      
      {/* Hero Section - Apple-style dark hero */}
      <section 
        ref={heroRef}
        className="relative bg-black text-white py-24 md:py-32 overflow-hidden"
        aria-labelledby="about-heading"
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-90" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <h1 
              id="about-heading"
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ color: '#ffffff' }}
            >
              Your Advantage.<br />Our Experience.
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 text-gray-300 font-medium"
              style={{ color: '#d1d5db' }}
            >
              Former insurance defense attorney now fighting for California injury victims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2139089708"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (213) 908-9708
              </a>
              <a
                href="#credentials"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 transition-all duration-200"
                style={{ color: '#ffffff' }}
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Apple-inspired stats */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="stat-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>
              <div className="text-6xl font-bold mb-3 tracking-tight" style={{ color: '#000000' }}>
                $50M+
              </div>
              <div className="text-lg font-medium" style={{ color: '#6b7280' }}>
                Recovered for Clients
              </div>
            </div>
            
            <div className="stat-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div className="text-6xl font-bold mb-3 tracking-tight" style={{ color: '#000000' }}>
                24/7
              </div>
              <div className="text-lg font-medium" style={{ color: '#6b7280' }}>
                Available to Help You
              </div>
            </div>
            
            <div className="stat-card text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-indigo-600" />
                </div>
              </div>
              <div className="text-6xl font-bold mb-3 tracking-tight" style={{ color: '#000000' }}>
                $0
              </div>
              <div className="text-lg font-medium" style={{ color: '#6b7280' }}>
                Unless We Win Your Case
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - White background */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Profile Image */}
              <div className="fade-in-section">
                <div className="relative">
                  <img 
                    src={profileImage}
                    alt="Anatolii Trembach, Esq. - Former Insurance Defense Attorney, USC Law Graduate"
                    className="w-full rounded-3xl shadow-2xl"
                    itemProp="image"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Story Content */}
              <div className="fade-in-section space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
                  From Defense to Your Defense
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                  Led by <strong itemProp="name">Anatolii Trembach, Esq.</strong>, Trembach Law Firm brings a unique advantage to personal injury cases across California. As a former insurance defense attorney, Attorney Trembach spent years defending major insurance companies and Fortune 500 corporations.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                  This insider experience provides invaluable insight into how insurance companies operate, evaluate claims, and minimize payouts. Now, that knowledge works for injury victims.
                </p>
                <div className="flex items-start space-x-3 pt-4">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium" style={{ color: '#000000' }}>
                    "I founded this firm to level the playing field. When insurance lawyers see me on the other side, they know I understand their playbook better than they do."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section - Light gray */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-section">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                The Inside Advantage
              </h2>
              <p className="text-xl" style={{ color: '#6b7280' }}>
                Experience that works for you, not against you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="fade-in-section bg-white p-8 rounded-3xl hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>
                        {advantage.title}
                      </h3>
                      <p className="text-base leading-relaxed" style={{ color: '#6b7280' }}>
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section - White */}
      <section id="credentials" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 fade-in-section">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                Credentials & Qualifications
              </h2>
              <p className="text-xl" style={{ color: '#6b7280' }}>
                Education, experience, and dedication to excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="fade-in-section flex items-center space-x-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <span className="text-base font-medium" style={{ color: '#000000' }}>
                    {credential}
                  </span>
                </div>
              ))}
            </div>

            {/* Education Details */}
            <div className="mt-16 fade-in-section">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
                <div className="flex items-start space-x-4">
                  <BookOpen className="w-12 h-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }} itemProp="alumniOf">
                      USC Gould School of Law Graduate
                    </h3>
                    <p className="text-base leading-relaxed mb-4" style={{ color: '#374151' }}>
                      Attorney Trembach earned his law degree from the prestigious USC Gould School of Law, one of California's top-ranked law schools. His education included specialized training in trial advocacy, insurance law, and complex litigation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-base" style={{ color: '#374151' }}>Dean's List Recognition</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-base" style={{ color: '#374151' }}>Advanced Trial Advocacy Training</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-base" style={{ color: '#374151' }}>Insurance Defense Specialization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas - Light gray with internal links for SEO */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 fade-in-section">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
                Practice Areas
              </h2>
              <p className="text-xl" style={{ color: '#6b7280' }}>
                Focused expertise where it matters most.
              </p>
            </div>

            <nav className="grid md:grid-cols-2 gap-6" aria-label="Practice areas navigation">
              {practiceAreas.map((area, index) => (
                <Link
                  key={index}
                  to={area.url}
                  className="fade-in-section group bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors" style={{ color: '#000000' }}>
                      {area.title}
                    </h3>
                    <ArrowRight className="w-6 h-6 text-blue-600 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-300" style={{ color: '#d1d5db' }}>
              Free consultation. No fees unless we win. Available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2139089708"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              >
                <Phone className="w-5 h-5 mr-2" />
                (213) 908-9708
              </a>
              <a
                href="mailto:info@trembachlaw.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-all duration-200"
                style={{ backgroundColor: '#ffffff', color: '#000000' }}
              >
                Email Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
