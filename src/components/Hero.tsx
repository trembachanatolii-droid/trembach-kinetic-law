import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import heroBackground from '@/assets/hero-background.png';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const threeDContainerRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const threeDContainer = threeDContainerRef.current;
    const backLayer = backLayerRef.current;
    const midLayer = midLayerRef.current;
    const frontLayer = frontLayerRef.current;
    const headline = headlineRef.current;
    const form = formRef.current;

    if (!section || !threeDContainer) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Premium easing
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    if (!prefersReducedMotion) {
      // Floating background animations
      if (backLayer) {
        gsap.to(backLayer, {
          y: 20,
          duration: 16,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 30,
          duration: 20,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: 15,
          x: 20,
          duration: 12,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Parallax scroll effects
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (backLayer) {
            gsap.set(backLayer, { y: progress * -50 });
          }
          if (midLayer) {
            gsap.set(midLayer, { y: progress * -100 });
          }
          if (frontLayer) {
            gsap.set(frontLayer, { y: progress * -150 });
          }
        }
      });
    }

    // Set initial 3D states
    gsap.set([headline, form], {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 60,
      z: prefersReducedMotion ? 0 : -200,
      scale: prefersReducedMotion ? 1 : 0.8,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)"
    });

    // Hero entrance timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Headline word-by-word animation
    tl.to(".hero-line", {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.6,
      stagger: 0.15,
      ease: premiumEase
    })
    // Form entrance
    .to(form, {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.8,
      ease: premiumEase
    }, "-=0.3");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* 3D Container with Perspective */}
      <div 
        ref={threeDContainerRef}
        className="relative min-h-screen"
        style={{ 
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hero Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          >
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
          </div>

          {/* Back Layer */}
          <div
            ref={backLayerRef}
            className="absolute inset-0 opacity-30"
            style={{ transform: 'translateZ(-500px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
          </div>

          {/* Mid Layer */}
          <div
            ref={midLayerRef}
            className="absolute inset-0 opacity-40"
            style={{ transform: 'translateZ(-250px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" />
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Front Layer */}
          <div
            ref={frontLayerRef}
            className="absolute inset-0 opacity-20"
            style={{ transform: 'translateZ(-100px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-accent/15 blur-xl" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="relative z-10 flex w-full h-screen">
          {/* Main Content - Left Side */}
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
            <div 
              ref={headlineRef} 
              className="space-y-2"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h1 className="text-display font-display leading-[0.8] tracking-tighter">
                <span className="hero-line block">Former Insurance</span>
                <span className="hero-line block">Defense Attorney</span>
              </h1>
              <h2 className="text-headline font-display text-primary glow mt-4">
                <span className="hero-line block">Now Using Their Tactics</span>
                <span className="hero-line block">To Maximize</span>
                <span className="hero-line block text-accent">YOUR Compensation</span>
              </h2>
            </div>

            <div className="hero-line mt-8 max-w-2xl">
              <p className="text-body text-muted-foreground">
                Anatolii Trembach, Esq. leverages insider knowledge to fight for California injury victims.
              </p>
            </div>
          </div>

          {/* Intake Form - Right Side */}
          <div 
            ref={formRef} 
            className="w-full max-w-xs lg:max-w-sm xl:max-w-md bg-transparent p-4 m-6 h-fit mt-16 group"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="mb-4 bg-surface/20 backdrop-blur-sm border border-border/20 rounded-2xl p-6 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500">
              <h3 className="text-title font-display text-foreground mb-1">Free Case Evaluation</h3>
              <p className="text-small text-muted-foreground">Get your consultation in under 2 minutes</p>
            
              <form className="space-y-3 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-small font-medium text-foreground">First Name*</label>
                <Input className="mt-1 bg-transparent border-foreground/20" placeholder="John" />
              </div>
              <div>
                <label className="text-small font-medium text-foreground">Last Name*</label>
                <Input className="mt-1 bg-transparent border-foreground/20" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Phone*</label>
              <Input className="mt-1 bg-transparent border-foreground/20" placeholder="(555) 123-4567" type="tel" />
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Email*</label>
              <Input className="mt-1 bg-transparent border-foreground/20" placeholder="john@example.com" type="email" />
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Type of Case*</label>
              <Select>
                <SelectTrigger className="mt-1 bg-transparent border-foreground/20">
                  <SelectValue placeholder="Select case type" />
                </SelectTrigger>
                <SelectContent className="bg-surface border-border/30">
                  <SelectItem value="car-accident">Car Accident</SelectItem>
                  <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                  <SelectItem value="silicosis">Silicosis</SelectItem>
                  <SelectItem value="talc">Talc/Talcum</SelectItem>
                  <SelectItem value="dog-bite">Dog Bite</SelectItem>
                  <SelectItem value="product-liability">Product Liability</SelectItem>
                  <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-small font-medium text-foreground">Message (Optional)</label>
              <Textarea 
                className="mt-1 bg-transparent border-foreground/20" 
                placeholder="Brief description of your case..."
                rows={2}
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="consent" className="mt-1" />
              <label htmlFor="consent" className="text-[8px] text-muted-foreground leading-tight">
                I hereby expressly consent to receive communications including calls, texts, emails, and/or automated messages and confirm that the submitted information provided is mine. By submitting this form, I agree to the Terms & acknowledge the Privacy Policy.
              </label>
            </div>

              <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold py-3 glow-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
                Get Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;