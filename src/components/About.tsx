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
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Hero entrance (Apple-style: smooth fade + scale)
      gsap.fromTo(
        '.hero-content',
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.hero-content',
            start: 'top 80%',
          }
        }
      );

      // Parallax floating orbs
      gsap.to('.glow-orb', {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });

      // Stats counter animation
      gsap.fromTo(
        '.stat-card',
        { 
          opacity: 0, 
          y: 30,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.stat-card',
            start: 'top 85%',
          }
        }
      );

      // Story section reveal
      gsap.fromTo(
        '.story-element',
        { 
          opacity: 0, 
          x: -40
        },
        { 
          opacity: 1, 
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.story-element',
            start: 'top 80%',
          }
        }
      );

      // Credentials cascade
      gsap.fromTo(
        '.credential-item',
        { 
          opacity: 0, 
          y: 50,
          rotateX: -15
        },
        { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.credential-item',
            start: 'top 85%',
          }
        }
      );

      // CTA pulse
      gsap.to('.cta-pulse', {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

    }, section);

    return () => ctx.revert();
  }, []);

  // Practice areas for internal linking (Russell Brunson: multiple pathways)
  const practiceAreas = [
    { name: 'Uber & Lyft Accidents', path: '/practice-areas/uber-lyft-accidents', icon: Users },
    { name: 'Silicosis Cases', path: '/practice-areas/silicosis', icon: Shield },
    { name: 'Mesothelioma', path: '/practice-areas/mesothelioma', icon: FileText }
  ];

  // Social proof metrics (Russell Brunson: quantify results)
  const metrics = [
    { value: '$50M+', label: 'Recovered for Clients', icon: DollarSign },
    { value: '15+', label: 'Years Experience', icon: Clock },
    { value: '500+', label: 'Cases Handled', icon: Scale },
    { value: '98%', label: 'Client Satisfaction', icon: Star }
  ];

  // The transformation story (Russell Brunson: Before/After)
  const transformationStory = {
    before: {
      title: 'As Defense Attorney',
      points: [
        'Defended insurance companies',
        'Witnessed claim denials',
        'Learned their strategies',
        'Saw the inequality'
      ]
    },
    after: {
      title: 'Now For Victims',
      points: [
        'Fighting for injured people',
        'Maximizing settlements',
        'Using insider knowledge',
        'Leveling the playing field'
      ]
    }
  };

  // Credentials (organized by impact)
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
    <section ref={sectionRef} className="relative bg-black text-white overflow-hidden">
      {/* Animated background orbs (Apple-style ambient) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="glow-orb absolute top-20 left-[10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
        <div className="glow-orb absolute top-[40%] right-[15%] w-[600px] h-[600px] bg-cyan-400/15 rounded-full blur-[140px]"></div>
        <div className="glow-orb absolute bottom-20 left-[20%] w-[450px] h-[450px] bg-blue-400/20 rounded-full blur-[130px]"></div>
      </div>

      {/* Hero Section - Apple-style minimal with impact */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="hero-content max-w-6xl mx-auto text-center py-20">
          <p className="text-blue-400 text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-6">
            The Inside Advantage
          </p>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-200">
            From Defense Attorney<br />
            <span className="text-blue-400">To Your Defender</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light">
            Led by former insurance defense attorney <strong className="font-semibold text-white">Anatolii Trembach, Esq.</strong>,
            we know exactly how insurance companies think—because we used to work for them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="cta-pulse bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-full shadow-2xl shadow-blue-500/50 border-0 transition-all duration-300"
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
              className="bg-white/10 backdrop-blur-xl border-white/20 text-white hover:bg-white/20 px-10 py-7 text-lg rounded-full transition-all duration-300"
            >
              <a href="tel:+18181234567">
                <Phone className="mr-2 h-5 w-5" />
                (818) 123-4567
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <span>No Fees Unless We Win</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-400" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Metrics (Russell Brunson: quantify results) */}
      <div ref={statsRef} className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div
                  key={index}
                  className="stat-card relative group"
                >
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/30">
                    <Icon className="h-10 w-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-4xl sm:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{metric.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* The Origin Story (Russell Brunson: Hook, Story, Offer framework) */}
      <div ref={storyRef} className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="story-element text-center mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              The <span className="text-blue-400">Turning Point</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every case changed when I realized I was on the wrong side.
            </p>
          </div>

          {/* Two-column transformation story */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* BEFORE */}
            <div className="story-element relative p-10 bg-gradient-to-br from-red-900/20 to-gray-900/20 backdrop-blur-xl border border-red-500/20 rounded-3xl">
              <div className="absolute -top-4 left-8 px-6 py-2 bg-red-600 rounded-full text-sm font-bold">
                BEFORE
              </div>
              <h3 className="text-3xl font-bold mb-8 mt-4">{transformationStory.before.title}</h3>
              <ul className="space-y-4">
                {transformationStory.before.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1 h-2 w-2 rounded-full bg-red-500 flex-shrink-0"></div>
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div className="story-element relative p-10 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-blue-400/30 rounded-3xl">
              <div className="absolute -top-4 left-8 px-6 py-2 bg-blue-600 rounded-full text-sm font-bold">
                NOW
              </div>
              <h3 className="text-3xl font-bold mb-8 mt-4">{transformationStory.after.title}</h3>
              <ul className="space-y-4">
                {transformationStory.after.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* The Epiphany Bridge (Russell Brunson concept) */}
          <div className="story-element relative p-12 bg-gradient-to-br from-blue-950/40 to-cyan-950/40 backdrop-blur-2xl border border-blue-400/20 rounded-3xl">
            <div className="flex items-start gap-6">
              <div className="hidden sm:block">
                <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-transparent rounded-full"></div>
              </div>
              <div>
                <blockquote className="text-2xl md:text-3xl font-light italic text-gray-200 leading-relaxed mb-6">
                  "After years of defending insurance companies, I saw how they systematically minimize legitimate claims. 
                  Every denied claim was someone's family struggling. I couldn't be part of that anymore. Now, when insurance 
                  lawyers see me on the other side, they know I understand their playbook better than they do."
                </blockquote>
                <cite className="text-lg font-semibold text-blue-400">
                  — Anatolii Trembach, Esq., USC Law Graduate & Founding Attorney
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attorney Profile & Credentials */}
      <div className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="grid lg:grid-cols-5 gap-12 mb-24">
            {/* Profile Image (2 cols) */}
            <div className="lg:col-span-2">
              <div className="story-element relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                <div className="relative overflow-hidden rounded-3xl border border-white/10">
                  <img 
                    src={profileImage} 
                    alt="Anatolii Trembach, Esq. - Former Insurance Defense Attorney"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-3xl font-bold mb-2">Anatolii Trembach, Esq.</h3>
                    <p className="text-blue-300 text-lg">Former Insurance Defense Attorney</p>
                    <p className="text-gray-300 text-sm mt-2">California State Bar #349304</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details (3 cols) */}
            <div className="lg:col-span-3 flex flex-col justify-center">
              <div className="story-element">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Your <span className="text-blue-400">Unfair Advantage</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
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
                    <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <TrendingUp className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-200">{advantage}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
                >
                  <a href="#consultation">
                    Schedule Your Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div ref={credentialsRef}>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                Elite Credentials & <span className="text-blue-400">Experience</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((credential, index) => {
                const Icon = credential.icon;
                return (
                  <div
                    key={index}
                    className="credential-item relative group"
                  >
                    <div className="relative p-8 h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-500">
                      <Icon className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-xl font-bold mb-4 text-white">{credential.title}</h3>
                      <ul className="space-y-3">
                        {credential.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas - Internal Linking (SEO Strategy) */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-blue-400">Practice Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                  className="credential-item group relative block"
                >
                  <div className="relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
                    <Icon className="h-10 w-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {area.name}
                    </h3>
                    <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:translate-x-2 transition-transform duration-300">
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

      {/* Final CTA Section (Russell Brunson: Strong closing offer) */}
      <div className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 md:p-16 bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-2xl border border-blue-400/30 rounded-3xl text-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Ready to Level the <span className="text-blue-400">Playing Field?</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
                Get a free case evaluation from an attorney who knows exactly how insurance companies operate.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <Button
                  asChild
                  size="lg"
                  className="cta-pulse bg-white text-blue-600 hover:bg-gray-100 px-12 py-8 text-xl rounded-full shadow-2xl font-bold border-0"
                >
                  <a href="#consultation" id="consultation">
                    Get Your Free Consultation
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </a>
                </Button>
                
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-8 text-xl rounded-full font-bold"
                >
                  <a href="tel:+18181234567">
                    <Phone className="mr-3 h-6 w-6" />
                    Call 24/7: (818) 123-4567
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  <span>No Fees Unless We Win</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  <span>Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-400" />
                  <span>Available 24/7/365</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;