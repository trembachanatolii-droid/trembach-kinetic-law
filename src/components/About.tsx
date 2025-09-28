import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImage from '@/assets/profile.jpg';
import { 
  Users, 
  Shield, 
  Medal, 
  BookOpen, 
  Phone, 
  Globe,
  CheckCircle,
  Target,
  TrendUp,
  FileText
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const profile = profileRef.current;
    const content = contentRef.current;
    const skills = skillsRef.current;
    const credentials = credentialsRef.current;

    if (!section || !profile || !content || !skills || !credentials) return;

    const ctx = gsap.context(() => {
      // Floating glow orbs
      gsap.set('.glow-orb', { transformOrigin: 'center center' });
      
      gsap.to('.glow-orb', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });

      // Section entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(section, 
        { 
          opacity: 0,
          filter: 'blur(10px)',
          y: 30
        },
        { 
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }
      );

      // Profile image animation
      tl.fromTo(profile,
        {
          x: -50,
          opacity: 0,
          scale: 0.95
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)"
        },
        "-=0.4"
      );

      // Content fade in
      tl.fromTo(content.querySelectorAll('.animate-content'),
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out"
        },
        "-=0.4"
      );

      // Skills icons stagger
      tl.fromTo(skills.querySelectorAll('.skill-icon'),
        {
          y: 15,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.03,
          ease: "back.out(1.7)"
        },
        "-=0.3"
      );

      // Credentials cards
      gsap.fromTo(credentials.querySelectorAll('.credential-card'),
        {
          y: 20,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: credentials,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animations for profile
      const profileHover = gsap.to(profile, {
        rotateY: 5,
        rotateX: -5,
        scale: 1.05,
        duration: 0.3,
        paused: true,
        ease: "power2.out"
      });

      profile.addEventListener('mouseenter', () => profileHover.play());
      profile.addEventListener('mouseleave', () => profileHover.reverse());

      // Credential cards hover
      credentials.querySelectorAll('.credential-card').forEach((card) => {
        const cardHover = gsap.to(card, {
          y: -8,
          rotateY: 2,
          scale: 1.02,
          duration: 0.3,
          paused: true,
          ease: "power2.out"
        });

        card.addEventListener('mouseenter', () => cardHover.play());
        card.addEventListener('mouseleave', () => cardHover.reverse());
      });

    }, section);

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: <Shield weight="light" />, name: 'Legal Defense' },
    { icon: <Users weight="light" />, name: 'Client Advocacy' },
    { icon: <Medal weight="light" />, name: 'Trial Experience' },
    { icon: <BookOpen weight="light" />, name: 'USC Law' },
    { icon: <Target weight="light" />, name: 'Strategy' },
    { icon: <TrendUp weight="light" />, name: 'Results' }
  ];

  const credentials = [
    {
      icon: <BookOpen weight="light" />,
      title: 'Education & Training',
      items: [
        'USC Gould School of Law Graduate - Juris Doctor',
        'Dean\'s List Recognition',
        'Advanced Trial Advocacy Training',
        'Insurance Law Specialization'
      ]
    },
    {
      icon: <Shield weight="light" />,
      title: 'Professional Experience',
      items: [
        'Former Insurance Defense Attorney',
        'Defended Fortune 500 Companies',
        'Complex Litigation Experience',
        'Trial Experience in Superior Courts'
      ]
    },
    {
      icon: <Medal weight="light" />,
      title: 'Practice Focus Areas',
      items: [
        'Silicosis & Occupational Disease',
        'Mesothelioma & Asbestos Cases',
        'Catastrophic Personal Injury',
        'Wrongful Death Claims'
      ]
    },
    {
      icon: <Phone weight="light" />,
      title: 'Client Service',
      items: [
        'Available 24/7 for Emergencies',
        'Free Initial Consultations',
        'No Recovery, No Attorney Fee',
        'Direct Attorney Access'
      ]
    },
    {
      icon: <Globe weight="light" />,
      title: 'Languages & Accessibility',
      items: [
        'Fluent in English & Russian',
        'Spanish-Speaking Staff Available',
        'Translation Services',
        'Accessible Office Facilities'
      ]
    },
    {
      icon: <FileText weight="light" />,
      title: 'Bar Admissions',
      items: [
        'California State Bar Member #349304',
        'Federal District Court Admission',
        'Good Standing Since Admission',
        'No Disciplinary History'
      ]
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-32 bg-background overflow-hidden">
      {/* Floating glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute top-40 right-20 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-32 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-20 right-1/3 w-28 h-28 bg-accent/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="animate-content text-display font-display font-bold text-foreground mb-6">
              About Trembach Law Firm
            </h2>
            <div className="animate-content w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8"></div>
            <p className="animate-content text-title text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your Advantage in Personal Injury Cases
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Profile Section */}
            <div className="relative">
              <div 
                ref={profileRef}
                className="relative p-8 bg-card/50 backdrop-blur-xl border border-border/20 rounded-3xl shadow-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, hsl(var(--card))/60, hsl(var(--card))/30)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 40px hsl(var(--primary))/10, inset 0 1px 0 hsl(var(--foreground))/10'
                }}
              >
                <div className="relative mb-8">
                  <div className="w-64 h-64 mx-auto relative overflow-hidden rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
                    <img 
                      src={profileImage} 
                      alt="Anatolii Trembach, Esq." 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl scale-110 -z-10"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-heading font-display font-bold text-foreground mb-4">
                    Anatolii Trembach, Esq.
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">
                    From Defense to Your Defense
                  </p>
                  
                  {/* Skills Grid */}
                  <div ref={skillsRef} className="grid grid-cols-3 gap-4">
                    {skills.map((skill, index) => (
                      <div 
                        key={index}
                        className="skill-icon group relative p-4 bg-background/50 backdrop-blur-sm border border-border/20 rounded-xl hover:bg-primary/10 transition-all duration-300"
                      >
                        <div className="text-primary text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div ref={contentRef} className="space-y-8">
              <div className="animate-content p-8 bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl">
                <h4 className="text-title font-display font-semibold text-foreground mb-4">
                  A Unique Advantage for California Injury Victims
                </h4>
                <p className="text-body text-muted-foreground leading-relaxed mb-6">
                  Attorney Anatolii Trembach brings unique insight to personal injury cases through his extensive experience as a former 
                  defense attorney representing major insurance companies and corporations. Having defended State Farm, Allstate, GEICO, Progressive, 
                  and Fortune 500 companies, he understands their tactics and strategies from the inside.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  This background provides invaluable advantages for our clients throughout California. We know exactly what evidence insurance companies 
                  look for, how they calculate settlements, and most importantly - how to counter their defense strategies effectively.
                </p>
              </div>

              <div className="animate-content p-8 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-xl border border-border/20 rounded-2xl">
                <blockquote className="text-body text-muted-foreground italic leading-relaxed mb-4">
                  "Having seen firsthand how insurance companies systematically minimize and deny legitimate claims, I founded Trembach Law Firm 
                  to level the playing field for injury victims. When insurance lawyers see me on the other side, they know I understand their playbook better than they do."
                </blockquote>
                <cite className="text-small font-medium text-primary">
                  - Anatolii Trembach, Esq., Founding Attorney
                </cite>
              </div>

              {/* Advantages */}
              <div className="animate-content p-8 bg-card/40 backdrop-blur-xl border border-border/20 rounded-2xl">
                <h4 className="text-title font-display font-semibold text-foreground mb-6">
                  The Inside Advantage
                </h4>
                <div className="grid gap-4">
                  {[
                    'Inside Knowledge: We know exactly how insurance companies evaluate claims',
                    'Counter-Strategies: Every defense tactic has a counter-strategy we\'ve mastered',
                    'Trial Readiness: Insurance companies know we understand their trial strategies',
                    'Negotiation Leverage: We know when they\'re bluffing and when they\'re serious'
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-3 group">
                      <CheckCircle 
                        weight="light" 
                        className="text-primary text-xl mt-0.5 group-hover:scale-110 transition-transform duration-300" 
                      />
                      <p className="text-small text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {advantage}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div ref={credentialsRef} className="space-y-8">
            <div className="text-center">
              <h3 className="text-heading font-display font-bold text-foreground mb-4">
                Attorney Credentials & Qualifications
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className="credential-card group relative p-8 bg-card/50 backdrop-blur-xl border border-border/20 rounded-2xl hover:border-primary/30 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--card))/60, hsl(var(--card))/30)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  <div className="text-primary text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {credential.icon}
                  </div>
                  <h5 className="text-title font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {credential.title}
                  </h5>
                  <ul className="space-y-2">
                    {credential.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-small text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;