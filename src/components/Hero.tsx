import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import heroJusticeBackground from '@/assets/hero-background-clean.jpg';
import HeroScene from '@/components/three/HeroScene';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure hero visible immediately (no fade to prevent blank screen)
      if (heroRef.current) {
        gsap.set(heroRef.current, { opacity: 1 });
      }

      // Staggered headline animation
      gsap.fromTo(
        ".hero-line",
        {
          y: 24,
          filter: "blur(8px)"
        },
        {
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Form entrance
      gsap.fromTo(
        formRef.current,
        {
          x: 40,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          delay: 0.6
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-between overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroJusticeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 20%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Targeted gradient only behind left content for readability */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-background/40 via-background/10 to-transparent" />

      {/* 3D Lady Justice Statue - Disabled due to missing model */}
      {/* <HeroScene /> */}

      <div className="relative z-10 flex w-full min-h-[calc(100vh-5rem)]">
        {/* Main Content - Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 pr-96">
          <div ref={headlineRef} className="space-y-2">
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
        <div ref={formRef} className="w-full max-w-xs lg:max-w-sm xl:max-w-md bg-transparent p-4 m-6 h-fit mt-16">
          <div className="mb-4">
            <h3 className="text-title font-display text-foreground mb-1">Free Case Evaluation</h3>
            <p className="text-small text-muted-foreground">Get your consultation in under 2 minutes</p>
          </div>

          <form className="space-y-3">
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

            <Button className="w-full bg-accent hover:bg-accent-glow text-accent-foreground font-semibold py-3 glow-accent group transition-all duration-300" onClick={() => window.location.href = '/case-evaluation'}>
              Get Free Consultation
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;