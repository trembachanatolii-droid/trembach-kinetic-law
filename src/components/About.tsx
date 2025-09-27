import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Palette, 
  DeviceMobile, 
  Monitor, 
  Lightning, 
  Globe, 
  Users, 
  Medal,
  Coffee,
  Heart,
  Star,
  Lightbulb
} from 'phosphor-react';
import profileImage from '@/assets/profile.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: Code, name: 'Frontend Development', description: 'React, TypeScript, Next.js' },
    { icon: Palette, name: 'UI/UX Design', description: 'Figma, Adobe Creative Suite' },
    { icon: DeviceMobile, name: 'Responsive Design', description: 'Mobile-first approach' },
    { icon: Monitor, name: 'Web Applications', description: 'Full-stack solutions' },
    { icon: Lightning, name: 'Performance', description: 'Optimization & Speed' },
    { icon: Globe, name: 'Web3 & Blockchain', description: 'DeFi, NFTs, Smart Contracts' },
    { icon: Users, name: 'Team Collaboration', description: 'Agile methodologies' },
    { icon: Medal, name: 'Quality Assurance', description: 'Testing & Documentation' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([imageRef.current, contentRef.current], { 
        opacity: 0, 
        y: 100,
        filter: 'blur(10px)'
      });

      gsap.set(skillsRef.current?.children || [], { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      });

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      });

      // Image animation
      tl.to(imageRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out'
      })
      // Content animation
      .to(contentRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6')
      // Skills stagger animation
      .to(skillsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.4');

      // Floating animation for profile image
      gsap.to(imageRef.current, {
        y: '-10px',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // Glow orbs floating animation
      gsap.utils.toArray('.glow-orb').forEach((orb: any) => {
        gsap.to(orb, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-10, 10),
          duration: gsap.utils.random(2, 4),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: gsap.utils.random(0, 2)
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 100%)'
      }}
    >
      {/* Floating Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
        <div className="glow-orb absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm bg-white/10 p-2 shadow-2xl hover:scale-105 transition-transform duration-300">
                <img 
                  src={profileImage} 
                  alt="Milad Abdi - Creative Developer" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Rotating border */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin opacity-20" style={{ animationDuration: '8s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Milad
                </span>
              </h2>
              <h3 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Creative Developer
              </h3>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Crafting digital experiences that inspire and engage through innovative design and 
                cutting-edge technology. I specialize in creating production-ready websites and web 
                applications with speed and precision.
              </p>
              <p>
                Every project is backed by clean code, clear communication, and a commitment to 
                getting it done, on time, every time. From concept to deployment, I deliver robust 
                solutions that make an impact.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  <Coffee weight="fill" size={20} />
                  View My Work
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="group px-8 py-4 border-2 border-muted-foreground/20 rounded-full text-foreground font-semibold backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
                <span className="flex items-center gap-2">
                  <Heart weight="fill" size={20} className="text-red-500 group-hover:animate-pulse" />
                  Get In Touch
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Lightbulb weight="fill" size={32} className="text-yellow-500" />
              Skills & Expertise
            </h3>
            <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <skill.icon size={24} weight="fill" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Star weight="fill" size={16} className="text-yellow-500 group-hover:animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;