import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  PaperPlaneTilt, 
  GithubLogo, 
  LinkedinLogo, 
  TwitterLogo,
  Envelope,
  MapPin,
  Phone,
  Sparkle,
  Lightning
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([formRef.current, socialRef.current], { 
        opacity: 0, 
        y: 100,
        filter: 'blur(10px)'
      });

      // Main animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.to(formRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out'
      })
      .to(socialRef.current, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6');

      // Floating glow orbs
      gsap.utils.toArray('.contact-glow-orb').forEach((orb: any) => {
        gsap.to(orb, {
          y: gsap.utils.random(-20, 20),
          x: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: gsap.utils.random(0, 2)
        });
      });

      // Input focus animations
      const inputs = sectionRef.current?.querySelectorAll('input, textarea');
      inputs?.forEach((input) => {
        input.addEventListener('focus', () => {
          gsap.to(input, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });

        input.addEventListener('blur', () => {
          gsap.to(input, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted)/0.3) 100%)'
      }}
    >
      {/* Floating Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="contact-glow-orb absolute top-24 left-12 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"></div>
        <div className="contact-glow-orb absolute top-48 right-16 w-36 h-36 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
        <div className="contact-glow-orb absolute bottom-32 left-1/4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
        <div className="contact-glow-orb absolute bottom-48 right-1/3 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Form */}
          <div ref={formRef}>
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <Lightning weight="fill" size={28} className="text-blue-500" />
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Get In Touch</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Let's{' '}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Collaborate
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    placeholder="Your name"
                    className="w-full px-6 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:bg-white/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-6 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:bg-white/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project collaboration"
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:bg-white/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-foreground placeholder-muted-foreground focus:bg-white/20 focus:border-blue-500/50 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <PaperPlaneTilt weight="fill" size={20} />
                  Send Message
                  <Sparkle weight="fill" size={16} className="animate-pulse" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div ref={socialRef} className="space-y-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                    <Envelope weight="fill" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">hello@miladicode.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                    <Phone weight="fill" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                    <MapPin weight="fill" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Follow Me</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="group w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl transition-all duration-300"
                >
                  <GithubLogo weight="fill" size={24} className="group-hover:animate-pulse" />
                </a>
                <a 
                  href="#" 
                  className="group w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl transition-all duration-300"
                >
                  <LinkedinLogo weight="fill" size={24} className="group-hover:animate-pulse" />
                </a>
                <a 
                  href="#" 
                  className="group w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 hover:shadow-2xl transition-all duration-300"
                >
                  <TwitterLogo weight="fill" size={24} className="group-hover:animate-pulse" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 rounded-2xl backdrop-blur-md bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-600">Available for Projects</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;